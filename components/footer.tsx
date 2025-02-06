import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="bg-background-100 dark:bg-background-900 text-background-800 dark:text-background-200 py-12 mt-12 rounded-t-3xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-color1-500 font-mono">About Us</h3>
            <p className="text-sm font-light">
              TravelEase Bookings is your trusted partner for all your travel needs. We provide easy and affordable
              bookings for flights, cars, and hotels.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-color1-500 font-mono">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-color1-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/flights" className="text-sm hover:text-color1-500 transition-colors">
                  Flights
                </Link>
              </li>
              <li>
                <Link href="/cars" className="text-sm hover:text-color1-500 transition-colors">
                  Cars
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-sm hover:text-color1-500 transition-colors">
                  Hotels
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-color1-500 font-mono">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-sm hover:text-color1-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-color1-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-color1-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm hover:text-color1-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-color1-500 font-mono">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-color1-500 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-color1-500 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:text-color1-500 transition-colors">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="hover:text-color1-500 transition-colors">
                <Linkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-background-200 dark:border-background-700 text-center">
          <p className="text-sm font-light">
            &copy; {new Date().getFullYear()} TravelEase Bookings. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}

