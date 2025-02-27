export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">About Us</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          Welcome to ZMX Transport, where excellence meets reliability in the transportation industry. 
          With years of dedicated service, we&apos;ve established ourselves as a leading force in the trucking sector, 
          delivering solutions that keep America&apos;s supply chain moving forward.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          To provide reliable, efficient, and sustainable transportation solutions while maintaining 
          the highest standards of safety and customer service. We strive to be the preferred partner 
          for businesses seeking dependable logistics solutions.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-3">
          <li>Safety First - We prioritize the safety of our team, cargo, and everyone on the road</li>
          <li>Reliability - Consistent, on-time delivery you can count on</li>
          <li>Innovation - Embracing new technologies to improve our service</li>
          <li>Sustainability - Committed to reducing our environmental impact</li>
          <li>Customer Focus - Your success is our success</li>
        </ul>
      </div>
    </div>
  );
}
