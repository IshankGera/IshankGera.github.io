
import React from 'react';
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  technologies: string[];
  description: string[];
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  technologies,
  description,
  className = "",
}) => {
  return (
    <div className={cn(
      "rounded-xl p-6 transition-all hover:shadow-xl",
      "transform transition-transform hover:-translate-y-1",
      className
    )}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      
      <div className="flex flex-wrap gap-1.5 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="tag text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
        {description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
