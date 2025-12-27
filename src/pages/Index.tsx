import React, { useState } from "react";
import { GradientTitle } from "@/components/GradientTitle";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { TabsNav, Tab } from "@/components/ui/TabsNav";
import { FeatureToggle } from "@/components/FeatureToggle";
import { Globe, User, Zap, Users, Timer, Target, Shield, Settings } from "lucide-react";

type Region = "NA" | "EU" | "AP" | "KR" | "TEST";

const regions: { id: Region; label: string; description: string }[] = [
  { id: "NA", label: "North America", description: "US West, US East, Brazil" },
  { id: "EU", label: "Europe", description: "EU West, EU Nordic, Turkey" },
  { id: "AP", label: "Asia Pacific", description: "SEA, Japan, OCE" },
  { id: "KR", label: "Korea", description: "Korea Server" },
  { id: "TEST", label: "Test Mode", description: "Offline Testing" },
];

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [activeTab, setActiveTab] = useState("agent");

  // Feature states
  const [features, setFeatures] = useState({
    autoLock: false,
    instantLock: false,
    playerList: false,
    spikeTimer: false,
    dodgeTimer: false,
    rankReveal: false,
  });

  const toggleFeature = (key: keyof typeof features) => {
    setFeatures((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleConnect = () => {
    if (selectedRegion) {
      setIsConnected(true);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setSelectedRegion(null);
  };

  const tabs: Tab[] = [
    { id: "agent", label: "Agent", icon: <Target size={16} /> },
    { id: "match", label: "Match", icon: <Users size={16} /> },
    { id: "utility", label: "Utility", icon: <Zap size={16} /> },
    { id: "settings", label: "Settings", icon: <Settings size={16} /> },
  ];

  // Region Selection Screen
  if (!isConnected) {
    return (
      <div className="min-h-screen gradient-flow flex items-center justify-center p-6">
        <GlassCard className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <GradientTitle title="val helper" subtitle="by xona" />
          </div>

          <div className="space-y-3 mb-6">
            <p className="text-sm text-muted-foreground text-center mb-4">
              Select your region to connect
            </p>
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
                  selectedRegion === region.id
                    ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                    : "border-border/50 bg-muted/20 hover:border-primary/50 hover:bg-muted/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Globe
                    size={20}
                    className={
                      selectedRegion === region.id
                        ? "text-primary"
                        : "text-muted-foreground"
                    }
                  />
                  <div>
                    <p className="font-medium text-foreground">{region.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {region.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <GlowButton
            variant="gradient"
            className="w-full"
            onClick={handleConnect}
            disabled={!selectedRegion}
          >
            Connect
          </GlowButton>
        </GlassCard>
      </div>
    );
  }

  // Main UI
  return (
    <div className="min-h-screen gradient-flow p-6">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <GlassCard className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-xl font-bold gradient-text">val helper</h1>
              <p className="text-xs text-muted-foreground">by xona</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-muted-foreground">
                    {selectedRegion === "TEST" ? "TEST MODE" : selectedRegion}
                  </span>
                </div>
                <p className="text-xs text-foreground flex items-center gap-1">
                  <User size={12} />
                  {selectedRegion === "TEST"
                    ? "TestUser#0000"
                    : "Connected"}
                </p>
              </div>
              <GlowButton variant="outline" size="sm" onClick={handleDisconnect}>
                Disconnect
              </GlowButton>
            </div>
          </div>
        </GlassCard>

        {/* Navigation */}
        <TabsNav
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Content */}
        <GlassCard className="p-6">
          {activeTab === "agent" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Agent Selection
              </h2>
              <FeatureToggle
                icon={<Target size={20} />}
                label="Auto-Lock Agent"
                description="Automatically lock in your selected agent"
                enabled={features.autoLock}
                onToggle={() => toggleFeature("autoLock")}
              />
              <FeatureToggle
                icon={<Zap size={20} />}
                label="Instant Lock"
                description="Lock agent as fast as possible"
                enabled={features.instantLock}
                onToggle={() => toggleFeature("instantLock")}
              />
            </div>
          )}

          {activeTab === "match" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Match Tools
              </h2>
              <FeatureToggle
                icon={<Users size={20} />}
                label="Player List"
                description="View players in current match"
                enabled={features.playerList}
                onToggle={() => toggleFeature("playerList")}
              />
              <FeatureToggle
                icon={<Shield size={20} />}
                label="Rank Reveal"
                description="Show player ranks in lobby"
                enabled={features.rankReveal}
                onToggle={() => toggleFeature("rankReveal")}
              />
            </div>
          )}

          {activeTab === "utility" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Utility Features
              </h2>
              <FeatureToggle
                icon={<Timer size={20} />}
                label="Spike Timer"
                description="Overlay timer for spike plant/defuse"
                enabled={features.spikeTimer}
                onToggle={() => toggleFeature("spikeTimer")}
              />
              <FeatureToggle
                icon={<Timer size={20} />}
                label="Dodge Timer"
                description="Countdown timer for queue dodges"
                enabled={features.dodgeTimer}
                onToggle={() => toggleFeature("dodgeTimer")}
              />
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Settings
              </h2>
              <p className="text-muted-foreground text-sm">
                Settings panel coming soon...
              </p>
            </div>
          )}
        </GlassCard>

        {/* Status Bar */}
        <GlassCard className="p-3">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Active Features:{" "}
              {Object.values(features).filter(Boolean).length}
            </span>
            <span>v1.0.0</span>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Index;
