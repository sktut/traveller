"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Fuel, Settings, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"

const cars = [
  {
    id: 1,
    name: "Toyota Innova Crysta",
    category: "Premium SUV",
    image: "/placeholder.svg?height=300&width=500",
    passengers: "7-8",
    fuel: "Diesel",
    transmission: "Auto",
    rating: "4.9",
    features: ["AC", "GPS", "Music System", "Comfortable Seats"],
  },
  {
    id: 2,
    name: "Mercedes-Benz",
    category: "Luxury Sedan",
    image: "/placeholder.svg?height=300&width=500",
    passengers: "4-5",
    fuel: "Petrol",
    transmission: "Auto",
    rating: "5.0",
    features: ["Premium Interior", "Climate Control", "Leather Seats", "Sunroof"],
  },
  {
    id: 3,
    name: "Audi",
    category: "Luxury Sedan",
    image: "/placeholder.svg?height=300&width=500",
    passengers: "4-5",
    fuel: "Petrol",
    transmission: "Auto",
    rating: "5.0",
    features: ["Sport Mode", "Premium Audio", "LED Lights", "Luxury Interior"],
  },
  {
    id: 4,
    name: "BMW",
    category: "Luxury Sedan",
    image: "/placeholder.svg?height=300&width=500",
    passengers: "4-5",
    fuel: "Petrol",
    transmission: "Auto",
    rating: "5.0",
    features: ["Performance", "Premium Sound", "Comfort Seats", "Advanced Tech"],
  },
  {
    id: 5,
    name: "Honda City",
    category: "Premium Sedan",
    image: "/placeholder.svg?height=300&width=500",
    passengers: "4-5",
    fuel: "Petrol",
    transmission: "Auto",
    rating: "4.8",
    features: ["Fuel Efficient", "Spacious", "Modern Tech", "Comfortable"],
  },
  {
    id: 6,
    name: "Maruti Swift",
    category: "Economy Hatchback",
    image: "/placeholder.svg?height=300&width=500",
    passengers: "4-5",
    fuel: "Petrol",
    transmission: "Manual",
    rating: "4.7",
    features: ["Compact", "Fuel Efficient", "Easy Drive", "City Perfect"],
  },
]

export default function CarFleet() {
  const handleBookCar = (carName: string) => {
    const subject = `Premium Car Booking Request - ${carName}`
    const body = `
Dear Travellers Choice Patna Team,

I would like to book the ${carName} for my upcoming trip.

Please provide me with:
- Availability details
- Complete pricing information
- Terms and conditions
- Pickup arrangements

Thank you!
    `
    window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="cars" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl"
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
            <Zap className="h-8 w-8 text-white mr-3" />
            <span className="text-gray-300 text-lg">Premium Collection</span>
          </motion.div>

          <h2 className="text-5xl font-bold mb-6">
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Our Luxury Fleet
            </motion.span>
          </h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Choose from our meticulously maintained collection of premium vehicles. Each car is equipped with modern
            amenities and driven by professional chauffeurs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-gray-500 transition-all duration-500 overflow-hidden rounded-2xl">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={car.image}
                    alt={car.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 left-4 bg-gradient-to-r from-white to-gray-300 text-black px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {car.category}
                  </motion.div>

                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-white">{car.rating}</span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl font-bold text-white mb-4"
                  >
                    {car.name}
                  </motion.h3>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-gray-300">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center space-x-1"
                    >
                      <Users className="h-4 w-4 text-white" />
                      <span>{car.passengers}</span>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.6 }}
                      className="flex items-center space-x-1"
                    >
                      <Fuel className="h-4 w-4 text-white" />
                      <span>{car.fuel}</span>
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.7 }}
                      className="flex items-center space-x-1"
                    >
                      <Settings className="h-4 w-4 text-white" />
                      <span className="text-xs">{car.transmission}</span>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mb-6"
                  >
                    <div className="flex flex-wrap gap-2">
                      {car.features.map((feature, featureIndex) => (
                        <motion.span
                          key={featureIndex}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.9 + featureIndex * 0.1 }}
                          className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => handleBookCar(car.name)}
                      className="w-full bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-300 hover:to-white font-semibold transition-all duration-300"
                    >
                      Book Now
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
