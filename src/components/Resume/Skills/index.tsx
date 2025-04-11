import React from 'react';
import { Cpu, Code2, Rocket, Presentation, TrendingUp, GitFork } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import SkillCard from './SkillCard';
import { useTheme } from '../context/ThemeContext';

const skillsData = [
  {
    title: "AI Engineering",
    skills: "Custom AI App Dev, Agents, Vision, RAG, Advanced Prompt Engineering and Chaining",
    Icon: Cpu
  },
  {
    title: "Full-Stack Development",
    skills: "React, Node.js, Python, Chrome Extensions, API Integration, Data Pipeline Design",
    Icon: Code2
  },
  {
    title: "Rapid Prototyping",
    skills: "Low-Code Development (Coda.io Expert), MVP Design, API Integration.",
    Icon: Rocket
  },
  {
    title: "Workshop Design & Facilitation",
    skills: "250+ Workshops, 8,000+ Attendees across 9 Countries",
    Icon: Presentation
  },
  {
    title: "Measurable ROI",
    skills: "87% Cost Reduction, 80% Time Savings, 22% Traffic Growth, Workflow Streamlining",
    Icon: TrendingUp
  },
  {
    title: "Project Management",
    skills: "12 International Teams, 160+ Freelancers, Agile, Cross-Cultural Communication",
    Icon: GitFork
  }
];

const Skills = () => {
  const { colors, theme, fonts } = useTheme();
  
  // Get card styles based on theme
  const getCardStyles = () => {
    switch(theme) {
      case 'crownroyal':
        return "mb-6 bg-purple-800 rounded-lg overflow-hidden border-t-4 border-yellow-300";
      case 'brutal':
        return "mb-6 bg-white border-black border-[3px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]";
      case 'synthwave':
        return "mb-6 bg-gray-900 bg-opacity-70 border border-purple-400 rounded-lg overflow-hidden shadow-[0_0_15px_rgba(139,92,246,0.5)]";
      case 'glass':
        return "mb-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl border border-white border-opacity-20";
      default:
        return "mb-6";
    }
  };
  
  // Get header styles based on theme
  const getHeaderStyles = () => {
    switch(theme) {
      case 'crownroyal':
        return `text-xl mb-6 text-yellow-300 px-2 py-1 bg-purple-900 border-2 border-yellow-300 inline-block ${fonts.heading}`;
      case 'brutal':
        return `text-xl mb-6 ${colors.text} px-2 py-1 bg-red-400 inline-block ${fonts.heading}`;
      case 'synthwave':
        return `text-xl mb-6 text-cyan-300 px-2 py-1 border-b-2 border-cyan-400 inline-block ${fonts.heading}`;
      case 'glass':
        return `text-xl mb-6 ${colors.text} px-2 py-1 border-b border-white border-opacity-30 inline-block ${fonts.heading}`;
      default:
        return `text-xl mb-4 ${colors.text} ${fonts.heading}`;
    }
  };
  
  return (
    <Card className={`${getCardStyles()} print:bg-transparent print:border-none print:shadow-none`}>
      <CardContent className="pt-6 space-y-6 print:p-0 print:space-y-2">
        <h3 className={`${getHeaderStyles()} print:text-black print:border-none print:p-0 print:mb-2 print:text-base print:font-bold`}>
          SKILLS & EXPERTISE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:gap-2 print:grid-cols-3">
          {skillsData.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;