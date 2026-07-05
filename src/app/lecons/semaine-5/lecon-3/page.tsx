import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 5 · Leçon 3 — 比較する",
  description:
    "Comparer deux choses en japonais : より, の ほうが et le superlatif いちばん, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · より" },
  { id: "s2", label: "2 · ほうが" },
  { id: "s3", label: "3 · いちばん" },
  { id: "s4", label: "4 · 口語" },
  { id: "s5", label: "5 · 練習" },
  { id: "s6", label: "6 · 漢字" },
];

export default function Lecon3() {
  return (
    <>
      <StepRail steps={STEPS} />
      <div className="page">
        <header className="lesson-head">
          <Link href="/" className="back-link">
            ← Retour au programme
          </Link>
          <div className="eyebrow">形容詞を極める — 五週目・三課</div>
          <h1 className="title">比較する</h1>
          <div className="meta-line">Semaine 5 · Leçon 3 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>より — plus ... que</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Pour comparer A à B, on place より juste après B : littéralement
            « A, plus que B, est ~ ». L&apos;adjectif garde sa forme normale,
            い ou な.
          </p>

          <ExampleCard
            jp={
              <>
                とうきょうは パリ<span className="p-mark">より</span>{" "}
                大きいです。
              </>
            }
            fr="Tokyo est plus grand que Paris."
            speakText="とうきょうは パリより 大きいです。"
          />
          <p className="example-note">
            L&apos;ordre est fixe : <strong>A は B より 形容詞</strong>. B より
            se place toujours avant l&apos;adjectif, jamais après.
          </p>

          <Quiz
            promptJp="ふじさんは この 山___ たかいです。"
            promptFr="Le Mont Fuji est plus haut que cette montagne."
            choices={["より", "の ほうが", "が"]}
            answer="より"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>の ほうが — plutôt, en comparant</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Quand on met en avant celui des deux qui gagne la comparaison
            (souvent en réponse à une question ou un choix), on utilise
            plutôt A の ほうが ~ です.
          </p>

          <ExampleCard
            jp={
              <>
                パリ<span className="p-mark">の ほうが</span> しずかです。
              </>
            }
            fr="Paris est plutôt le plus calme (des deux)."
            speakText="パリの ほうが しずかです。"
          />
          <p className="example-note">
            より met l&apos;accent sur le point de comparaison (B) ; の ほうが
            met l&apos;accent sur le gagnant de la comparaison (A). On peut
            même combiner les deux : パリの ほうが とうきょうより しずかです。
          </p>

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["パリの ほうが", "しずかです", "より", "パリより"]}
            answer={["パリの ほうが", "しずかです"]}
            targetFr="Paris est plutôt le plus calme."
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>いちばん — le superlatif</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Pour dire « le plus ~ parmi un groupe », on utilise
            N の 中で いちばん + adjectif. いちばん se place toujours
            juste devant l&apos;adjectif qu&apos;il renforce.
          </p>

          <div className="callout seal">
            <strong>Phrase-clé de la semaine.</strong>
            <ExampleCard
              jp="ふじさんは 日本で いちばん たかい 山です。"
              fr="Le Mont Fuji est la montagne la plus haute du Japon."
              speakText="ふじさんは 日本で いちばん たかい 山です。"
            />
            <p className="example-note" style={{ marginTop: 8 }}>
              日本<span className="p-mark">で</span> remplace ici の中で
              (dans un groupe défini par un lieu, で fonctionne aussi) —
              いちばん たかい précède directement 山, le nom qu&apos;il
              qualifie.
            </p>
          </div>

          <Quiz
            promptFr="Comment dit-on « le plus » avant un adjectif ?"
            choices={["いちばん", "ほうが", "より"]}
            answer="いちばん"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Usage réel — いちばん tout seul</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            À l&apos;oral, dans les magasins ou sur un menu, いちばん
            s&apos;utilise très souvent seul, comme un nom, sans répéter
            toute la structure de comparaison.
          </p>

          <ExampleCard
            jp="いちばん やすいのは これです。"
            fr="Le moins cher, c'est celui-ci."
            speakText="いちばん やすいのは これです。"
          />

          <div className="callout">
            <strong>Usage réel.</strong> Dans une boutique ou un konbini, tu
            peux demander directement : 「いちばん やすいのは どれですか。」
            (Lequel est le moins cher ?) — très naturel et parfaitement poli.
          </div>
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Pratique</h2>
            <span className="time">~5 min</span>
          </div>
          <p>Un mélange des trois structures vues aujourd&apos;hui.</p>

          <Quiz
            promptFr="Comment dit-on « Tokyo est plus grand que Paris » ?"
            choices={[
              "とうきょうは パリより 大きいです。",
              "とうきょうは パリの ほうが 大きいです。",
              "とうきょうは パリで いちばん 大きいです。",
            ]}
            answer="とうきょうは パリより 大きいです。"
          />
          <Quiz
            promptFr="Comment dit-on « le Mont Fuji est la montagne la plus haute du Japon » ?"
            choices={[
              "ふじさんは 日本より たかい 山です。",
              "ふじさんは 日本で いちばん たかい 山です。",
              "ふじさんの ほうが たかい 山です。",
            ]}
            answer="ふじさんは 日本で いちばん たかい 山です。"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>Deux kanji indispensables dès qu&apos;on parle de pays et de langue.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="国"
              reading="くに / こく"
              strokes={8}
              exampleWord="外国"
              exampleReading="がいこく"
              exampleFr="pays étranger"
              speakText="がいこく"
            />
            <KanjiCard
              kanji="語"
              reading="ご"
              strokes={14}
              exampleWord="日本語"
              exampleReading="にほんご"
              exampleFr="la langue japonaise"
              speakText="にほんご"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            国 se lit くに seul (この 国, ce pays), こく dans des mots
            composés comme 外国. 語, lui, se lit toujours ご et s&apos;ajoute
            après le nom d&apos;un pays pour désigner sa langue — 日本語, un
            clin d&apos;œil qui te suit depuis la leçon 1.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 4</h2>
            <span className="time">d&apos;ici 2 jours</span>
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
                Redire de mémoire ふじさんは 日本で いちばん たかい 山です
                sans hésiter.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner à comparer deux villes que tu connais avec
                より et の ほうが.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 国 et 語 avec leurs lectures.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 5 · construite le 5 juillet 2026 — la leçon 4
          réunit adjectifs et comparaisons pour décrire un lieu de voyage.
        </footer>
      </div>
    </>
  );
}
