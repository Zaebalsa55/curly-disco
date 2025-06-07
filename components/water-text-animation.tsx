"use client"

import { useState, useEffect } from "react"

interface WaterTextAnimationProps {
  text: string
  className?: string
  color?: string
}

export function WaterTextAnimation({ text, className = "", color = "inherit" }: WaterTextAnimationProps) {
  const [mounted, setMounted] = useState(false)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setAnimated(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const letters = text.split("")

  if (!mounted) {
    return (
      <div className={`flex flex-wrap justify-center ${className}`} style={{ color }}>
        {letters.map((letter, index) => (
          <span key={index} className="inline-block">
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-out ${
            animated 
              ? "opacity-100 translate-y-0 blur-0" 
              : "opacity-0 translate-y-12 blur-sm"
          }`}
          style={{
            color: color,
            transitionDelay: `${index * 100}ms`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  )
}