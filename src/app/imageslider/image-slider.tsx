"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, } from "lucide-react"
import { useCallback, useEffect, useState } from "react"

interface ImageSliderProps {
  images?: string[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showDots?: boolean
  showArrows?: boolean
  className?: string
}

export default function ImageSlider({
  images = [
    "https://imgs.search.brave.com/FUrGF3liqk1B5pxb5n8UgnMggLOxd0B1mj16ZNIUCWo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/NDc0OTA0MC9waG90/by9odW1hbi12cy1y/b2JvdC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9SWpsR1N2/U3FxOC1HLU16YzZD/Rnh3SUZ6akFrNmNv/Q2x1N1NSWlEyWGdl/VT0",
    "https://surprise-inside.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdqn47mkck%2Fimage%2Fupload%2Fv1749261139%2Fproducts%2F1749261138329-teddybear.avif&w=640&q=75",
    "https://imgs.search.brave.com/Pc3hotg6l4ut-WV7V9LIIhu3kWSb17v0qSikzgzS7KU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdml0eS9pbWFn/ZS1nZW5lcmF0aW9u/LW5ldy53ZWJwP3c9/MjAwMA",
  ],
  autoPlay = true,
  autoPlayInterval = 4000,
  showDots = true,
  showArrows = true,
  className = "",
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }, [images.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }, [images.length])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(goToNext, autoPlayInterval)
    return () => clearInterval(interval)
  }, [isPlaying, goToNext, autoPlayInterval])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious()
      } else if (event.key === "ArrowRight") {
        goToNext()
      } else if (event.key === " ") {
        event.preventDefault()
        togglePlayPause()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToPrevious, goToNext])

  if (images.length === 0) {
    return <div className="flex items-center justify-center h-96 bg-muted rounded-lg">No images to display</div>
  }

  return (
    <div className={`relative w-full max-w-7xl  mx-auto overflow-hidden rounded-lg shadow-lg    mt-10 ${className}`}>
      {/* Main Image Container */}
      <div
        className="relative h-96 md:h-[500px] bg-black"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              <img
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border-0"
              onClick={goToNext}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}


        {/* Image Counter */}
        <div className="absolute top-4 left-4   px-3 py-1 rounded-full text-sm">
        </div>
      </div> 

    </div>
  )
}
