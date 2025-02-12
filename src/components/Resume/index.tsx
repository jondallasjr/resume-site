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
  const { colors } = useTheme();
  
  return (
    <ThemeTransition>
      <div className={`max-w-4xl mx-auto p-8 bg-${colors.background} transition-colors duration-300`}>
        <ThemeToggle />
        <Header />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Testimonial />
      </div>
    </ThemeTransition>
  );
};

export default Resume;