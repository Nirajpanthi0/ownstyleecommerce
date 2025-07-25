import { Button } from "@/components/ui/button"

export default function Findus() {
  return (
    <div className="bg-rose-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{"Can't Find What You're Looking For?"}</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Our gift experts are here to help you find the perfect gift for any occasion. Get personalized recommendations
          tailored to your needs.
        </p>
        <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg font-medium rounded-lg" size="lg">
          Contact Our Experts
        </Button>
      </div>
    </div>
  )
}
