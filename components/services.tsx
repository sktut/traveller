"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Clock, Shield, Users, MapPin, Headphones, Star, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Round-the-clock availability for all your travel needs. Premium service that never sleeps.",
    gradient: "from-white to-gray-300",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive insurance coverage for complete peace of mind during your journey.",
    gradient: "from-gray-300 to-white",
  },
  {
    icon: Users,
    title: "Professional Chauffeurs",
    description: "Experienced, courteous drivers who provide exceptional service and local expertise.",
    gradient: "from-white to-gray-400",
  },
  {
    icon: MapPin,
    title: "GPS Tracking",
    description: "Real-time tracking and navigation for safe, efficient, and monitored journeys.",
    gradient: "from-gray-400 to-white",
  },
  {
    icon: Headphones,
    title: "Premium Support",
    description: "Dedicated customer support team available to assist you throughout your experience.",
    gradient: "from-white to-gray-300",
  },
  {
    icon: Star,
    title: "Luxury Standards",
    description: "Meticulously maintained vehicles with regular servicing and premium quality checks.",
    gradient: "from-gray-300 to-gray-400",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
    >
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-r from-gray-500/5 to-transparent rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center mb-4"
          >
            <Sparkles className="h-8 w-8 text-white mr-3" />
            <span className="text-gray-300 text-lg">Premium Services</span>
          </motion.div>

          <h2 className="text-5xl font-bold mb-6">
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Why Choose Excellence?
            </motion.span>
          </h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            We deliver unparalleled car rental experiences with a focus on luxury, safety, and reliability. Discover the
            difference with Travellers Choice Patna.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-gray-800/30 backdrop-blur-xl border border-gray-700 hover:border-gray-500 transition-all duration-500 h-full rounded-2xl overflow-hidden">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-2xl`}
                    >
                      <IconComponent className="h-8 w-8 text-black" />
                    </motion.div>

                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-xl font-bold text-white mb-4"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="text-gray-300 leading-relaxed flex-grow"
                    >
                      {service.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "1000+", label: "Happy Customers" },
            { number: "50+", label: "Premium Cars" },
            { number: "24/7", label: "Service Available" },
            { number: "5★", label: "Customer Rating" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
              className="group"
            >
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
