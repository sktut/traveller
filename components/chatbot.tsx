"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageCircle, X, Phone, Mail, MessageSquare, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const chatOptions = [
    {
      id: "contact",
      title: "Contact Us",
      icon: Phone,
      description: "Get in touch with our team",
      gradient: "from-white to-gray-300",
      action: () => {
        window.location.href = "tel:+919876543210"
      },
    },
    {
      id: "query",
      title: "General Query",
      icon: MessageSquare,
      description: "Ask us anything about our services",
      gradient: "from-gray-300 to-white",
      action: () => {
        const subject = "General Query"
        const body = "Hi, I have a question about your luxury car rental services. Please get back to me."
        window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      },
    },
    {
      id: "feedback",
      title: "Feedback",
      icon: Star,
      description: "Share your experience with us",
      gradient: "from-white to-gray-400",
      action: () => {
        const subject = "Customer Feedback"
        const body = "I would like to share my feedback about your premium services:"
        window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      },
    },
    {
      id: "booking",
      title: "Booking Support",
      icon: Mail,
      description: "Need help with your booking?",
      gradient: "from-gray-400 to-white",
      action: () => {
        const subject = "Booking Support Request"
        const body = "I need assistance with my luxury car rental booking. Please help me with:"
        window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      },
    },
  ]

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 40px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Button
                onClick={() => setIsOpen(true)}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-300 hover:to-white shadow-2xl"
              >
                <MessageCircle className="h-8 w-8" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 100 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 100 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="fixed bottom-6 right-6 w-80 md:w-96 z-50"
          >
            <Card className="bg-gray-900/95 backdrop-blur-xl border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-white to-gray-300 text-black p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-lg">Travellers Choice</h3>
                    <p className="text-sm opacity-80">How can we assist you?</p>
                  </div>
                  <motion.div whileHover={{ rotate: 90 }} whileTap={{ scale: 0.9 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsOpen(false)
                        setSelectedOption(null)
                      }}
                      className="text-black hover:bg-black/10"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
              </CardHeader>

              <CardContent className="p-0 max-h-96 overflow-y-auto">
                {!selectedOption ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="p-4"
                  >
                    <p className="text-white mb-4 text-center font-semibold">
                      Welcome to premium support! Choose an option:
                    </p>
                    <div className="space-y-3">
                      {chatOptions.map((option, index) => {
                        const IconComponent = option.icon
                        return (
                          <motion.div
                            key={option.id}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              variant="outline"
                              className="w-full justify-start p-4 h-auto border-gray-600 hover:bg-gray-800 text-white font-medium transition-all duration-300"
                              onClick={() => setSelectedOption(option.id)}
                            >
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-10 h-10 bg-gradient-to-r ${option.gradient} rounded-full flex items-center justify-center`}
                                >
                                  <IconComponent className="h-5 w-5 text-black" />
                                </div>
                                <div className="text-left">
                                  <div className="font-semibold">{option.title}</div>
                                  <div className="text-sm text-gray-400">{option.description}</div>
                                </div>
                              </div>
                            </Button>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4"
                  >
                    <motion.div whileHover={{ x: -5 }}>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedOption(null)}
                        className="mb-4 text-gray-400 hover:text-white hover:bg-gray-800"
                      >
                        ← Back to options
                      </Button>
                    </motion.div>

                    {selectedOption && (
                      <div className="space-y-4">
                        <div className="text-center">
                          <motion.h4
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="font-bold text-lg text-white mb-2"
                          >
                            {chatOptions.find((opt) => opt.id === selectedOption)?.title}
                          </motion.h4>
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-300 mb-4"
                          >
                            {selectedOption === "contact" &&
                              "Call us directly or send an email for immediate premium assistance."}
                            {selectedOption === "query" &&
                              "Send us your questions about our luxury services and we'll respond promptly."}
                            {selectedOption === "feedback" &&
                              "We value your feedback! Share your premium experience with us."}
                            {selectedOption === "booking" &&
                              "Need help with your luxury booking? We're here to assist you."}
                          </motion.p>
                        </div>

                        <div className="space-y-3">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              onClick={() => chatOptions.find((opt) => opt.id === selectedOption)?.action()}
                              className="w-full bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-300 hover:to-white transition-all duration-300"
                            >
                              {selectedOption === "contact" ? "Call Now" : "Send Email"}
                            </Button>
                          </motion.div>

                          {selectedOption === "contact" && (
                            <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Button
                                onClick={() => {
                                  const subject = "Contact Request"
                                  const body =
                                    "Hi, I would like to get in touch with your premium team. Please contact me."
                                  window.location.href = `mailto:info@travellerschoicepatna.com?subject=${encodeURIComponent(
                                    subject,
                                  )}&body=${encodeURIComponent(body)}`
                                }}
                                variant="outline"
                                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                              >
                                Send Email Instead
                              </Button>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
