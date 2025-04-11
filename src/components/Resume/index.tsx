"use client";

import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Testimonial from './Testimonial';
import ThemeToggle from './ThemeToggle';
import ThemeTransition from './ThemeTransition';
import { useTheme } from './context/ThemeContext';

const Resume = () => {
  const { theme, colors, fonts } = useTheme();
  
  // Get container styles based on theme
  const getContainerStyles = () => {
    const baseClasses = "max-w-4xl mx-auto p-8";
    
    switch(theme) {
      case 'memphis':
        return `${baseClasses} rounded-lg bg-purple-800 relative shadow-xl`;
      case 'neubrutalism':
        return `${baseClasses} border-black border-[3px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white`;
      case 'synthwave':
        return `${baseClasses} rounded-lg bg-gray-950 bg-opacity-60 text-pink-100 shadow-[0_0_15px_rgba(236,72,153,0.5)]`;
      case 'glassmorphism':
        return `${baseClasses} rounded-2xl bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-30 shadow-lg shadow-sky-500/20 text-white`;
      default:
        return `${baseClasses} bg-white rounded-lg shadow-md`;
    }
  };
  
  // Get background styles based on theme
  const getBackgroundStyles = () => {
    // Create a base style that ensures full screen coverage with no gaps
    const baseClasses = "min-h-screen w-full";
    
    switch(theme) {
      case 'memphis':
        return `${baseClasses} bg-gradient-to-br from-purple-800 to-pink-700 bg-[url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='25' cy='25' r='8'/%3E%3Ccircle cx='75' cy='75' r='8'/%3E%3Ccircle cx='75' cy='25' r='8'/%3E%3Ccircle cx='25' cy='75' r='8'/%3E%3C/g%3E%3C/svg%3E")]`;
      case 'neubrutalism':
        return `${baseClasses} bg-yellow-300`;
      case 'synthwave':
        return `${baseClasses} bg-gradient-to-b from-purple-950 to-indigo-950 bg-[url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23e879f9' fill-opacity='0.18' fill-rule='evenodd'/%3E%3C/svg%3E")]`;
      case 'glassmorphism':
        return `${baseClasses} bg-gradient-to-br from-sky-400 to-indigo-500`;
      default:
        return `${baseClasses} bg-gray-50`;
    }
  };

  return (
    <ThemeTransition>
      <div className={`${getBackgroundStyles()} ${fonts.body} py-16`}>
        <div className="container mx-auto">
          <div className={`${getContainerStyles()} my-8`}>
            <ThemeToggle />
            <Header />
            <Summary />
            <Skills />
            <Experience />
            <Education />
            <Testimonial />
          </div>
        </div>
      </div>
    </ThemeTransition>
  );
};

export default Resume;