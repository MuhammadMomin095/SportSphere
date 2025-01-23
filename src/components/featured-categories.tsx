import Image from "next/image"
import Link from "next/link"

const featuredCategories = [
  {
    title: "CARDIO EQUIPMENT",
    image:
      "/cardio.jpg",
    link: "/categories/fitness/cardio",
  },
  {
    title: "SWIMMING ACCESSORIES",
    image:
      "/swiming.jpg",
    link: "/categories/swimming/accessories",
  },
  {
    title: "WEIGHTS AND DUMBBELLS",
    image:
      "/gym.jpg",
    link: "/categories/fitness/weights",
  },
]

export function FeaturedCategories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {featuredCategories.map((category, index) => (
        <Link key={index} href={category.link} className="group relative" style={{boxShadow:"10px 28px 20px #06141B, -10px -28px 20px #06141B"}}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg transition-transform transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-bold text-center mb-4">{category.title}</h3>
              <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

