"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface NavBarProps {
  activeSection: string
  onNavClick: (section: string) => void
}

export default function NavBar({ activeSection, onNavClick }: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (section: string) => {
    onNavClick(section)
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      className="sticky top-0 bg-white shadow-md p-4 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Kawishi Herbal Hair Oil Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-red-800">Kowishi Herbal Hair Oil</h1>
        </div>

        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => handleNavClick("home")}
            className={`px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === "home" ? "bg-red-600 text-white" : "hover:bg-yellow-100"}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className={`px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === "about" ? "bg-red-600 text-white" : "hover:bg-yellow-100"}`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("products")}
            className={`px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === "products" ? "bg-red-600 text-white" : "hover:bg-yellow-100"}`}
          >
            Products
          </button>
          <button
            onClick={() => handleNavClick("contact")}
            className={`px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === "contact" ? "bg-red-600 text-white" : "hover:bg-yellow-100"}`}
          >
            Contact
          </button>
        </div>

        <div className="md:hidden">
          <button className="p-2 rounded-lg bg-yellow-100" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden absolute left-0 right-0 bg-white shadow-md p-4 mt-2 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleNavClick("home")}
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === "home" ? "bg-red-600 text-white" : "hover:bg-yellow-100"}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === "about" ? "bg-red-600 text-white" : "hover:bg-yellow-100"}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("products")}
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === "products" ? "bg-red-600 text-white" : "hover:bg-yellow-100"}`}
            >
              Products
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className={`px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === "contact" ? "bg-red-600 text-white" : "hover:bg-yellow-100"}`}
            >
              Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
