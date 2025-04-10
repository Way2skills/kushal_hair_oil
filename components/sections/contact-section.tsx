"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Youtube, Phone, Mail, MapPin, Send } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setFormData({ name: "", phone: "", email: "", message: "" })
  }

  return (
    <section className="min-h-screen py-16 flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">CONTACT US</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-amber-400 to-yellow-300 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-white">
                  <Image
                    src="/images/logo.png"
                    alt="Kawishi Herbal Hair Oil Logo"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-red-800">Get In Touch</h3>
              </div>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <MapPin className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800">Address</h4>
                    <p className="text-red-700">
                      2/257-L, Kasthuri Nagar, First Street, Valayapatti, Namakkal - 637020
                    </p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <Phone className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800">Phone</h4>
                    <p className="text-red-700">94439 58556, 63835 23969</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <Mail className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800">Email</h4>
                    <p className="text-red-700">kawishiherbahoil@gmail.com</p>
                  </div>
                </motion.div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-2 text-red-800">Follow Us</h4>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href="#"
                      className="bg-amber-200 p-2 rounded-full hover:bg-amber-300 transition-all"
                    >
                      <Instagram className="w-6 h-6 text-red-800" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      href="#"
                      className="bg-amber-200 p-2 rounded-full hover:bg-amber-300 transition-all"
                    >
                      <Youtube className="w-6 h-6 text-red-800" />
                    </motion.a>
                    <div className="flex items-center ml-2 text-red-800">
                      <span>Hair_Oil_Nkl</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-yellow-100 rounded-lg p-4 border-l-4 border-amber-500">
                <h4 className="font-bold text-red-800 mb-2">Business Hours</h4>
                <p className="text-red-700">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                <p className="text-red-700">Sunday: Closed</p>
              </div>

              <div className="mt-6">
                <h4 className="font-bold text-red-800 mb-2">Our Location</h4>
                <div className="h-48 bg-amber-100 rounded-lg flex items-center justify-center">
                  <p className="text-red-800">Map will be displayed here</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-red-500 to-amber-500 p-6 text-white">
              <h3 className="text-2xl font-bold">Send us a Message</h3>
              <p>We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <div className="p-8">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-red-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-red-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-red-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-red-700 mb-1">Your Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white h-32 resize-none"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-red-600 to-amber-600 text-white py-3 rounded-md font-semibold flex items-center justify-center space-x-2 ${isSubmitting ? "opacity-75" : "hover:from-red-700 hover:to-amber-700"}`}
                >
                  <Send className={`w-5 h-5 ${isSubmitting ? "animate-ping" : "animate-none"}`} />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.footer
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 text-center text-red-800"
        >
          <p className="font-semibold">
            &copy; {new Date().getFullYear()} Kawishi Herbal Hair Oil. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-8">
            <a href="#" className="hover:text-red-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Shipping Info
            </a>
          </div>
        </motion.footer>
      </div>
    </section>
  )
}
