import { useEffect, useRef } from "react";
import * as THREE from "three";

/** Contour simplifié du continent africain (longitude, latitude). */
const MAINLAND: [number, number][] = [
  [-5.9, 35.8], [3.0, 36.8], [10.2, 37.0], [13.2, 32.9], [17.5, 30.9], [20.0, 32.1],
  [25.0, 31.5], [29.9, 31.2], [32.3, 31.2], [32.5, 29.9], [34.5, 27.5], [35.5, 23.5],
  [37.2, 21.0], [39.0, 18.0], [39.5, 15.5], [43.0, 12.7], [44.0, 10.4], [48.0, 11.5],
  [51.4, 11.8], [48.5, 8.0], [47.0, 4.0], [44.0, 1.5], [41.5, -1.7], [39.7, -4.0],
  [39.5, -6.9], [40.5, -10.5], [40.6, -14.5], [36.9, -17.9], [35.3, -21.0],
  [32.9, -25.9], [31.0, -29.5], [27.9, -33.0], [25.6, -34.0], [22.0, -34.1],
  [18.4, -34.3], [17.0, -32.0], [14.5, -22.5], [11.7, -17.9], [13.0, -12.5],
  [12.2, -6.0], [9.3, -1.0], [9.7, 4.0], [8.5, 4.6], [5.0, 5.6], [2.5, 6.3],
  [-1.0, 5.0], [-3.0, 5.0], [-5.5, 5.0], [-7.5, 4.4], [-9.0, 6.5], [-11.5, 7.7],
  [-13.5, 9.5], [-16.0, 12.5], [-17.5, 14.7], [-16.5, 19.0], [-16.0, 21.5],
  [-13.0, 27.5], [-9.8, 30.0], [-9.0, 32.5], [-6.0, 34.0],
];

const MADAGASCAR: [number, number][] = [
  [49.5, -12.5], [50.5, -15.5], [49.8, -18.0], [47.5, -22.0], [45.2, -25.6],
  [43.5, -22.0], [43.3, -18.0], [44.5, -16.2], [46.5, -15.7], [48.5, -13.3],
];

const RINGS = [MAINLAND, MADAGASCAR];
const GRID_STEP = 1.15;
const CENTER_LON = 17;
const CENTER_LAT = 1.5;
const SCALE = 0.068;

const insideRing = (lon: number, lat: number, ring: [number, number][]) => {
  let hit = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
};

const project = (lon: number, lat: number) => ({
  x: (lon - CENTER_LON) * SCALE,
  y: (lat - CENTER_LAT) * SCALE,
});

const AfricaCanvas = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6.4;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // --- Semis de points à l'intérieur du continent + maillage réseau ---
    const dots: number[] = [];
    const links: number[] = [];
    const index = new Map<string, { x: number; y: number; z: number }>();

    let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
    for (const ring of RINGS) {
      for (const [lon, lat] of ring) {
        minLon = Math.min(minLon, lon); maxLon = Math.max(maxLon, lon);
        minLat = Math.min(minLat, lat); maxLat = Math.max(maxLat, lat);
      }
    }

    let iy = 0;
    for (let lat = minLat; lat <= maxLat; lat += GRID_STEP, iy++) {
      let ix = 0;
      for (let lon = minLon; lon <= maxLon; lon += GRID_STEP, ix++) {
        if (!RINGS.some((ring) => insideRing(lon, lat, ring))) continue;
        const { x, y } = project(lon, lat);
        const z = (Math.random() - 0.5) * 0.22;
        dots.push(x, y, z);
        index.set(`${ix},${iy}`, { x, y, z });
      }
    }

    index.forEach((p, key) => {
      const [ix, iy2] = key.split(",").map(Number);
      const right = index.get(`${ix + 1},${iy2}`);
      const up = index.get(`${ix},${iy2 + 1}`);
      if (right) links.push(p.x, p.y, p.z, right.x, right.y, right.z);
      if (up) links.push(p.x, p.y, p.z, up.x, up.y, up.z);
    });

    const dotGeometry = new THREE.BufferGeometry();
    dotGeometry.setAttribute("position", new THREE.Float32BufferAttribute(dots, 3));
    const dotMaterial = new THREE.PointsMaterial({
      color: 0xf58300,
      size: 0.045,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    group.add(new THREE.Points(dotGeometry, dotMaterial));

    const linkGeometry = new THREE.BufferGeometry();
    linkGeometry.setAttribute("position", new THREE.Float32BufferAttribute(links, 3));
    const linkMaterial = new THREE.LineBasicMaterial({
      color: 0x18a5c4,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    group.add(new THREE.LineSegments(linkGeometry, linkMaterial));

    // --- Contour lumineux ---
    const outlineMaterial = new THREE.LineBasicMaterial({
      color: 0xffa733,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });
    const outlineGeometries: THREE.BufferGeometry[] = [];
    for (const ring of RINGS) {
      const pts = ring.map(([lon, lat]) => {
        const { x, y } = project(lon, lat);
        return new THREE.Vector3(x, y, 0.02);
      });
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      outlineGeometries.push(geo);
      group.add(new THREE.LineLoop(geo, outlineMaterial));
    }

    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    // --- Glisser-déposer pour faire pivoter, avec inertie ---
    let dragging = false;
    let lastDrag = { x: 0, y: 0 };
    const spin = { x: 0, y: 0 };
    const dragOffset = { x: 0, y: 0 };

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      if (dragging) {
        spin.y += (e.clientX - lastDrag.x) * 0.006;
        spin.x += (e.clientY - lastDrag.y) * 0.004;
        lastDrag = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      lastDrag = { x: e.clientX, y: e.clientY };
      mount.setPointerCapture(e.pointerId);
      mount.style.cursor = "grabbing";
    };
    const onPointerUp = (e: PointerEvent) => {
      dragging = false;
      if (mount.hasPointerCapture(e.pointerId)) mount.releasePointerCapture(e.pointerId);
      mount.style.cursor = "grab";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    mount.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    mount.style.cursor = "grab";
    mount.style.touchAction = "pan-y";

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      if (!clientWidth || !clientHeight) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    let frame = 0;
    let last = performance.now();
    let elapsed = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = Math.min((now - last) / 1000, 0.1);
      last = now;
      if (!reduce) {
        elapsed += delta;
        pointer.x += (target.x - pointer.x) * 0.04;
        pointer.y += (target.y - pointer.y) * 0.04;

        // Inertie : la rotation lancée à la souris ralentit progressivement.
        if (!dragging) {
          spin.x *= 0.94;
          spin.y *= 0.94;
        }
        dragOffset.x += spin.x;
        dragOffset.y += spin.y;
        // On borne l'inclinaison verticale pour que le continent reste lisible.
        dragOffset.x = Math.max(-0.7, Math.min(0.7, dragOffset.x));

        group.rotation.y = Math.sin(elapsed * 0.35) * 0.22 + pointer.x * 0.28 + dragOffset.y;
        group.rotation.x = Math.sin(elapsed * 0.27) * 0.08 - pointer.y * 0.18 + dragOffset.x;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      mount.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      dotGeometry.dispose();
      dotMaterial.dispose();
      linkGeometry.dispose();
      linkMaterial.dispose();
      outlineGeometries.forEach((g) => g.dispose());
      outlineMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full" aria-hidden="true" />;
};

export default AfricaCanvas;
