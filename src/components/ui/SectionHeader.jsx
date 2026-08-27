import React from "react";

export const SectionHeader = ({ title, subtitle, badgeText }) => {
  return (
    <div className="text-center my-8 relative inline-block w-full">
      {badgeText && (
        <span className="bg-retroOrange text-retroBlack font-black text-xs px-3.5 py-1 border-3 border-retroBlack rounded-full uppercase tracking-wider inline-block -rotate-2 mb-3 shadow-brutal-sm">
          {badgeText}
        </span>
      )}
      <h2 className="text-black md:text-5xl font-black uppercase tracking-tight text-black">
        {title}
      </h2>
      {subtitle && (
        <p className="text-retroGreySlate font-bold mt-2 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};
