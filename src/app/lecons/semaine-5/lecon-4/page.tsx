import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import Dialogue from "@/components/Dialogue";
import KanjiCard from "@/components/KanjiCard";
import VocabGrid from "@/components/VocabGrid";

export const metadata: Metadata = {
  title: "Semaine 5 · Leçon 4 — 場所を説明する",
  description:
    "Grande révision de la semaine : adjectifs い/な au complet et comparaisons, appliqués à décrire une ville ou un lieu de voyage.",
};

const STEPS = [
  { id: "s1", label: "1 · 語彙" },
  { id: "s2", label: "2 · 会話体" },
  { id: "s3", label: "3 · 活用" },
  { id: "s4", label: "4 · 比較" },
  { id: "s5", label: "5 · 口語" },
  { id: "s6", label: "6 · 漢字" },
];

const TRAVEL_LINES = [
  {
    who: "A",
    jp: "きょうとと おおさか、どっちが すき?",
    fr: "Entre Kyoto et Osaka, tu préfères laquelle ?",
  },
  {
    who: "B",
    jp: "きょうとの ほうが すきだな。とても きれいで、しずかだから。",
    fr: "Je préfère plutôt Kyoto. Parce que c'est très joli et calme.",
  },
  {
    who: "A",
    jp: "おおさかは きょうとより にぎやかじゃない?",
    fr: "Osaka n'est pas plus animée que Kyoto ?",
  },
  {
    who: "B",
    jp: "うん、にぎやかだけど、きょうとの ふるい 町の ほうが おもしろかったよ。",
    fr: "Si, elle est animée, mais la vieille ville de Kyoto était plus intéressante.",
  },
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
          <div className="eyebrow">形容詞を極める — 五週目・四課</div>
          <h1 className="title">場所を説明する</h1>
          <div className="meta-line">Semaine 5 · Leçon 4 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Vocabulaire de description</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Avant de tout assembler, un rappel des adjectifs qui servent
            justement à décrire une ville, une région ou un lieu.
          </p>

          <VocabGrid
            items={[
              { jp: "大きい", fr: "grand" },
              { jp: "たかい", fr: "cher / haut" },
              { jp: "ふるい", fr: "vieux, ancien" },
              { jp: "しずかだ", fr: "calme" },
              { jp: "にぎやかだ", fr: "animé, vivant" },
              { jp: "きれいだ", fr: "propre, joli" },
              { jp: "ゆうめいだ", fr: "célèbre" },
            ]}
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Écoute — Kyoto ou Osaka ?</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Un dialogue qui combine adjectifs い, adjectifs な et
            comparaisons — exactement ce qu&apos;on entend dans une vraie
            discussion de voyage. Écoute-le en entier, puis ligne par ligne.
          </p>

          <Dialogue lines={TRAVEL_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Quelle ville B préfère-t-il ?"
            choices={["Osaka", "Kyoto", "Aucune des deux"]}
            answer="Kyoto"
          />
          <Quiz
            promptFr="Selon B, Osaka est-elle animée ?"
            choices={["Oui", "Non"]}
            answer="Oui"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Révision — les activations complètes</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Retour sur les paradigmes des leçons 1 et 2, mélangés cette
            fois — à toi de retrouver la bonne forme.
          </p>

          <Quiz
            promptFr="Quelle est la forme « passé négatif » de ふるい (vieux) ?"
            choices={["ふるくない", "ふるかった", "ふるくなかった"]}
            answer="ふるくなかった"
          />
          <Quiz
            promptFr="Quelle est la forme « présent négatif » de にぎやかだ (animé) ?"
            choices={["にぎやかじゃない", "にぎやかくない", "にぎやかだった"]}
            answer="にぎやかじゃない"
          />
          <Quiz
            promptFr="Quelle est la forme « passé affirmatif » de しずかだ (calme) ?"
            choices={["しずかだった", "しずかじゃなかった", "しずかかった"]}
            answer="しずかだった"
          />
          <Quiz
            promptFr="Quelle est la forme « passé négatif » de いい (bien) ?"
            choices={["いくなかった", "よくなかった", "よかった"]}
            answer="よくなかった"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Révision — comparer un lieu</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            On réutilise より, の ほうが et いちばん pour parler de deux
            villes de ton futur voyage.
          </p>

          <ExampleCard
            jp="きょうとは おおさかより ふるいです。"
            fr="Kyoto est plus ancienne qu'Osaka."
            speakText="きょうとは おおさかより ふるいです。"
          />

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["きょうとは", "おおさかより", "ふるいです", "の ほうが"]}
            answer={["きょうとは", "おおさかより", "ふるいです"]}
            targetFr="Kyoto est plus ancienne qu'Osaka."
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Usage réel — demander un avis sur un lieu</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            En voyage, la question la plus utile pour lancer une discussion
            sur un lieu reste très simple.
          </p>

          <ExampleCard
            jp="この まちは どうですか。"
            fr="Comment est cette ville / ce quartier ?"
            speakText="この まちは どうですか。"
          />
          <ExampleCard
            jp="とても きれいですよ。"
            fr="C'est très joli, tu sais."
            speakText="とても きれいですよ。"
          />

          <div className="callout">
            <strong>Usage réel.</strong> この まちは どうですか est la
            question parfaite à poser à un local ou à un employé
            d&apos;hôtel pour obtenir une recommandation — elle marche pour
            un quartier, un restaurant ou même un plat.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>Deux kanji qui reviennent sans cesse dès qu&apos;on parle d&apos;étudier.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="学"
              reading="がく"
              strokes={8}
              exampleWord="学校"
              exampleReading="がっこう"
              exampleFr="école (clin d'œil à la semaine 1)"
              speakText="がっこう"
            />
            <KanjiCard
              kanji="校"
              reading="こう"
              strokes={10}
              exampleWord="大学"
              exampleReading="だいがく"
              exampleFr="université"
              speakText="だいがく"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            学 et 校 se retrouvent presque toujours ensemble : 学校 (école),
            大学 (université, litt. « grande étude »), 小学校 (école
            primaire). Les deux lectures がく et こう ne changent quasiment
            jamais.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la semaine 6</h2>
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
                Relire les 4 leçons de la semaine et repérer ce qui reste
                flou entre い et な adjectifs.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Décrire à voix haute deux villes que tu connais, en les
                comparant avec より et の ほうが.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 学 et 校 avec 学校 et 大学.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 4 · semaine 5 · construite le 5 juillet 2026 — la semaine 6
          s&apos;appuiera sur ces adjectifs et comparaisons pour aborder les
          formes en volonté et les invitations.
        </footer>
      </div>
    </>
  );
}
