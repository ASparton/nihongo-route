import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import Dialogue from "@/components/Dialogue";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 8 · Leçon 3 — 美術館・お寺のルール",
  description:
    "Combiner ~てはいけない, ~てもいいですか et ~なければならない dans des situations réelles de visite au musée ou au temple au Japon.",
};

const STEPS = [
  { id: "s1", label: "1 · 復習" },
  { id: "s2", label: "2 · 会話" },
  { id: "s3", label: "3 · 理解" },
  { id: "s4", label: "4 · 応用" },
  { id: "s5", label: "5 · 漢字" },
];

const MUSEUM_LINES = [
  {
    who: "A",
    jp: "すみません、ここで しゃしんを とっても いいですか。",
    fr: "Excusez-moi, puis-je prendre des photos ici ?",
  },
  {
    who: "B",
    jp: "すみません、この中では とっては いけません。外では とっても いいですよ。",
    fr: "Désolé, à l'intérieur c'est interdit. Mais à l'extérieur, vous pouvez.",
  },
  {
    who: "A",
    jp: "わかりました。くつは ぬがなければ なりませんか。",
    fr: "D'accord. Dois-je enlever mes chaussures ?",
  },
  {
    who: "B",
    jp: "はい、ここで ぬいで ください。",
    fr: "Oui, enlevez-les ici, s'il vous plaît.",
  },
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
          <div className="eyebrow">実践会話 — 八週目・三課</div>
          <h1 className="title">美術館・お寺のルール</h1>
          <div className="meta-line">Semaine 8 · Leçon 3 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Trois structures, une seule situation</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Dans un musée ou un temple japonais, les trois structures
            vues récemment se combinent en permanence : ce qui est{" "}
            <strong>interdit</strong> (~てはいけない, leçon 1), ce que tu{" "}
            <strong>peux demander</strong> (~てもいいですか, leçon 2), et
            ce qui est <strong>obligatoire</strong> (~なければならない, vu
            en semaine 7 avec なきゃ à l&apos;oral). Cette leçon les met
            ensemble dans une seule scène réaliste, exactement le genre
            d&apos;échange que tu pourrais avoir à Kyoto ou à Tokyo.
          </p>

          <ExampleCard
            jp="とっては いけません。"
            fr="rappel — c'est interdit (leçon 1)"
            speakText="とっては いけません。"
          />
          <ExampleCard
            jp="とっても いいですか。"
            fr="rappel — puis-je ? (leçon 2)"
            speakText="とっても いいですか。"
          />
          <ExampleCard
            jp="ぬがなければ なりません。"
            fr="rappel — c'est obligatoire (semaine 7)"
            speakText="ぬがなければ なりません。"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Dialogue — à l&apos;entrée d&apos;un musée</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Un visiteur demande la permission de photographier, puis
            s&apos;informe sur les chaussures. Écoute le dialogue en
            entier, puis ligne par ligne pour répéter (shadowing).
          </p>

          <Dialogue lines={MUSEUM_LINES} />

          <p className="example-note">
            Remarque 中 (なか, dedans) et 外 (そと, dehors) dans la réponse
            de B — deux kanji qu&apos;on retrouve juste plus bas dans cette
            leçon.
          </p>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Vérifie ta compréhension</h2>
            <span className="time">~6 min</span>
          </div>

          <Quiz
            promptFr="Peut-on prendre des photos à l'intérieur du musée ?"
            choices={["Oui, sans problème", "Non, c'est interdit"]}
            answer="Non, c'est interdit"
          />
          <Quiz
            promptFr="Peut-on prendre des photos à l'extérieur ?"
            choices={["Oui", "Non"]}
            answer="Oui"
          />
          <Quiz
            promptFr="Le visiteur doit-il enlever ses chaussures ?"
            choices={["Oui, c'est obligatoire", "Non, c'est facultatif"]}
            answer="Oui, c'est obligatoire"
          />
          <Quiz
            promptJp="この中では とって___ いけません。"
            promptFr="À l'intérieur, c'est interdit de prendre (des photos)."
            choices={["は", "も", "が"]}
            answer="は"
          />
          <Quiz
            promptJp="くつは ぬが___ なりませんか。"
            promptFr="Dois-je enlever mes chaussures ?"
            choices={["なくては", "なければ", "なくても"]}
            answer="なければ"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Usage réel : anticiper les règles au Japon</h2>
            <span className="time">~5 min</span>
          </div>
          <div className="callout">
            <strong>Ces trois structures te suffiront presque partout.</strong>{" "}
            Dans un temple : くつを ぬがなければ なりません (chaussures
            obligatoires à enlever à l&apos;entrée de nombreux bâtiments).
            Dans un musée : しゃしんを とっては いけません (photos souvent
            interdites face aux œuvres, mais autorisées dans les couloirs
            ou jardins — d&apos;où l&apos;intérêt de demander
            とってもいいですか si un panneau n&apos;est pas clair). Le
            réflexe le plus utile en voyage : si tu n&apos;es pas sûr,
            demande poliment avec ~てもいいですか plutôt que de supposer.
          </div>
          <p>
            Un dernier réflexe pratique : à l&apos;oral détendu, tu
            entendras aussi くつ、ぬいでね (enlève tes chaussures, hein) —
            une version douce avec ね, sans même passer par
            なければならない, pour une simple consigne amicale.
          </p>
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            中 et 外 — un clin d&apos;œil direct au dialogue de cette leçon
            (この中では... / 外では...).
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="中"
              reading="ちゅう / なか"
              strokes={4}
              exampleWord="中"
              exampleReading="なか"
              exampleFr="dedans, l'intérieur"
              speakText="なか"
            />
            <KanjiCard
              kanji="外"
              reading="がい / そと"
              strokes={5}
              exampleWord="外"
              exampleReading="そと"
              exampleFr="dehors, l'extérieur"
              speakText="そと"
            />
          </div>
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
                Rejouer le dialogue du musée à voix haute, les deux rôles.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Redire de mémoire une phrase avec ~てはいけない, une avec
                ~てもいいですか, une avec ~なければならない.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 中 et 外 avec leurs lectures jusqu&apos;à les
                reconnaître sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 8 · construite le 5 juillet 2026 — la leçon 4
          referme la semaine avec une grande révision des semaines 5 à 8.
        </footer>
      </div>
    </>
  );
}
