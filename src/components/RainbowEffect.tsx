import React, { useEffect, useRef } from 'react';

const RainbowEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const rainbowColors = [
      '#ff0000', '#ff8000', '#ffff00',
      '#00ff00', '#0000ff', '#4b0082', '#8f00ff'
    ];

    let time = 0;
    const ribbons: Ribbon[] = Array.from({ length: 5 }, (_, i) => ({
      y: canvas.height * (i + 1) / 6,
      amplitude: 30 + Math.random() * 20,
      frequency: 0.002 + Math.random() * 0.001,
      speed: 0.02 + Math.random() * 0.01,
      color: rainbowColors[i % rainbowColors.length],
      phase: Math.random() * Math.PI * 2
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ribbons.forEach((ribbon, i) => {
        ctx.beginPath();
        ctx.moveTo(0, ribbon.y);

        for (let x = 0; x < canvas.width; x += 5) {
          const y = ribbon.y + 
            Math.sin(x * ribbon.frequency + time * ribbon.speed + ribbon.phase) * 
            ribbon.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = ribbon.color;
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.3;
        ctx.stroke();
      });

      time += 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

interface Ribbon {
  y: number;
  amplitude: number;
  frequency: number;
  speed: number;
  color: string;
  phase: number;
}

export default RainbowEffect;