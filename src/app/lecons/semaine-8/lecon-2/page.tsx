import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import Dialogue from "@/components/Dialogue";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 8 · Leçon 2 — ~てもいいですか : demander la permission",
  description:
    "Demander la permission avec ~てもいいですか, comprendre les réponses japonaises (はい、いいですよ / すみません、ちょっと...) et la nuance culturelle du refus indirect.",
};

const STEPS = [
  { id: "s1", label: "1 · 許可" },
  { id: "s2", label: "2 · 例文" },
  { id: "s3", label: "3 · 返事" },
  { id: "s4", label: "4 · 文化" },
  { id: "s5", label: "5 · 練習" },
  { id: "s6", label: "6 · 漢字" },
];

const PERMISSION_LINES = [
  {
    who: "A",
    jp: "すみません、まどを あけても いいですか。",
    fr: "Excusez-moi, puis-je ouvrir la fenêtre ?",
  },
  {
    who: "B",
    jp: "はい、いいですよ。",
    fr: "Oui, allez-y.",
  },
  {
    who: "A",
    jp: "トイレを つかっても いいですか。",
    fr: "Puis-je utiliser les toilettes ?",
  },
  {
    who: "B",
    jp: "すみません、ちょっと...。",
    fr: "Désolé, c'est un peu compliqué...",
  },
];

export default function Lecon2() {
  return (
    <>
      <StepRail steps={STEPS} />
      <div className="page">
        <header className="lesson-head">
          <Link href="/" className="back-link">
            ← Retour au programme
          </Link>
          <div className="eyebrow">許可表現 — 八週目・二課</div>
          <h1 className="title">~てもいいですか : demander la permission</h1>
          <div className="meta-line">Semaine 8 · Leçon 2 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Le pendant positif de ~てはいけない</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            En leçon 1, ~てはいけない servait à dire que quelque chose est{" "}
            <strong>interdit</strong>. Aujourd&apos;hui, la structure
            inverse : demander poliment si on <strong>a le droit</strong> de
            faire quelque chose.
          </p>
          <p>
            La formule : forme て + <strong>もいいですか</strong>{" "}
            (littéralement &laquo;même si je fais X, c&apos;est bien
            ?&raquo; → &laquo;puis-je... ?&raquo;). Très utile partout au
            Japon : chez quelqu&apos;un, dans un magasin, dans un temple.
          </p>

          <ExampleCard
            jp={
              <>
                しゃしんを とって<span className="p-mark">も</span>{" "}
                いいですか。
              </>
            }
            fr="Puis-je prendre une photo ?"
            speakText="しゃしんを とっても いいですか。"
          />
          <p className="example-note">
            Compare avec la leçon 1 : とっては いけません (interdit) vs
            とっても いいですか (puis-je ?). Même forme て, deux
            terminaisons opposées.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Trois situations très courantes</h2>
            <span className="time">~7 min</span>
          </div>

          <ExampleCard
            jp={
              <>
                ここに すわって<span className="p-mark">も</span> いいですか。
              </>
            }
            fr="Puis-je m'asseoir ici ?"
            speakText="ここに すわっても いいですか。"
          />
          <ExampleCard
            jp={
              <>
                まどを あけて<span className="p-mark">も</span> いいですか。
              </>
            }
            fr="Puis-je ouvrir la fenêtre ?"
            speakText="まどを あけても いいですか。"
          />
          <ExampleCard
            jp={
              <>
                トイレを つかって<span className="p-mark">も</span>{" "}
                いいですか。
              </>
            }
            fr="Puis-je utiliser les toilettes ?"
            speakText="トイレを つかっても いいですか。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Comment demande-t-on « puis-je m'asseoir ici ? » ?"
            choices={[
              "ここに すわっては いけません。",
              "ここに すわっても いいですか。",
              "ここに すわりません。",
            ]}
            answer="ここに すわっても いいですか。"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Répondre : accepter ou refuser</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Deux réponses types à connaître — une pour accepter, une pour
            refuser poliment.
          </p>

          <ExampleCard
            jp="はい、いいですよ。"
            fr="Oui, allez-y (accord simple et clair)."
            speakText="はい、いいですよ。"
          />
          <ExampleCard
            jp="すみません、ちょっと...。"
            fr="Désolé, un peu compliqué... (refus poli et indirect)."
            speakText="すみません、ちょっと...。"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Une nuance culturelle importante</h2>
            <span className="time">~5 min</span>
          </div>
          <div className="callout">
            <strong>「すみません、ちょっと...」 EST un refus.</strong> Au
            Japon, on refuse très rarement de façon frontale avec いいえ ou
            だめです. La phrase「すみません、ちょっと...」, laissée en
            suspens, volontairement vague, est une des façons les plus
            courantes de dire non tout en restant poli. Si on te répond
            ça, la réponse est <strong>non</strong> — insister serait perçu
            comme gênant. C&apos;est un des pièges culturels les plus
            fréquents pour les voyageurs : ne pas reconnaître un refus
            parce qu&apos;il ne contient jamais le mot &laquo;non&raquo;.
          </div>
          <p>
            À l&apos;inverse, いいですよ (avec le よ qui adoucit et
            confirme) est un accord franc et chaleureux — tu peux
            l&apos;utiliser toi-même quand on te demande une permission et
            que tu es d&apos;accord.
          </p>
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Écoute et pratique</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Un court échange qui montre les deux réponses possibles à la
            suite. Écoute-le en entier, puis ligne par ligne.
          </p>

          <Dialogue lines={PERMISSION_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Peut-on ouvrir la fenêtre, d'après le dialogue ?"
            choices={["Oui", "Non"]}
            answer="Oui"
          />
          <Quiz
            promptFr="Peut-on utiliser les toilettes, d'après le dialogue ?"
            choices={["Oui, sans problème", "Non, en réalité"]}
            answer="Non, en réalité"
          />

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["まどを", "あけて", "も", "いいですか", "います"]}
            answer={["まどを", "あけて", "も", "いいですか"]}
            targetFr="Puis-je ouvrir la fenêtre ?"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Deux positions opposées, utiles dans énormément de contextes
            (étages, tables, vêtements...).
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="上"
              reading="じょう / うえ"
              strokes={3}
              exampleWord="上"
              exampleReading="うえ"
              exampleFr="dessus, le haut"
              speakText="うえ"
            />
            <KanjiCard
              kanji="下"
              reading="か / した"
              strokes={3}
              exampleWord="下"
              exampleReading="した"
              exampleFr="dessous, le bas"
              speakText="した"
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
                Redire les trois exemples de permission (座る, 開ける,
                使う) sans regarder la traduction.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Retenir que「すみません、ちょっと...」 est un refus poli, pas
                une hésitation.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 上 et 下 avec leurs lectures jusqu&apos;à les
                reconnaître sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 8 · construite le 5 juillet 2026 — la leçon 3
          combine interdiction, permission et obligation dans des
          situations réelles de musée et de temple.
        </footer>
      </div>
    </>
  );
}
