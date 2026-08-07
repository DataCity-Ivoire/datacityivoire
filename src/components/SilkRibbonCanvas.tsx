import { useEffect, useRef } from "react";
import * as THREE from "three";

/* -------------------------------------------------------------------------- */
/* Fond soyeux irisé (quad plein cadre)                                        */
/* -------------------------------------------------------------------------- */

const VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const FRAGMENT = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform float uHover;
  uniform float uDark;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  varying vec2 vUv;

  vec2 hash2(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
          dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
      mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
          dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
      u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    uv.x *= uResolution.x / max(uResolution.y, 1.0);

    float t = uTime * 0.05 * (1.0 + uHover * 1.4);

    vec2 q = vec2(fbm(uv * 1.5 + t), fbm(uv * 1.5 + vec2(5.2, 1.3) - t));
    vec2 r = vec2(
      fbm(uv * 1.9 + 3.6 * q + vec2(1.7, 9.2) + t * 1.2),
      fbm(uv * 1.9 + 3.6 * q + vec2(8.3, 2.8) - t * 1.0)
    );
    float f = fbm(uv * 1.7 + 3.6 * r);

    vec3 lightBase  = vec3(0.957, 0.961, 0.976);
    vec3 lightPeach = vec3(0.996, 0.894, 0.816);
    vec3 lightLav   = vec3(0.882, 0.878, 0.961);
    vec3 lightSky   = vec3(0.831, 0.918, 0.961);

    vec3 lightCol = lightBase;
    lightCol = mix(lightCol, lightPeach, smoothstep(0.12, 0.72, f) * 0.55);
    lightCol = mix(lightCol, lightLav, smoothstep(0.08, 0.68, r.x) * 0.50);
    lightCol = mix(lightCol, lightSky, smoothstep(0.18, 0.82, q.y) * 0.45);

    vec3 darkBase = vec3(0.043, 0.082, 0.129);
    vec3 darkWarm = vec3(0.310, 0.153, 0.043);
    vec3 darkTeal = vec3(0.043, 0.208, 0.263);
    vec3 darkLav  = vec3(0.129, 0.114, 0.216);

    vec3 darkCol = darkBase;
    darkCol = mix(darkCol, darkWarm, smoothstep(0.12, 0.72, f) * 0.60);
    darkCol = mix(darkCol, darkTeal, smoothstep(0.08, 0.68, r.x) * 0.50);
    darkCol = mix(darkCol, darkLav, smoothstep(0.18, 0.82, q.y) * 0.45);

    vec3 col = mix(lightCol, darkCol, uDark);

    float sheen = pow(clamp(f * 1.45, 0.0, 1.0), 6.0);
    col += sheen * mix(0.10, 0.16, uDark);

    vec2 m = uMouse;
    m.x *= uResolution.x / max(uResolution.y, 1.0);
    col += uHover * mix(0.07, 0.10, uDark) * exp(-distance(uv, m) * 2.6);

    gl_FragColor = vec4(col, 1.0);
  }
`;

/* -------------------------------------------------------------------------- */
/* Ruban 3D                                                                    */
/* -------------------------------------------------------------------------- */

const SEGMENTS = 200;
const RADIAL = 16;
const RADIUS = 0.32;

const CONTROL_POINTS: [number, number, number][] = [
  [-8.5, -2.2, -1.2],
  [-5.6, 1.4, 0.6],
  [-2.4, -1.6, 1.4],
  [0.6, 1.9, -0.4],
  [3.4, -1.2, -1.6],
  [6.2, 1.6, 0.4],
  [9.0, -0.6, 1.2],
];

interface SilkRibbonCanvasProps {
  /**
   * Force la palette sombre, quel que soit le thème du site.
   * À utiliser sur les fonds toujours sombres (bandeaux `bg-gradient-deep`),
   * sinon le rendu clair s'affiche par-dessus et devient illisible.
   */
  forceDark?: boolean;
}

const SilkRibbonCanvas = ({ forceDark = false }: SilkRibbonCanvasProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "low-power" });
    renderer.autoClear = false;
    mount.appendChild(renderer.domElement);

    // --- Passe 1 : fond soyeux ---
    const silkScene = new THREE.Scene();
    const silkCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const uniforms = {
      uTime: { value: 0 },
      uHover: { value: 0 },
      uDark: { value: forceDark || document.documentElement.classList.contains("dark") ? 1 : 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(1, 1) },
    };
    const silkGeometry = new THREE.PlaneGeometry(2, 2);
    const silkMaterial = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms,
      depthWrite: false,
    });
    silkScene.add(new THREE.Mesh(silkGeometry, silkMaterial));

    // --- Passe 2 : ruban ---
    const ribbonScene = new THREE.Scene();
    const ribbonCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    ribbonCamera.position.z = 9;

    const basePoints = CONTROL_POINTS.map(([x, y, z]) => new THREE.Vector3(x, y, z));
    const livePoints = basePoints.map((p) => p.clone());
    const curve = new THREE.CatmullRomCurve3(livePoints, false, "catmullrom", 0.5);
    const tubeGeometry = new THREE.TubeGeometry(curve, SEGMENTS, RADIUS, RADIAL, false);

    // Topologie constante : le dégradé orange → turquoise est calculé une fois.
    const uv = tubeGeometry.getAttribute("uv");
    const colorArray = new Float32Array(uv.count * 3);
    {
      const from = new THREE.Color(0xf58300);
      const to = new THREE.Color(0x18a5c4);
      const tmp = new THREE.Color();
      for (let i = 0; i < uv.count; i++) {
        tmp.copy(from).lerp(to, uv.getX(i));
        colorArray[i * 3] = tmp.r;
        colorArray[i * 3 + 1] = tmp.g;
        colorArray[i * 3 + 2] = tmp.b;
      }
    }
    const colorAttribute = new THREE.BufferAttribute(colorArray, 3);
    tubeGeometry.setAttribute("color", colorAttribute);

    const ribbonMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.26,
      metalness: 0.18,
      transparent: true,
      opacity: 0.95,
      emissive: new THREE.Color(0xf58300),
      emissiveIntensity: 0,
    });
    const ribbon = new THREE.Mesh(tubeGeometry, ribbonMaterial);
    ribbonScene.add(ribbon);

    ribbonScene.add(new THREE.AmbientLight(0xffffff, 1.5));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(3, 4, 6);
    ribbonScene.add(key);
    const rim = new THREE.DirectionalLight(0x18a5c4, 1.4);
    rim.position.set(-5, -2, 3);
    ribbonScene.add(rim);

    // --- Interaction partagée ---
    const themeObserver = new MutationObserver(() => {
      uniforms.uDark.value = forceDark || document.documentElement.classList.contains("dark") ? 1 : 0;
    });
    if (!forceDark) {
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    }

    let hover = 0;
    let hoverTarget = 0;
    const ndc = { x: 0, y: 0 };
    const mouseTarget = new THREE.Vector2(0.5, 0.5);
    const pointerWorld = new THREE.Vector3();
    const targetWorld = new THREE.Vector3();
    const viewHeight = 2 * Math.tan((ribbonCamera.fov * Math.PI) / 360) * ribbonCamera.position.z;

    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      mouseTarget.set(px, 1 - py);
      ndc.x = px * 2 - 1;
      ndc.y = -(py * 2 - 1);
      targetWorld.set((ndc.x * viewHeight * ribbonCamera.aspect) / 2, (ndc.y * viewHeight) / 2, 0);
    };
    const onEnter = () => { hoverTarget = 1; };
    const onLeave = () => { hoverTarget = 0; };

    // Le canvas est en `pointer-events-none` : on écoute la section parente.
    const hoverArea: HTMLElement = mount.closest("section") ?? mount;
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    hoverArea.addEventListener("pointerenter", onEnter);
    hoverArea.addEventListener("pointerleave", onLeave);

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      if (!clientWidth || !clientHeight) return;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setSize(clientWidth, clientHeight, false);
      uniforms.uResolution.value.set(clientWidth, clientHeight);
      ribbonCamera.aspect = clientWidth / clientHeight;
      ribbonCamera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    let frame = 0;
    let elapsed = 0;
    let last = performance.now();
    let sinceRebuild = 0;
    const scratch = new THREE.Vector3();

    const animate = () => {
      frame = requestAnimationFrame(animate);
      const now = performance.now();
      const delta = Math.min((now - last) / 1000, 0.1);
      last = now;

      if (!reduce) {
        hover += (hoverTarget - hover) * 0.07;
        elapsed += delta * (1 + hover * 1.6);

        uniforms.uTime.value += delta;
        uniforms.uHover.value = hover;
        uniforms.uMouse.value.lerp(mouseTarget, 0.07);

        pointerWorld.lerp(targetWorld, 0.08);
        sinceRebuild += delta;

        if (sinceRebuild > 1 / 30) {
          sinceRebuild = 0;
          for (let i = 0; i < livePoints.length; i++) {
            const base = basePoints[i];
            const amp = 0.55 + hover * 0.5;
            const y = base.y + Math.sin(elapsed * 0.6 + i * 0.9) * amp;
            const z = base.z + Math.cos(elapsed * 0.45 + i * 0.7) * (0.5 + hover * 0.45);

            // Attraction locale vers le curseur, atténuée par la distance.
            scratch.set(base.x, y, z);
            const dist = scratch.distanceTo(pointerWorld);
            const pull = (hover * 2.6) / (1 + dist * dist * 0.55);

            livePoints[i].set(
              base.x + (pointerWorld.x - base.x) * pull * 0.35,
              y + (pointerWorld.y - y) * pull * 0.55,
              z + pull * 0.9,
            );
          }
          curve.updateArcLengths();
          const next = new THREE.TubeGeometry(curve, SEGMENTS, RADIUS, RADIAL, false);
          next.setAttribute("color", colorAttribute);
          ribbon.geometry.dispose();
          ribbon.geometry = next;
        }

        ribbonMaterial.emissiveIntensity = hover * 0.4;
        ribbon.rotation.z = ndc.x * (0.06 + hover * 0.12);
        ribbon.position.y = -ndc.y * (0.35 + hover * 0.5);
        ribbon.scale.setScalar(1 + hover * 0.06);
      }

      renderer.clear();
      renderer.render(silkScene, silkCamera);
      renderer.clearDepth();
      renderer.render(ribbonScene, ribbonCamera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      hoverArea.removeEventListener("pointerenter", onEnter);
      hoverArea.removeEventListener("pointerleave", onLeave);
      silkGeometry.dispose();
      silkMaterial.dispose();
      ribbon.geometry.dispose();
      ribbonMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [forceDark]);

  return <div ref={mountRef} className="h-full w-full" aria-hidden="true" />;
};

export default SilkRibbonCanvas;
