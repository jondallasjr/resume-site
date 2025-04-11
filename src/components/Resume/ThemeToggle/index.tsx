"use client"; 

import React, { useState, useEffect } from 'react';
import { KeyboardMusic, TableColumnsSplit, Shapes, BriefcaseBusiness, SquareDashed } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import type { ThemeType } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  // Ref for timeout
  const closeTimeoutRef = React.useRef<number | null>(null);
  
  useEffect(() => {
    // Clean up timeout on unmount
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);
  
  // Handle mouse leave for auto-closing
  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after 500ms
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }
    
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    }, 500); // 500ms delay
  };
  
  // Handle mouse enter to cancel closing
  const handleMouseEnter = () => {
    // Cancel timeout if mouse enters dropdown or button
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Always show the button - this is now the default behavior
  
  // Get theme icon based on current theme
  const getThemeIcon = () => {
    switch(theme) {
      case 'memphis':
        return <Shapes className="w-5 h-5 text-pink-500" />;
      case 'neubrutalism':
        return <TableColumnsSplit className="w-5 h-5 text-black" />;
      case 'synthwave':
        return <KeyboardMusic className="w-5 h-5 text-pink-400" />;
      case 'glassmorphism':
        return <SquareDashed className="w-5 h-5 text-white" />;
      default:
        return <BriefcaseBusiness className="w-5 h-5 text-gray-600" />;
    }
  };
  
  // Get button styles based on theme
  const getButtonStyles = () => {
    switch(theme) {
      case 'memphis':
        return "flex items-center gap-1 px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-300 to-pink-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:rotate-3 hover:scale-110 border-2 border-purple-600";
      case 'neubrutalism':
        return "flex items-center gap-1 px-3 py-2 bg-yellow-300 border-black border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] transition-all duration-200";
      case 'synthwave':
        return "flex items-center gap-1 px-3 py-2 rounded-md bg-purple-800 shadow-[0_0_10px_rgba(236,72,153,0.7)] hover:shadow-[0_0_20px_rgba(236,72,153,1)] transition-all duration-300 hover:scale-110 border border-cyan-400";
      case 'glassmorphism':
        return "flex items-center gap-1 px-3 py-2 rounded-md bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-30 shadow-md hover:bg-opacity-30 hover:shadow-lg transition-all duration-300 hover:scale-110";
      default:
        return "flex items-center gap-1 px-3 py-2 rounded-md bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105";
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
      case 'memphis':
        return `block w-full text-left px-4 py-2 text-sm rounded mb-1 transition-all ${
          isActive ? 'bg-purple-700 text-yellow-300 font-bold' : 'text-purple-900 hover:bg-purple-100'
        }`;
      case 'neubrutalism':
        return `block w-full text-left px-4 py-2 text-sm mb-1 transition-all ${
          isActive ? 'bg-yellow-300 text-black font-bold border-black border' : 'text-black hover:bg-yellow-100 border border-transparent'
        }`;
      case 'synthwave':
        return `block w-full text-left px-4 py-2 text-sm rounded mb-1 transition-colors ${
          isActive ? 'bg-purple-700 text-cyan-300 border border-cyan-400' : 'text-pink-100 hover:bg-purple-800'
        }`;
      case 'glassmorphism':
        return `block w-full text-left px-4 py-2 text-sm rounded mb-1 backdrop-blur-sm transition-all ${
          isActive ? 'bg-white bg-opacity-20 text-white border border-white border-opacity-30' : 'text-gray-200 hover:bg-white hover:bg-opacity-10'
        }`;
      default:
        return `block w-full text-left px-4 py-2 text-sm rounded mb-1 transition-colors ${
          isActive ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-100'
        }`;
    }
  };

  return (
    <div 
      className="fixed top-4 right-4 z-50 print:hidden" 
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <button 
        id="theme-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        className={getButtonStyles()}
        aria-label="Toggle theme"
      >
        {getThemeIcon()}
        <span className="text-xs font-medium">
          {theme === 'memphis' && "Memphis"}
          {theme === 'neubrutalism' && "Brutal"}
          {theme === 'synthwave' && "Synthwave"}
          {theme === 'glassmorphism' && "Glass"}
          {theme === 'modern' && "Modern"}
        </span>
      </button>
      
      {isOpen && (
        <div 
          id="theme-dropdown" 
          className={getDropdownStyles()}
        >
          <h4 className={getHeaderStyles()}>Select Theme</h4>
          {[
            { name: 'modern', icon: <BriefcaseBusiness className="w-4 h-4" />, label: 'Modern' },
            { name: 'memphis', icon: <Shapes className="w-4 h-4" />, label: 'Memphis' },
            { name: 'neubrutalism', icon: <TableColumnsSplit className="w-4 h-4" />, label: 'Neubrutalism' },
            { name: 'synthwave', icon: <KeyboardMusic className="w-4 h-4" />, label: 'Synthwave' },
            { name: 'glassmorphism', icon: <SquareDashed className="w-4 h-4" />, label: 'Glass' }
          ].map((themeOption) => (
            <button
              key={themeOption.name}
              onClick={() => {
                setTheme(themeOption.name as ThemeType);
                // Close dropdown after selection with slight delay
                setTimeout(() => setIsOpen(false), 200);
              }}
              className={getButtonTextStyles(themeOption.name)}
            >
              <div className="flex items-center gap-2">
                {themeOption.icon}
                <span>{themeOption.label}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;