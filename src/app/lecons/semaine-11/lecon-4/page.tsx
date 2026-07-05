import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 11 · Leçon 4 — Revoir ses points faibles",
  description:
    "Bilan personnalisé : un échantillon varié de particules, formes verbales, potentiel, obligation/interdiction, compteurs et vocabulaire de voyage pour repérer où tu bloques encore.",
};

const STEPS = [
  { id: "s1", label: "1 · Bilan" },
  { id: "s2", label: "2 · Base" },
  { id: "s3", label: "3 · Verbes" },
  { id: "s4", label: "4 · Terrain" },
  { id: "s5", label: "5 · Phrases" },
  { id: "s6", label: "6 · 漢字" },
];

export default function Lecon4() {
  return (
    <>
      <StepRail steps={STEPS} />
      <div className="page">
        <header className="lesson-head">
          <Link href="/" className="back-link">
            ← Retour au programme
          </Link>
          <div className="eyebrow">苦手なところを見直す — 十一週目・四課</div>
          <h1 className="title">苦手な ところを 見直す</h1>
          <div className="meta-line">Semaine 11 · Leçon 4 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Un bilan, pas une leçon</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Après trois semaines de situations réelles, chacun a accumulé
            ses propres petits trous — et ils ne sont jamais les mêmes
            d&apos;une personne à l&apos;autre. Cette leçon ne t&apos;apprend
            rien de nouveau : elle te fait traverser un échantillon large de
            toute la grammaire vue jusqu&apos;ici, pour que <em>tu</em>{" "}
            repères où ça coince encore.
          </p>
          <p>
            Ne cherche pas à tout réussir du premier coup. Note plutôt les
            questions où tu hésites : ce sont elles qui méritent une vraie
            révision cette semaine, pas les autres.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Les fondations : particules, て form, adjectifs</h2>
            <span className="time">~8 min</span>
          </div>

          <Quiz
            promptJp="レストラン ___ たべます。"
            promptFr="Je mange au restaurant. (lieu de l'action)"
            choices={["で", "に", "を"]}
            answer="で"
          />
          <Quiz
            promptJp="あさ ___、シャワーを あびます。"
            promptFr="Le matin, je me lève et je prends une douche. (て form)"
            choices={["おきて", "おきます", "おきる"]}
            answer="おきて"
          />
          <Quiz
            promptJp="この カレーは あまり ___。"
            promptFr="Ce curry n'est pas très épicé. (adjectif い, négatif)"
            choices={["からい", "からくない", "からかった"]}
            answer="からくない"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Pouvoir, devoir, interdire</h2>
            <span className="time">~8 min</span>
          </div>

          <Quiz
            promptJp="にほんごが すこし ___。"
            promptFr="Je peux parler un peu japonais. (potentiel)"
            choices={["はなせます", "はなします", "はなさない"]}
            answer="はなせます"
          />
          <Quiz
            promptJp="あした はやく おき ___。"
            promptFr="Je dois me lever tôt demain. (obligation)"
            choices={["なければなりません", "てもいいです", "てはいけません"]}
            answer="なければなりません"
          />
          <Quiz
            promptJp="ここで タバコを すって ___。"
            promptFr="Il est interdit de fumer ici. (interdiction)"
            choices={["いけません", "います", "あります"]}
            answer="いけません"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Le vocabulaire du terrain</h2>
            <span className="time">~6 min</span>
          </div>

          <Quiz
            promptJp="きっぷを いち ___ ください。"
            promptFr="Un billet, s'il vous plaît. (compteur pour objets plats)"
            choices={["まい", "ほん", "にん"]}
            answer="まい"
          />
          <Quiz
            promptFr="Comment demande-t-on l'addition au restaurant ?"
            choices={["おかいけい ください", "ごちゅうもんです", "いらっしゃいませ"]}
            answer="おかいけい ください"
          />
          <Quiz
            promptFr="Comment demande-t-on où se trouve la gare ?"
            choices={["えきは どこですか", "えきに いきました", "えきが あります"]}
            answer="えきは どこですか"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Assemble les phrases</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Deux phrases à reconstruire, pour vérifier que la grammaire
            tient debout une fois les mots mélangés.
          </p>

          <SentenceAssembler
            tiles={["わたしは", "にほんごが", "すこし", "はなせます", "はなします"]}
            answer={["わたしは", "にほんごが", "すこし", "はなせます"]}
            targetFr="Je peux parler un peu japonais."
          />
          <SentenceAssembler
            tiles={["ここで", "しゃしんを", "とっては", "いけません", "とります"]}
            answer={["ここで", "しゃしんを", "とっては", "いけません"]}
            targetFr="Il est interdit de prendre des photos ici."
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Deux kanji des transports pour clore la semaine — dont un mot
            que tu utilises en kana depuis la toute première leçon.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="車"
              reading="くるま"
              strokes={7}
              exampleWord="車"
              exampleReading="くるま"
              exampleFr="la voiture"
              speakText="くるま"
            />
            <KanjiCard
              kanji="駅"
              reading="えき"
              strokes={14}
              exampleWord="駅"
              exampleReading="えき"
              exampleFr="la gare"
              speakText="えき"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            えき t&apos;accompagne en kana depuis la semaine 1 — il était
            temps de fixer enfin son kanji, 駅, que tu recroiseras sur
            chaque panneau de gare une fois sur place.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon suivante</h2>
            <span className="time">d&apos;ici 2-3 jours</span>
          </div>
          <ul className="checklist">
            <li>
              <input type="checkbox" id="c1" />
              <label htmlFor="c1">
                Duolingo + jpdb, comme d&apos;habitude, tous les jours.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c2" />
              <label htmlFor="c2">
                Repérer les 2-3 quiz de cette leçon où tu as le plus hésité,
                et les refaire de mémoire demain.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Reprendre un point faible identifié aujourd&apos;hui dans une
                leçon précédente de ton choix.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 車 et 駅 jusqu&apos;à les reconnaître sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 4 · semaine 11 · fin de la semaine &laquo;situations
          réelles&raquo; — la suite s&apos;appuiera sur les points faibles
          que tu viens de repérer toi-même.
        </footer>
      </div>
    </>
  );
}
