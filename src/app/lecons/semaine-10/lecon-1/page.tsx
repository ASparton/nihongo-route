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
  title: "Semaine 10 · Leçon 1 — Achats et négociation de prix",
  description:
    "いくらですか, にします (rappel) et ~ね, puis もう少し安くなりませんか pour négocier poliment un prix, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · いくら" },
  { id: "s2", label: "2 · にします" },
  { id: "s3", label: "3 · ～ね" },
  { id: "s4", label: "4 · 値切り" },
  { id: "s5", label: "5 · 会話" },
  { id: "s6", label: "6 · 漢字" },
];

const MARKET_LINES = [
  {
    who: "A",
    jp: "この さいふ、いくらですか。",
    fr: "Ce portefeuille, combien ça coûte ?",
  },
  {
    who: "B",
    jp: "三千円です。",
    fr: "3000 yens.",
  },
  {
    who: "A",
    jp: "ちょっと 高いですね。もう少し 安く なりませんか。",
    fr: "C'est un peu cher, hein. Vous ne pourriez pas baisser un peu le prix ?",
  },
  {
    who: "B",
    jp: "うーん、じゃあ、二千五百円で どうですか。",
    fr: "Hmm, alors, 2500 yens, ça vous va ?",
  },
  {
    who: "A",
    jp: "はい、これに します!",
    fr: "Oui, je prends ça !",
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
          <div className="eyebrow">買い物と値切り — 十週目・一課</div>
          <h1 className="title">Achats et négociation de prix</h1>
          <div className="meta-line">Semaine 10 · Leçon 1 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>いくらですか — rappel</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            La question la plus utile de tout séjour au Japon : demander le
            prix. Tu l&apos;as déjà croisée, on la remet en jambes avant
            d&apos;aller plus loin cette semaine.
          </p>

          <ExampleCard
            jp="これは いくらですか。"
            fr="Combien ça coûte, ça ?"
            speakText="これは いくらですか。"
          />
          <ExampleCard
            jp="ぜんぶで いくらですか。"
            fr="Combien ça fait en tout ?"
            speakText="ぜんぶで いくらですか。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Comment demander «combien ça coûte, ça ?»"
            choices={["これは いくらですか。", "これは なんですか。", "これは だれですか。"]}
            answer="これは いくらですか。"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>にします — rappel</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Vu en semaine 9 : ~に します sert à annoncer ton choix, que ce soit
            au restaurant ou dans une boutique. Après avoir marchandé un peu
            plus bas dans cette leçon, c&apos;est exactement la phrase qui
            conclura l&apos;achat.
          </p>

          <ExampleCard
            jp="これに します。"
            fr="Je prends ça. (mon choix est fait)"
            speakText="これに します。"
          />
          <ExampleCard
            jp="やっぱり あれに します。"
            fr="Finalement, je prends celui-là."
            speakText="やっぱり あれに します。"
          />

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["これ", "に", "します", "は", "です"]}
            answer={["これ", "に", "します"]}
            targetFr="Je prends ça."
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>La particule ～ね</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            ね se colle en fin de phrase pour chercher un petit accord chez
            l&apos;interlocuteur — un peu comme &laquo;hein&raquo;,
            &laquo;n&apos;est-ce pas&raquo; ou &laquo;tu ne trouves
            pas ?&raquo;. C&apos;est une particule de complicité : tu invites
            l&apos;autre personne à confirmer ce que tu viens de dire.
          </p>

          <ExampleCard
            jp="ちょっと 高いですね。"
            fr="C'est un peu cher, hein."
            speakText="ちょっと 高いですね。"
          />
          <p className="example-note">
            En le disant avec ね, tu n&apos;affirmes pas juste un fait — tu
            invites le vendeur à réagir. C&apos;est souvent la première étape,
            douce, avant de demander une réduction.
          </p>

          <ExampleCard
            jp="いい 天気ですね。"
            fr="Il fait beau, n'est-ce pas."
            speakText="いい 天気ですね。"
          />
          <p className="example-note">
            ね fonctionne avec n&apos;importe quelle phrase déjà connue — il
            suffit de l&apos;ajouter à la fin, sans rien changer d&apos;autre.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="ちょっと たかいです___。"
            promptFr="C'est un peu cher, hein."
            choices={["ね", "か", "よ"]}
            answer="ね"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Négocier poliment : もう少し安くなりませんか</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Dans les petites boutiques et sur les marchés (moins souvent dans
            les grands magasins ou les konbini, où les prix sont fixes), on
            peut demander gentiment une réduction avec cette formule polie.
          </p>

          <ExampleCard
            jp="もう少し 安く なりませんか。"
            fr="Une petite réduction serait-elle possible ? (littéralement : est-ce que ça ne peut pas devenir un peu moins cher ?)"
            speakText="もう少し 安く なりませんか。"
          />
          <p className="example-note">
            もう少し = &laquo;un peu plus&raquo; ; 安く なりませんか reprend
            l&apos;adjectif 安い (bon marché) sous sa forme en く, suivi de
            なりませんか (&laquo;ça ne deviendrait pas...?&raquo;) — une
            question négative polie, donc particulièrement douce.
          </p>

          <div className="callout">
            <strong>Le combo gagnant.</strong> ちょっと 高いですね。 suivi de
            もう少し 安く なりませんか。 est l&apos;enchaînement classique
            pour marchander sans être brusque : on constate d&apos;abord
            (avec ね), puis on demande (poliment).
          </div>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="«Pourriez-vous baisser un peu le prix ?» se dit..."
            choices={[
              "もう少し 安く なりませんか。",
              "もう少し 高く なりませんか。",
              "これに します。",
            ]}
            answer="もう少し 安く なりませんか。"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Écoute — au marché</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Toute la leçon réunie dans une seule petite scène de marchandage.
            Écoute-la en entier, puis ligne par ligne.
          </p>

          <Dialogue lines={MARKET_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Quel est le prix annoncé au départ ?"
            choices={["2500 yens", "3000 yens", "500 yens"]}
            answer="3000 yens"
          />
          <Quiz
            promptFr="Le client obtient-il une réduction ?"
            choices={["Oui, à 2500 yens", "Non, le prix reste le même"]}
            answer="Oui, à 2500 yens"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Deux kanji très fréquents à l&apos;oral, qui reviennent tout le
            temps dans les petites conversations de tous les jours.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="気"
              reading="き"
              strokes={6}
              exampleWord="天気"
              exampleReading="てんき"
              exampleFr="le temps (météo) — rappel de la semaine 9, avec le kanji cette fois"
              speakText="てんき"
            />
            <KanjiCard
              kanji="雨"
              reading="う"
              strokes={8}
              exampleWord="雨"
              exampleReading="あめ"
              exampleFr="la pluie"
              speakText="あめ"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            Remarque : 雨 se lit う dans des mots composés (comme 雨天,
            &laquo;temps pluvieux&raquo;), mais tout seul, pour parler de la
            pluie au quotidien, c&apos;est la lecture あめ qu&apos;on utilise
            — retiens surtout celle-ci.
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
                Répéter à voix haute ちょっと 高いですね。 puis もう少し 安く
                なりませんか。 jusqu&apos;à ce que l&apos;enchaînement soit
                fluide.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Réécouter le dialogue du marché une dernière fois sans lire le
                texte, juste à l&apos;oreille.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 気 et 雨 jusqu&apos;à reconnaître 天気 et 雨 sans
                hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 10 · la leçon 2 part de ce vocabulaire d&apos;achat
          pour plonger dans le sujet le plus demandé : comment les Japonais
          raccourcissent vraiment leurs phrases à l&apos;oral.
        </footer>
      </div>
    </>
  );
}
