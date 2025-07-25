import { Card, CardContent } from "@/components/ui/card"
import {
  Baby,
  ChefHat,
  Smartphone,
  Car,
  Phone,
  Monitor,
  BookOpen,
  Shirt,
  Home,
  PawPrint,
  Church,
  MousePointer,
  Bed,
  Droplets,
  Scissors,
} from "lucide-react"

const categories = [
  {
    id: 1,
    title: "Breast Pump Accessories",
    icon: Baby,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    id: 2,
    title: "Vinegar & Cooking Wine",
    icon: ChefHat,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    id: 3,
    title: "Phone Cases",
    icon: Smartphone,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: 4,
    title: "Convertible",
    icon: Car,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: 5,
    title: "Landline Phones",
    icon: Phone,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
 
  
]

export default function CategoryGrid() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6 mt-[10px] ">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
        {categories.map((category) => (
          <Card
            key={category.id}
            className="cursor-pointer hover:shadow-md transition-shadow duration-200 border border-gray-200"
          >
            <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
              <div className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center`}>
                <category.icon className={`w-8 h-8 ${category.color}`} />
              </div>
              <h3 className="text-sm font-medium text-gray-900 leading-tight min-h-[2.5rem] flex items-center">
                {category.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
