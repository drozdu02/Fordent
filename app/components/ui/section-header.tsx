type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  compact?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  compact = false,
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const maxW = align === "center" ? "max-w-3xl" : "max-w-2xl";

  return (
    <div
      className={`${compact ? "mb-8 md:mb-10" : "mb-14 md:mb-16"} ${alignClass} ${maxW}`}
    >
      <span className={`eyebrow ${light ? "text-[var(--fd-accent-light)]" : ""}`}>
        {eyebrow}
      </span>
      <h2
        className={`mt-3 ${compact ? "mb-3" : "mb-5"} ${light ? "!text-white" : ""}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`${compact ? "text-base" : "text-lg"} leading-relaxed ${light ? "text-[var(--fd-text-on-dark)] opacity-90" : "text-muted-fd"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
