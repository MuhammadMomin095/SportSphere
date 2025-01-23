import Image from "next/image"
import Link from "next/link"

const promos = [
  {
    title: "New Arrivals",
    image:
      "/1.jpg",
    link: "/new-arrivals",
    buttonText: "Shop Now",
  },
  {
    title: "Special Offers",
    image:
      "/2.jpg",
    link: "/special-offers",
    buttonText: "View Offers",
  },
]

export function PromoSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {promos.map((promo, index) => (
        <Link key={index} href={promo.link} className="group relative" style={{boxShadow:"10px 28px 20px #06141B, -10px -28px 20px #06141B"}}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg transition-transform transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
            <Image
              src={promo.image || "/placeholder.svg"}
              alt={promo.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
              <h3 className="text-3xl font-bold mb-4">{promo.title}</h3>
              <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
                {promo.buttonText}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

