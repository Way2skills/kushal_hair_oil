"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
  const benefits = [
    "One Solution For All Your Hair Problem",
    "100% Natural Hand Made Hair Oil By Amma",
    "0% Chemicals",
    "Controls Dandruff, Gray Hair, Hair Fall",
    "Get Shinier Hair In 2 Weeks",
    "Head Pain & Body Heat Solved",
    "Increase Hair Growth Naturally",
    "Unisex - From Babies To Elders",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <section className="min-h-screen py-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">ABOUT US</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-yellow-300 rounded-lg rotate-3"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg z-10">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Our Story</h3>
                <p className="text-red-700 mb-4">
                  Kawishi Herbal Hair Oil is a traditional family recipe passed down through generations. Our oil is
                  handcrafted with love by Amma using ancient techniques and the finest natural ingredients.
                </p>
                <p className="text-red-700 mb-4">
                  We source all our ingredients locally from organic farms to ensure the highest quality. Each batch is
                  prepared with care, following time-tested methods that preserve the natural goodness of herbs.
                </p>
                <p className="text-red-700">
                  Our mission is to bring the ancient wisdom of herbal hair care to modern times, providing a
                  chemical-free solution for all hair problems.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="bg-yellow-300 border-2 border-red-500 rounded-xl shadow-lg p-6"
          >
            <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">Benefits</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-800 text-lg">{benefit}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-2xl font-bold text-red-800 mb-4 text-center">Our Ingredients</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {[
              { name: "Amla", color: "green" },
              { name: "Hibiscus", color: "red" },
              { name: "Coconut Oil", color: "yellow" },
              { name: "Curry Leaves", color: "green" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-amber-50 p-4 rounded-lg shadow border border-amber-200 flex flex-col items-center justify-center text-center"
              >
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full mb-3 flex items-center justify-center`}>
                  <div className={`w-12 h-12 bg-${item.color}-500 rounded-full`}></div>
                </div>
                <p className="font-semibold text-red-800">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
