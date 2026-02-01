import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LandingSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function LandingSection({ id, title, children, className }: LandingSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-24 sm:py-32 px-6",
        className
      )}
    >
      <div
        className={cn(
          "max-w-4xl mx-auto transition-all duration-700",
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        )}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
