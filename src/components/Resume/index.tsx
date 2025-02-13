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

const Resume = () => {
  return (
    <ThemeTransition>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto p-8">
          <ThemeToggle />
          <Header />
          <Summary />
          <Skills />
          <Experience />
          <Education />
          <Testimonial />
        </div>
      </div>
    </ThemeTransition>
  );
};

export default Resume;