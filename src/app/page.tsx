import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Clock, Gauge, Users, Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 text-white">
              Your Trusted Chicagoland Partner in Transportation
            </h1>
            <p className="text-xl mb-8">
              Delivering excellence across Chicagoland with reliability, efficiency, and a commitment to exceeding customer expectations.
            </p>
            <div className="space-x-4">
              <Button asChild className="bg-white text-blue-700 hover:bg-blue-50 text-lg">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild className="bg-white text-blue-700 hover:bg-blue-50 text-lg">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Regional Excellence</h3>
              <p className="text-gray-600">
                Chicagoland based and operated, providing superior transportation services from our Brookfield headquarters.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock customer service to ensure your shipments are always on track.
              </p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Versatile Fleet</h3>
              <p className="text-gray-600">
                From cargo vans to full semi trucks, we have the right vehicle for your transportation needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12">Our Values</h2>
          <Carousel 
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              startIndex: 0,
              dragFree: true
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-xl shadow-sm border h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Safety</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Prioritizing the safety of drivers, staff, and the public. This includes maintaining vehicles, following road regulations, and investing in driver training.
                    </p>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-xl shadow-sm border h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Reliability</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ensuring on-time delivery and dependable service. Customers should be able to count on the company to meet deadlines.
                    </p>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-xl shadow-sm border h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Gauge className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Efficiency</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Optimizing routes, fuel consumption, and logistics to provide cost-effective services.
                    </p>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-xl shadow-sm border h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Customer Focus</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Building strong relationships with clients, understanding their needs, and delivering excellent customer service.
                    </p>
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-6 bg-white rounded-xl shadow-sm border h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Heart className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Integrity</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Operating with honesty and transparency in all dealings, whether with clients, employees, or suppliers.
                    </p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
