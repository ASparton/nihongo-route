"use client";

import { useEffect, useState } from "react";

export default function StepRail({
  steps,
}: {
  steps: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(steps[0]?.id ?? "");

  useEffect(() => {
    const sections = steps
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [steps]);

  return (
    <div className="rail-wrap">
      <nav className="rail">
        {steps.map((step) => (
          <a
            key={step.id}
            href={`#${step.id}`}
            className={step.id === active ? "active" : undefined}
          >
            {step.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
