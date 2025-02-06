import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function RomanticStay() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative w-full h-[400px] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image src="/placeholder.svg?height=400&width=1200" alt="Romantic hotel" layout="fill" objectFit="cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background-800 to-transparent flex flex-col justify-center items-start text-text-50 p-12">
            <h2 className="text-4xl font-bold mb-4 text-color1-500 font-mono">Go further, get closer</h2>
            <p className="text-xl font-light">Sneak off for a romantic hotel stay with prices you'll love.</p>
            <Button variant="custom" className="text-color1-500 hover:text-color1-600 font-semibold p-4 mt-5">Explore Deals</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

