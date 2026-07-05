import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 2 · Leçon 3 — 自己紹介",
  description:
    "Construire une présentation complète : 名前は～です, ～から来ました, ～に住んでいます, 趣味は～です, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 名前" },
  { id: "s2", label: "2 · 出身" },
  { id: "s3", label: "3 · 住所" },
  { id: "s4", label: "4 · 趣味" },
  { id: "s5", label: "5 · 会話体" },
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
          <div className="eyebrow">自分を語る — 二週目・三課</div>
          <h1 className="title">自己紹介</h1>
          <div className="meta-line">Semaine 2 · Leçon 3 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Se présenter par le nom</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Toute présentation japonaise commence par la même formule
            d&apos;ouverture, suivie du patron X は Y です que tu connais
            déjà.
          </p>

          <ExampleCard
            jp="はじめまして。わたしの 名前は アントワンです。"
            fr="Enchanté, je m'appelle Antoine."
            speakText="はじめまして。わたしの 名前は アントワンです。"
          />
          <p className="example-note">
            はじめまして s&apos;utilise seulement à la <strong>première</strong>{" "}
            rencontre — jamais si tu as déjà croisé la personne.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Dire d&apos;où l&apos;on vient</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            ～から来ました veut dire &laquo;je viens de～&raquo;. C&apos;est
            une forme polie passée du verbe 来る (venir) — pour
            l&apos;instant, apprends-la comme un bloc tout fait ; la
            conjugaison complète du passé arrivera en semaine 4.
          </p>

          <ExampleCard
            jp="フランスから 来ました。"
            fr="Je viens de France."
            speakText="フランスから 来ました。"
          />
          <p className="example-note">
            から marque le <strong>point de départ</strong> : フランス
            <strong>から</strong> = &laquo;depuis/de la France&raquo;.
          </p>

          <Quiz
            promptJp="フランス___ 来ました。"
            promptFr="Je viens de France."
            choices={["から", "に", "で"]}
            answer="から"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Dire où l&apos;on habite</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            ～に住んでいます veut dire &laquo;j&apos;habite à～&raquo;. Comme
            pour 来ました, retiens-le comme une expression toute faite pour
            l&apos;instant — la forme en ～ています complète sera étudiée en
            semaine 3.
          </p>

          <ExampleCard
            jp="パリに 住んでいます。"
            fr="J'habite à Paris."
            speakText="パリに 住んでいます。"
          />
          <p className="example-note">
            に marque ici le <strong>lieu où l&apos;on réside</strong> —
            même に que がっこうに いきます, mais avec un sens légèrement
            différent selon le verbe.
          </p>

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["わたしは", "フランスから", "来ました", "行きました"]}
            answer={["わたしは", "フランスから", "来ました"]}
            targetFr="Je viens de France."
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Parler de son hobby</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            趣味は～です suit exactement le patron X は Y です — rien de
            nouveau côté grammaire, juste du vocabulaire à placer.
          </p>

          <ExampleCard
            jp="しゅみは えいがです。"
            fr="Mon hobby, c'est le cinéma."
            speakText="しゅみは えいがです。"
          />
          <ExampleCard
            jp="どうぞ よろしく おねがいします。"
            fr="formule de clôture — « ravi de faire votre connaissance »"
            speakText="どうぞ よろしく おねがいします。"
          />
          <p className="example-note">
            どうぞ よろしく おねがいします clôture presque toujours une
            présentation formelle — retiens-la comme un bloc fixe.
          </p>

          <Quiz
            promptFr="Quelle phrase clôture une présentation formelle ?"
            choices={[
              "どうぞ よろしく おねがいします。",
              "フランスから 来ました。",
              "げんきです。",
            ]}
            answer="どうぞ よろしく おねがいします。"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>À l&apos;oral, ça se raccourcit</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Entre jeunes, la présentation formelle fond radicalement : on
            garde juste le prénom, suivi d&apos;un よろしく!, sans
            はじめまして ni おねがいします. Même こんにちは se contracte à
            l&apos;oral rapide.
          </p>

          <ExampleCard
            jp="はじめまして。わたしの 名前は ユキです。どうぞ よろしく おねがいします。"
            fr="présentation formelle complète"
            speakText="はじめまして。わたしの 名前は ユキです。どうぞ よろしく おねがいします。"
          />
          <ExampleCard
            jp="ユキです。よろしく!"
            fr="version ultra-courte entre jeunes"
            speakText="ユキです。よろしく!"
          />
          <ExampleCard
            jp="こんちわ!"
            fr="こんにちは à l'oral rapide, très familier"
            speakText="こんちわ!"
          />

          <div className="callout">
            <strong>Garde la version longue pour les adultes/inconnus.</strong>{" "}
            Mais chez les jeunes ou entre camarades de classe, [prénom]です
            + よろしく! suffit largement — et こんにちは devient souvent
            こんちわ.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Un kanji piège pour les francophones : 万 ne veut pas dire
            mille, mais dix mille.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="万"
              reading="まん"
              strokes={3}
              exampleWord="一万円"
              exampleReading="いちまんえん"
              exampleFr="dix mille yens"
              speakText="いちまんえん"
            />
            <KanjiCard
              kanji="円"
              reading="えん"
              strokes={4}
              exampleWord="一万円"
              exampleReading="いちまんえん"
              exampleFr="dix mille yens (le yen, l'unité monétaire)"
              speakText="いちまんえん"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            Piège classique : les francophones pensent en tranches de
            mille, les Japonais en tranches de <strong>万 (10 000)</strong>.
            一万円 = 10 000 yens, pas 1 000. Un gros billet japonais commence
            toujours par 万.
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
                Réciter ta propre présentation complète (nom, origine,
                lieu, hobby) sans regarder.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner à la version courte : [prénom]です。
                よろしく!
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 万 et 円 — bien vérifier que 万 = 10 000, pas 1 000.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 2 · construite le 5 juillet 2026 — la leçon 4
          fera le grand ménage : compteurs, particules, これ/それ/あれ et
          adjectifs, tous mélangés.
        </footer>
      </div>
    </>
  );
}
