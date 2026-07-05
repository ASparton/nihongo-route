import HankoButton from "./HankoButton";

export default function KatakanaWarmup({
  word,
  meaning,
}: {
  word: string;
  meaning: string;
}) {
  return (
    <details className="kw">
      <summary>
        <span>{word}</span>
        <HankoButton text={word} />
      </summary>
      <div className="reveal">{meaning}</div>
    </details>
  );
}
