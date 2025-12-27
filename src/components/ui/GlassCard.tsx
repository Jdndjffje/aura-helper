import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "glass-card p-6",
          glow && "glow-border",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
