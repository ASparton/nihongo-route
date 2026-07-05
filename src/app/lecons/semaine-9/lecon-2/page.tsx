import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import Dialogue from "@/components/Dialogue";
import KanjiCard from "@/components/KanjiCard";
import VocabGrid from "@/components/VocabGrid";

export const metadata: Metadata = {
  title: "Semaine 9 · Leçon 2 — Demander son chemin",
  description:
    "Demander son chemin et comprendre les indications de base (まがる, まっすぐ 行く), révision de ~てください appliqué aux directions, et la question à toujours avoir en tête dans les transports.",
};

const STEPS = [
  { id: "s1", label: "1 · 語彙" },
  { id: "s2", label: "2 · 道案内" },
  { id: "s3", label: "3 · 会話" },
  { id: "s4", label: "4 · 電車" },
  { id: "s5", label: "5 · 漢字" },
];

const STREET_LINES = [
  {
    who: "A",
    jp: "すみません、えきは どこですか。",
    fr: "Excusez-moi, où est la gare ?",
  },
  {
    who: "B",
    jp: "まっすぐ 行って、左に まがって ください。",
    fr: "Allez tout droit, puis tournez à gauche.",
  },
  {
    who: "A",
    jp: "わかりました。ありがとうございます。",
    fr: "Compris. Merci beaucoup.",
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
          <div className="eyebrow">道と乗り物 — 九週目・二課</div>
          <h1 className="title">道を聞く・交通</h1>
          <div className="meta-line">Semaine 9 · Leçon 2 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Vocabulaire de la route</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            De quoi demander et comprendre un chemin, à pied comme en
            transport.
          </p>
          <VocabGrid
            items={[
              { jp: "えき", fr: "gare" },
              { jp: "みち", fr: "chemin, route" },
              { jp: "まがる", fr: "tourner" },
              { jp: "まっすぐ", fr: "tout droit" },
              { jp: "でんしゃ", fr: "train" },
              { jp: "のりば", fr: "quai, embarcadère" },
            ]}
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Demander et comprendre son chemin</h2>
            <span className="time">~10 min</span>
          </div>
          <p>
            La question de base réutilise どこ (semaine 1). La réponse, elle,
            réutilise ~てください (semaine 3) : on demande poliment à
            quelqu&apos;un de faire une action — ici, tourner ou avancer.
          </p>

          <ExampleCard
            jp="すみません、えきは どこですか。"
            fr="Excusez-moi, où est la gare ?"
            speakText="すみません、えきは どこですか。"
          />
          <ExampleCard
            jp={
              <>
                まっすぐ <ruby>行<rt>い</rt></ruby>って、
                <ruby>右<rt>みぎ</rt></ruby>に まがって ください。
              </>
            }
            fr="Allez tout droit, puis tournez à droite."
            speakText="まっすぐ いって、みぎに まがって ください。"
          />
          <p className="example-note">
            まっすぐ 行く (aller tout droit) et まがる (tourner) se mettent
            tous les deux en ~て avant ください, exactement comme n&apos;importe
            quel autre verbe vu en semaine 3.
          </p>

          <ExampleCard
            jp={
              <>
                この <ruby>電車<rt>でんしゃ</rt></ruby>は{" "}
                <ruby>東京駅<rt>とうきょうえき</rt></ruby>に{" "}
                <ruby>行<rt>い</rt></ruby>きますか。
              </>
            }
            fr="Ce train va-t-il à la gare de Tokyo ?"
            speakText="この でんしゃは とうきょうえきに いきますか。"
          />
          <p className="example-note">
            Le même 行く réapparaît ici en forme polie normale (行きますか),
            pas en ~てください — on pose une question, on ne demande pas
            d&apos;action.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Comment demander « Où est la gare ? »"
            choices={["えきは どこですか。", "えきに 行きますか。", "えきを ください。"]}
            answer="えきは どこですか。"
          />
          <Quiz
            promptJp="右に まがって ___。"
            promptFr="Tournez à droite (forme polie)."
            choices={["ください", "します", "ほしいです"]}
            answer="ください"
          />
          <SentenceAssembler
            tiles={["まっすぐ", "行って", "左に", "まがって", "ください", "です"]}
            answer={["まっすぐ", "行って", "左に", "まがって", "ください"]}
            targetFr="Allez tout droit, puis tournez à gauche."
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Écoute — dans la rue</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Le mini-échange le plus utile de la semaine : demander son
            chemin et comprendre la réponse.
          </p>

          <Dialogue lines={STREET_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Qu'est-ce que la personne A cherche ?"
            choices={["La gare", "Le restaurant", "L'hôtel"]}
            answer="La gare"
          />
          <Quiz
            promptFr="Dans quelle direction faut-il tourner ?"
            choices={["À droite", "À gauche", "Tout droit seulement"]}
            answer="À gauche"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Le train : une question qui marche partout</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            この 電車は Xに 行きますか。 est une structure à retenir par
            cœur : elle fonctionne pour n&apos;importe quel transport et
            n&apos;importe quelle destination.
          </p>

          <ExampleCard
            jp={
              <>
                この バスは <ruby>新宿<rt>しんじゅく</rt></ruby>に{" "}
                <ruby>行<rt>い</rt></ruby>きますか。
              </>
            }
            fr="Ce bus va-t-il à Shinjuku ?"
            speakText="この バスは しんじゅくに いきますか。"
          />

          <div className="callout seal">
            <strong>Usage réel.</strong> Remplace 電車 par バス ou タクシー,
            et 東京駅 par n&apos;importe quel nom de lieu : c&apos;est LA
            question à avoir en tête à chaque quai, arrêt de bus ou station
            de taxi pendant tout le voyage.
          </div>

          <Quiz
            promptFr="Pour vérifier qu'un bus va bien vers Shinjuku, on dit..."
            choices={[
              "このバスは 新宿に 行きますか。",
              "新宿は どこですか。",
              "新宿に します。",
            ]}
            answer="このバスは 新宿に 行きますか。"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            東 est déjà croisé depuis le début dans 東京 — l&apos;occasion de
            l&apos;apprendre pour de bon. 内 servira dès qu&apos;il faudra
            comprendre ce qui se passe &laquo;à l&apos;intérieur&raquo;
            (d&apos;un train, d&apos;un bâtiment).
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="東"
              reading="とう / ひがし"
              strokes={8}
              exampleWord="東京"
              exampleReading="とうきょう"
              exampleFr="Tokyo — un rappel qui revient depuis le tout début !"
              speakText="とうきょう"
            />
            <KanjiCard
              kanji="内"
              reading="うち / ない"
              strokes={4}
              exampleWord="内側"
              exampleReading="うちがわ"
              exampleFr="l'intérieur — utile pour rester à l'intérieur du train avant le départ"
              speakText="うちがわ"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            東京 (とうきょう) est construit sur 東 (est) + 京 (capitale) —
            &laquo;la capitale de l&apos;est&raquo;. 内側 (うちがわ) est
            l&apos;annonce que tu entendras dans le métro : &laquo;ドアの
            内側&raquo;, à l&apos;intérieur des portes.
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
                Répéter まっすぐ 行って、右/左に まがって ください jusqu&apos;à
                le dire sans réfléchir.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Réutiliser このXは Yに 行きますか avec 3 destinations
                différentes.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 東 et 内 avec toutes leurs lectures.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 9 · construite le 5 juillet 2026 — cette
          question du train est probablement la phrase la plus utile de
          toute la semaine, à réviser jusqu&apos;à l&apos;automatisme.
        </footer>
      </div>
    </>
  );
}
