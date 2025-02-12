import React from 'react';
import Role, { RoleProps } from './Role';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
    const { colors } = useTheme();

    const roles: RoleProps[] = [
        {
            title: "Independent AI Consultant & Developer",
            company: "Jon Dallas AI, LLC",
            period: "2024-Present",
            description: "Independent consultancy delivering custom AI solutions and workshops for SMBs across various sectors",
            implementations: [
                {
                    company: "Propertybook.co.zw",
                    details: [
                        "Engineered agentic AI system to automate the generation of EEAT/SEO-optimized content",
                        "Integrated property database analysis (7,000+ listings), sentiment analysis, and location-specific research",
                        "Client produced 450+ SEO-optimized articles in 48 hours",
                    ]
                },
                {
                    company: "Pam Golding Properties",
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
            period: "2017-Present",
            description: "",
            achievements: [
                { text: "Designed and facilitated 250+ workshops on AI, blockchain, surveillance capitalism, social media, and more" },
                { text: "Scaled organization from 0 to 12 chapters across the US, Vietnam, Thailand, Singapore, Zimbabwe, & South Africa" },
                { text: "Remotely onboarded and managed an international team of 12 franchisees and 160+ freelancers" },
                { text: "Developed custom AI tools for training, research, content production, and event management" }
            ]
        },
        {
            title: "Workshop & Events Manager",  // or "Digital Events Manager"?
            company: "Global Ecovillage Network",
            period: "2021-2022",
            description: "",
            achievements: [
                { text: "Led 6-day virtual Community Sustainability Summit featuring expert panels, interactive workshops, and more"},
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