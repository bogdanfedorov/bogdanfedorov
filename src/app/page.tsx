import { CV, CV_JSON } from "@/features/CV";
import { Metadata } from "next/types";
import schema from "../../schema.json";

export const metadata: Metadata = {
  title: `${schema.name} ${schema.familyName}`,
  description: `${schema.name} ${schema.familyName} - Professional portfolio and CV`,
  authors: [
    {
      name: `${schema.name} ${schema.familyName}`,
      url: schema.contact_information.github,
    },
  ],
  keywords: [
    "CV",
    "Professional portfolio",
    "Software engineer",
    "Full stack developer",
    "React developer",
    "Node.js",
    "TypeScript",
    "React.js",
    "Next.js",
    "Express.js",
    "Nest.js",
    "GOLANG",
    "Python",
    "MongoDB",
    // AI & Machine Learning
    "OpenAI API", "LLM", "Stable Diffusion", "AI Integration", "Prompt Engineering",
    
    // Roles & Expertise
    "Backend Developer", "Full-stack Developer", "DevOps Engineer", "Team Lead",
    "Senior Developer", "Software Engineer",
    
    // Domain Expertise
    "Microservices", "High-Load Systems", "API Development", "System Architecture",
    "Database Optimization", "Real-time Systems",
    
    // Frameworks & Tools
    "GraphQL", "Tailwind CSS", "Material-UI", "Git", "GitHub Actions",
    "Kafka", "WebSocket", "REST API",
    
    // Soft Skills
    "Team Leadership", "Project Management", "Agile", "Code Review",
    
    // Industries
     "CRM Systems", "Cryptocurrency", "Sports Analytics", "AI-powered Applications",

    // Languages
    "English", "Ukrainian", "Polish", "Russian",
  ],
};

export default function Home() {
  return <CV schema={schema as CV_JSON} />;
}
