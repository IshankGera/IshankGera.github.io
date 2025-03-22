
import React from 'react';
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  titleClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  className = "",
  titleClassName = "",
  children 
}) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-16 md:py-24 px-6 md:px-8 min-h-screen flex flex-col justify-center", 
        className
      )}
    >
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className={cn(
            "text-3xl md:text-4xl font-heading font-bold mb-2 opacity-0 animate-fade-in inline-block",
            titleClassName
          )}>
            {title}
          </h2>
          <div className="block mt-2 w-full">
            <span className="highlight-line block" style={{ width: `${title.length * 14}px` }}></span>
          </div>
          {subtitle && (
            <p className="text-muted-foreground mt-4 max-w-2xl opacity-0 animate-fade-in animate-delay-200">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="opacity-0 animate-fade-in animate-delay-300">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
