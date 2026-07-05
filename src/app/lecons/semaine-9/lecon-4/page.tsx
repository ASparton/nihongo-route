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
  title: "Semaine 9 · Leçon 4 — Restaurant : jeu de rôle et révision",
  description:
    "Un dialogue complet au restaurant qui combine ~にします, les compteurs et le vocabulaire de directions vus cette semaine, plus une révision générale avant la semaine 10.",
};

const STEPS = [
  { id: "s1", label: "1 · 会話" },
  { id: "s2", label: "2 · 分析" },
  { id: "s3", label: "3 · にします" },
  { id: "s4", label: "4 · 数え方" },
  { id: "s5", label: "5 · 漢字" },
];

const FULL_SCENE_LINES = [
  {
    who: "A",
    jp: "いらっしゃいませ。何名様ですか。",
    fr: "Bienvenue. Vous êtes combien ?",
  },
  {
    who: "B",
    jp: "二人です。",
    fr: "Deux personnes.",
  },
  {
    who: "A",
    jp: "こちらへ どうぞ。ご注文は?",
    fr: "Par ici, s'il vous plaît. Vous commandez ?",
  },
  {
    who: "B",
    jp: "これと これを ください。あ、水も 二つ お願いします。",
    fr: "Ça et ça, s'il vous plaît. Ah, et deux eaux aussi, s'il vous plaît.",
  },
  {
    who: "A",
    jp: "かしこまりました。",
    fr: "Bien compris (très poli).",
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
          <div className="eyebrow">総復習ロールプレイ — 九週目・四課</div>
          <h1 className="title">レストランのロールプレイ + 復習</h1>
          <div className="meta-line">Semaine 9 · Leçon 4 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Écoute — la scène complète</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Toute la semaine réunie dans une seule scène : accueil,
            installation, commande, addition à venir. Écoute-la en entier
            plusieurs fois avant de la découper.
          </p>

          <Dialogue lines={FULL_SCENE_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Combien de personnes sont à table ?"
            choices={["Une", "Deux", "Trois"]}
            answer="Deux"
          />
          <Quiz
            promptFr="En plus des deux plats, qu'est-ce que le client commande ?"
            choices={["Du thé", "De l'eau", "Du café"]}
            answer="De l'eau"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Analyse de la scène</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Quatre expressions de ce dialogue à garder pour toi, au-delà du
            restaurant.
          </p>

          <ExampleCard
            jp="何名様ですか。"
            fr="Vous êtes combien ? (très poli, dit par le personnel)"
            speakText="何名様ですか。"
          />
          <p className="example-note">
            何名様 est la version polie de 何人 — tu ne l&apos;utiliseras
            jamais toi-même, mais tu vas l&apos;entendre partout.
          </p>

          <ExampleCard
            jp="こちらへ どうぞ。"
            fr="Par ici, s'il vous plaît."
            speakText="こちらへ どうぞ。"
          />
          <p className="example-note">
            へ marque la direction, comme に — utilisé ici pour guider
            physiquement quelqu&apos;un.
          </p>

          <ExampleCard
            jp="水も 二つ お願いします。"
            fr="Deux eaux aussi, s'il vous plaît."
            speakText="水も 二つ お願いします。"
          />
          <p className="example-note">
            も (aussi) + 二つ (compteur つ, semaine 2) + お願いします, une
            alternative à ください tout aussi courante.
          </p>

          <div className="callout seal">
            <strong>Usage réel.</strong> かしこまりました est le
            &laquo;compris !&raquo; ultra-poli du personnel de service au
            Japon — tu l&apos;entendras à chaque commande, dans un
            restaurant comme dans une boutique. Pas besoin de le dire
            toi-même, mais le reconnaître évite toute confusion.
          </div>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Révision — ~に します</h2>
            <span className="time">~5 min</span>
          </div>
          <p>Retour sur la décision face à un menu, vue en leçon 1.</p>

          <ExampleCard
            jp={
              <>
                てんぷら<span className="p-mark">に</span> します。
              </>
            }
            fr="Je prends le tempura."
            speakText="てんぷらに します。"
          />

          <Quiz
            promptFr="Devant deux plats sur le menu, tu choisis en disant..."
            choices={["これに します。", "これが ほしいです。", "これを ください。"]}
            answer="これに します。"
          />
          <Quiz
            promptJp="コーヒー ___ します。"
            promptFr="Je prends un café."
            choices={["が", "に", "は"]}
            answer="に"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Révision — compteurs et directions</h2>
            <span className="time">~5 min</span>
          </div>
          <p>Un mélange de toute la semaine pour bien tout fixer.</p>

          <Quiz
            promptFr="Pour deux billets de train, on dit..."
            choices={["二人", "二つ", "二枚"]}
            answer="二枚"
          />
          <Quiz
            promptFr="« Trois fois » se dit..."
            choices={["さんかい", "さんにん", "さんまい"]}
            answer="さんかい"
          />
          <Quiz
            promptFr="Pour dire « tournez à droite », on dit..."
            choices={["右に まがって ください。", "右に します。", "右が ほしいです。"]}
            answer="右に まがって ください。"
          />

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["水を", "二つ", "お願いします", "二人", "二枚"]}
            answer={["水を", "二つ", "お願いします"]}
            targetFr="De l'eau, deux s'il vous plaît."
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Les deux derniers kanji de la semaine — avec eux, les quatre
            points cardinaux (東西南北) sont au complet.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="北"
              reading="ほく / きた"
              strokes={5}
              exampleWord="北"
              exampleReading="きた"
              exampleFr="nord"
              speakText="きた"
            />
            <KanjiCard
              kanji="天"
              reading="てん"
              strokes={4}
              exampleWord="天気"
              exampleReading="てんき"
              exampleFr="météo, temps qu'il fait"
              speakText="てんき"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            東・西・南・北 : les quatre points cardinaux sont maintenant
            complets, très utiles pour lire un plan de métro. 天気 (てんき)
            reviendra sans arrêt une fois sur place — la météo est un sujet
            de conversation universel.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la semaine 10</h2>
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
                Rejouer la scène du restaurant à voix haute, en changeant
                les plats et le nombre de personnes.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Relire les 4 leçons de la semaine et repérer ce qui reste
                flou entre ~にします, ~がほしいです et les compteurs.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir les 8 kanji de la semaine (左右内東西南北天) jusqu&apos;à
                les reconnaître sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 4 · semaine 9 · construite le 5 juillet 2026 — la semaine
          10 continuera le langage du voyage en s&apos;appuyant sur tout ce
          qui vient d&apos;être consolidé ici : commander, se diriger et
          compter.
        </footer>
      </div>
    </>
  );
}
