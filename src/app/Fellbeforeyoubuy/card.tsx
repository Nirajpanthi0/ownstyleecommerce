"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {useState } from "react"
import { X,  Play } from "lucide-react"

export default function Component() {
  const products = [
    {
      id: 1,
      title: "xxxx",
      price: "Rs. 320",
      originalPrice: null,
      discount: null,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Beautiful handcrafted doll perfect for children. Made with high-quality materials and attention to detail.",
      video: "/placeholder.mp4",
      inStock: true,
    },
    {
      id: 2,
      title: "xxx",
      price: "Rs. 297",
      originalPrice: "Rs. 330",
      discount: "-10%",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Adorable baby girl outfit featuring Messi #10 jersey design. Comfortable and stylish for your little one.",
      video: "/placeholder.mp4",
      inStock: true,
    },
    {
      id: 3,
      title: "xxxx",
      price: "Rs. 900,000",
      originalPrice: "Rs. 1,000,000",
      discount: "-10%",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Professional animation software suite with advanced features for creating stunning animations and graphics.",
      video: "/placeholder.mp4",
      inStock: true,
    },
    {
      id: 4,
      title: "xxx",
      price: "Rs. 1,220",
      originalPrice: null,
      discount: null,
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Extra large 4ft teddy bear perfect for kids and adults. Soft, cuddly, and made with premium materials.",
      video: "/placeholder.mp4",
      inStock: true,
    },
  ]

  type Product = {
    id: number
    title: string
    price: string
    originalPrice: string | null
    discount: string | null
    image: string
    description: string
    video: string
    inStock: boolean
  }

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  

  const openProductDetails = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeProductDetails = () => {
    setSelectedProduct(null)
  }

  
  return (
    <>
   <div className="flex justify-center ">
     <p className="text-center font-medium text-4xl border-b-2 border-pink-700 w-[500px] ">FEEL BEFORE YOU BUY</p>
   </div>
    <div className="p-6 bg-gray-100 mt-9 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {products.map((product) => (
          <Card key={product.id} className="relative overflow-hidden rounded-2xl   ">
            <div className="relative aspect-[3/4]">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />

              {/* Add button */}
              <Button
                size="icon"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-pink-500 hover:bg-pink-600 "
                onClick={() => openProductDetails(product)}
              >
                <Plus className="w-4 h-4 text-white" />
              </Button>

              {/* Discount badge */}
              {product.discount && (
                <div className="absolute top-3 left-3 bg-pink-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {product.discount}
                </div>
              )}

              {/* Product info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4">
                <h3 className="text-white font-medium text-sm mb-1 line-clamp-2">{product.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-300 text-sm line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close button */}
              <Button size="icon" variant="ghost" className="absolute top-4 right-4 z-10" onClick={closeProductDetails}>
                <X className="w-5 h-5" />
              </Button>

              {/* Product Image */}
              <div className="relative aspect-video">
                <Image
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProduct.title}</h2>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-bold text-pink-500">{selectedProduct.price}</span>
                      {selectedProduct.originalPrice && (
                        <>
                          <span className="text-xl text-gray-400 line-through">{selectedProduct.originalPrice}</span>
                          <span className="bg-pink-500 text-white px-2 py-1 rounded text-sm font-medium">
                            {selectedProduct.discount}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{selectedProduct.description}</p>

                {/* Product Video */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Product Demo
                  </h3>
                  <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <video controls className="w-full h-full object-cover" poster={selectedProduct.image}>
                      <source src={selectedProduct.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* Add to Cart Section */}
                <div className="flex items-center gap-4">
                 
                  <div className="text-sm text-gray-500">{selectedProduct.inStock ? "In Stock" : "Out of Stock"}</div>
                </div>

                {/* Cart notification */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}
