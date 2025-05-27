"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface HeaderProps {
  onLoginClick: () => void
}

export default function Header({ onLoginClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-gray-800 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex justify-between items-center text-sm border-b border-gray-700 pb-3 mb-4"
        >
          <div className="flex items-center space-x-6 text-gray-300">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-white" />
              <span>+91 9876543210</span>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-white" />
              <span>info@travellerschoicepatna.com</span>
            </motion.div>
          </div>
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent font-semibold bg-[length:200%_100%]"
          >
            🚗 Premium Car Rental Service in Patna
          </motion.div>
        </motion.div>

        {/* Main header */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-black font-extrabold text-lg">TC</span>
            </motion.div>
            <div>
              <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-extrabold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                Travellers Choice
              </motion.h1>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-gray-400"
              >
                Patna
              </motion.p>
            </div>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "#home", label: "Home" },
              { href: "#cars", label: "Our Fleet" },
              { href: "#services", label: "Services" },
              { href: "#about", label: "About" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {label}
                <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }}>
              <Button
                onClick={onLoginClick}
                variant="outline"
                className="hidden md:flex items-center space-x-2 border-gray-600 text-gray-300 hover:bg-white hover:text-black transition-all duration-300"
              >
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </motion.div>

            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7 }}>
              <Button className="hidden md:block bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-300 hover:to-white transition-all duration-300">
                Book Now
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden text-white hover:bg-gray-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-700 mt-4 pt-4 overflow-hidden"
            >
              <nav className="flex flex-col space-y-4">
                {[
                  { href: "#home", label: "Home" },
                  { href: "#cars", label: "Our Fleet" },
                  { href: "#services", label: "Services" },
                  { href: "#about", label: "About" },
                  { href: "#contact", label: "Contact" },
                ].map(({ href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 * index }}
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </motion.a>
                ))}
                <div className="flex flex-col space-y-3 pt-4">
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false)
                      onLoginClick()
                    }}
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-white hover:text-black"
                  >
                    Login
                  </Button>
                  <Button className="bg-gradient-to-r from-white to-gray-300 text-black">Book Now</Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
