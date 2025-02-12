import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface OtherExperienceItem {
  title: string;
  subtitle?: string;
  description?: string;
}

const Education = () => {
  const { colors } = useTheme();
  
  const otherExperience: OtherExperienceItem[] = [
    {
      title: "TEDx Speaker",
      description: '"Why We Play Games" | TEDx Ba Dinh, Hanoi'
    },
    {
      title: "Coda.io Expert",
      description: "20+ enterprise systems developed. 15K+ monthly API invocations across 5 custom packs."
    }
  ];

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${colors.text}`}>
            EDUCATION
          </h3>
          <div className="text-gray-600">
            <div className={`font-medium ${colors.accent}`}>
              Bachelor of Science
            </div>
            <div>Towson University</div>
            <div className="text-sm mt-2">Theatre & Philosophy</div>
          </div>
        </div>
        
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${colors.text}`}>
            OTHER
          </h3>
          <ul className="space-y-3 text-gray-600">
            {otherExperience.map((exp, idx) => (
              <li key={idx}>
                <div className={`font-medium ${colors.accent}`}>
                  {exp.title}
                </div>
                {exp.subtitle && <div>{exp.subtitle}</div>}
                {exp.description && <div className="text-sm">{exp.description}</div>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;