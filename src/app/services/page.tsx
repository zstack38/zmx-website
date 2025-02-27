import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-700 text-center mb-12">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-700">Full Semi Truckloads</CardTitle>
            <CardDescription>Maximum capacity for large shipments</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Our semi trucks provide maximum capacity for your largest shipments, 
              perfect for full truckload deliveries throughout the Chicagoland area 
              and neighboring states.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-700">Cargo Vans</CardTitle>
            <CardDescription>Flexible solutions for smaller deliveries</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Ideal for smaller, time-sensitive deliveries, our cargo vans offer 
              quick and efficient transportation for your lighter freight needs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-blue-700">Straight Trucks</CardTitle>
            <CardDescription>Perfect middle-ground solution</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Our straight trucks provide the perfect balance between capacity and 
              maneuverability, ideal for medium-sized shipments and urban deliveries.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
