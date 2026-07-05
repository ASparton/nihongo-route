import HankoButton from "./HankoButton";

export type VocabEntry = { jp: string; fr: string };

export default function VocabGrid({ items }: { items: VocabEntry[] }) {
  return (
    <div className="vocab-grid">
      {items.map((item) => (
        <div className="vocab-item" key={item.jp}>
          <span>
            <span className="jp">{item.jp}</span>
            <span className="fr">{item.fr}</span>
          </span>
          <HankoButton text={item.jp} />
        </div>
      ))}
    </div>
  );
}
