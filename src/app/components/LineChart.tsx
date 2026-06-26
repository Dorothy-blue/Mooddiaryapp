import { useEffect, useRef } from 'react';

export default function LineChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const PRIMARY = 'rgb(99, 102, 241)';
  const BORDER = 'rgb(229, 231, 235)';
  const MUTED = 'rgb(107, 114, 128)';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    const left = 28;
    const right = 16;
    const top = 20;
    const bottom = 28;

    const values = [3.0, 3.8, 4.2, 4.7, 3.6, 3.0, 4.0];

    // Draw grid lines
    ctx.strokeStyle = BORDER;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = top + i * ((h - top - bottom) / 4);
      ctx.beginPath();
      ctx.moveTo(left, y);
      ctx.lineTo(w - right, y);
      ctx.stroke();
    }

    // Draw line path
    ctx.beginPath();
    for (let i = 0; i < values.length; i++) {
      const x = left + i * ((w - left - right) / 6);
      const y = top + ((5 - values[i]) / 4) * (h - top - bottom);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.strokeStyle = PRIMARY;
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw dots
    ctx.fillStyle = PRIMARY;
    for (let i = 0; i < values.length; i++) {
      const x = left + i * ((w - left - right) / 6);
      const y = top + ((5 - values[i]) / 4) * (h - top - bottom);
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw labels
    ctx.fillStyle = MUTED;
    ctx.font = '10px sans-serif';
    ctx.fillText('May 14', left, h - 8);
    ctx.fillText('May 16', left + (w - left - right) / 3, h - 8);
    ctx.fillText('May 18', left + (2 * (w - left - right)) / 3, h - 8);
    ctx.fillText('May 20', w - right - 40, h - 8);
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '180px' }} />;
}
