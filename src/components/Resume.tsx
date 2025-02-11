import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          JON DALLAS JR
        </h1>
        <div className="flex justify-center items-center gap-6 text-gray-600 flex-wrap">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Baltimore, MD</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <a href="mailto:jondallasjr@gmail.com" className="hover:text-blue-600">jondallasjr@gmail.com</a>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>(443) 470-5740</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-4 h-4" />
            <span>linkedin.com/in/jondallasjr</span>
          </div>
          <div className="flex items-center gap-1">
            <Github className="w-4 h-4" />
            <span>github.com/jondallasjr</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          Solutions-driven AI consultant and workshop facilitator with proven track record of delivering 80%+ efficiency gains through custom AI implementations. 
          Expertise in LLMs, RAG systems, and full-stack development, combined with extensive workshop facilitation experience (250+ workshops, 8,000+ participants across 12 cities). 
          Consistently achieve measurable client results through strategic AI tool development and effective knowledge transfer. Specialized in AI implementation strategy, 
          workflow optimization, and ethical AI adoption for SMBs.
        </p>
      </div>
      {/* Skills & Expertise */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">SKILLS & EXPERTISE</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Systems Architecture",
                skills: "LLM Integration, RAG Systems, Custom AI Tool Development, Prompt Engineering"
              },
              {
                title: "Workshop Facilitation",
                skills: "Technical Training, Curriculum Development, Cross-Cultural Communication"
              },
              {
                title: "Technical Development",
                skills: "React/Node.js/Python, API Integration, Low-Code Solutions (Coda Expert)"
              },
              {
                title: "Business Solutions",
                skills: "Process Optimization, ROI Analysis, Change Management, Agile Methods"
              }
            ].map((competency, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <BadgeCheck className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">{competency.title}</h4>
                  <p className="text-gray-600 text-sm">{competency.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {/* Experience */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">PROFESSIONAL EXPERIENCE</h3>
        
        <div className="space-y-6">
          {/* Current Role */}
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold text-gray-800">Founder & AI Solutions Architect</h4>
            <div className="text-gray-600 text-sm mb-2">Jon Dallas AI, LLC | 2024-Present</div>
            <p className="text-gray-600 mb-3 pl-0">Independent consultancy delivering custom AI solutions and workshops for SMBs across property tech, content production, and digital marketing sectors.</p>
            
            <div className="font-medium text-gray-800 mb-2 pl-4">Key Achievements:</div>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 pl-8">
              <li>Developed and delivered 20+ AI implementation workshops with 98% satisfaction rate</li>
              <li>Achieved average 83% efficiency improvement across client projects</li>
              <li>Created 5 custom Coda packs processing 15K+ monthly API calls</li>
              <li>Built scalable RAG systems handling 450+ articles/month</li>
            </ul>

            <div className="font-medium text-gray-800 mb-2 pl-4">Selected Client Implementations:</div>
            <ul className="list-disc list-inside text-gray-600 space-y-3 pl-8">
              <li><span className="font-medium">Propertybook.co.zw:</span> Engineered RAG-based content system producing 450+ SEO-optimized articles in 48 hours. Implemented custom scraping solutions and API integrations (OpenAI, ahrefs, GSC). Increased organic traffic by 22%.</li>
              <li><span className="font-medium">Pam Golding Properties:</span> Developed AI-powered Chrome extension with OpenAI Vision integration, reducing listing time by 80%. Created custom prompt chains for brand voice consistency. Trained 20+ agents on system usage.</li>
              <li><span className="font-medium">Resume Worded:</span> Architected 58-table AI system with 15% conversion rate. Integrated LinkedIn scraping, ATS analysis, and intelligent prompt selection. Reduced operational costs by 87% while maintaining quality.</li>
            </ul>
          </div>

          {/* Real Talk Philosophy */}
          <div className="border-l-4 border-blue-600 pl-4">
            <h4 className="font-semibold text-gray-800">Founder & Lead Facilitator</h4>
            <div className="text-gray-600 text-sm mb-2">Real Talk Philosophy | 2017-Present</div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Scaled organization from 1 to 12 chapters across 9 countries through documented processes and training</li>
              <li>Facilitated 250+ workshops for 8,000+ participants across 13 cities worldwide</li>
              <li>Designed workshops covering topics including AI, blockchain, cryptocurrency, surveillance capitalism, social media, and more</li>
              <li>Managed distributed team of 12 franchisees and 160+ freelancers across multiple countries</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Education & Additional Experience */}
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">EDUCATION</h3>
            <div className="text-gray-600">
              <div className="font-medium">Bachelor of Science</div>
              <div>Towson University</div>
              <div className="text-sm mt-2">Theatre & Philosophy</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">OTHER EXPERIENCE</h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <span className="font-medium">TEDx Speaker</span> | "Why We Play Games" | TEDx Ba Dinh, Hanoi
              </li>
              <li>
                <div className="font-medium">Workshop Manager</div>
                <div className="text-sm">Global Ecovillage Network | 2021-2022</div>
                <div className="text-sm">Led 30+ workshops on digital transformation across 5 countries</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">FEATURED TESTIMONIAL</h3>
        <blockquote className="text-gray-600 italic">
          "Jon does an excellent job of making people feel welcomed, connected, and at ease... 
          His communication skills are concise and follow a logical pattern that is easy to understand."
        </blockquote>
        <div className="mt-2 text-gray-800 font-medium">-Haley Purvis, Workshop Attendee</div>
      </div>
    </div>
  );
};

export default Resume;