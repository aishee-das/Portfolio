"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
    return (
      <motion.div
        className="my-24 h-1 w-72 mx-auto relative" 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
      >
        <div className="w-full h-full bg-gray-100 dark:bg-opacity-60"></div>
        <div
          className="w-6 h-6 bg-gray-100 dark:bg-opacity-20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
        <div
          className="w-2 h-2 bg-gray-400 dark:bg-opacity-50 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        ></div>
      </motion.div>
    );
  }
  
  