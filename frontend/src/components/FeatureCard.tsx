import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
