import { cn } from "@/lib/utils";

export default function SectionHeading({
  tag,
  title,
  subtitle,
  centered = false,
  light = false,
  className = "",
}) {
  return (
    <div
      className={cn(
        "space-y-4 max-w-3xl",
        centered ? "mx-auto text-center items-center" : "text-left",
        className
      )}
    >
      {tag && (
        <div
          className={cn(
            "inline-flex items-center gap-3",
            centered && "justify-center"
          )}
        >
          <span className="w-6 h-[1px] bg-[#B49A76]" />
          <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#B49A76]">
            {tag}
          </span>
          {centered && <span className="w-6 h-[1px] bg-[#B49A76]" />}
        </div>
      )}

      {title && (
        <h2
          className={cn(
            "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light leading-[1.15] tracking-tight",
            light ? "text-white" : "text-[#17232B]"
          )}
        >
          {title}
        </h2>
      )}

      {subtitle && (
        <p
          className={cn(
            "font-sans text-sm md:text-base leading-relaxed max-w-2xl font-normal",
            light ? "text-[#E8E5DF]/80" : "text-[#777B7D]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
