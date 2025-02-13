import React from 'react';
import Role, { RoleProps } from './Role';
import { useTheme } from '../context/ThemeContext';

interface RoleWithBreakProps extends RoleProps {
    pageBreakBefore?: boolean;
}

const Experience = () => {
    const { colors } = useTheme();

    const roles: RoleProps[] = [
        {
            title: "Independent AI Consultant & Developer",
            company: "Jon Dallas AI, LLC",
            companyUrl: "https://www.jondallasai.com",
            period: "2023-Present",
            description: "Independent consultancy delivering custom AI solutions and workshops for SMBs across various sectors",
            implementations: [
                {
                    company: "Propertybook",
                    companyUrl: "https://www.propertybook.co.zw",
                    details: [
                        "Designed an end-to-end AI agent for automated SEO/EEAT-optimized content plan, research, generation, and QA",
                        "Built with APIs, web scraping, prompt chains, intelligent prompt templating, and RAG to process keyword research, competitive analysis, and internal database (7,000+ listings)",
                        "Implemented selective writing guidelines to ensure brand consistency"
                    ]
                },
                {
                    company: "Pam Golding Properties",
                    companyUrl: "https://www.pamgoldingzimbabwe.co.zw",
                    details: [
                        "Developed a custom, AI-powered Chrome extension for automatic property listing generation",
                        "Integrated image analysis (Vision) to determine property condition, style, materials, features, and more",
                        "Reduced property listing time by 80% (from 60+ to <10 minutes per listing)",
                        "Applied intelligent Writing Guideline filters to ensure brand-consistency",
                        "Facilitated workshops, training 100+ agents on system use"
                    ]
                },
                {
                    company: "Resume Worded",
                    companyUrl: "https://www.pamgoldingzimbabwe.co.zw",
                    details: [
                        "Designed 58-table agentic AI system for automated resume optimization",
                        "Automated resume parsing, LinkedIn & job scraping, ATS keyword analysis, generation, QA, and export to Google Docs",
                        "Achieved 15% conversion rate from free resume critiques to paid rewrites",
                        "Integrated intelligent prompt chains and selective writing guidelines based on industry, role, and experience level",
                        "Reduced operational costs by 87% (from $240 to $30 per resume)"
                    ]
                }
            ]
        },
        {
            title: "Founder & Lead Facilitator",
            company: "Real Talk Philosophy",
            companyUrl: "https://www.realtalkphilosophy.org",
            period: "2017-Present",
            description: "",
            pageBreakBefore: true,
            achievements: [
                { text: "Designed and facilitated 250+ workshops on AI, blockchain, surveillance capitalism, social media, and more" },
                { text: "Scaled organization from 0 to 12 chapters across the US, Vietnam, Thailand, Singapore, Zimbabwe, & South Africa" },
                { text: "Remotely onboarded and managed an international team of 12 franchisees and 160+ freelancers" },
                { text: "Developed custom AI tools for training, research, content production, and event management" }
            ]
        },
        {
            title: "Workshop & Events Manager",
            company: "Global Ecovillage Network",
            companyUrl: "https://www.ecovillage.org",
            period: "2021-2022",
            description: "",
            achievements: [
                { text: "Led 6-day virtual Community Sustainability Summit featuring expert panels, interactive workshops, and more" },
                { text: "Managed 15-person creative team across video production, marketing, and design disciplines" },
                { text: "Designed comprehensive virtual event structure integrating live discussions, Q&As, and breakout sessions" }
            ]
        }
    ];

    return (
        <div className="mb-6">
            <h3 className={`text-xl font-semibold mb-4 text-${colors.text}`}>
                PROFESSIONAL EXPERIENCE
            </h3>
            <div className="space-y-6">
                {roles.map((role, idx) => (
                    <Role key={idx} {...role} />
                ))}
            </div>
        </div>
    );
};

export default Experience;