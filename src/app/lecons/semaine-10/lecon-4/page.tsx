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
  title: "Semaine 10 · Leçon 4 — Jeu de rôle konbini/marché et révision",
  description:
    "Révision de la semaine : négociation de prix, contractions orales et keigo de reconnaissance, réunis dans un jeu de rôle complet au konbini et au marché.",
};

const STEPS = [
  { id: "s1", label: "1 · 復習" },
  { id: "s2", label: "2 · 会話劇" },
  { id: "s3", label: "3 · 組み立て" },
  { id: "s4", label: "4 · まとめ" },
  { id: "s5", label: "5 · 漢字" },
];

const ROLEPLAY_LINES = [
  {
    who: "店員",
    jp: "いらっしゃいませ!",
    fr: "Bienvenue !",
  },
  {
    who: "客",
    jp: "すみません、これ、いくらですか。",
    fr: "Excusez-moi, ça coûte combien ?",
  },
  {
    who: "店員",
    jp: "少々 お待ちください... 五百円で ございます。",
    fr: "Un instant s'il vous plaît... Cela fait 500 yens.",
  },
  {
    who: "客",
    jp: "ちょっと 高いですね。もう少し 安く なりませんか。",
    fr: "C'est un peu cher, hein. Vous ne pourriez pas baisser un peu le prix ?",
  },
  {
    who: "店員",
    jp: "かしこまりました。四百五十円で いかがですか。",
    fr: "Bien entendu. 450 yens, ça vous va ?",
  },
  {
    who: "客",
    jp: "それに します!",
    fr: "Je prends ça !",
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
          <div className="eyebrow">コンビニ・市場のロールプレイ — 十週目・四課</div>
          <h1 className="title">
            Jeu de rôle konbini/marché et révision
          </h1>
          <div className="meta-line">Semaine 10 · Leçon 4 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Ce qu&apos;on révise</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Cette semaine a couvert trois choses très différentes, mais
            toutes essentielles pour le voyage : négocier un prix poliment,
            reconnaître les contractions orales les plus fréquentes, et
            comprendre le keigo des vendeurs sans avoir à le produire. Cette
            dernière leçon rassemble tout dans un vrai jeu de rôle.
          </p>

          <ExampleCard
            jp="ちょっと 高いですね。もう少し 安く なりませんか。"
            fr="rappel leçon 1 — c'est un peu cher, hein. Ça ne pourrait pas baisser un peu ?"
            speakText="ちょっと 高いですね。もう少し 安く なりませんか。"
          />
          <ExampleCard
            jp="行きたいんです。"
            fr="rappel leçon 2 — la nuance d'explication de んです."
            speakText="行きたいんです。"
          />
          <ExampleCard
            jp="かしこまりました。"
            fr="rappel leçon 3 — à reconnaître, pas à produire."
            speakText="かしこまりました。"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Jeu de rôle complet</h2>
            <span className="time">~9 min</span>
          </div>
          <p>
            Une scène de marchandage au marché, avec un vendeur qui parle en
            keigo et un client qui négocie. Écoute-la en entier, puis
            ligne par ligne — essaie de jouer la réplique du client
            (客) à voix haute, juste après l&apos;avoir entendue.
          </p>

          <Dialogue lines={ROLEPLAY_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Quel est le prix final obtenu par le client ?"
            choices={["450 yens", "500 yens", "400 yens"]}
            answer="450 yens"
          />
          <Quiz
            promptFr="Quelle formule marque que le vendeur va prendre un instant ?"
            choices={["少々 お待ちください", "いらっしゃいませ", "それに します"]}
            answer="少々 お待ちください"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Assemble tes répliques</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            À toi de reconstruire les phrases-clés du client, celles que tu
            devras vraiment savoir dire toi-même.
          </p>

          <SentenceAssembler
            tiles={["もう少し", "安く", "なりませんか", "高く", "です"]}
            answer={["もう少し", "安く", "なりませんか"]}
            targetFr="Pourriez-vous baisser un peu le prix ?"
          />
          <SentenceAssembler
            tiles={["ちょっと", "高いです", "ね", "か", "よ"]}
            answer={["ちょっと", "高いです", "ね"]}
            targetFr="C'est un peu cher, hein."
          />
          <SentenceAssembler
            tiles={["それ", "に", "します", "は", "でした"]}
            answer={["それ", "に", "します"]}
            targetFr="Je prends ça !"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Quiz mélangé — toute la semaine</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Un dernier tour pour vérifier que les trois sujets de la semaine
            sont bien en place, mélangés sans ordre particulier.
          </p>

          <Quiz
            promptFr="«On m'a dit que ce restaurant était bon» se raccourcit à l'oral en..."
            choices={["あの 店、おいしいって。", "あの 店、おいしいとく。", "あの 店、おいしいでございます。"]}
            answer="あの 店、おいしいって。"
          />
          <Quiz
            promptFr="Ce que dit un vendeur pour annoncer poliment un prix, c'est..."
            choices={["～で ございます", "～って", "～とく"]}
            answer="～で ございます"
          />
          <Quiz
            promptJp="ちょっと たかいです___。"
            promptFr="C'est un peu cher, hein."
            choices={["ね", "とく", "って"]}
            answer="ね"
          />
          <Quiz
            promptFr="食べられる à l'oral, en ら抜き言葉, devient..."
            choices={["食べれる", "食べとく", "食べって"]}
            answer="食べれる"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Les deux derniers kanji de couleurs de la série, pour clore la
            semaine.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="赤"
              reading="せき"
              strokes={7}
              exampleWord="赤"
              exampleReading="あか"
              exampleFr="le rouge"
              speakText="あか"
            />
            <KanjiCard
              kanji="青"
              reading="せい"
              strokes={8}
              exampleWord="青"
              exampleReading="あお"
              exampleFr="le bleu"
              speakText="あお"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            Avec 白・黒・雪・色 de cette semaine, tu as maintenant de quoi
            décrire couleurs et temps dans beaucoup de situations du
            quotidien — reste surtout sur les lectures あか, あお, しろ,
            くろ pour parler naturellement.
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
                Rejouer le dialogue complet du jeu de rôle en voix haute, en
                tenant le rôle du client (客) sans lire le texte.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Repasser en revue les 5 contractions orales de la leçon 2 —
                elles reviendront tout au long du voyage.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 赤 et 青 jusqu&apos;à reconnaître あか et あお sans
                hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 4 · semaine 10 · achats, oreille pour le langage parlé et
          keigo de reconnaissance — trois compétences directement utilisables
          dès le premier konbini du voyage.
        </footer>
      </div>
    </>
  );
}
