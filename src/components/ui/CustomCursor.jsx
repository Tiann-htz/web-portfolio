'use client';
import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);
  const particlesRef = useRef([]);
  const [visible, setVisible] = useState(false);
  const hoveringRef = useRef(false);
  const headRef = useRef({ x: -200, y: -200 });
  const lastSpawnRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onHoverStart = (e) => {
      const el = e.target.closest('a, button, [data-cursor-hover], input, textarea, [role="button"]');
      if (el) hoveringRef.current = true;
    };
    const onHoverEnd = () => { hoveringRef.current = false; };

    // Click — burst of dense sparkles
    const onClick = (e) => {
      for (let i = 0; i < 22; i++) spawnParticle(e.clientX, e.clientY, true);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', onHoverStart);
    document.addEventListener('mouseout', onHoverEnd);
    window.addEventListener('click', onClick);

    // Star shape helper
    const drawStar = (ctx, cx, cy, r, spikes, alpha, hue) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      const step = Math.PI / spikes;
      let rot = (Math.PI / 2) * 3;
      ctx.moveTo(cx, cy - r);
      for (let i = 0; i < spikes; i++) {
        ctx.lineTo(
          cx + Math.cos(rot) * r,
          cy + Math.sin(rot) * r
        );
        rot += step;
        ctx.lineTo(
          cx + Math.cos(rot) * (r * 0.42),
          cy + Math.sin(rot) * (r * 0.42)
        );
        rot += step;
      }
      ctx.closePath();
      ctx.fillStyle = `hsla(${hue}, 100%, 82%, ${alpha})`;
      ctx.fill();

      // Center bright dot
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.28, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha * 0.9})`;
      ctx.fill();

      ctx.globalAlpha = 1;
      ctx.restore();
    };

    const spawnParticle = (x, y, burst = false) => {
      const hue = 265 + Math.random() * 75; // purple to pink
      const angle = Math.random() * Math.PI * 2;
      const speed = burst
        ? 1.8 + Math.random() * 3.5
        : 0.3 + Math.random() * 1.0;

      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 12,
        vx: Math.cos(angle) * speed * (burst ? 1 : 0.5),
        vy: Math.sin(angle) * speed * (burst ? 1 : 0.4) + (burst ? -0.5 : -0.15),
        size: burst
          ? 3 + Math.random() * 5
          : 1.5 + Math.random() * 3.5,
        alpha: 0.9 + Math.random() * 0.1,
        life: 1,
        decay: burst
          ? 0.022 + Math.random() * 0.015
          : 0.014 + Math.random() * 0.01,
        hue,
        twinkleOffset: Math.random() * Math.PI * 2,
        spikes: Math.random() > 0.4 ? 4 : 3,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.1,
      });
    };

    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      const isHovering = hoveringRef.current;

      // Smooth head
      headRef.current.x += (mouseRef.current.x - headRef.current.x) * 0.3;
      headRef.current.y += (mouseRef.current.y - headRef.current.y) * 0.3;

      // Continuously spawn particles from cursor
      if (frame - lastSpawnRef.current >= (isHovering ? 1 : 2)) {
        const count = isHovering ? 3 : 2;
        for (let i = 0; i < count; i++) {
          spawnParticle(mouseRef.current.x, mouseRef.current.y);
        }
        lastSpawnRef.current = frame;
      }

      // ── Update & draw particles ───────────────────────────────
      particlesRef.current = particlesRef.current.filter(p => p.life > 0);
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.018; // gentle gravity
        p.vx *= 0.98;
        p.rotation += p.rotSpeed;
        p.life -= p.decay;

        const twinkle = 0.6 + 0.4 * Math.abs(Math.sin(frame * 0.12 + p.twinkleOffset));
        const alpha = Math.max(0, p.life) * twinkle;

        // Soft glow behind star
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5);
        glow.addColorStop(0, `hsla(${p.hue}, 100%, 80%, ${alpha * 0.45})`);
        glow.addColorStop(1, `hsla(${p.hue}, 100%, 70%, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Star shape
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.translate(-p.x, -p.y);
        drawStar(ctx, p.x, p.y, p.size, p.spikes, alpha, p.hue);
        ctx.restore();
      });

      // ── Cursor head — glowing orb with orbiting sparkle ──────
      const hx = headRef.current.x;
      const hy = headRef.current.y;
      const headR = isHovering ? 9 : 7;
      const pulse = 1 + 0.1 * Math.sin(frame * 0.08);

      // Outer dreamy glow
      const outerGlow = ctx.createRadialGradient(hx, hy, 0, hx, hy, headR * 5 * pulse);
      outerGlow.addColorStop(0, `hsla(285, 95%, 78%, 0.3)`);
      outerGlow.addColorStop(0.45, `hsla(305, 90%, 70%, 0.13)`);
      outerGlow.addColorStop(1, `hsla(325, 85%, 65%, 0)`);
      ctx.beginPath();
      ctx.arc(hx, hy, headR * 5 * pulse, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();

      // Orb body
      const orbGrad = ctx.createRadialGradient(
        hx - headR * 0.3, hy - headR * 0.3, headR * 0.05,
        hx, hy, headR * pulse
      );
      orbGrad.addColorStop(0, `hsla(265, 100%, 94%, 0.97)`);
      orbGrad.addColorStop(0.45, `hsla(285, 96%, 78%, 0.9)`);
      orbGrad.addColorStop(0.8, `hsla(315, 90%, 66%, 0.8)`);
      orbGrad.addColorStop(1, `hsla(335, 85%, 58%, 0.65)`);
      ctx.beginPath();
      ctx.arc(hx, hy, headR * pulse, 0, Math.PI * 2);
      ctx.fillStyle = orbGrad;
      ctx.fill();

      // Specular
      ctx.beginPath();
      ctx.arc(hx - headR * 0.3, hy - headR * 0.3, headR * 0.28, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.fill();

      // Orbiting star around the head
      const orbitR = headR * 2.2;
      const orbitAngle = frame * 0.055;
      const sx = hx + Math.cos(orbitAngle) * orbitR;
      const sy = hy + Math.sin(orbitAngle) * orbitR;
      drawStar(ctx, sx, sy, 2.8, 4, 0.9, 300 + 30 * Math.sin(frame * 0.04));

      // Second orbiting star offset by PI
      const sx2 = hx + Math.cos(orbitAngle + Math.PI) * orbitR * 0.75;
      const sy2 = hy + Math.sin(orbitAngle + Math.PI) * orbitR * 0.75;
      drawStar(ctx, sx2, sy2, 2.0, 4, 0.7, 270 + 30 * Math.sin(frame * 0.04));

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onHoverStart);
      document.removeEventListener('mouseout', onHoverEnd);
      window.removeEventListener('click', onClick);
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease',
      }}
    />
  );
}