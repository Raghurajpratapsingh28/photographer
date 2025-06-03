"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function Loading() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <Camera className="h-16 w-16 text-primary mb-4" />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          className="h-1 bg-primary rounded-full"
        />
        <p className="mt-4 text-muted-foreground">Loading beautiful moments...</p>
      </motion.div>
    </div>
  );
}