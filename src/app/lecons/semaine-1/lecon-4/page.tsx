import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 1 · Leçon 4 — あげる・くれる・もらう",
  description:
    "Donner et recevoir en japonais : la distinction あげる/くれる (le sens du don change avec le point de vue) et もらう (recevoir) — avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · あげる" },
  { id: "s2", label: "2 · くれる" },
  { id: "s3", label: "3 · もらう" },
  { id: "s4", label: "4 · 練習" },
  { id: "s5", label: "5 · 漢字" },
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
          <div className="eyebrow">基礎固め — 一週目・四課</div>
          <h1 className="title">あげる・くれる・もらう</h1>
          <div className="meta-line">Semaine 1 · Leçon 4 · ~30 minutes</div>
          <p style={{ fontSize: 13, marginTop: 6 }}>
            Trois verbes pour parler d&apos;un échange — très utiles en
            voyage (souvenirs, services rendus) et omniprésents dans les
            conversations japonaises au quotidien. On les utilise ici tels
            quels, en forme polie ; leur mécanique de conjugaison complète
            viendra avec les autres verbes à la semaine 3.
          </p>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>あげる — donner (loin de moi)</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            あげます s&apos;utilise quand quelqu&apos;un donne quelque chose à
            quelqu&apos;un d&apos;autre — le mouvement s&apos;éloigne du
            locuteur (« je donne à toi/à lui », ou « il donne à elle »).
          </p>
          <ExampleCard
            jp="わたしは これを あげます。"
            fr="Je donne/offre ceci (à quelqu'un d'autre)."
            speakText="わたしは これを あげます。"
          />
          <ExampleCard
            jp="おみやげを あげます。"
            fr="J'offre un souvenir."
            speakText="おみやげを あげます。"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>くれる — donner (vers moi)</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            くれます veut aussi dire « donner », mais uniquement quand le don
            arrive vers <strong>moi</strong> (ou mon groupe). C&apos;est la
            seule vraie difficulté de cette leçon : あげる et くれる traduisent
            tous les deux « donner » en français, mais le japonais distingue
            toujours qui reçoit.
          </p>
          <ExampleCard
            jp="せんせいが これを くれます。"
            fr="Le professeur me donne ceci."
            speakText="せんせいが これを くれます。"
          />

          <div className="callout">
            <strong>あげる vs くれる.</strong> 「わたしは あげます」(je donne à
            quelqu&apos;un d&apos;autre) et 「せんせいが くれます」(le
            professeur me donne, à moi) utilisent deux verbes différents pour
            ce qui serait la même phrase « donner » en français — le
            japonais encode toujours la direction du don.
          </div>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>もらう — recevoir</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            もらいます, c&apos;est le point de vue inverse : je reçois quelque
            chose (de quelqu&apos;un).
          </p>
          <ExampleCard
            jp="おみやげを もらいます。"
            fr="Je reçois un souvenir."
            speakText="おみやげを もらいます。"
          />
          <ExampleCard
            jp="せんせいから ほんを もらいます。"
            fr="Je reçois un livre du professeur."
            speakText="せんせいから ほんを もらいます。"
          />
          <p className="example-note">
            から marque la <strong>provenance</strong> : « de la part de ». On
            le reverra plus en détail plus tard, mais il est très naturel
            avec もらう.
          </p>
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>À toi</h2>
            <span className="time">~6 min</span>
          </div>
          <Quiz
            promptFr="Le professeur me donne un cadeau. Quel verbe ?"
            choices={["あげます", "くれます", "もらいます"]}
            answer="くれます"
          />
          <Quiz
            promptFr="J'offre un souvenir à un ami. Quel verbe ?"
            choices={["あげます", "くれます", "もらいます"]}
            answer="あげます"
          />
          <Quiz
            promptFr="Je reçois un cadeau. Quel verbe ?"
            choices={["あげます", "くれます", "もらいます"]}
            answer="もらいます"
          />
          <SentenceAssembler
            tiles={["せんせいから", "おみやげを", "もらいます", "あげます"]}
            answer={["せんせいから", "おみやげを", "もらいます"]}
            targetFr="Je reçois un souvenir du professeur."
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <div className="kanji-corner">
            <KanjiCard
              kanji="七"
              reading="なな"
              strokes={2}
              exampleWord="七時"
              exampleReading="しちじ"
              exampleFr="sept heures (lecture しち, pas ななじ)"
              speakText="しちじ"
            />
            <KanjiCard
              kanji="八"
              reading="はち"
              strokes={2}
              exampleWord="八人"
              exampleReading="はちにん"
              exampleFr="huit personnes"
              speakText="はちにん"
            />
          </div>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 1 de la semaine 2</h2>
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
                Redis à voix haute la différence あげる/くれる sur un exemple
                de ton choix.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">Revoir 七 et 八 avec leur lecture.</label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 4 · semaine 1 — fin de la semaine de révision/consolidation.
          La semaine 2 attaque les adjectifs い et な.
        </footer>
      </div>
    </>
  );
}
