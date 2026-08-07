import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  life: number;
}

const MAX_POINTS = 26;
const FADE_PER_SECOND = 1.9;

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Uniquement sur pointeur fin (souris) : inutile et coûteux au tactile.
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduce) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const points: Point[] = [];
    const onPointerMove = (e: PointerEvent) => {
      points.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (points.length > MAX_POINTS) points.shift();
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    let frame = 0;
    let last = performance.now();

    const draw = () => {
      frame = requestAnimationFrame(draw);
      const now = performance.now();
      const delta = Math.min((now - last) / 1000, 0.1);
      last = now;

      ctx.clearRect(0, 0, width, height);

      for (let i = points.length - 1; i >= 0; i--) {
        points[i].life -= delta * FADE_PER_SECOND;
        if (points[i].life <= 0) points.splice(i, 1);
      }

      if (points.length > 2) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalCompositeOperation = "lighter";

        for (let i = 1; i < points.length; i++) {
          const prev = points[i - 1];
          const curr = points[i];
          const t = i / points.length;

          // Dégradé de marque orange → turquoise le long de la traînée.
          const r = Math.round(245 + (24 - 245) * t);
          const g = Math.round(131 + (165 - 131) * t);
          const b = Math.round(0 + (196 - 0) * t);

          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${curr.life * 0.55})`;
          ctx.lineWidth = 1 + t * 5 * curr.life;

          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          const mx = (prev.x + curr.x) / 2;
          const my = (prev.y + curr.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, mx, my);
          ctx.stroke();
        }

        ctx.globalCompositeOperation = "source-over";
      }
    };
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[60]"
      aria-hidden="true"
    />
  );
};

export default CursorTrail;
