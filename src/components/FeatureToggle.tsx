import React from "react";
import { cn } from "@/lib/utils";

interface FeatureToggleProps {
  icon: React.ReactNode;
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  className?: string;
}

export const FeatureToggle: React.FC<FeatureToggleProps> = ({
  icon,
  label,
  description,
  enabled,
  onToggle,
  className,
}) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "w-full p-4 rounded-xl border transition-all duration-300 text-left group",
        enabled
          ? "border-primary/50 bg-primary/10"
          : "border-border/50 bg-muted/20 hover:border-border hover:bg-muted/30",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "p-2 rounded-lg transition-colors",
              enabled
                ? "bg-primary/20 text-primary"
                : "bg-muted/50 text-muted-foreground group-hover:text-foreground"
            )}
          >
            {icon}
          </div>
          <div>
            <p className="font-medium text-foreground">{label}</p>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
        <div
          className={cn(
            "w-12 h-6 rounded-full transition-all duration-300 relative",
            enabled ? "bg-primary" : "bg-muted"
          )}
        >
          <div
            className={cn(
              "absolute top-1 w-4 h-4 rounded-full bg-foreground transition-all duration-300",
              enabled ? "left-7" : "left-1"
            )}
          />
        </div>
      </div>
    </button>
  );
};
