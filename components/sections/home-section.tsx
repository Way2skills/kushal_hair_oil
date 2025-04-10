"use client"
import Image from "next/image"
import { Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"

interface HomeSectionProps {
  isLoaded: boolean
}

export default function HomeSection({ isLoaded }: HomeSectionProps) {
  return (
    <section className="min-h-screen flex items-center py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto border-4 border-amber-500 shadow-lg">
              <Image
                src="/images/logo.png"
                alt="Kawishi Herbal Hair Oil"
                width={256}
                height={256}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-red-800"
          >
            KOWISHI HERBAL HAIR OIL
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute -left-4 top-0 h-full w-1 bg-red-600"></div>
            <p className="text-xl md:text-2xl ml-4 mb-6 italic text-red-700">
              "From Babies To Elders
              <br />
              All Genders Can Use"
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <a href="#products">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-300 rounded-full blur-md"></div>
              <button className="relative bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all duration-500 transform hover:scale-105">
                Discover Our Products
              </button>
            </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex justify-center space-x-4"
          >
            <a
              href="https://www.instagram.com/hair_oil_nkl/"
              className="bg-amber-200 p-3 rounded-full hover:bg-amber-300 transition-all transform hover:scale-110"
            >
              <Instagram className="w-6 h-6 text-red-800" />
            </a>
            <a
              href="https://www.youtube.com/@Hairoilnkl"
              className="bg-amber-200 p-3 rounded-full hover:bg-amber-300 transition-all transform hover:scale-110"
            >
              <Youtube className="w-6 h-6 text-red-800" />
            </a>
            <div className="flex items-center ml-2 text-red-800 font-semibold">
              <span>Hair_Oil_Nkl</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
