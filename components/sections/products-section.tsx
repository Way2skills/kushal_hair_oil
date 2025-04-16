"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Star } from "lucide-react"

export default function ProductsSection() {
  const products = [
    {
      size: "100ml",
      price: 149,
      description: "Perfect for travel or first-time users",
      features: ["Travel-friendly","Compact design"],
      color: "amber",
      image: "\img_new_2.jpg" // Placeholder for actual product image
    },
    {
      size: "200ml",
      price: 299,
      description: "Our most popular size for regular users",
      features: ["Best value", "Family favorite"],
      color: "red",
      featured: true,
      image: "\IMG-20250410-WA0017_1_-removebg-preview_20250416_1818260.jpg" // Placeholder for actual product image
    },
    {
      size: "500ml",
      price: 699,
      description: "Bulk size for dedicated users and families",
      features: ["Economy pack",  "Large quantity with quality"],
      color: "green",
      image: "\img_new 1.jpg" // Placeholder for actual product image
    },
  ]

  return (
    <section className="min-h-screen py-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">OUR PRODUCTS</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto"></div>
          <p className="mt-4 text-lg text-red-700 max-w-2xl mx-auto">
            Choose the perfect size for your needs. All our products contain the same premium quality herbal hair oil.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`relative ${product.featured ? "md:-mt-8 md:mb-8" : ""}`}
            >
              {product.featured && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">MOST POPULAR</div>
                </div>
              )}

              <div className={`bg-white rounded-2xl shadow-xl overflow-hidden border-2 ${product.featured ? "border-red-500" : "border-amber-300"}`}>
                {/* REPLACED SECTION: Product Image Instead of Styled Container */}
                <div className={`h-48 flex items-center justify-center p-6 bg-${product.color}-100`}>
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={`Herbal Hair Oil ${product.size}`}
                      className="h-40 object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-center py-1">
                      <span className="text-red-800 font-bold">{product.size}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-red-800">{product.size} Bottle</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <ul className="mb-6 space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-red-800">₹{product.price}</div>
                    
                  </div>
                </div>

                {product.featured && (
                  <div className="bg-red-600 text-white py-2 text-center font-semibold">BEST VALUE</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 bg-yellow-300 border-2 border-red-500 rounded-xl p-6 text-center"
        >
          <h3 className="text-xl font-bold text-red-800 mb-2">Bulk Orders Available</h3>
          <p className="text-red-700">
            For salons, spas, or wholesale inquiries, please contact us directly for special pricing.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Contact for Bulk Orders
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}