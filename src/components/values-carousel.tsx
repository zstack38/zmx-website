import { Shield, Clock, Gauge, Users, Heart } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const values = [
  {
    icon: Shield,
    title: "Safety",
    description: "Prioritizing the safety of drivers, staff, and the public. This includes maintaining vehicles, following road regulations, and investing in driver training."
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Ensuring on-time delivery and dependable service. Customers should be able to count on the company to meet deadlines."
  },
  {
    icon: Gauge,
    title: "Efficiency",
    description: "Optimizing routes, fuel consumption, and logistics to provide cost-effective services."
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Building strong relationships with clients, understanding their needs, and delivering excellent customer service."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Operating with honesty and transparency in all dealings, whether with clients, employees, or suppliers."
  }
]

export function ValuesCarousel() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-12">Our Values</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {values.map((value, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-xl shadow-sm border h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
