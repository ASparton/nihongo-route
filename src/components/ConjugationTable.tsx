import type { ReactNode } from "react";
import HankoButton from "./HankoButton";

export type ConjRow = {
  label: string;
  jp: ReactNode;
  speakText?: string;
  note?: string;
};

export default function ConjugationTable({
  title,
  rows,
}: {
  title?: string;
  rows: ConjRow[];
}) {
  return (
    <div className="conj-table-wrap">
      {title ? <div className="conj-title">{title}</div> : null}
      <table className="conj-table">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <td className="conj-label">{row.label}</td>
              <td className="conj-jp">
                {row.jp}
                {row.speakText ? (
                  <span style={{ marginLeft: 10, display: "inline-flex", verticalAlign: "middle" }}>
                    <HankoButton text={row.speakText} />
                  </span>
                ) : null}
              </td>
              <td className="conj-note">{row.note ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
