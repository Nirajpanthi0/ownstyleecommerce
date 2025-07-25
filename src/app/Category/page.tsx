import CategoryGrid from "./category-grid"

export default function Categories() {
  return (
    <main className=" bg-gray-50 py-8 mt-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold   border-b-pink-700   border-b-2 w-[200px] text-center ">Categories</h1>
        <CategoryGrid />
      </div>
    </main>
  )
}
