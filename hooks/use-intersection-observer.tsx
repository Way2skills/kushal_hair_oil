"use client"

import { useState, useEffect, type RefObject } from "react"

interface UseIntersectionObserverProps {
  elementRef: RefObject<Element>
  threshold?: number
  rootMargin?: string
}

export function useIntersectionObserver({
  elementRef,
  threshold = 0.1,
  rootMargin = "0px",
}: UseIntersectionObserverProps): boolean {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold, rootMargin },
    )

    const element = elementRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [elementRef, threshold, rootMargin])

  return isIntersecting
}
