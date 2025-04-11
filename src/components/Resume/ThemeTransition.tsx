"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './context/ThemeContext';

const ThemeTransition = ({ children }: { children: React.ReactNode }) => {
  const { theme, colors } = useTheme();
  
  // Theme-specific styles
  // We're not using these styles anymore as they're handled in the Resume component directly
  const themeStyles = {};
  
  // Apply theme-specific styles if available
  const currentThemeStyles = themeStyles[theme as keyof typeof themeStyles];
  
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