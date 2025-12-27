import * as React from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabsNavProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const TabsNav: React.FC<TabsNavProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className,
}) => {
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);

  return (
    <div className={cn("relative", className)}>
      <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/30 border border-border/50">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
              activeTab === tab.id
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            )}
          >
            {activeTab === tab.id && (
              <span
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-accent to-secondary opacity-90"
                style={{
                  animation: "fade-in 0.2s ease-out",
                }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {tab.icon}
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export { TabsNav };
export type { Tab };
