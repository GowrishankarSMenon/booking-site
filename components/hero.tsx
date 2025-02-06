"use client"

import { Plane, Car, Hotel, Briefcase, Umbrella, Camera, Map } from "lucide-react"
import { motion } from "framer-motion"
import type React from "react"
import { useTheme } from "next-themes"

const svgs = [Briefcase, Umbrella, Camera, Map]

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section className="py-20 text-center relative overflow-hidden rounded-3xl bg-background-100 dark:bg-background-900">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="mb-6 text-5xl font-bold text-color1-500 font-mono">Your dream travel destination planner</h1>
        <p className="mb-12 text-xl text-background-600 dark:text-background-400 font-light">
          Your one-stop solution for all your travel needs
        </p>
      </motion.div>
      <div className="flex justify-center space-x-8">
        <ServiceCard icon={<Plane className="h-12 w-12" />} title="Flights" />
        <ServiceCard icon={<Car className="h-12 w-12" />} title="Cars" />
        <ServiceCard icon={<Hotel className="h-12 w-12" />} title="Hotels" />
      </div>
      {svgs.map((Svg, index) => (
        <motion.div
          key={index}
          className="absolute -z-10 w-16 h-16 opacity-10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            rotate: `${Math.random() * 360}deg`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [`${Math.random() * 360}deg`, `${Math.random() * 360}deg`, `${Math.random() * 360}deg`],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            delay: index * 2,
          }}
        >
          <Svg className={`w-full h-full ${theme === "dark" ? "text-background-700" : "text-background-300"}`} />
        </motion.div>
      ))}
    </section>
  )
}

function ServiceCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <motion.div
      className="flex flex-col items-center space-y-4 rounded-2xl bg-background-50 dark:bg-background-800 p-6 shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      <h2 className="text-xl font-semibold text-background-800 dark:text-background-200 font-mono">{title}</h2>
    </motion.div>
  )
}

