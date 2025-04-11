"use client";

import React, { createContext, useContext, useState } from 'react';

export type ThemeType = 'modern' | 'crownroyal' | 'brutal' | 'synthwave' | 'glass';

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
  fonts: {
    heading: string;
    body: string;
  };
}

const themes = {
    modern: {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600',
      secondary: 'text-blue-600',
      text: 'text-gray-800',
      background: 'bg-white',
      accent: 'text-blue-600',
      border: 'border-blue-600',
      fonts: {
        heading: 'font-sans var(--font-geist-sans)',
        body: 'font-sans var(--font-geist-sans)',
      }
    },
    crownroyal: {
      primary: 'bg-gradient-to-r from-yellow-400 to-pink-500',
      secondary: 'text-yellow-300',
      text: 'text-white',
      background: 'bg-purple-900',
      accent: 'text-yellow-300',
      border: 'border-yellow-400',
      fonts: {
        heading: 'font-sans var(--font-crownroyal)',
        body: 'font-sans var(--font-glass)',
      }
    },
    brutal: {
      primary: 'bg-gradient-to-r from-black to-neutral-800',
      secondary: 'text-black',
      text: 'text-black',
      background: 'bg-yellow-300',
      accent: 'text-red-500',
      border: 'border-black border-2',
      fonts: {
        heading: 'font-sans var(--font-brutal)',
        body: 'font-sans',
      }
    },
    synthwave: {
      primary: 'bg-gradient-to-r from-purple-700 via-fuchsia-500 to-pink-500',
      secondary: 'text-cyan-400',
      text: 'text-pink-100',
      background: 'bg-purple-950',
      accent: 'text-pink-400',
      border: 'border-cyan-400',
      fonts: {
        heading: 'font-mono var(--font-synthwave)',
        body: 'font-mono var(--font-synthwave)',
      }
    },
    glass: {
      primary: 'bg-gradient-to-r from-cyan-400 to-sky-300',
      secondary: 'text-white',
      text: 'text-white',
      background: 'bg-white bg-opacity-30',
      accent: 'text-white',
      border: 'border-white border-opacity-20',
      fonts: {
        heading: 'font-sans var(--font-glass)',
        body: 'font-sans var(--font-glass)',
      }
    }
  };

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('modern');
  
  // Set the background color of the document body directly
  React.useEffect(() => {
    // Apply background to document element to ensure full coverage
    if (typeof document !== 'undefined') {
      const doc = document.documentElement;
      
      // First remove any existing theme classes
      doc.classList.remove(
        'theme-modern',
        'theme-crownroyal',
        'theme-brutal',
        'theme-synthwave',
        'theme-glass'
      );
      
      // Add the new theme class
      doc.classList.add(`theme-${theme}`);
      
      // Set direct background style for crownroyal theme
      if (theme === 'crownroyal') {
        doc.style.background = 'linear-gradient(to bottom right, #7e22ce, #be185d)';
        doc.style.backgroundAttachment = 'fixed';
      } else if (theme === 'synthwave') {
        doc.style.background = 'linear-gradient(to bottom, #2E1065, #4C1D95)';
        doc.style.backgroundAttachment = 'fixed';
      } else if (theme === 'glass') {
        // Enhanced glass background with subtle pattern
        doc.style.background = 'linear-gradient(120deg, #0ea5e9, #4f46e5, #818cf8)';
        doc.style.backgroundSize = '200% 200%';
        doc.style.animation = 'gradientAnimation 15s ease infinite';
        doc.style.backgroundAttachment = 'fixed';
        
        // Add animation keyframes if they don't exist
        if (!document.getElementById('gradient-animation-style')) {
          const styleEl = document.createElement('style');
          styleEl.id = 'gradient-animation-style';
          styleEl.innerHTML = `
            @keyframes gradientAnimation {
              0% { background-position: 0% 50% }
              50% { background-position: 100% 50% }
              100% { background-position: 0% 50% }
            }
          `;
          document.head.appendChild(styleEl);
        }
      } else if (theme === 'brutal') {
        doc.style.background = '#facc15'; // Yellow-300
        doc.style.backgroundAttachment = 'fixed';
      } else {
        doc.style.background = '#f9fafb'; // Gray-50
        doc.style.backgroundAttachment = 'fixed';
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        setTheme, 
        colors: {
          primary: themes[theme].primary,
          secondary: themes[theme].secondary,
          text: themes[theme].text,
          background: themes[theme].background,
          accent: themes[theme].accent,
        },
        fonts: themes[theme].fonts
      }}
    >
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