"use client"

import ImageSlider from "./image-slider"
import MainSlider from "./main-slider"
export default function HeroPage() {
  const urbanImages = [
    "https://imgs.search.brave.com/Pc3hotg6l4ut-WV7V9LIIhu3kWSb17v0qSikzgzS7KU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdml0eS9pbWFn/ZS1nZW5lcmF0aW9u/LW5ldy53ZWJwP3c9/MjAwMA",
   "https://res.cloudinary.com/dqn47mkck/image/upload/v1749546403/products/1749546402766-WhatsApp%20Image%202025-06-10%20at%2013.jpg",
   "https://res.cloudinary.com/dqn47mkck/image/upload/v1749546403/products/1749546402766-WhatsApp%20Image%202025-06-10%20at%2013.jpg",
  ]

  const architectureImages = [
   "https://res.cloudinary.com/dqn47mkck/image/upload/v1748862565/products/1748862562705-banner2.webp",
    "https://res.cloudinary.com/dqn47mkck/image/upload/v1748862544/products/1748862541625-Bkirthday_Desk_copy_25.webp",
     "https://res.cloudinary.com/dqn47mkck/image/upload/v1748862544/products/1748862541625-Bkirthday_Desk_copy_25.webp",
  ]

  const natureImages = [
   "https://res.cloudinary.com/dqn47mkck/image/upload/v1749546403/products/1749546402766-WhatsApp%20Image%202025-06-10%20at%2013.jpg",
   "https://res.cloudinary.com/dqn47mkck/image/upload/v1749546403/products/1749546402766-WhatsApp%20Image%202025-06-10%20at%2013.jpg",
    "https://res.cloudinary.com/dqn47mkck/image/upload/v1748862544/products/1748862541625-Bkirthday_Desk_copy_25.webp",
  ]

  const wildlifeImages = [
   "https://res.cloudinary.com/dqn47mkck/image/upload/v1749546403/products/1749546402766-WhatsApp%20Image%202025-06-10%20at%2013.jpg",
    "https://res.cloudinary.com/dqn47mkck/image/upload/v1748862544/products/1748862541625-Bkirthday_Desk_copy_25.webp",
  ]

  const artImages = [
   "https://res.cloudinary.com/dqn47mkck/image/upload/v1749546403/products/1749546402766-WhatsApp%20Image%202025-06-10%20at%2013.jpg",
    "https://res.cloudinary.com/dqn47mkck/image/upload/v1748862544/products/1748862541625-Bkirthday_Desk_copy_25.webp",
  ]

  const designImages = [
   "https://res.cloudinary.com/dqn47mkck/image/upload/v1749546403/products/1749546402766-WhatsApp%20Image%202025-06-10%20at%2013.jpg",
    "https://res.cloudinary.com/dqn47mkck/image/upload/v1748862544/products/1748862541625-Bkirthday_Desk_copy_25.webp",
  ]

  const mainSlides = [

    <div key="slide1" className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-3">
          <ImageSlider images={urbanImages} autoPlay={true} autoPlayInterval={3000} showArrows={false} />
        </div>
        <div className="space-y-3">
          <ImageSlider images={architectureImages} autoPlay={true} autoPlayInterval={3500} showArrows={false} />
        </div>
      </div>
    </div>,

    <div key="slide2" className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="space-y-3">
          <ImageSlider images={natureImages} autoPlay={true} autoPlayInterval={4000} showArrows={false} />
        </div>
        <div className="space-y-3">
          <ImageSlider images={wildlifeImages} autoPlay={true} autoPlayInterval={4500} showArrows={false} />
        </div>
      </div>
    </div>,

    <div key="slide3" className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="space-y-3">
          <ImageSlider images={artImages} autoPlay={true} autoPlayInterval={5000} showArrows={false} />
        </div>
        <div className="space-y-3">
          <ImageSlider images={designImages} autoPlay={true} autoPlayInterval={5500} showArrows={false} />
        </div>
      </div>
    </div>,
  ]

  return (
    <div className="bg-background ">

        <MainSlider slides={mainSlides} autoPlay={false} showArrows={true} className="mt-10" />
      </div>
  )
}
