import Image from "next/image"

const testimonials = [
  {
    id: "1",
    name: "Shazia Mohamed",
    image:
      "/2.jpg",
    text: "Clear and responsive website, prompt and courteous customer service, and efficient delivery. Will order again, fantastic!",
  },
  {
    id: "2",
    name: "Misbah Naqvi",
    image:
      "/1.jpg",
    text: "I just placed my third order with The Sport Store and I have received delivery in less than an hour!! Excellent service!",
  },
  {
    id: "3",
    name: "Burhan",
    image:
      "/2.jpg",
    text: "Clear and responsive website, prompt and courteous customer service, and efficient delivery. Will order again, fantastic!",
  },
  {
    id: "4",
    name: "Bilal",
    image:
      "/1.jpg",
    text: "I just placed my third order with The Sport Store and I have received delivery in less than an hour!! Excellent service!",
  },
]

export function Testimonials() {
  return (
    <section className="py-12">
      <h2 className="text-5xl font-bold text-center text-red-700 mb-8"style={{textShadow:"2px 2px 2px black"}}>What our clients say about us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-gradient-to-br from-[#06141B] to-black p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <h3 className="font-semibold text-gray-50">{testimonial.name}</h3>
            </div>
            <p className="text-sm text-gray-200">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}


