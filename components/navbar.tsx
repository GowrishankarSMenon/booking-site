"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Plane } from "lucide-react"
import { Button } from "@/components/ui/button"
import SearchSection from "@/components/search-section"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

export default function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background-50/80 dark:bg-background-950/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-color1-500 flex items-center">
            <Plane className="mr-2" />
            <span className="font-mono">TravelEase</span>
          </Link>
          {isScrolled ? (
            <div className="hidden md:block w-full max-w-2xl">
              <SearchSection compact />
            </div>
          ) : (
            <div className="hidden md:flex space-x-4">
              <Link
                href="/flights"
                className="text-background-800 dark:text-background-200 hover:text-color1-500 font-medium"
              >
                Flights
              </Link>
              <Link
                href="/hotels"
                className="text-background-800 dark:text-background-200 hover:text-color1-500 font-medium"
              >
                Hotels
              </Link>
              <Link
                href="/cars"
                className="text-background-800 dark:text-background-200 hover:text-color1-500 font-medium"
              >
                Cars
              </Link>
              <Link
                href="/deals"
                className="text-background-800 dark:text-background-200 hover:text-color1-500 font-medium"
              >
                Deals
              </Link>
            </div>
          )}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-background-800 dark:text-background-200 hover:text-color1-500 font-medium"
            >
              Sign In
            </Button>
            <Button variant="default" className="bg-color1-500 hover:bg-color1-600 text-background-50 font-medium">
              Sign Up
            </Button>
            <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/flights"
                className="block text-background-800 dark:text-background-200 hover:text-color1-500 font-medium"
              >
                Flights
              </Link>
              <Link
                href="/hotels"
                className="block text-background-800 dark:text-background-200 hover:text-color1-500 font-medium"
              >
                Hotels
              </Link>
              <Link
                href="/cars"
                className="block text-background-800 dark:text-background-200 hover:text-color1-500 font-medium"
              >
                Cars
              </Link>
              <Link
                href="/deals"
                className="block text-background-800 dark:text-background-200 hover:text-color1-500 font-medium"
              >
                Deals
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

