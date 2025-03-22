
import React from 'react';
import { Medal } from 'lucide-react';
import { cn } from "@/lib/utils";

interface AchievementItemProps {
  achievement: string;
  className?: string;
}

const AchievementItem: React.FC<AchievementItemProps> = ({
  achievement,
  className = "",
}) => {
  return (
    <div className={cn(
      "flex items-start gap-3 p-4 rounded-lg",
      "transform transition-all hover:-translate-y-1 hover:shadow-lg",
      className
    )}>
      <Medal className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
      <span className="font-medium">{achievement}</span>
    </div>
  );
};

export default AchievementItem;
