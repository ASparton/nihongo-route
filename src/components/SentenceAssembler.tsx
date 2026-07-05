"use client";

import { useState } from "react";

type Tile = { id: number; text: string };

function shuffle(items: Tile[]): Tile[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function SentenceAssembler({
  tiles,
  answer,
  targetFr,
}: {
  tiles: string[];
  answer: string[];
  targetFr: string;
}) {
  const [bank, setBank] = useState<Tile[]>(() =>
    shuffle(tiles.map((text, id) => ({ id, text })))
  );
  const [strip, setStrip] = useState<Tile[]>([]);
  const [result, setResult] = useState<"idle" | "correct" | "wrong">("idle");
  const locked = result === "correct";

  function moveToStrip(tile: Tile) {
    if (locked) return;
    setBank((b) => b.filter((t) => t.id !== tile.id));
    setStrip((s) => [...s, tile]);
    setResult("idle");
  }

  function moveToBank(tile: Tile) {
    if (locked) return;
    setStrip((s) => s.filter((t) => t.id !== tile.id));
    setBank((b) => [...b, tile]);
    setResult("idle");
  }

  function check() {
    const current = strip.map((t) => t.text);
    const correct =
      current.length === answer.length &&
      current.every((v, i) => v === answer[i]);
    setResult(correct ? "correct" : "wrong");
  }

  function reset() {
    setBank((b) => shuffle([...b, ...strip]));
    setStrip([]);
    setResult("idle");
  }

  return (
    <div className="assembler">
      <div className="target-fr">Cible : &laquo; {targetFr} &raquo;</div>
      <div className="strip-label">réponse</div>
      <div className="answer-strip">
        {strip.map((tile) => (
          <button
            key={tile.id}
            type="button"
            className="tile"
            disabled={locked}
            onClick={() => moveToBank(tile)}
          >
            {tile.text}
          </button>
        ))}
      </div>
      <div className="strip-label">pièces disponibles</div>
      <div className="bank">
        {bank.map((tile) => (
          <button
            key={tile.id}
            type="button"
            className="tile"
            disabled={locked}
            onClick={() => moveToStrip(tile)}
          >
            {tile.text}
          </button>
        ))}
      </div>
      <div className="assembler-controls">
        <button type="button" className="btn-line primary" onClick={check}>
          Vérifier
        </button>
        <button type="button" className="btn-line" onClick={reset}>
          Réinitialiser
        </button>
      </div>
      {result !== "idle" ? (
        <div className="feedback">
          <span key={result} className={`stamp ${result === "correct" ? "stamp-correct" : "stamp-wrong"}`}>
            {result === "correct" ? "○" : "✕"}
          </span>
          {result === "wrong" ? (
            <span className="hint">réordonne les pièces et réessaie</span>
          ) : null}
        </div>
      ) : (
        <div className="feedback" />
      )}
    </div>
  );
}
