"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const [bookingData, setBookingData] = useState({
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    passengers: "1",
  })

  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 500], [1, 1.2])
  const x = useTransform(scrollY, [0, 500], [0, 100])

  const handleBooking = () => {
    const subject = "Premium Car Rental Booking Request"
    const body = `
Dear Travellers Choice Patna Team,

I would like to book a premium car with the following details:

Pickup Location: ${bookingData.pickupLocation}
Drop Location: ${bookingData.dropLocation}
Pickup Date: ${bookingData.pickupDate}
Pickup Time: ${bookingData.pickupTime}
Return Date: ${bookingData.returnDate}
Return Time: ${bookingData.returnTime}
Number of Passengers: ${bookingData.passengers}

Please confirm the availability and send me the booking details with pricing.

Thank you!
    `

    window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-gray-500/10 to-transparent rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start mb-6"
            >
              <Sparkles className="h-6 w-6 text-white mr-2" />
              <span className="text-gray-300 text-lg">Premium Experience</span>
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                Luxury
              </motion.span>
              <br />
              <span className="text-white">Car Rental</span>
              <br />
              <motion.span
                animate={{
                  backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                in Patna
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Experience the pinnacle of luxury and comfort with our premium fleet. From elegant sedans to powerful
              SUVs, every journey becomes extraordinary.
            </motion.p>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-300 hover:to-white px-8 py-4 text-lg font-semibold shadow-2xl"
                >
                  Explore Fleet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-white hover:text-black px-8 py-4 text-lg"
                >
                  Call: +91 9876543210
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right content - Booking form */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <Card className="bg-black/50 backdrop-blur-xl border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <CardContent className="p-8 relative z-10">
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-2xl font-bold text-white mb-6 text-center"
                >
                  Book Your Premium Ride
                </motion.h3>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="relative group"
                    >
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
                      <input
                        type="text"
                        placeholder="Pickup Location"
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        value={bookingData.pickupLocation}
                        onChange={(e) => setBookingData({ ...bookingData, pickupLocation: e.target.value })}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="relative group"
                    >
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
                      <input
                        type="text"
                        placeholder="Drop Location"
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        value={bookingData.dropLocation}
                        onChange={(e) => setBookingData({ ...bookingData, dropLocation: e.target.value })}
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="relative group"
                    >
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white transition-all duration-300"
                        value={bookingData.pickupDate}
                        onChange={(e) => setBookingData({ ...bookingData, pickupDate: e.target.value })}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.0 }}
                      className="relative group"
                    >
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
                      <input
                        type="time"
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white transition-all duration-300"
                        value={bookingData.pickupTime}
                        onChange={(e) => setBookingData({ ...bookingData, pickupTime: e.target.value })}
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.1 }}
                      className="relative group"
                    >
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white transition-all duration-300"
                        value={bookingData.returnDate}
                        onChange={(e) => setBookingData({ ...bookingData, returnDate: e.target.value })}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="relative group"
                    >
                      <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
                      <input
                        type="time"
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white transition-all duration-300"
                        value={bookingData.returnTime}
                        onChange={(e) => setBookingData({ ...bookingData, returnTime: e.target.value })}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="relative group"
                  >
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
                    <select
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white transition-all duration-300"
                      value={bookingData.passengers}
                      onChange={(e) => setBookingData({ ...bookingData, passengers: e.target.value })}
                    >
                      <option value="1">1 Passenger</option>
                      <option value="2">2 Passengers</option>
                      <option value="3">3 Passengers</option>
                      <option value="4">4 Passengers</option>
                      <option value="5">5+ Passengers</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleBooking}
                      className="w-full bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-300 hover:to-white py-4 text-lg font-semibold shadow-2xl transition-all duration-300"
                    >
                      Send Booking Request
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Animated car image */}
      <motion.img
        src="/images/car-hero.png"
        alt="Premium Car"
        style={{ scale, x }}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-[600px] absolute right-0 bottom-0 pointer-events-none hidden lg:block"
      />
    </section>
  )
}
