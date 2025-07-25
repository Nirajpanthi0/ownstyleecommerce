import Image from "next/image"
import { ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro max double",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4,
    reviewCount: 2,
    price: 1800,
    originalPrice: 2000,
    hasDiscount: true,
  },
  {
    id: 2,
    name: "Ferrero Rocher",
    image: "/placeholder.svg?height=200&width=200",
    rating: 4,
    reviewCount: 1,
    price: 110,
  },
  {
    id: 3,
    name: "Laptop",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
    reviewCount: 2,
    price: 130,
  },
  {
    id: 4,
    name: "Teddy Keychain",
    image: "/placeholder.svg?height=200&width=200",
    rating: 5,
    reviewCount: 1,
    price: 200,
  },
  {
    id: 5,
    name: "Livingtex Cushion Cover",
    image: "/placeholder.svg?height=200&width=200",
    rating: 2,
    reviewCount: 1,
    price: 1800,
    originalPrice: 2000,
    hasDiscount: true,
  },
]

function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-1 mb-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${star <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-500">({reviewCount})</span>
    </div>
  )
}

export default function Productcard() {
  return (
<>
<div className=" w-[400px] flex justify-center">
  <p className="font-medium text-4xl  w-[200px] ">For Sale</p>
</div>
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="relative mb-3">
                {product.hasDiscount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                    10% OFF
                  </div>
                )}
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="font-medium text-gray-900 mb-2 text-sm line-clamp-2 min-h-[2.5rem]">{product.name}</h3>

              <StarRating rating={product.rating} reviewCount={product.reviewCount} />

              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg font-bold text-gray-900">NRs {product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">NRs {product.originalPrice}</span>
                )}
              </div>

              <Button className="w-full bg-pink-700 hover:bg-pink-600 text-white text-sm py-2">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </>
  )
}
