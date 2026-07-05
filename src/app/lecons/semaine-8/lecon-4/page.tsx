import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 8 · Leçon 4 — 総復習 (semaines 5 à 8)",
  description:
    "Grande révision des semaines 5 à 8 : adjectifs complets, comparaisons, ~がほしい/~をください, potentiel, ~たい, ~なければならない, ~てはいけない et ~てもいいですか.",
};

const STEPS = [
  { id: "s1", label: "1 · 形容詞" },
  { id: "s2", label: "2 · 欲求" },
  { id: "s3", label: "3 · 義務" },
  { id: "s4", label: "4 · 禁止許可" },
  { id: "s5", label: "5 · 総合" },
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
          <div className="eyebrow">総復習 — 八週目・四課</div>
          <h1 className="title">総復習：五週目から八週目まで</h1>
          <div className="meta-line">Semaine 8 · Leçon 4 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Adjectifs complets et comparaisons</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Retour sur les adjectifs い et な (formes complètes,
            négatives, et liaison ~くて/~で) ainsi que les comparaisons
            avec より, vus en semaine 5.
          </p>

          <ExampleCard
            jp="この まちは しずかで きれいです。"
            fr="Cette ville est calme et propre."
            speakText="この まちは しずかで きれいです。"
          />
          <ExampleCard
            jp="ふじさんは とうきょうタワーより 高いです。"
            fr="Le mont Fuji est plus haut que la tour de Tokyo."
            speakText="ふじさんは とうきょうタワーより 高いです。"
          />

          <Quiz
            promptFr="Comment dit-on « ce n'est pas cher » (い adjectif) ?"
            choices={["たかくないです", "たかじゃないです", "たかいないです"]}
            answer="たかくないです"
          />
          <Quiz
            promptFr="Quelle particule marque « plus... que » dans une comparaison ?"
            choices={["より", "から", "まで"]}
            answer="より"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Souhaits, demandes et capacités</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            ~がほしい (vouloir un objet), ~をください (demander poliment)
            et la forme potentielle (savoir/pouvoir faire) — tout ça vu en
            semaine 6.
          </p>

          <ExampleCard
            jp="水が ほしいです。"
            fr="Je voudrais de l'eau."
            speakText="水が ほしいです。"
          />
          <ExampleCard
            jp="水を ください。"
            fr="De l'eau, s'il vous plaît."
            speakText="水を ください。"
          />
          <ExampleCard
            jp="日本語が はなせます。"
            fr="Je sais parler japonais (potentiel de はなす)."
            speakText="日本語が はなせます。"
          />

          <Quiz
            promptFr="Comment demande-t-on poliment un objet au comptoir ?"
            choices={["___が ほしいです", "___を ください", "___が すきです"]}
            answer="___を ください"
          />
          <Quiz
            promptJp="日本語___ はなせます。"
            promptFr="Je sais parler japonais."
            choices={["を", "が", "に"]}
            answer="が"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Envies et obligations</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            ~たい (avoir envie de faire) et ~なければならない (devoir
            faire), vus en semaine 7.
          </p>

          <ExampleCard
            jp="すしを たべたいです。"
            fr="J'ai envie de manger des sushis."
            speakText="すしを たべたいです。"
          />
          <ExampleCard
            jp="はやく いかなければ なりません。"
            fr="Je dois y aller vite."
            speakText="はやく いかなければ なりません。"
          />
          <ExampleCard
            jp="はやく いかなきゃ。"
            fr="oral, contracté — faut que j'y aille vite"
            speakText="はやく いかなきゃ。"
          />

          <div className="callout">
            <strong>Usage réel — repère les contractions à l&apos;oral.</strong>{" "}
            Trois raccourcis à reconnaître d&apos;une oreille : ~なければ →
            ~なきゃ (obligation, semaine 7), ~てはいけない → ~ちゃだめ
            (interdiction, leçon 1), et では → じゃ (semaine 1). Ce sont
            les contractions que tu entendras le plus souvent en voyage —
            même si tu continues, toi, à écrire les formes complètes.
          </div>

          <Quiz
            promptFr="Comment dit-on « j'ai envie de manger des sushis » ?"
            choices={["すしを たべます", "すしを たべたいです", "すしが すきです"]}
            answer="すしを たべたいです"
          />
          <Quiz
            promptFr="Quelle est la version orale contractée de いかなければ なりません ?"
            choices={["いかなきゃ", "いかちゃだめ", "いかたい"]}
            answer="いかなきゃ"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Interdiction et permission</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            ~てはいけない (interdit) et ~てもいいですか (puis-je ?), vus
            cette semaine en leçons 1, 2 et 3.
          </p>

          <ExampleCard
            jp="しゃしんを とっては いけません。"
            fr="Il est interdit de prendre des photos."
            speakText="しゃしんを とっては いけません。"
          />
          <ExampleCard
            jp="ここに すわっても いいですか。"
            fr="Puis-je m'asseoir ici ?"
            speakText="ここに すわっても いいですか。"
          />

          <Quiz
            promptFr="Que répond-on pour refuser poliment, sans dire « non » directement ?"
            choices={["いいえ、だめです。", "すみません、ちょっと...。", "はい、いいですよ。"]}
            answer="すみません、ちょっと...。"
          />
          <Quiz
            promptFr="Quelle structure sert à dire qu'une action est interdite ?"
            choices={["~てもいいですか", "~てはいけません", "~たいです"]}
            answer="~てはいけません"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Synthèse — assemble les phrases</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Deux phrases de synthèse qui mélangent la grammaire des
            dernières semaines.
          </p>

          <h3 className="sub-heading">Comparaison + obligation</h3>
          <SentenceAssembler
            tiles={["これより", "あれの ほうが", "たかいです", "やすいです", "も"]}
            answer={["これより", "あれの ほうが", "たかいです"]}
            targetFr="Celui-là est plus cher que celui-ci."
          />

          <h3 className="sub-heading">Permission + interdiction</h3>
          <SentenceAssembler
            tiles={["ここでは", "しゃしんを", "とっては", "いけません", "います"]}
            answer={["ここでは", "しゃしんを", "とっては", "いけません"]}
            targetFr="Ici, il est interdit de prendre des photos."
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            前 et 後 — deux repères temporels et spatiaux, avec deux
            callbacks vers des semaines précédentes.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="前"
              reading="ぜん / まえ"
              strokes={9}
              exampleWord="午前"
              exampleReading="ごぜん"
              exampleFr="le matin, avant midi — callback semaine 4"
              speakText="ごぜん"
            />
            <KanjiCard
              kanji="後"
              reading="ご / うしろ"
              strokes={9}
              exampleWord="後で"
              exampleReading="あとで"
              exampleFr="plus tard"
              speakText="あとで"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            前 revient aussi dans 名前 (なまえ, le nom) — vu en semaine 6
            sans le kanji, et qu&apos;on peut désormais écrire en entier.
            後 se lit うしろ pour la position (derrière) et ご dans les
            mots composés comme 午後 (ごご, l&apos;après-midi, déjà vu en
            semaine 4).
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon suivante</h2>
            <span className="time">d&apos;ici 3 jours</span>
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
                Relire les 4 leçons de la semaine 8 et repérer ce qui reste
                flou.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Refaire les deux SentenceAssembler de synthèse sans
                indice.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 前 et 後 avec toutes leurs lectures (ぜん/まえ,
                ご/うしろ).
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 4 · semaine 8 · construite le 5 juillet 2026 — huit
          semaines de bases sont posées ; la suite se rapprochera encore du
          langage de voyage utile pour le départ du 25 septembre 2026.
        </footer>
      </div>
    </>
  );
}
