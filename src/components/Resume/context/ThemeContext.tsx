"use client";

import React, { createContext, useContext, useState } from 'react';

type ThemeType = 'modern' | 'classic' | 'minimal';

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    accent: string;
  };
}

const themes = {
    modern: {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600',
      secondary: 'text-blue-600',
      text: 'text-gray-800',
      background: 'bg-white',
      accent: 'text-blue-600',
      border: 'border-blue-600'
    },
    classic: {
      primary: 'bg-gradient-to-r from-gray-800 to-gray-900',
      secondary: 'text-gray-700',
      text: 'text-gray-900',
      background: 'bg-gray-50',
      accent: 'text-gray-800',
      border: 'border-gray-800'
    },
    minimal: {
      primary: 'bg-gradient-to-r from-neutral-800 to-neutral-900',
      secondary: 'text-neutral-700',
      text: 'text-neutral-900',
      background: 'bg-white',
      accent: 'text-neutral-800',
      border: 'border-neutral-800'
    }
  };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('modern');

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};