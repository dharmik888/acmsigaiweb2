export const SectionHeader = ({ title, subtitle, badgeText, color = "bg-retroYellow" }) => {
  return (
    <div className="text-center my-8 relative inline-block w-full">
      {badgeText && (
        <span className={`${color} text-black font-black text-xs px-3 py-1 border-2 border-black rounded-full uppercase tracking-wider inline-block -rotate-3 mb-2`}>
          {badgeText}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-themeText">
        {title}
      </h2>
      {subtitle && (
        <p className="text-themeText opacity-80 font-medium mt-2">{subtitle}</p>
      )}
    </div>
  );
};
