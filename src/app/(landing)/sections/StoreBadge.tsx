"use client";

import type { ReactNode } from "react";

interface StoreBadgeProps {
  icon: ReactNode;
  topText: string;
  bottomText: string;
  ariaLabel: string;
}

export default function StoreBadge({
  icon,
  topText,
  bottomText,
  ariaLabel,
}: StoreBadgeProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className="bg-white text-black px-5 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform"
    >
      {icon}
      <div className="text-left">
        <p className="text-[10px] uppercase font-bold leading-none opacity-60">
          {topText}
        </p>
        <p className="text-lg font-bold leading-none">{bottomText}</p>
      </div>
    </button>
  );
}
