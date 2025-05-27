"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Car, MapPin, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center mb-6"
            >
              <Sparkles className="h-6 w-6 text-white mr-3" />
              <span className="text-gray-300 text-lg">Our Story</span>
            </motion.div>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl font-bold mb-6"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                About Travellers Choice Patna
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-gray-300 mb-6 leading-relaxed"
            >
              Established as Patna's premier luxury car rental service, Travellers Choice has been redefining travel
              experiences with unmatched elegance and professionalism for over a decade.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Our commitment to excellence, safety, and customer satisfaction has made us the preferred choice for
              discerning travelers across Patna and Bihar — from executive transfers to special occasions.
            </motion.p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center shadow-lg">
                  <Award className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="font-bold text-white">10+ Years</div>
                  <div className="text-sm text-gray-400">Excellence</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-300 to-white rounded-full flex items-center justify-center shadow-lg">
                  <Users className="h-6 w-6 text-black" />
                </div>
                <div>
                  <div className="font-bold text-white">1000+</div>
                  <div className="text-sm text-gray-400">Satisfied Clients</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-300 hover:to-white px-8 py-3 font-semibold shadow-2xl transition-all duration-300">
                Discover Our Legacy
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Car,
                title: "Premium Fleet",
                description: "Luxury vehicles from economy to high-end sedans — all meticulously maintained.",
                gradient: "from-white to-gray-300",
                delay: 0.3,
              },
              {
                icon: Users,
                title: "Expert Chauffeurs",
                description: "Professional, trained, and locally experienced drivers for every journey.",
                gradient: "from-gray-300 to-white",
                delay: 0.5,
              },
              {
                icon: MapPin,
                title: "Local Expertise",
                description: "Deep knowledge of Patna and surrounding areas for optimal routes and experiences.",
                gradient: "from-white to-gray-400",
                delay: 0.7,
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: item.delay, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <Card className="bg-gray-800/30 backdrop-blur-xl border border-gray-700 hover:border-gray-500 transition-all duration-500 rounded-2xl overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}
                          className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center shadow-lg`}
                        >
                          <IconComponent className="h-6 w-6 text-black" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
