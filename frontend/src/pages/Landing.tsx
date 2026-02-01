import LandingHeader from "@/components/LandingHeader";
import LandingHero from "@/components/LandingHero";
import LandingSection from "@/components/LandingSection";
import FeatureCard from "@/components/FeatureCard";
import {
  FileText,
  MessageSquare,
  Globe,
  AlertTriangle,
  BarChart3,
  Target,
  TrendingUp,
  Users,
  Shield,
  Zap,
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <LandingHeader />
      <LandingHero />

      {/* Overview Section */}
      <LandingSection id="overview" title="Overview" className="bg-gray-50/50">
        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-12">
          Upload founder materials and public data. Our AI synthesizes everything into concise deal notes—giving you the clarity you need to make informed investment decisions.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<FileText className="w-6 h-6 text-gray-700" />}
            title="Pitch Deck Analysis"
            description="Automatically extract key metrics, claims, and narrative from pitch decks."
          />
          <FeatureCard
            icon={<MessageSquare className="w-6 h-6 text-gray-700" />}
            title="Founder Call Insights"
            description="Transcribe and analyze founder calls to capture critical information."
          />
          <FeatureCard
            icon={<Globe className="w-6 h-6 text-gray-700" />}
            title="Public Data Integration"
            description="Cross-reference with news, filings, and market data for complete context."
          />
        </div>
      </LandingSection>

      {/* Fact-check Section */}
      <LandingSection id="fact-check" title="Fact-check">
        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-12">
          Verify consistency across all sources. Our AI flags inconsistencies, missing claims, and unverifiable metrics—so you never miss a red flag.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <FeatureCard
            icon={<AlertTriangle className="w-6 h-6 text-amber-600" />}
            title="Inconsistency Detection"
            description="Automatically identify conflicting statements between pitch decks, calls, and public sources."
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6 text-gray-700" />}
            title="Claim Verification"
            description="Cross-check founder claims against verifiable public data and news sources."
          />
          <FeatureCard
            icon={<FileText className="w-6 h-6 text-gray-700" />}
            title="Missing Data Alerts"
            description="Highlight important metrics or disclosures that are absent from materials."
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-gray-700" />}
            title="Real-time Verification"
            description="Continuous monitoring of public sources for new information about the startup."
          />
        </div>
      </LandingSection>

      {/* Market Analysis Section */}
      <LandingSection id="market-analysis" title="Market Analysis" className="bg-gray-50/50">
        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-12">
          Understand where the startup stands in its market. AI compares against competitors and maps out TAM, growth rate, and competitive positioning.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6 text-gray-700" />}
            title="TAM Analysis"
            description="Calculate and validate total addressable market claims with industry data."
          />
          <FeatureCard
            icon={<TrendingUp className="w-6 h-6 text-gray-700" />}
            title="Growth Benchmarks"
            description="Compare growth metrics against industry standards and similar-stage startups."
          />
          <FeatureCard
            icon={<Target className="w-6 h-6 text-gray-700" />}
            title="Competitive Positioning"
            description="Map the competitive landscape and identify unique value propositions."
          />
        </div>
      </LandingSection>

      {/* Risk & Benchmarks Section */}
      <LandingSection id="risk-benchmarks" title="Risk & Benchmarks">
        <p className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-12">
          Spot potential issues before they become problems. AI highlights red flags and benchmarks traction against similar-stage startups.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          <FeatureCard
            icon={<AlertTriangle className="w-6 h-6 text-red-500" />}
            title="Red Flag Detection"
            description="Automatically surface concerning patterns in financials, team, or market approach."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6 text-gray-700" />}
            title="Peer Comparison"
            description="Benchmark against successful startups at similar stages and in similar markets."
          />
          <FeatureCard
            icon={<BarChart3 className="w-6 h-6 text-gray-700" />}
            title="Traction Metrics"
            description="Evaluate key metrics like MRR, CAC, LTV against industry benchmarks."
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6 text-gray-700" />}
            title="Risk Score"
            description="Get an overall risk assessment with detailed breakdown by category."
          />
        </div>
      </LandingSection>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-lg font-semibold text-gray-900">AI Analyst</span>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AI Analyst. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
