"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import hotDealsData from "@/data/hotdeals.json"

export default function HotDeals() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerView = 3 // Number of cards to show at once
  const deals = hotDealsData.deals // Access the deals array correctly
  const totalSlides = Math.max(Math.ceil(deals.length / itemsPerView), 1)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const getVisibleItems = () => {
    const startIndex = currentIndex * itemsPerView
    return deals.slice(startIndex, Math.min(startIndex + itemsPerView, deals.length))
  }

  return (
    <section className="w-full py-12 bg-gray-100 rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-color1-500 font-mono">Hot Deals</h2>
        <div className="relative">
          <motion.div
            className="flex gap-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {getVisibleItems().map((deal, index) => (
              <motion.div
                key={deal.id}
                className="w-1/3 flex-shrink-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-background-50 dark:bg-background-800 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={`https://picsum.photos/400/200?random=${Math.random()}`}
                    alt={`Deal to ${deal.destination}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between h-52">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-color1-500">{deal.destination}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-color2-500">{deal.duration}</span>
                        <span className="text-sm text-background-600 dark:text-background-400">{deal.type}</span>
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="text-sm text-background-800 dark:text-background-200">{deal.startDate}</span>
                        <ArrowRight className="mx-2 h-4 w-4 text-background-400" />
                        <span className="text-sm text-background-800 dark:text-background-200">{deal.endDate}</span>
                      </div>
                    </div>
                    <div className="text-lg font-bold text-color1-500">Starting from ${deal.price}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-background-200 dark:bg-background-700 rounded-full p-2"
              >
                <ChevronLeft className="h-6 w-6 text-background-800 dark:text-background-200" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-background-200 dark:bg-background-700 rounded-full p-2"
              >
                <ChevronRight className="h-6 w-6 text-background-800 dark:text-background-200" />
              </button>
            </>
          )}
        </div>
        <div className="mt-8 text-center">
          <Link href="/deals" className="text-color1-500 hover:text-color1-600 font-semibold">
            Explore More Deals
          </Link>
        </div>
      </div>
    </section>
  )
}