import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import VocabGrid from "@/components/VocabGrid";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 6 · Leçon 3 — Décrire un lieu : vocabulaire de voyage",
  description:
    "Réutiliser くて/で pour décrire un lieu de voyage et distinguer おおい (nombreux) de おおきい (grand), avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 場所描写" },
  { id: "s2", label: "2 · くて/で" },
  { id: "s3", label: "3 · おおい/すくない" },
  { id: "s4", label: "4 · おおい ≠ おおきい" },
  { id: "s5", label: "5 · 語彙" },
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
          <div className="eyebrow">場所描写 — 六週目・三課</div>
          <h1 className="title">Décrire un lieu : vocabulaire de voyage</h1>
          <div className="meta-line">Semaine 6 · Leçon 3 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Parler d&apos;un endroit</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Même grammaire que la leçon 1, mais appliquée cette fois à des
            lieux : villes, quartiers, paysages. Tu vas en avoir besoin
            constamment pour raconter ton voyage.
          </p>
          <ExampleCard
            jp="しずかな 町です。"
            fr="C'est une ville calme."
            speakText="しずかな 町です。"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Rappel : くて / で pour décrire un lieu</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Exactement comme pour une personne (leçon 1), on enchaîne deux
            qualités d&apos;un lieu avec くて (adjectif en い) ou で (adjectif
            en な).
          </p>

          <ExampleCard
            jp="きれいな 景色です。"
            fr="C'est un beau paysage."
            speakText="きれいな 景色です。"
          />
          <p className="example-note">
            景色 (けいしき) : le paysage, la vue.
          </p>

          <ExampleCard
            jp="しずかで、きれいな 町です。"
            fr="C'est une ville calme et jolie."
            speakText="しずかで、きれいな 町です。"
          />
          <p className="example-note">
            しずか(だ) → <strong>しずかで</strong> — même transformation que
            きれいだ → きれいで en leçon 1.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <SentenceAssembler
            tiles={["しずかで", "きれいな", "町です", "しずかな"]}
            answer={["しずかで", "きれいな", "町です"]}
            targetFr="C'est une ville calme et jolie."
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>おおい / すくない — beaucoup / peu (de monde)</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Pour dire qu&apos;il y a beaucoup ou peu de monde (ou de choses)
            dans un lieu, on utilise おおい (nombreux) et すくない (peu
            nombreux), avec が pour le sujet compté.
          </p>

          <ExampleCard
            jp={<>ひとが おおいです。</>}
            fr="Il y a beaucoup de monde."
            speakText="ひとが おおいです。"
          />
          <ExampleCard
            jp={<>ひとが すくないです。</>}
            fr="Il y a peu de monde."
            speakText="ひとが すくないです。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Il y a beaucoup de monde."
            choices={["ひとが おおいです。", "ひとが すくないです。"]}
            answer="ひとが おおいです。"
          />
          <Quiz
            promptFr="Il y a peu de monde."
            choices={["ひとが おおいです。", "ひとが すくないです。"]}
            answer="ひとが すくないです。"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Le piège : おおい ≠ おおきい</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            おおい (nombreux) et おおきい (grand) se ressemblent à
            l&apos;oreille et à l&apos;écrit — c&apos;est une confusion très
            fréquente, même chez des apprenants avancés.
          </p>

          <div className="callout">
            <strong>おおい parle du nombre, おおきい parle de la taille.</strong>{" "}
            ひとが おおいです = &laquo;il y a beaucoup de gens&raquo;
            (nombre). この 町は おおきいです = &laquo;cette ville est
            grande&raquo; (taille). Les deux commencent par おお, mais ne se
            terminent pas pareil : おお<strong>い</strong> contre おお
            <strong>きい</strong>. Écoute bien la fin du mot.
          </div>

          <ExampleCard
            jp="この 町は おおきいです。"
            fr="Cette ville est grande. (taille — おおきい)"
            speakText="この 町は おおきいです。"
          />
          <ExampleCard
            jp="この 町は ひとが おおいです。"
            fr="Dans cette ville, il y a beaucoup de monde. (nombre — おおい)"
            speakText="この 町は ひとが おおいです。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="«Cette ville est grande» (taille) se dit avec..."
            choices={["おおきい", "おおい"]}
            answer="おおきい"
          />
          <Quiz
            promptFr="«Il y a beaucoup de monde» (nombre) se dit avec..."
            choices={["おおきい", "おおい"]}
            answer="おおい"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Vocabulaire de voyage</h2>
            <span className="time">~4 min</span>
          </div>
          <VocabGrid
            items={[
              { jp: "町", fr: "ville, quartier" },
              { jp: "景色", fr: "paysage, vue" },
              { jp: "しずか", fr: "calme, tranquille" },
              { jp: "にぎやか", fr: "animé, vivant" },
              { jp: "おおい", fr: "nombreux" },
              { jp: "すくない", fr: "peu nombreux" },
              { jp: "おおきい", fr: "grand (taille)" },
            ]}
          />

          <div className="callout seal">
            <strong>Usage réel.</strong> ひとが おおいですね (&laquo;il y a
            du monde, hein&raquo;) est une phrase que tu vas répéter presque
            tous les jours dans les rues de Tokyo ou près d&apos;un temple
            célèbre — c&apos;est la remarque la plus banale et la plus
            partagée entre voyageurs et locaux.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>Deux kanji qui vont de pair, très visibles partout (toilettes, panneaux...).</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="男"
              reading="おとこ"
              strokes={7}
              exampleWord="男の人"
              exampleReading="おとこのひと"
              exampleFr="un homme"
              speakText="おとこのひと"
            />
            <KanjiCard
              kanji="女"
              reading="おんな"
              strokes={3}
              exampleWord="女の人"
              exampleReading="おんなのひと"
              exampleFr="une femme"
              speakText="おんなのひと"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            <ruby>
              男<rt>だん</rt>
            </ruby>{" "}
            et{" "}
            <ruby>
              女<rt>じょ</rt>
            </ruby>{" "}
            sont les lectures qu&apos;on retrouve sur les panneaux de
            toilettes publiques (男性・女性) — utile à reconnaître d&apos;un
            coup d&apos;œil.
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
                Décrire 2 lieux (ta ville, un endroit visité) avec くて/で.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Répéter la paire おおい / おおきい à voix haute jusqu&apos;à
                ne plus les confondre à l&apos;oreille.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 男 et 女 jusqu&apos;à reconnaître 男の人 et 女の人 sans
                hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 6 · la leçon 4 rassemble tout : ほしい, ください
          et くて/で dans une seule conversation de boutique.
        </footer>
      </div>
    </>
  );
}
