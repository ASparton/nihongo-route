import HankoButton from "./HankoButton";

export default function KanjiCard({
  kanji,
  reading,
  strokes,
  exampleWord,
  exampleReading,
  exampleFr,
  speakText,
}: {
  kanji: string;
  reading: string;
  strokes: number;
  exampleWord: string;
  exampleReading: string;
  exampleFr: string;
  speakText: string;
}) {
  return (
    <div className="kanji-card">
      <div className="glyph">
        <ruby>
          {kanji}
          <rt>{reading}</rt>
        </ruby>
      </div>
      <div className="strokes">
        {strokes} trait{strokes > 1 ? "s" : ""}
      </div>
      <div className="example">
        <span className="jp">
          <ruby>
            {exampleWord}
            <rt>{exampleReading}</rt>
          </ruby>
          <span className="fr">{exampleFr}</span>
        </span>
        <HankoButton text={speakText} />
      </div>
    </div>
  );
}
