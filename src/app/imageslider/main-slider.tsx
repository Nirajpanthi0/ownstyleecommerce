"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

interface MainSliderProps {
  slides?: React.ReactNode[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showArrows?: boolean
  className?: string
}

export default function MainSlider({
  slides = [],
  autoPlay = false,
  autoPlayInterval = 6000,
  showArrows = true,
  className = "",
}: MainSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1))
  }, [slides.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1))
  }, [slides.length])

  // Auto-play functionality for main slider
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [isPlaying, goToNext, autoPlayInterval])

  // Keyboard navigation for main slider only
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Use different keys to avoid conflict with inner sliders
      if (event.key === "ArrowUp") {
        event.preventDefault()
        goToPrevious()
      } else if (event.key === "ArrowDown") {
        event.preventDefault()
        goToNext()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToPrevious, goToNext])

  if (slides.length === 0) {
    return <div className="flex items-center justify-center h-96 bg-muted rounded-lg">No slides to display</div>
  }

  return (
    <div className={`relative w-full max-w-7xl mx-auto overflow-hidden gap-0  ${className}`}>
      {/* Main Slider Container */}
      <div className="relative bg-background">
        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 p-6">
              {slide}
            </div>
          ))}
        </div>

        {/* Main Navigation Arrows */}
        {showArrows && slides.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-200/80 hover:bg-blue-100/90 text-white border-0 z-10 rounded-full"
              onClick={goToPrevious}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-200/80 hover:bg-blue-200/90 text-white border-0 z-10 rounded-full"
              onClick={goToNext}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        {/* Main Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
