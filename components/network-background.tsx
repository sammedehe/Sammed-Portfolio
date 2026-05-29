'use client'

import { useEffect, useRef } from 'react'

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
    }

    const particles: Particle[] = []
    const particleCount = 80
    const connectionDistance = 150
    const mouseRadius = 200

    const mouse = { x: 0, y: 0 }

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(34, 211, 238, ${particle.opacity})`
        ctx.fill()

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x
          const dy = particles[j].y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.15 * (1 - distance / connectionDistance)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        // Mouse interaction
        const dxMouse = mouse.x - particle.x
        const dyMouse = mouse.y - particle.y
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)

        if (distMouse < mouseRadius) {
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(34, 211, 238, ${0.3 * (1 - distMouse / mouseRadius)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
