export default function KanjiTracker({ weeks }: { weeks: string[] }) {
  const glyphs = weeks.flatMap((week, weekIndex) =>
    week.split("").map((glyph, i) => (
      <div className="kanji-cell-box" key={`${weekIndex}-${i}`}>
        {glyph}
      </div>
    ))
  );

  return <div className="kanji-grid">{glyphs}</div>;
}
