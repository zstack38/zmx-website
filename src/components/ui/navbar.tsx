"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/zmx.png"
            alt="ZMX Logo"
            width={60}
            height={60}
            className="rounded-full"
            quality={100}
            priority
          />
          <Link href="/" className="text-2xl font-bold text-white">
            ZMX Transportation Services
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 hover:bg-blue-600 rounded-md"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation links - desktop */}
        <div className={`w-full lg:w-auto lg:flex lg:items-center lg:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-blue-600 text-lg font-medium w-full lg:w-auto" asChild>
              <Link href="/about">About Us</Link>
            </Button>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-blue-600 text-lg font-medium w-full lg:w-auto" asChild>
              <Link href="/services">Services</Link>
            </Button>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-blue-600 text-lg font-medium w-full lg:w-auto" asChild>
              <Link href="/awards">Awards</Link>
            </Button>
            <Button variant="ghost" className="text-white hover:text-white hover:bg-blue-600 text-lg font-medium w-full lg:w-auto" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="secondary" className="bg-white text-blue-700 hover:bg-blue-50 text-lg w-full lg:w-auto" asChild>
              <a href="tel:+17083540621" className="flex items-center justify-center space-x-2">
                <Phone size={20} />
                <span>708-354-0621</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
