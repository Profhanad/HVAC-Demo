"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingCallButton() {
  return (
    <motion.a
      href="tel:+18002797825"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.4, ease: "backOut" }}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#f97316] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0a192f] hover:scale-110 transition-all duration-300 md:bottom-8 md:right-8"
      aria-label="Call Crystal Heating & Cooling"
    >
      <Phone size={22} />
    </motion.a>
  );
}
