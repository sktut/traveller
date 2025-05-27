"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { X, User, Lock, Mail } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      isLogin ? "Login functionality would be implemented here!" : "Signup functionality would be implemented here!",
    )
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, type: "spring" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="w-full max-w-md bg-gray-900/95 backdrop-blur-xl border border-gray-700 shadow-2xl rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-white to-gray-300 text-black p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <motion.h3
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="font-bold text-xl"
                    >
                      {isLogin ? "Welcome Back" : "Join Our Premium Service"}
                    </motion.h3>
                    <motion.p
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm opacity-80"
                    >
                      {isLogin ? "Sign in to your account" : "Create your premium account"}
                    </motion.p>
                  </div>
                  <motion.div whileHover={{ rotate: 90, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Button variant="ghost" size="sm" onClick={onClose} className="text-black hover:bg-black/10">
                      <X className="h-5 w-5" />
                    </Button>
                  </motion.div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {!isLogin && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="relative group"
                  >
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </motion.div>

                  {!isLogin && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="relative group"
                    >
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative group"
                  >
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400 group-focus-within:text-white transition-colors" />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </motion.div>

                  {isLogin && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-right"
                    >
                      <motion.a
                        href="#"
                        whileHover={{ x: 5 }}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        Forgot Password?
                      </motion.a>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-white to-gray-300 text-black hover:from-gray-300 hover:to-white py-3 text-lg font-semibold transition-all duration-300"
                    >
                      {isLogin ? "Sign In" : "Create Account"}
                    </Button>
                  </motion.div>
                </form>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-center"
                >
                  <p className="text-gray-400 text-sm">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <motion.button
                      onClick={() => setIsLogin(!isLogin)}
                      whileHover={{ scale: 1.05 }}
                      className="ml-2 text-white hover:text-gray-300 font-semibold transition-colors"
                    >
                      {isLogin ? "Sign Up" : "Sign In"}
                    </motion.button>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-4 text-center"
                >
                  <p className="text-xs text-gray-500">
                    By continuing, you agree to our{" "}
                    <motion.a href="#" whileHover={{ scale: 1.05 }} className="underline hover:text-gray-400">
                      Terms of Service
                    </motion.a>{" "}
                    and{" "}
                    <motion.a href="#" whileHover={{ scale: 1.05 }} className="underline hover:text-gray-400">
                      Privacy Policy
                    </motion.a>
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
