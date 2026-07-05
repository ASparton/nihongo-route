"use client";

import { speak } from "@/lib/speech";

export default function HankoButton({
  text,
  label = "écouter",
}: {
  text: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      className="hanko"
      aria-label={label}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        speak(text);
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
        <path d="M16 8.5a5 5 0 010 7" />
        <path d="M18.6 6a8 8 0 010 12" />
      </svg>
    </button>
  );
}
