import { ArrowRight } from "lucide-react";

export default function LandingHero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
          One platform.
          <br />
          Smarter startup decisions.
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          An AI-powered analyst that evaluates startups using pitch decks, founder calls, and public data to generate investor-ready insights.
        </p>
        <button className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10">
          Get Started
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
