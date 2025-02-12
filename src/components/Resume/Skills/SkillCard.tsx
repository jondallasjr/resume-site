import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface SkillCardProps {
  title: string;
  skills: string;
  Icon: LucideIcon;
}

const SkillCard = ({ title, skills, Icon }: SkillCardProps) => {
    const { colors } = useTheme();
    
    return (
      <div className="flex items-start gap-2">
        <Icon className={`w-5 h-5 mt-1 flex-shrink-0 ${colors.accent}`} />
        <div>
          <h4 className={`font-semibold ${colors.text}`}>{title}</h4>
          <p className="text-gray-600 text-sm">{skills}</p>
        </div>
      </div>
    );
  };

export default SkillCard;