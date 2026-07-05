"use client";

import { useEffect, useState } from "react";
import { onVoiceStatus } from "@/lib/speech";

export default function VoiceStatus() {
  const [hasVoice, setHasVoice] = useState<boolean | null>(null);

  useEffect(() => onVoiceStatus(setHasVoice), []);

  if (hasVoice !== false) return null;

  return (
    <p className="voice-warning">
      Aucune voix japonaise détectée sur ce navigateur — les boutons d&apos;écoute
      resteront muets. Essaie Safari, ou vérifie qu&apos;une voix japonaise est
      installée dans les réglages système.
    </p>
  );
}
