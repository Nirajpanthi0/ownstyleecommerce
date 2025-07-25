"use client"

import ImageSlider from "./image-slider"

export default function Page() {
  // Example with custom images
  const customImages = [
    "/placeholder.svg?height=500&width=900",
  ]

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
        </div>

        {/* Default Slider */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Default Slider</h2>
          <ImageSlider />
        </div>
      </div>
    </div>
  )
}
