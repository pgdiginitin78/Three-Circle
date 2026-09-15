import React from "react";

export default function SectionTag({
  text,
  className = "",
  lineColor = "bg-brand-gold",
  textColor = "text-brand-gold",
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className={`h-[2px] w-7 sm:w-8 shrink-0 ${lineColor}`} />
      <span
        className={`font-display text-[9.5px] sm:text-[10.5px] font-extrabold tracking-[0.35em] uppercase ${textColor}`}
      >
        {text}
      </span>
    </div>
  );
}

