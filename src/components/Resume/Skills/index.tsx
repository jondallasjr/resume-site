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
  const { colors } = useTheme();
  
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <h3 className={`text-xl font-semibold mb-4 text-${colors.text}`}>
          SKILLS & EXPERTISE
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Skills;