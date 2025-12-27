import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glowButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:shadow-glow-md hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30 hover:border-secondary/50 hover:shadow-[0_0_25px_-5px_hsl(var(--glow-secondary))]",
        accent:
          "bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30 hover:border-accent/50 hover:shadow-[0_0_25px_-5px_hsl(var(--glow-accent))]",
        outline:
          "border border-border bg-transparent hover:bg-muted/50 hover:border-primary/50 hover:text-primary",
        ghost:
          "hover:bg-muted/50 hover:text-foreground",
        gradient:
          "bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground hover:shadow-glow-lg hover:-translate-y-0.5 active:translate-y-0",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface GlowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glowButtonVariants> {}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(glowButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
GlowButton.displayName = "GlowButton";

export { GlowButton, glowButtonVariants };
