"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function UsageSection() {
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

  const steps = [
    "Shake Well Before Use",
    "Dispense 1-4 Pumps Depending On Hair Thickness And Length",
    "Gently Massage Into Scalp And Work Through The Length Of Hair",
    "Leave It At Least An Hour, Preferably Overnight",
    "Zero Chemicals So Keep The Bottle Tightly Closed After Usage",
  ]

  return (
    <section ref={ref} className="py-16 transition-all duration-700">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-4xl font-bold mb-12 text-center text-red-800 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          HOW TO USE
        </h2>

        <div
          className={`bg-yellow-300 border-2 border-red-500 rounded-xl shadow-lg p-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-8">
              {steps.slice(0, 3).map((step, index) => (
                <div
                  key={index}
                  className={`flex transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
                    <p className="text-red-800 font-semibold">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col space-y-8">
              {steps.slice(3, 5).map((step, index) => (
                <div
                  key={index}
                  className={`flex transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
                  style={{ transitionDelay: `${(index + 3) * 200}ms` }}
                >
                  <div className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    {index + 4}
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md flex-grow">
                    <p className="text-red-800 font-semibold">{step}</p>
                  </div>
                </div>
              ))}

              <div
                className={`flex items-center justify-center h-full transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                style={{ transitionDelay: "1000ms" }}
              >
                <div className="w-36 h-36 relative">
                  <div className="absolute inset-0 bg-amber-500 opacity-50 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold text-red-800">For External</p>
                      <p className="font-bold text-red-800">Use Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mt-10 p-4 bg-white rounded-lg shadow-md border border-red-300 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "1200ms" }}
          >
            <h3 className="text-xl font-bold text-red-800 mb-2 text-center">Usage Tip</h3>
            <p className="text-red-800 text-center">
              For best results, use 2-3 times a week. Regular use helps in achieving healthier, shinier hair. The
              natural ingredients work progressively to improve your hair quality over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
