"use client"

import { useEffect, useRef, useState } from "react"
import NavBar from "./ui/nav-bar"
import HomeSection from "./sections/home-section"
import AboutSection from "./sections/about-section"
import ProductsSection from "./sections/products-section"
import ContactSection from "./sections/contact-section"
import { motion } from "framer-motion"

export default function HerbalHairOil() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoaded, setIsLoaded] = useState(false)

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    products: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      // Check which section is currently in view
      for (const section in sectionRefs) {
        const element = sectionRefs[section as keyof typeof sectionRefs].current
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (section: string) => {
    const element = sectionRefs[section as keyof typeof sectionRefs].current
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-yellow-100">
      <NavBar activeSection={activeSection} onNavClick={scrollToSection} />

      <motion.div
        ref={sectionRefs.home}
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HomeSection isLoaded={isLoaded} />
      </motion.div>

      <motion.div
        ref={sectionRefs.about}
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <AboutSection />
      </motion.div>

      <motion.div
        ref={sectionRefs.products}
        id="products"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ProductsSection />
      </motion.div>

      <motion.div
        ref={sectionRefs.contact}
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ContactSection />
      </motion.div>
    </div>
  )
}
