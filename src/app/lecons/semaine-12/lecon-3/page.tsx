import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import Dialogue from "@/components/Dialogue";
import Quiz from "@/components/Quiz";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 12 · Leçon 3 — 最終自己紹介",
  description:
    "Assembler tout le programme en une présentation personnelle complète et fluide : nom, origine, résidence, qualité, hobby et envies au Japon, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 積み上げ" },
  { id: "s2", label: "2 · 自己紹介" },
  { id: "s3", label: "3 · カスタマイズ" },
  { id: "s4", label: "4 · 質問対策" },
  { id: "s5", label: "5 · 漢字" },
];

const INTRO_LINES = [
  {
    who: "わたし",
    jp: "はじめまして。わたしの名前はアントワンです。",
    fr: "Enchanté, je m'appelle Antoine.",
  },
  {
    who: "わたし",
    jp: "フランスから来ました。",
    fr: "Je viens de France.",
  },
  {
    who: "わたし",
    jp: "パリに住んでいます。",
    fr: "J'habite à Paris.",
  },
  {
    who: "わたし",
    jp: "わたしは あかるくて げんきです。",
    fr: "Je suis jovial(e) et plein(e) d'énergie.",
  },
  {
    who: "わたし",
    jp: "わたしの趣味は旅行です。",
    fr: "Mon hobby, c'est le voyage.",
  },
  {
    who: "わたし",
    jp: "日本で富士山を見たいです。",
    fr: "Je veux voir le Mont Fuji au Japon.",
  },
  {
    who: "わたし",
    jp: "おいしいものをたくさんたべたいです。",
    fr: "Je veux manger beaucoup de bonnes choses.",
  },
  {
    who: "わたし",
    jp: "どうぞよろしくおねがいします。",
    fr: "Ravi(e) de faire votre connaissance.",
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
          <div className="eyebrow">最終週・サバイバル日本語 — 十二週目・三課</div>
          <h1 className="title">最終自己紹介</h1>
          <div className="meta-line">Semaine 12 · Leçon 3 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Tout ce que tu sais déjà</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Cette leçon ne t&apos;apprend rien de nouveau — elle assemble.
            Le nom et はじめまして viennent de la semaine 2, ～から来ました
            et ～に住んでいます aussi. くて/で pour enchaîner deux qualités
            vient de la semaine 6, et ～たい pour dire ce qu&apos;on veut
            faire vient de la semaine 7. Aujourd&apos;hui, tout ça devient
            une seule présentation fluide, prête pour ton premier vrai
            échange au Japon.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>自己紹介 — enchaîne tout</h2>
            <span className="time">~10 min</span>
          </div>
          <p>
            Écoute la présentation en entier une première fois, puis
            phrase par phrase pour répéter chacune jusqu&apos;à ce
            qu&apos;elle sorte sans effort.
          </p>

          <Dialogue lines={INTRO_LINES} />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Personnalise ta présentation</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Le squelette reste identique : seuls quelques mots changent
            pour devenir vraiment le tien.
          </p>

          <div className="callout">
            <strong>Les cases à remplacer :</strong> アントワン (ton prénom),
            フランス (ton pays), パリ (ta ville), あかるくて げんきです (une
            ou deux qualités qui te ressemblent, avec くて pour les
            enchaîner), 旅行 (ton vrai hobby), 富士山 (le lieu que tu veux
            vraiment voir). Le reste — はじめまして, ～から来ました,
            ～に住んでいます, ～たいです, どうぞよろしくおねがいします —
            reste tel quel, quelle que soit la personne qui parle.
          </div>

          <p className="example-note">
            Réécris ta version dans un carnet ou une note de téléphone, et
            entraîne-toi à la dire sans lire — c&apos;est elle que tu
            utiliseras vraiment au Japon.
          </p>
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Anticiper les questions</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Une présentation, c&apos;est aussi un aller-retour : on te
            posera sûrement une de ces trois questions en retour.
            Vérifie que tu comprends bien ce qu&apos;on te demande.
          </p>

          <Quiz
            promptJp="名前は?"
            choices={[
              "Il/elle demande ton nom.",
              "Il/elle demande ton âge.",
              "Il/elle demande ta nationalité.",
            ]}
            answer="Il/elle demande ton nom."
          />
          <Quiz
            promptJp="出身は?"
            choices={[
              "Il/elle demande d'où tu viens.",
              "Il/elle demande où tu vas.",
              "Il/elle demande ton adresse.",
            ]}
            answer="Il/elle demande d'où tu viens."
          />
          <Quiz
            promptJp="趣味は?"
            choices={[
              "Il/elle demande ton hobby.",
              "Il/elle demande ta profession.",
              "Il/elle demande ton nom.",
            ]}
            answer="Il/elle demande ton hobby."
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour — enfin !</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Deux verbes que tu utilises depuis le tout début du programme,
            toujours en kana — ils reçoivent enfin leur kanji.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="話"
              reading="わ / はなす"
              strokes={13}
              exampleWord="話す"
              exampleReading="はなす"
              exampleFr="parler — callback constant depuis la semaine 3, qui a enfin son kanji"
              speakText="はなす"
            />
            <KanjiCard
              kanji="食"
              reading="しょく / た"
              strokes={9}
              exampleWord="食べる"
              exampleReading="たべる"
              exampleFr="manger — callback constant depuis la semaine 2, qui a enfin son kanji"
              speakText="たべる"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            Dans ta présentation plus haut, tu as écrit たべたい tout en
            kana — maintenant tu sais que ça peut aussi s&apos;écrire
            食べたい. Les deux se lisent exactement pareil.
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
                Écrire ta propre version personnalisée de la présentation.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                La réciter en entier, sans regarder, au moins trois fois.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 話 et 食 avec leurs lectures jusqu&apos;à les
                reconnaître sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 12 · construite le 5 juillet 2026 — la leçon 4
          referme le programme entier avec une fiche récap et un dernier
          mot avant le départ.
        </footer>
      </div>
    </>
  );
}
