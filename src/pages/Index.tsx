import React, { useState } from "react";
import { GradientTitle } from "@/components/GradientTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { TabsNav, Tab } from "@/components/ui/TabsNav";
import { FeatureCard } from "@/components/FeatureCard";
import {
  Crosshair,
  Settings,
  BarChart3,
  Zap,
  Shield,
  Users,
  Rocket,
  Target,
} from "lucide-react";

const tabs: Tab[] = [
  { id: "overview", label: "Overview", icon: <BarChart3 className="w-4 h-4" /> },
  { id: "features", label: "Features", icon: <Zap className="w-4 h-4" /> },
  { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
];

const features = [
  {
    icon: <Crosshair className="w-6 h-6" />,
    title: "Precision Tracking",
    description: "Advanced aim analytics and performance tracking for competitive improvement.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Private",
    description: "Your data stays protected with enterprise-grade security measures.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Smart Analysis",
    description: "AI-powered insights to identify weaknesses and optimize your gameplay.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Integration",
    description: "Seamless collaboration tools for coordinated team performance.",
  },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen gradient-flow">
      {/* Main container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <GradientTitle
            title="val helper by xona"
            subtitle="Your ultimate companion for competitive gaming"
          />
        </header>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <TabsNav
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <GlassCard className="text-center animate-slide-up" style={{ animationDelay: "0ms" }}>
                  <div className="text-3xl font-display font-bold gradient-text">98%</div>
                  <div className="text-muted-foreground text-sm mt-1">Accuracy Rate</div>
                </GlassCard>
                <GlassCard className="text-center animate-slide-up" style={{ animationDelay: "100ms" }}>
                  <div className="text-3xl font-display font-bold gradient-text">1.2M+</div>
                  <div className="text-muted-foreground text-sm mt-1">Active Users</div>
                </GlassCard>
                <GlassCard className="text-center animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <div className="text-3xl font-display font-bold gradient-text">24/7</div>
                  <div className="text-muted-foreground text-sm mt-1">Live Support</div>
                </GlassCard>
              </div>

              {/* Main Content Card */}
              <GlassCard glow className="animate-slide-up" style={{ animationDelay: "300ms" }}>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold mb-4 text-foreground">
                      Elevate Your Game
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Val Helper provides real-time analytics, performance tracking, and intelligent
                      insights to help you climb the ranks. Whether you're a casual player or
                      aspiring pro, our tools adapt to your playstyle.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <GlowButton variant="gradient" size="lg">
                        <Rocket className="w-5 h-5" />
                        Get Started
                      </GlowButton>
                      <GlowButton variant="outline" size="lg">
                        Learn More
                      </GlowButton>
                    </div>
                  </div>
                  <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 flex items-center justify-center">
                    <Crosshair className="w-24 h-24 text-primary pulse-soft" />
                  </div>
                </div>
              </GlassCard>
            </div>
          )}

          {activeTab === "features" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                />
              ))}
            </div>
          )}

          {activeTab === "settings" && (
            <GlassCard glow className="animate-slide-up">
              <h2 className="font-display text-xl font-bold mb-6 text-foreground">
                Customize Your Experience
              </h2>
              <div className="space-y-6">
                {/* Settings Items */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div>
                    <div className="font-medium text-foreground">Notifications</div>
                    <div className="text-sm text-muted-foreground">Receive alerts for match updates</div>
                  </div>
                  <div className="w-12 h-6 rounded-full bg-primary/30 relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-primary shadow-glow-sm" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div>
                    <div className="font-medium text-foreground">Dark Mode</div>
                    <div className="text-sm text-muted-foreground">Enable dark theme interface</div>
                  </div>
                  <div className="w-12 h-6 rounded-full bg-primary/30 relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-primary shadow-glow-sm" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-muted/30 border border-border/50">
                  <div>
                    <div className="font-medium text-foreground">Auto-sync</div>
                    <div className="text-sm text-muted-foreground">Automatically sync match data</div>
                  </div>
                  <div className="w-12 h-6 rounded-full bg-muted relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-muted-foreground/50" />
                  </div>
                </div>
              </div>
            </GlassCard>
          )}
        </div>

        {/* Button Showcase */}
        <div className="mt-12">
          <GlassCard className="animate-slide-up" style={{ animationDelay: "400ms" }}>
            <h3 className="font-display text-lg font-semibold mb-4 text-foreground">
              Button Variants
            </h3>
            <div className="flex flex-wrap gap-3">
              <GlowButton variant="default">Primary</GlowButton>
              <GlowButton variant="secondary">Secondary</GlowButton>
              <GlowButton variant="accent">Accent</GlowButton>
              <GlowButton variant="outline">Outline</GlowButton>
              <GlowButton variant="ghost">Ghost</GlowButton>
              <GlowButton variant="gradient">Gradient</GlowButton>
            </div>
          </GlassCard>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-muted-foreground text-sm">
          <p>© 2024 Val Helper by Xona. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
