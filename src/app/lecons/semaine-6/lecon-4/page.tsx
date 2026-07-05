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
  title: "Semaine 6 · Leçon 4 — Conversation en boutique + révision",
  description:
    "Mini-dialogue de shopping et révision de ほしい/ください et くて/で, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 買い物" },
  { id: "s2", label: "2 · 会話" },
  { id: "s3", label: "3 · ほしい/ください" },
  { id: "s4", label: "4 · くて/で" },
  { id: "s5", label: "5 · 語彙" },
  { id: "s6", label: "6 · 漢字" },
];

const DIALOGUE_LINES = [
  {
    who: "A",
    jp: "いらっしゃいませ。何か お探しですか。",
    fr: "Bienvenue. Vous cherchez quelque chose en particulier ?",
  },
  {
    who: "B",
    jp: "この かばんが ほしいです。もっと 小さい かばんは ありますか。",
    fr: "Je voudrais ce sac. Avez-vous un sac plus petit ?",
  },
  {
    who: "A",
    jp: "はい、こちらは いかがですか。かるくて、きれいな 色ですよ。",
    fr: "Oui, que pensez-vous de celui-ci ? Il est léger et d'une jolie couleur.",
  },
  {
    who: "B",
    jp: "いいですね。これを ください。",
    fr: "Il est bien. Celui-ci, s'il vous plaît.",
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
          <div className="eyebrow">買い物実践 — 六週目・四課</div>
          <h1 className="title">Conversation en boutique + révision</h1>
          <div className="meta-line">Semaine 6 · Leçon 4 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Tout se rassemble</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Cette leçon réunit tout ce que tu as appris cette semaine dans un
            seul mini-dialogue de boutique : ほしい pour dire ce que tu veux,
            ください pour le demander, くて/で pour décrire l&apos;objet
            qu&apos;on te propose.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Écoute — dans une boutique</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Écoute le dialogue en entier une première fois, puis ligne par
            ligne pour répéter (shadowing).
          </p>

          <Dialogue lines={DIALOGUE_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Que veut B au départ ?"
            choices={["Le sac présenté", "Un sac plus petit", "Un sac plus grand"]}
            answer="Un sac plus petit"
          />
          <Quiz
            promptFr="Comment le vendeur décrit-il le nouveau sac ?"
            choices={[
              "たかくて、おおきい",
              "かるくて、きれいな 色",
              "しずかで、きれい",
            ]}
            answer="かるくて、きれいな 色"
          />
          <Quiz
            promptFr="Comment B termine-t-il la conversation ?"
            choices={["水が ほしいです。", "これを ください。", "たかくないです。"]}
            answer="これを ください。"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Révision : ほしい vs ください</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            が ほしいです exprime un souhait ; を ください formule une
            demande directe. Les deux se croisent tout le temps en boutique.
          </p>

          <ExampleCard
            jp="この かばんが ほしいです。"
            fr="Je veux ce sac. (souhait)"
            speakText="この かばんが ほしいです。"
          />
          <ExampleCard
            jp="これを ください。"
            fr="Celui-ci, s'il vous plaît. (demande)"
            speakText="これを ください。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="この かばん ___ ほしいです。"
            promptFr="Je veux ce sac."
            choices={["が", "を"]}
            answer="が"
          />
          <Quiz
            promptJp="これ ___ ください。"
            promptFr="Celui-ci, s'il vous plaît."
            choices={["が", "を"]}
            answer="を"
          />
          <SentenceAssembler
            tiles={["もっと", "小さい", "かばんは", "ありますか", "ほしいです"]}
            answer={["もっと", "小さい", "かばんは", "ありますか"]}
            targetFr="Avez-vous un sac plus petit ?"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Révision : くて / で</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Dernier rappel avant de tourner la page : い-adjectif → くて,
            な-adjectif → で. Attention à ne pas confondre くて avec la
            négation くない (leçon 1).
          </p>

          <ExampleCard
            jp="かるくて、きれいな 色ですよ。"
            fr="Il est léger et d'une jolie couleur."
            speakText="かるくて、きれいな 色ですよ。"
          />
          <p className="example-note">
            かるい → <strong>かるくて</strong> (い-adjectif) ; きれい(だ) →{" "}
            <strong>きれいな 色</strong> (な-adjectif utilisé ici pour
            qualifier directement 色, sans で car il n&apos;y a rien à
            enchaîner après).
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="かる___、きれいな 色です。"
            promptFr="Il est léger et d'une jolie couleur."
            choices={["くて", "くない", "で"]}
            answer="くて"
          />
          <SentenceAssembler
            tiles={["やさしくて", "きれいです", "やさしいです", "かのじょは"]}
            answer={["かのじょは", "やさしくて", "きれいです"]}
            targetFr="Elle est gentille et belle."
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Vocabulaire de boutique</h2>
            <span className="time">~4 min</span>
          </div>
          <VocabGrid
            items={[
              { jp: "いらっしゃいませ", fr: "bienvenue (dit par le vendeur)" },
              { jp: "お探しですか", fr: "vous cherchez quelque chose ?" },
              { jp: "小さい", fr: "petit" },
              { jp: "かるい", fr: "léger" },
              { jp: "色", fr: "couleur" },
              { jp: "いかがですか", fr: "que pensez-vous de... ? (poli)" },
            ]}
          />

          <div className="callout seal">
            <strong>Usage réel.</strong> いらっしゃいませ est le premier mot
            que tu entendras en entrant dans presque tout magasin ou
            restaurant au Japon — pas besoin de répondre, un simple signe de
            tête suffit.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>Deux kanji du quotidien, dont un premier kanji pour un mot que tu utilises depuis longtemps.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="子"
              reading="こ"
              strokes={3}
              exampleWord="女の子"
              exampleReading="おんなのこ"
              exampleFr="une fille"
              speakText="おんなのこ"
            />
            <KanjiCard
              kanji="名"
              reading="な"
              strokes={6}
              exampleWord="名前"
              exampleReading="なまえ"
              exampleFr="le nom (prénom + nom)"
              speakText="なまえ"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            Petit clin d&apos;œil : voilà enfin le kanji de{" "}
            <ruby>
              名前
              <rt>なまえ</rt>
            </ruby>{" "}
            — un mot que tu utilises depuis ta toute première leçon de
            présentation, toujours écrit en kana jusqu&apos;à aujourd&apos;hui.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la semaine suivante</h2>
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
                Rejouer le dialogue de boutique à voix haute, les deux rôles.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Réviser toute la semaine : くて/で, が ほしいです, を
                ください, おおい/おおきい.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir tous les kanji de la semaine (先生, 私, 友達, 男の人,
                女の人, 女の子, 名前).
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 4 · semaine 6 · dernière leçon avant de reprendre le fil avec
          des structures nouvelles — cette conversation de boutique doit
          devenir un automatisme complet.
        </footer>
      </div>
    </>
  );
}
