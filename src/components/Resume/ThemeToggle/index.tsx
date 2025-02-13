"use client"; 

import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get window dimensions
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Check if mouse is in upper right quadrant
      const isInUpperRight = 
        e.clientX > windowWidth / 2 && 
        e.clientY < windowHeight / 2;

      setShowSettings(isInUpperRight);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // If menu is open, keep showing it regardless of mouse position
  const shouldShow = showSettings || isOpen;

  return (
    <div className={`fixed top-4 right-4 transition-opacity duration-300 ${shouldShow ? 'opacity-100' : 'opacity-0'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
      >
        <Settings className="w-5 h-5 text-gray-600" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4">
          <h4 className="text-sm font-medium mb-2">Select Theme</h4>
          {['modern', 'classic', 'minimal'].map((themeName) => (
            <button
              key={themeName}
              onClick={() => setTheme(themeName as any)}
              className="block w-full text-left px-4 py-1 text-sm hover:bg-gray-100 rounded"
            >
              {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;