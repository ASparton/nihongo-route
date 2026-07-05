import type { ReactNode } from "react";
import HankoButton from "./HankoButton";

export default function ExampleCard({
  jp,
  fr,
  speakText,
}: {
  jp: ReactNode;
  fr?: string;
  speakText: string;
}) {
  return (
    <div className="example">
      <span className="jp">
        {jp}
        {fr ? <span className="fr">{fr}</span> : null}
      </span>
      <HankoButton text={speakText} />
    </div>
  );
}
