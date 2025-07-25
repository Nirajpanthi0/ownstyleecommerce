"use client"

import ImageSlider from "./image-slider"

export default function HeroPage() {
  // Example with custom images
  return (
    <div className=" bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
        </div>

        {/* Default Slider */}
        <div className="space-y-4">
          <ImageSlider />
        </div>
      </div>
    </div>
  )
}
