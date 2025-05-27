"use client"

import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-black font-extrabold text-lg">TC</span>
              </motion.div>
              <div>
                <h3 className="text-2xl font-extrabold text-white">Travellers Choice</h3>
                <p className="text-gray-400">Patna</p>
              </div>
            </div>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-gray-300 leading-relaxed"
            >
              Your premier destination for luxury car rental services in Patna. Experience unmatched comfort, safety,
              and elegance with every journey.
            </motion.p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "Youtube" },
              ].map(({ icon: Icon, label }, index) => (
                <motion.a
                  key={label}
                  href="#"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-white hover:to-gray-300 rounded-full flex items-center justify-center transition-all duration-300 group"
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-black transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white flex items-center">
              <Sparkles className="h-5 w-5 mr-2" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Our Fleet", href: "#cars" },
                { name: "Services", href: "#services" },
                { name: "About Us", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map(({ name, href }, index) => (
                <motion.li
                  key={name}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <motion.a
                    href={href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              {["Airport Transfers", "Wedding Cars", "Corporate Travel", "Outstation Trips", "Local Sightseeing"].map(
                (service, index) => (
                  <motion.li
                    key={service}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                    className="hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {service}
                  </motion.li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              {[
                { icon: MapPin, text: "Fraser Road, Patna, Bihar 800001" },
                { icon: Phone, text: "+91 9876543210" },
                { icon: Mail, text: "info@travellerschoicepatna.com" },
              ].map(({ icon: Icon, text }, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 hover:text-white transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                  <span>{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <motion.p
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            © 2024 Travellers Choice Patna. All rights reserved. Crafted with excellence for luxury travel.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
