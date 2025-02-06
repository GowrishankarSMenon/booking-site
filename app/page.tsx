"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SearchSection from "@/components/search-section"
import RomanticStay from "@/components/romantic-stay"
import HotDeals from "@/components/hot-deals"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background-50 text-background-950">
        <Navbar isScrolled={isScrolled} />
        <main className="space-y-24 pt-24">
          <AnimatePresence>
            <motion.div {...fadeInUp}>
              <Hero />
            </motion.div>
            <motion.div {...fadeInUp}>
              <SearchSection />
            </motion.div>
            <motion.div
              className="w-full h-1 bg-gradient-to-r from-color1-500 to-color2-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <motion.div {...fadeInUp}>
              <RomanticStay />
            </motion.div>
            <motion.div
              className="w-full h-1 bg-gradient-to-r from-color2-500 to-color1-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <motion.div {...fadeInUp}>
              <HotDeals />
            </motion.div>
            <motion.div {...fadeInUp}>
              <FAQ />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

