import { useEffect, useRef } from "react";

export default function ThemeParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrame;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const settings = {
      count: Math.min(95, Math.floor(width / 15)),
      distance: 135,
      speed: 0.35,
      radius: 1.8,
    };

    const colors = ["135, 80, 247", "46, 213, 255", "255, 255, 255"];

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    };

    const createParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * settings.speed,
      vy: (Math.random() - 0.5) * settings.speed,
      size: Math.random() * settings.radius + 0.7,
      color: colors[Math.floor(Math.random() * colors.length)],
      glow: Math.random() * 0.45 + 0.25,
    });

    resizeCanvas();
    const particles = Array.from({ length: settings.count }, createParticle);

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const drawGradient = () => {
      const gradient = context.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, Math.max(width, height) * 0.65);
      gradient.addColorStop(0, "rgba(135, 80, 247, 0.14)");
      gradient.addColorStop(0.45, "rgba(20, 12, 28, 0.10)");
      gradient.addColorStop(1, "rgba(5, 7, 9, 0)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);
    };

    const animate = () => {
      context.clearRect(0, 0, width, height);
      drawGradient();

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        const dxMouse = particle.x - mouseX;
        const dyMouse = particle.y - mouseY;
        const mouseDistance = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (mouseDistance < 110) {
          particle.x += dxMouse * 0.006;
          particle.y += dyMouse * 0.006;
        }

        if (particle.x < -20) particle.x = width + 20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.y < -20) particle.y = height + 20;
        if (particle.y > height + 20) particle.y = -20;

        for (let j = index + 1; j < particles.length; j += 1) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < settings.distance) {
            const opacity = (1 - distance / settings.distance) * 0.22;
            context.beginPath();
            context.strokeStyle = `rgba(135, 80, 247, ${opacity})`;
            context.lineWidth = 0.7;
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }

        context.beginPath();
        context.fillStyle = `rgba(${particle.color}, ${particle.glow})`;
        context.shadowBlur = 12;
        context.shadowColor = `rgba(${particle.color}, 0.8)`;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      });

      animationFrame = window.requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="theme-particles-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="theme-particles-canvas" />
      <span className="theme-glow theme-glow-one" />
      <span className="theme-glow theme-glow-two" />
      <span className="theme-grid-overlay" />
    </div>
  );
}
