interface Particle { x: number; y: number; vx: number; vy: number; radius: number; color: string }

export const renderNeuralCanvas = () => `
<div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
  <canvas id="neural-canvas" class="w-full h-full opacity-35"></canvas>
</div>`;

export const renderBackgroundGlow = () => `
<div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
  <div class="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-tertiary-container/15 blur-[120px]"></div>
  <div class="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-secondary-container/15 blur-[100px]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(rgba(190,194,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]"></div>
</div>`;

export const initNeuralCanvas = (count = 28, linkDistance = 110) => {
  const canvas = document.getElementById('neural-canvas') as HTMLCanvasElement | null;
  const ctx = canvas?.getContext('2d');
  if (!canvas || !ctx) return;

  let width = 0;
  let height = 0;
  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  const particles: Particle[] = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    radius: Math.random() * 2 + 1,
    color: Math.random() > 0.5 ? '#7C3AED' : '#2F3BFF',
  }));

  const render = () => {
    if (!canvas.isConnected) return;
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < linkDistance) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(190,194,255,${0.12 * (1 - dist / linkDistance)})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(render);
  };
  render();
};
