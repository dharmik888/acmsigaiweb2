export const Card = ({
  title,
  category,
  description,
  image,
  glassColor = "blue",
  children,
}) => {
  const glassStyles = {
    yellow: "bg-retroYellow/10 border-retroYellow/40 shadow-[0_4px_30px_rgba(250,204,21,0.1)]",
    pink: "bg-retroPink/10 border-retroPink/40 shadow-[0_4px_30px_rgba(255,107,43,0.1)]",
    blue: "bg-retroBlue/10 border-retroBlue/40 shadow-[0_4px_30px_rgba(56,189,248,0.1)]",
    green: "bg-retroGreen/10 border-retroGreen/40 shadow-[0_4px_30px_rgba(74,222,128,0.1)]",
  };

  const badgeStyles = {
    yellow: "bg-retroYellow text-darkCard",
    pink: "bg-retroPink text-darkCard",
    blue: "bg-retroBlue text-darkCard",
    green: "bg-retroGreen text-darkCard",
  };

  const titleStyles = {
    yellow: "text-retroYellow",
    pink: "text-retroPink",
    blue: "text-retroBlue",
    green: "text-retroGreen",
  };

  return (
    <div
      className={`border-3 rounded-2xl p-5 relative flex flex-col justify-between micro-card-hover cursor-pointer backdrop-blur-md ${glassStyles[glassColor] || glassStyles.blue}`}
    >
      {category && (
        <span className={`self-start font-bold text-xs px-2.5 py-1 rounded mb-3 uppercase ${badgeStyles[glassColor] || badgeStyles.blue}`}>
          {category}
        </span>
      )}
      {image && (
        <div className="border-2 border-darkBorder rounded-xl overflow-hidden mb-4 h-48">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div>
        <h3 className={`text-xl font-black mb-2 leading-tight ${titleStyles[glassColor] || titleStyles.blue}`}>
          {title}
        </h3>
        <p className="text-sm font-medium text-gray-300">{description}</p>
      </div>
      {children}
    </div>
  );
};
