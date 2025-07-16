"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useViewportSize } from "../hooks/useViewportSize";

interface Particle {
  id: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  speed: number;
  amplitude: number;
  phase: number;
  opacity: number;
  scale: number;
}

export function FloatingElements() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();
  const prefersReducedMotion = useReducedMotion();
  const { width, height, isMobile } = useViewportSize();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Initialize particles
    const particleCount = isMobile ? 8 : 15;
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      baseX: Math.random() * width,
      baseY: Math.random() * height,
      speed: 0.5 + Math.random() * 0.5,
      amplitude: 20 + Math.random() * 30,
      phase: Math.random() * Math.PI * 2,
      opacity: 0.1 + Math.random() * 0.3,
      scale: 0.8 + Math.random() * 0.4,
    }));

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x = particle.baseX + Math.sin(time * particle.speed + particle.phase) * particle.amplitude;
        particle.y = particle.baseY + Math.cos(time * particle.speed * 0.8 + particle.phase) * particle.amplitude * 0.6;

        // Keep particles in bounds
        if (particle.x < -50) particle.baseX = width + 50;
        if (particle.x > width + 50) particle.baseX = -50;
        if (particle.y < -50) particle.baseY = height + 50;
        if (particle.y > height + 50) particle.baseY = -50;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = "#D4AF37";
        ctx.shadowBlur = 10 * particle.scale;
        ctx.shadowColor = "#D4AF37";
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2 * particle.scale, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      time += 0.01;
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [width, height, isMobile, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
}