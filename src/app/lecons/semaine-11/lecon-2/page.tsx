import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import Dialogue from "@/components/Dialogue";
import VocabGrid from "@/components/VocabGrid";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 11 · Leçon 2 — L'arrivée à l'hôtel",
  description:
    "Simulation complète du check-in à l'hôtel : dialogue avec la réception, rappel de ています, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 到着" },
  { id: "s2", label: "2 · 会話" },
  { id: "s3", label: "3 · ています" },
  { id: "s4", label: "4 · 理解" },
  { id: "s5", label: "5 · 語彙" },
  { id: "s6", label: "6 · 漢字" },
];

const DIALOGUE_LINES = [
  {
    who: "A",
    jp: "いらっしゃいませ。",
    fr: "Bienvenue.",
  },
  {
    who: "B",
    jp: "よやくして います。なまえは スミスです。",
    fr: "J'ai une réservation. Mon nom est Smith.",
  },
  {
    who: "A",
    jp: "かしこまりました。パスポートを おねがいします。チェックインの おてつづきを します。",
    fr: "Bien compris. Votre passeport, s'il vous plaît. Je m'occupe de votre enregistrement.",
  },
  {
    who: "B",
    jp: "なんじに チェックアウトですか。",
    fr: "À quelle heure est le check-out ?",
  },
  {
    who: "A",
    jp: "じゅうじです。かぎは こちらです。",
    fr: "10 heures. Voici la clé.",
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
          <div className="eyebrow">ホテルのチェックイン — 十一週目・二課</div>
          <h1 className="title">ホテルの チェックイン</h1>
          <div className="meta-line">Semaine 11 · Leçon 2 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Après l&apos;aéroport, l&apos;hôtel</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Passeport tamponné, valise récupérée — direction l&apos;hôtel.
            La scène du check-in revient presque mot pour mot dans tous les
            hôtels du Japon : autant l&apos;avoir dans les jambes avant
            d&apos;y être vraiment.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>À la réception</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Écoute le dialogue en entier, puis reprends chaque ligne. Note
            que ton nom, en général en katakana, est la seule chose que tu
            improvises réellement dans cette scène.
          </p>

          <Dialogue lines={DIALOGUE_LINES} />

          <p className="example-note">
            À la place de スミス, glisse ton propre nom (en katakana) quand
            tu t&apos;entraînes à voix haute — c&apos;est la seule vraie
            variable de toute la scène.
          </p>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Rappel : よやくして います</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Tu as vu ています dès la semaine 3 pour une action en cours.
            Ici, elle marque autre chose : un <strong>état résultant</strong>{" "}
            d&apos;une action déjà faite. よやくしました (j&apos;ai réservé)
            décrit l&apos;action passée ; よやくして います décrit
            l&apos;état dans lequel elle te laisse maintenant — &laquo;je
            suis dans l&apos;état d&apos;avoir réservé&raquo;, c&apos;est-à-dire
            &laquo;j&apos;ai une réservation&raquo;.
          </p>

          <ExampleCard
            jp="よやくしました。"
            fr="J'ai fait la réservation. (l'action, dans le passé)"
            speakText="よやくしました。"
          />
          <ExampleCard
            jp="よやくして います。"
            fr="J'ai une réservation. (l'état, valable maintenant)"
            speakText="よやくして います。"
          />

          <div className="callout">
            <strong>Le même moule ailleurs.</strong> けっこんして います
            (je suis marié), すんで います (j&apos;habite [quelque part]) —
            même logique : une action passée dont l&apos;état continue
            aujourd&apos;hui.
          </div>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="よやく ___ います。"
            promptFr="J'ai une réservation."
            choices={["して", "します", "した"]}
            answer="して"
          />
          <SentenceAssembler
            tiles={["よやく", "して", "います", "しました", "なまえは"]}
            answer={["よやく", "して", "います"]}
            targetFr="J'ai une réservation."
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Vérifie ta compréhension</h2>
            <span className="time">~4 min</span>
          </div>
          <Quiz
            promptFr="Que demande la réceptionniste en premier après le nom ?"
            choices={["Le passeport", "La carte de crédit", "Le billet d'avion"]}
            answer="Le passeport"
          />
          <Quiz
            promptFr="À quelle heure est le check-out ?"
            choices={["9 heures", "10 heures", "12 heures"]}
            answer="10 heures"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Vocabulaire de la réception</h2>
            <span className="time">~4 min</span>
          </div>
          <VocabGrid
            items={[
              { jp: "予約", fr: "réservation — よやく" },
              { jp: "手続き", fr: "démarche, formalité — てつづき" },
              { jp: "鍵", fr: "clé — かぎ" },
              { jp: "チェックイン", fr: "enregistrement (arrivée)" },
              { jp: "チェックアウト", fr: "départ (fin de séjour)" },
            ]}
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            On continue la série &laquo;le corps&raquo; ouverte à la leçon 1
            avec 体 et 手.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="足"
              reading="あし"
              strokes={7}
              exampleWord="足"
              exampleReading="あし"
              exampleFr="le pied, la jambe"
              speakText="あし"
            />
            <KanjiCard
              kanji="目"
              reading="め"
              strokes={5}
              exampleWord="目"
              exampleReading="め"
              exampleFr="l'œil"
              speakText="め"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            体・手・足・目 : quatre kanji du corps déjà réunis. La leçon 3
            terminera la série avec 口 et 耳.
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
                Rejouer le dialogue du check-in en remplaçant スミス par ton
                propre nom en katakana.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Dire trois phrases avec ています pour un état résultant
                (よやくして います, すんで います...).
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 足 et 目, puis reprendre 体 et 手 pour ne pas les
                perdre.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 11 · deuxième situation réelle — la leçon 3
          t&apos;installe au restaurant, avec l&apos;allergie et
          l&apos;addition.
        </footer>
      </div>
    </>
  );
}
