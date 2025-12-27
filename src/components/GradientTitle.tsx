import React from "react";
import { cn } from "@/lib/utils";

interface GradientTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const GradientTitle: React.FC<GradientTitleProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={cn("text-center", className)}>
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text animate-fade-in">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.1s" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export { GradientTitle };
