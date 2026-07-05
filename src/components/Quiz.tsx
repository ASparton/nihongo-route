"use client";

import { useState } from "react";

export default function Quiz({
  promptJp,
  promptFr,
  choices,
  answer,
}: {
  promptJp?: string;
  promptFr?: string;
  choices: string[];
  answer: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  const parts = promptJp ? promptJp.split("___") : null;

  return (
    <div className="quiz-q">
      {parts ? (
        <div className="prompt">
          {parts[0]}
          <span className="blank">{selected ?? "＿"}</span>
          {parts[1]}
        </div>
      ) : null}
      {promptFr ? <div className="prompt-fr">{promptFr}</div> : null}
      <div className="choices">
        {choices.map((choice) => (
          <button
            key={choice}
            type="button"
            className="choice-btn"
            disabled={selected !== null}
            onClick={() => setSelected(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      {selected !== null ? (
        <div className="feedback">
          <span
            key={selected}
            className={`stamp ${selected === answer ? "stamp-correct" : "stamp-wrong"}`}
          >
            {selected === answer ? "○" : "✕"}
          </span>
          {selected !== answer ? (
            <span className="hint">réponse : {answer}</span>
          ) : null}
        </div>
      ) : (
        <div className="feedback" />
      )}
    </div>
  );
}
