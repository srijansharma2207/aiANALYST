import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Fact-check", href: "#fact-check" },
  { label: "Market Analysis", href: "#market-analysis" },
  { label: "Risk & Benchmarks", href: "#risk-benchmarks" },
];

export default function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-xl font-semibold text-gray-900 tracking-tight">
            AI Analyst
          </a>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-in Menu */}
      <nav
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-10">
            <span className="text-lg font-semibold text-gray-900">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left px-4 py-3 text-lg text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
