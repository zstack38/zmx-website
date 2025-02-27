import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <Card className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contacts</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Headquarters</h3>
                <p className="text-gray-600">9140 Plainfield Rd</p>
                <p className="text-gray-600">Brookfield, IL 60513</p>
              </div>
              
              <div>
                <h3 className="font-semibold">Phone Numbers</h3>
                <p className="text-gray-600">
                  <a href="tel:+17083540621" className="hover:text-blue-600">708-354-0621</a>
                </p>
                <p className="text-gray-600">
                  Toll-free: <a href="tel:+18004954043" className="hover:text-blue-600">1-800-495-4043</a>
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold">General Inquiries</h3>
                <p className="text-gray-600">zmxtrans@aol.com</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Form */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Reach out to us - we are here to serve your needs!</h2>
          <form className="space-y-4" action="/api/contact" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                required
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Your message..."
                className="min-h-[150px]"
              />
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
