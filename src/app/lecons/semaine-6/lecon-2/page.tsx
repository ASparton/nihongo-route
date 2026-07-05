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
  title: "Semaine 6 · Leçon 2 — 欲しい と ください",
  description:
    "Dire ce que l'on veut avec Nが ほしいです et demander poliment avec Nを ください, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · ほしい" },
  { id: "s2", label: "2 · Nが ほしい" },
  { id: "s3", label: "3 · Nを ください" },
  { id: "s4", label: "4 · ほしいな" },
  { id: "s5", label: "5 · 語彙" },
  { id: "s6", label: "6 · 漢字" },
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
          <div className="eyebrow">欲求と依頼 — 六週目・二課</div>
          <h1 className="title">欲しい と ください</h1>
          <div className="meta-line">Semaine 6 · Leçon 2 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Vouloir, demander</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Aujourd&apos;hui, deux tournures indispensables pour le voyage :
            dire ce que tu <strong>veux</strong> (ほしい), et demander
            poliment qu&apos;on te <strong>donne</strong> quelque chose
            (ください) — la phrase la plus utile de tout ton séjour dans les
            boutiques.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Nが ほしいです — je veux N</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            ほしい est un adjectif en い : il se comporte comme たかい ou
            やさしい. Le nom désiré est marqué par が, pas par を.
          </p>

          <ExampleCard
            jp={<>水<span className="p-mark">が</span> ほしいです。</>}
            fr="Je veux de l'eau."
            speakText="水が ほしいです。"
          />
          <p className="example-note">
            みず<strong>が</strong> ほしいです, pas みずを — retiens que
            ほしい prend toujours が.
          </p>

          <ExampleCard
            jp={<>新しい かばん<span className="p-mark">が</span> ほしいです。</>}
            fr="Je veux un nouveau sac."
            speakText="新しい かばんが ほしいです。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="水 ___ ほしいです。"
            promptFr="Je veux de l'eau."
            choices={["が", "を", "は"]}
            answer="が"
          />
          <SentenceAssembler
            tiles={["新しい", "かばんが", "ほしいです", "かばんを"]}
            answer={["新しい", "かばんが", "ほしいです"]}
            targetFr="Je veux un nouveau sac."
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Nを ください — donnez-moi N, s&apos;il vous plaît</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Pour demander directement qu&apos;on te donne quelque chose — en
            boutique, au restaurant, au konbini — on utilise を ください.
            C&apos;est une demande, pas juste l&apos;expression d&apos;un
            souhait.
          </p>

          <ExampleCard
            jp={<>この かばん<span className="p-mark">を</span> ください。</>}
            fr="Ce sac, s'il vous plaît."
            speakText="この かばんを ください。"
          />
          <p className="example-note">
            を ください marque ce qu&apos;on demande concrètement — la
            phrase la plus utile de ton voyage, à retenir par cœur.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="この かばん ___ ください。"
            promptFr="Ce sac, s'il vous plaît."
            choices={["を", "が", "に"]}
            answer="を"
          />
          <Quiz
            promptFr="Pour demander directement qu'on te donne quelque chose, on utilise..."
            choices={["Nが ほしいです", "Nを ください"]}
            answer="Nを ください"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>ほしいな — penser à voix haute</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            La particule finale な, ajoutée après ほしい, transforme la
            phrase en une pensée lâchée à voix haute, familière — plutôt
            qu&apos;une affirmation posée.
          </p>

          <ExampleCard
            jp="水が ほしいです。"
            fr="Je veux de l'eau. (affirmé, neutre/poli)"
            speakText="水が ほしいです。"
          />
          <ExampleCard
            jp="水が ほしいな。"
            fr="J'aimerais bien de l'eau... (à voix haute, familier)"
            speakText="水が ほしいな。"
          />

          <div className="callout seal">
            <strong>Usage réel.</strong> ほしいな, c&apos;est le petit
            soupir qu&apos;on lâche devant une vitrine ou un menu — &laquo;ça,
            j&apos;aimerais bien...&raquo;. Tu l&apos;entendras énormément
            entre amis ou en famille, jamais dans un contexte formel : c&apos;est
            une pensée qu&apos;on partage, pas une demande.
          </div>
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Vocabulaire</h2>
            <span className="time">~3 min</span>
          </div>
          <VocabGrid
            items={[
              { jp: "水", fr: "eau" },
              { jp: "かばん", fr: "sac" },
              { jp: "新しい", fr: "nouveau, neuf" },
              { jp: "お金", fr: "argent" },
              { jp: "時間", fr: "temps" },
            ]}
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Deux kanji très courants — 私 en particulier, un mot que tu
            utilises depuis la semaine 1, mais toujours écrit en kana jusqu&apos;ici.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="私"
              reading="わたし"
              strokes={7}
              exampleWord="私"
              exampleReading="わたし"
              exampleFr="moi, je"
              speakText="わたし"
            />
            <KanjiCard
              kanji="友"
              reading="とも"
              strokes={4}
              exampleWord="友達"
              exampleReading="ともだち"
              exampleFr="ami(e)"
              speakText="ともだち"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            <ruby>
              私<rt>わたし</rt>
            </ruby>{" "}
            se lit aussi し dans des mots très formels ou composés — pour
            l&apos;instant, retiens uniquement la lecture わたし.
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
                Dire 3 choses que tu veux avec が ほしいです, puis les
                redemander avec を ください.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Répéter を ください jusqu&apos;à ce que ça sorte sans
                réfléchir — tu en auras besoin dans chaque boutique.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 私 et 友 jusqu&apos;à reconnaître 私 et 友達 sans
                hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 6 · を ください sera probablement la phrase
          japonaise que tu prononceras le plus souvent une fois sur place.
        </footer>
      </div>
    </>
  );
}
