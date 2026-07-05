import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import Quiz from "@/components/Quiz";
import Dialogue from "@/components/Dialogue";
import VocabGrid from "@/components/VocabGrid";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 11 · Leçon 1 — Aéroport et contrôle des passeports",
  description:
    "Simulation complète du contrôle à l'arrivée : dialogue avec l'agent, vocabulaire de l'aéroport, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 到着" },
  { id: "s2", label: "2 · 会話" },
  { id: "s3", label: "3 · 理解" },
  { id: "s4", label: "4 · 応答" },
  { id: "s5", label: "5 · 語彙" },
  { id: "s6", label: "6 · 漢字" },
];

const DIALOGUE_LINES = [
  {
    who: "A",
    jp: "パスポートを みせて ください。",
    fr: "Montrez votre passeport, s'il vous plaît.",
  },
  {
    who: "B",
    jp: "はい、どうぞ。",
    fr: "Voici.",
  },
  {
    who: "A",
    jp: "りょこうの もくてきは なんですか。",
    fr: "Quel est le but de votre voyage ?",
  },
  {
    who: "B",
    jp: "かんこうです。",
    fr: "Le tourisme.",
  },
  {
    who: "A",
    jp: "どのくらい たいざいしますか。",
    fr: "Combien de temps allez-vous rester ?",
  },
  {
    who: "B",
    jp: "いっしゅうかんです。",
    fr: "Une semaine.",
  },
  {
    who: "A",
    jp: "わかりました。たのしんで くださいね。",
    fr: "Bien compris. Profitez bien de votre séjour.",
  },
];

export default function Lecon1() {
  return (
    <>
      <StepRail steps={STEPS} />
      <div className="page">
        <header className="lesson-head">
          <Link href="/" className="back-link">
            ← Retour au programme
          </Link>
          <div className="eyebrow">空港・入国審査 — 十一週目・一課</div>
          <h1 className="title">空港と入国審査</h1>
          <div className="meta-line">Semaine 11 · Leçon 1 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Tu y es</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Cette semaine, on ne voit plus de grammaire nouvelle : on
            enchaîne les situations réelles de ton voyage, avec tout ce que
            tu as déjà en poche. On commence là où commence vraiment tout
            séjour au Japon — la file du contrôle des passeports.
          </p>
          <p>
            Rien de nouveau dans les formes utilisées : que du て form + ください
            (見せて ください), des phrases en です que tu maîtrises depuis
            longtemps, et des questions simples. L&apos;enjeu aujourd&apos;hui
            est de les reconnaître à l&apos;oral, vite, sous un peu de stress.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Le contrôle à l&apos;arrivée</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Écoute le dialogue une première fois en entier, puis ligne par
            ligne pour répéter (shadowing). Imagine-toi vraiment dans la
            file, passeport en main.
          </p>

          <Dialogue lines={DIALOGUE_LINES} />

          <p className="example-note">
            みせて ください reprend simplement le て form que tu connais :
            &laquo;montre, s&apos;il te plaît&raquo;. C&apos;est la même
            construction que つかっても いいですか ou まって ください —
            aucune surprise, juste le bon réflexe à avoir sous la main.
          </p>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Vérifie ta compréhension</h2>
            <span className="time">~5 min</span>
          </div>
          <p>Trois questions en français sur ce que tu viens d&apos;entendre.</p>

          <Quiz
            promptFr="Quel document l'agent demande-t-il de montrer ?"
            choices={["Le billet d'avion", "Le passeport", "La carte de résident"]}
            answer="Le passeport"
          />
          <Quiz
            promptFr="Quel est le motif du voyage indiqué par le voyageur ?"
            choices={["Les affaires", "Le tourisme", "Les études"]}
            answer="Le tourisme"
          />
          <Quiz
            promptFr="Combien de temps le voyageur va-t-il rester ?"
            choices={["Un jour", "Une semaine", "Un mois"]}
            answer="Une semaine"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>La bonne réponse, au bon moment</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            L&apos;agent te pose une question à l&apos;oral — retrouve la
            réponse qui va avec, comme tu devras le faire en vrai, sans
            réfléchir trop longtemps.
          </p>

          <Quiz
            promptJp="りょこうの もくてきは なんですか。"
            choices={["かんこうです。", "いっしゅうかんです。", "はい、どうぞ。"]}
            answer="かんこうです。"
          />
          <Quiz
            promptJp="どのくらい たいざいしますか。"
            choices={["かんこうです。", "いっしゅうかんです。", "わかりました。"]}
            answer="いっしゅうかんです。"
          />
          <Quiz
            promptJp="パスポートを みせて ください。"
            choices={["はい、どうぞ。", "いっしゅうかんです。", "かんこうです。"]}
            answer="はい、どうぞ。"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Vocabulaire de l&apos;aéroport</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Trois mots que tu croiseras sur les panneaux et dans la file,
            juste après le contrôle des passeports.
          </p>
          <VocabGrid
            items={[
              { jp: "入国審査", fr: "contrôle d'entrée / immigration — にゅうこくしんさ" },
              { jp: "税関", fr: "douane — ぜいかん" },
              { jp: "荷物", fr: "bagages — にもつ" },
            ]}
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            On amorce aujourd&apos;hui un petit groupe thématique sur le
            corps humain, qui reviendra dans les prochaines leçons de la
            semaine.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="体"
              reading="からだ"
              strokes={7}
              exampleWord="体"
              exampleReading="からだ"
              exampleFr="le corps"
              speakText="からだ"
            />
            <KanjiCard
              kanji="手"
              reading="て"
              strokes={4}
              exampleWord="手"
              exampleReading="て"
              exampleFr="la main"
              speakText="て"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            体 et 手 ouvrent une petite série &laquo;le corps&raquo; : 足 et 目
            arriveront à la leçon 2, puis 口 et 耳 à la leçon 3 — six kanji
            très fréquents à collecter au fil de la semaine.
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
                Réécouter le dialogue du contrôle des passeports jusqu&apos;à
                pouvoir jouer les deux rôles sans regarder.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Répéter à voix haute パスポートを みせて ください et
                りょこうの もくてきは かんこうです jusqu&apos;à ce que ça
                sorte naturellement.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 体 et 手 jusqu&apos;à les reconnaître sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 11 · première situation réelle de la semaine — la
          leçon 2 t&apos;attend à la réception de l&apos;hôtel.
        </footer>
      </div>
    </>
  );
}
