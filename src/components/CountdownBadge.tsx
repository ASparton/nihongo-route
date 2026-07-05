"use client";

import { useEffect, useState } from "react";

const DEPARTURE = "2026-09-25T08:00:00";

export default function CountdownBadge() {
  const [days, setDays] = useState<number | null>(null);

  useEffect(() => {
    // The page is statically prerendered, so "now" must be read at view
    // time on the client, not baked in at build time — hence the effect.
    const target = new Date(DEPARTURE).getTime();
    const now = Date.now();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDays(Math.max(0, Math.ceil((target - now) / (1000 * 60 * 60 * 24))));
  }, []);

  return (
    <div className="countdown">
      <span className="num">{days ?? "—"}</span>
      <span className="label">jours avant l&apos;embarquement du 25 septembre 2026</span>
    </div>
  );
}
