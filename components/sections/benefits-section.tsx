"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { CheckCircle } from "lucide-react"

export default function BenefitsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <section ref={ref} className="py-16 transition-all duration-700">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-4xl font-bold mb-12 text-center text-red-800 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          BENEFITS
        </h2>

        <div
          className={`bg-yellow-300 border-2 border-red-500 rounded-xl shadow-lg p-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "One Solution For All Your Hair Problem",
              "100% Natural Hand Made Hair Oil By Amma",
              "0% Chemicals",
              "Controls Dandruff, Gray Hair, Hair Fall",
              "Get Shinier Hair In 2 Weeks",
              "Head Pain & Body Heat Solved",
              "Increase Hair Growth Naturally",
              "Unisex - From Babies To Elders",
            ].map((benefit, index) => (
              <div
                key={index}
                className={`flex items-start transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-800 text-lg">{benefit}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              { color: "green", text: "Natural Ingredients" },
              { color: "red", text: "Prevents Hair Fall" },
              { color: "yellow", text: "No Chemicals" },
              { color: "blue", text: "Relieves Headache" },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white p-4 rounded-lg shadow border border-red-300 w-32 h-32 flex flex-col items-center justify-center transform transition-all duration-700 hover:scale-110 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
                style={{ transitionDelay: `${(index + 8) * 100}ms` }}
              >
                <div className={`w-12 h-12 bg-${item.color}-100 rounded-full mb-2 flex items-center justify-center`}>
                  <div className={`w-8 h-8 bg-${item.color}-500 rounded-full`}></div>
                </div>
                <p className="text-center text-red-800 font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
