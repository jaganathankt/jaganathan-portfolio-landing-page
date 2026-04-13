"use client"

import { useState, useEffect } from "react"

const images = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80", // Data analytics dashboard
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80", // Business analytics
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80", // Data visualization
  "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&q=80", // Charts and graphs
]

interface BackgroundCarouselProps {
  overlay?: "dark" | "gradient" | "mesh"
  speed?: number
}

export function BackgroundCarousel({ overlay = "dark", speed = 6000 }: BackgroundCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, speed)
    return () => clearInterval(interval)
  }, [speed])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
        </div>
      ))}
      
      {/* Overlay options */}
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-background/90" />
      )}
      {overlay === "gradient" && (
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
      )}
      {overlay === "mesh" && (
        <>
          <div className="absolute inset-0 bg-background/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
        </>
      )}

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
