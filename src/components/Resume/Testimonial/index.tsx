import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Testimonial = () => {
  const { colors } = useTheme();
  
  return (
    <div className={`bg-gray-50 p-6 rounded-lg border ${colors.accent} border-opacity-10`}>
      <h3 className={`text-xl font-semibold mb-4 ${colors.text}`}>
        FEATURED TESTIMONIAL
      </h3>
      <blockquote className="text-gray-600 italic">
        "Jon does an excellent job of making people feel welcomed, connected, and at ease... 
        His communication skills are concise and follow a logical pattern that is easy to understand."
      </blockquote>
      <div className={`mt-2 font-medium ${colors.text}`}>
        -Haley Purvis, Workshop Attendee
      </div>
    </div>
  );
};

export default Testimonial;