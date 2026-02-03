// DottedHeroSection
import type { ReactNode } from "react";

type DottedHeroSectionProps = {
  children: ReactNode;
};

const DottedHeroSection = ( {children}: DottedHeroSectionProps ) => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Dotted Background Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 3px, transparent 0)`,
          backgroundSize: '27px 27px'
        }}
      >
        {/* Optional: Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-gray-50/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen">
        {children}

        {/* Optional decorative elements */}
        <div className="absolute top-82.5 left-21.25 w-36 h-40 bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-43.75 right-12.5 w-36 h-40 bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-70"></div>
      </div>

      {/* Optional: Alternative dot pattern using CSS */}
      <div className="absolute inset-0 hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00000020_1px,transparent_1px)] bg-size-[32px_32px]"></div>
      </div>
    </div>
  );
};

export default DottedHeroSection;