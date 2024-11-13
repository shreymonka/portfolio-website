import React, { useState, useEffect } from "react"
import { throttle } from "lodash"

const cn = (...classes) => classes.filter(Boolean).join(" ")

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home")
  const [isVisible, setIsVisible] = useState(false)
  const navItems = ["Home", "About", "Projects", "Skills"]

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY + 100
      for (const item of navItems) {
        const element = document.getElementById(item.toLowerCase())
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveItem(item)
            break
          }
        }
      }
    }, 100)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const handleClick = (e, item) => {
    e.preventDefault()
    const element = document.getElementById(item.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveItem(item)
    }
  }

  return (
    <div className="fixed top-8 left-0 right-0 flex items-center justify-center z-50">
      <nav
        className={cn(
          "px-6 py-3 bg-white rounded-full shadow-lg transition-all duration-500 ease-in-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        )}
      >
        <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 px-2 py-1",
                  activeItem === item
                    ? "text-[#2d5857] border-b-2 border-[#2d5857]"
                    : "text-gray-500 hover:text-gray-900"
                )}
                onClick={(e) => handleClick(e, item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}