
import React from 'react';
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  percentage?: string;
  className?: string;
  children?: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  subtitle,
  date,
  location,
  percentage,
  className = "",
  children,
  isLast = false
}) => {
  return (
    <div className={cn(
      "relative pl-8 pb-12 before:absolute before:left-0 before:top-1 before:h-full before:w-px before:bg-border",
      "before:content-[''] after:absolute after:left-[-3.5px] after:top-1.5 after:h-2 after:w-2 after:rounded-full after:border-2 after:border-primary after:bg-background after:content-['']",
      isLast && "before:h-0",
      className
    )}>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-1">
        <h3 className="font-semibold text-xl">{title}</h3>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground whitespace-nowrap">{location}</span>
          {percentage && (
            <span className="tag text-xs">{percentage}</span>
          )}
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-1">
        <p className="text-muted-foreground">{subtitle}</p>
        <span className="text-sm text-primary font-medium whitespace-nowrap">{date}</span>
      </div>
      
      {children && (
        <div className="text-sm text-muted-foreground space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
