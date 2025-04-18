import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SkillCardProps {
  title: string;
  skills: string;
  Icon: LucideIcon;
}

const SkillCard = ({ title, skills, Icon }: SkillCardProps) => {
    const { colors, theme, fonts } = useTheme();
    
    // Get card styles based on theme
    const getCardStyles = () => {
      switch(theme) {
        case 'crownroyal':
          return "flex items-start gap-2 p-3 bg-purple-700 rounded-lg shadow-md border-l-4 border-yellow-300";
        case 'brutal':
          return "flex items-start gap-2 p-3 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";
        case 'synthwave':
          return "flex items-start gap-2 p-3 bg-purple-900 bg-opacity-60 rounded-lg border border-cyan-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]";
        case 'glass':
          return "flex items-start gap-2 p-3 bg-black bg-opacity-40 backdrop-blur-sm rounded-lg border border-white border-opacity-20";
        default:
          return "flex items-start gap-2";
      }
    };
    
    // Get text styles based on theme
    const getTextStyles = () => {
      switch(theme) {
        case 'crownroyal':
          return "text-white text-sm font-medium";
        case 'synthwave':
          return "text-gray-300 text-sm";
        case 'glass':
          return "text-white text-sm";
        default:
          return "text-gray-600 text-sm";
      }
    };
    
    return (
      <div className={`${getCardStyles()} print:border-none print:shadow-none print:bg-transparent print:p-1 print:py-0.5`}>
        <Icon className={`w-5 h-5 mt-1 flex-shrink-0 ${colors.accent} print:text-black print:w-3 print:h-3`} />
        <div>
          <h4 className={`${colors.text} ${fonts.heading} print:text-black print:font-bold print:text-[9pt] print:mb-0 print:mt-0`}>{title}</h4>
          <p className={`${getTextStyles()} ${fonts.body} print:text-black print:text-[8pt] print:leading-tight`}>{skills}</p>
        </div>
      </div>
    );
  };

export default SkillCard;