
import React from 'react';
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  skills: string[];
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skills,
  className = "",
}) => {
  return (
    <div className={cn(
      "rounded-xl p-6 transition-all hover:shadow-xl",
      className
    )}>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="tag transition-transform hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
