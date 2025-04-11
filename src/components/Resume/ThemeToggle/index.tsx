"use client"; 

import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import type { ThemeType } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
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
  
  // Get button styles based on theme
  const getButtonStyles = () => {
    switch(theme) {
      case 'memphis':
        return "p-2 rounded-full bg-yellow-300 shadow-lg hover:shadow-xl transition-shadow";
      case 'neubrutalism':
        return "p-2 bg-white border-black border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all";
      case 'synthwave':
        return "p-2 rounded-full bg-purple-800 shadow-[0_0_10px_rgba(236,72,153,0.7)] hover:shadow-[0_0_15px_rgba(236,72,153,0.9)] transition-shadow border border-cyan-400";
      case 'glassmorphism':
        return "p-2 rounded-full bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-20 shadow-md hover:shadow-lg transition-shadow";
      default:
        return "p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow";
    }
  };
  
  // Get icon color based on theme
  const getIconColor = () => {
    switch(theme) {
      case 'memphis':
        return "w-5 h-5 text-pink-500";
      case 'neubrutalism':
        return "w-5 h-5 text-black";
      case 'synthwave':
        return "w-5 h-5 text-pink-400";
      case 'glassmorphism':
        return "w-5 h-5 text-white";
      default:
        return "w-5 h-5 text-gray-600";
    }
  };
  
  // Get dropdown styles based on theme
  const getDropdownStyles = () => {
    switch(theme) {
      case 'memphis':
        return "absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg p-4 max-h-[80vh] overflow-y-auto border-l-4 border-pink-500 z-50";
      case 'neubrutalism':
        return "absolute right-0 mt-2 w-56 bg-white border-black border-[3px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 max-h-[80vh] overflow-y-auto z-50";
      case 'synthwave':
        return "absolute right-0 mt-2 w-56 bg-purple-900 rounded-lg shadow-lg border border-cyan-400 p-4 max-h-[80vh] overflow-y-auto z-50";
      case 'glassmorphism':
        return "absolute right-0 mt-2 w-56 bg-black bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg p-4 max-h-[80vh] overflow-y-auto border border-white border-opacity-20 z-50";
      default:
        return "absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg p-4 max-h-[80vh] overflow-y-auto z-50";
    }
  };
  
  // Get header text color based on theme
  const getHeaderStyles = () => {
    switch(theme) {
      case 'synthwave':
        return "text-sm font-medium mb-2 text-cyan-400";
      case 'glassmorphism':
        return "text-sm font-medium mb-2 text-white";
      default:
        return "text-sm font-medium mb-2 text-gray-900";
    }
  };
  
  // Get button text color based on theme
  const getButtonTextStyles = (themeName: string) => {
    const isActive = theme === themeName;
    
    switch(theme) {
      case 'synthwave':
        return `block w-full text-left px-4 py-2 text-sm rounded mb-1 ${
          isActive ? 'bg-purple-700 text-cyan-300' : 'text-pink-100 hover:bg-purple-800'
        }`;
      case 'glassmorphism':
        return `block w-full text-left px-4 py-2 text-sm rounded mb-1 ${
          isActive ? 'bg-white bg-opacity-20 text-white' : 'text-gray-200 hover:bg-white hover:bg-opacity-10'
        }`;
      default:
        return `block w-full text-left px-4 py-2 text-sm rounded mb-1 ${
          isActive ? 'bg-gray-100 font-medium' : 'hover:bg-gray-100'
        }`;
    }
  };

  return (
    <div className={`fixed top-4 right-4 transition-opacity duration-300 ${shouldShow ? 'opacity-100' : 'opacity-0'} z-50`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={getButtonStyles()}
      >
        <Settings className={getIconColor()} />
      </button>
      
      {isOpen && (
        <div className={getDropdownStyles()}>
          <h4 className={getHeaderStyles()}>Select Theme</h4>
          {[
            'modern', 
            'memphis',
            'neubrutalism',
            'synthwave',
            'glassmorphism'
          ].map((themeName) => (
            <button
              key={themeName}
              onClick={() => setTheme(themeName as ThemeType)}
              className={getButtonTextStyles(themeName)}
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