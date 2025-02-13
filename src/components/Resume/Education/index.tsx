import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface OtherExperienceItem {
  title: string;
  subtitle?: string;
  description?: string;
  url?: string;
}

interface EducationItem {
  degree: string;
  school: string;
  url?: string;
  major: string;
}

const Education = () => {
  const { colors } = useTheme();
  
  const education: EducationItem = {
    degree: "Bachelor of Science",
    school: "Towson University",
    major: "Theatre & Philosophy"
  };
  
  const otherExperience: OtherExperienceItem[] = [
    {
      title: "TEDx Speaker",
      description: '"Why We Play Games" | TEDx Ba Dinh, Hanoi',
      url: "https://www.youtube.com/watch?v=nFapT0I8ujs"
    },
    {
      title: "Coda.io Expert",
      description: "20+ enterprise systems developed. 15K+ monthly API invocations across 5 custom packs.",
      url: "https://coda.io/@jon-dallas"
    }
  ];

  const renderLink = (title: string, url?: string) => {
    if (!url) return title;
    
    return (
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600"
      >
        {title}
      </a>
    );
  };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${colors.text}`}>
            EDUCATION
          </h3>
          <div className="text-gray-600">
            <div className={`font-medium ${colors.accent}`}>
              {education.degree}
            </div>
            <div>
              {renderLink(education.school, education.url)}
            </div>
            <div className="text-sm mt-2">{education.major}</div>
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
                  {renderLink(exp.title, exp.url)}
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