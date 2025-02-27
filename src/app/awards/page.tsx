export default function AwardsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Awards & Recognition</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-2xl font-semibold text-blue-600 mb-2">Safety Excellence Award</div>
          <div className="text-sm text-gray-500 mb-4">2023</div>
          <p className="text-gray-600">
            Recognized for maintaining exceptional safety standards and practices in fleet operations.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-2xl font-semibold text-blue-600 mb-2">Green Fleet Award</div>
          <div className="text-sm text-gray-500 mb-4">2023</div>
          <p className="text-gray-600">
            Awarded for our commitment to environmental sustainability and reducing carbon emissions.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-2xl font-semibold text-blue-600 mb-2">Customer Service Excellence</div>
          <div className="text-sm text-gray-500 mb-4">2022</div>
          <p className="text-gray-600">
            Recognized for outstanding customer service and satisfaction ratings.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="text-2xl font-semibold text-blue-600 mb-2">Industry Innovation Award</div>
          <div className="text-sm text-gray-500 mb-4">2022</div>
          <p className="text-gray-600">
            Honored for implementing innovative technology solutions in fleet management.
          </p>
        </div>
      </div>
    </div>
  );
}
