"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      console.error("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate sending email (replace with actual email API or backend call)
      await new Promise((res) => setTimeout(res, 1500))

      console.log("Message sent successfully!")

      // Reset form
      setFormData({ name: "", phone: "", email: "", message: "" })
    } catch (err) {
      console.error("Something went wrong!")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen py-16 flex items-center bg-yellow-50 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-red-800 mb-4">GET IN TOUCH</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-1 gap-12">    
          {/* Contact Details Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Contact Info */}
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
                <h3 className="text-2xl font-bold text-red-800">Contact Details</h3>
              </div>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <MapPin className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800">Address</h4>
                    <p className="text-red-700">2/257-L, Kasthuri Nagar, First Street, Valayapatti, Namakkal - 637020</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <Phone className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800">Phone</h4>
                    <p className="text-red-700">94439 58556</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <Mail className="w-6 h-6 text-red-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-red-800">Email</h4>
                    <p className="text-red-700">herbalhairoil1712@gmail.com</p>
                  </div>
                </motion.div>

                <div className="pt-4">
                  <h4 className="font-semibold mb-2 text-red-800">Follow Us</h4>
                  <div className="flex space-x-4">
                    <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/hair_oil_nkl?igsh=MWUzYjloZjIydTZxMA==" className="bg-amber-200 p-2 rounded-full">
                      <Instagram className="w-6 h-6 text-red-800" />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2 }} href="https://www.youtube.com/@Hairoilnkl" className="bg-amber-200 p-2 rounded-full">
                      <Youtube className="w-6 h-6 text-red-800" />
                    </motion.a>
                    <span className="text-red-800 font-semibold ml-2">Hair_Oil_Nkl</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="p-8">
              <div className="bg-yellow-100 rounded-lg p-4 border-l-4 border-amber-500 mb-6">
                <h4 className="font-bold text-red-800 mb-2">Business Hours</h4>
                <p className="text-red-700">Monday - Sunday: 9:00 AM - 6:00 PM</p>
                {/* <p className="text-red-700">Sunday: Closed</p> */}
              </div>

              <h4 className="font-bold text-red-800 mb-2">Our Location</h4>
              <div className="h-48 rounded-lg overflow-hidden">
                <iframe
                  title="Kawishi Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.829897510492!2d78.13043497509865!3d11.133745789046886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe5fa45ff6c79%3A0x8d30e02b9e83ccf9!2sValayapatti%2C%20Tamil%20Nadu%20637020!5e0!3m2!1sen!2sin!4v1691768867776!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          
          {/* <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-red-800 mb-6">Send us a message</h3>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form> */}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 text-center text-red-800"
        >
          <p className="font-semibold">
            &copy; {new Date().getFullYear()} Kowishi Herbal Hair Oil. All rights reserved.
          </p>
{/*           <div className="mt-4 flex justify-center space-x-8">
            <a href="#" className="hover:text-red-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-600 transition-colors">
              Shipping Info
            </a>
          </div> */}
        </motion.footer>
      </div>
    </section>
  )
}
