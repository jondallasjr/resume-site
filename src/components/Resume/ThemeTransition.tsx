"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext';

const ThemeTransition = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      key={theme}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default ThemeTransition;