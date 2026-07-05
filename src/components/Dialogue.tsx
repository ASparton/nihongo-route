"use client";

import HankoButton from "./HankoButton";
import { speakSequence } from "@/lib/speech";

export type DialogueLine = { who: string; jp: string; fr: string };

export default function Dialogue({ lines }: { lines: DialogueLine[] }) {
  return (
    <>
      <button
        type="button"
        className="btn-line primary"
        style={{ marginBottom: 14 }}
        onClick={() => speakSequence(lines.map((l) => l.jp))}
      >
        ▸ Écouter le dialogue en entier
      </button>
      <div className="dialogue">
        {lines.map((line, i) => (
          <div className="jp-line" key={i}>
            <span className="who">{line.who}</span>
            <span className="txt">
              <span className="jp">{line.jp}</span>
              <span className="fr">{line.fr}</span>
            </span>
            <HankoButton text={line.jp} />
          </div>
        ))}
      </div>
    </>
  );
}
