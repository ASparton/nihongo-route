import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import VocabGrid from "@/components/VocabGrid";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 12 · Leçon 2 — 気持ちを伝える一言",
  description:
    "Petites phrases de conversation et de politesse : すごい, おいしい, たのしかったです, ありがとうございました, et l'art de l'humilité polie, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 概観" },
  { id: "s2", label: "2 · 感動" },
  { id: "s3", label: "3 · 過去" },
  { id: "s4", label: "4 · 感謝" },
  { id: "s5", label: "5 · 謙遜" },
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
          <div className="eyebrow">最終週・サバイバル日本語 — 十二週目・二課</div>
          <h1 className="title">気持ちを伝える一言</h1>
          <div className="meta-line">Semaine 12 · Leçon 2 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Les petits mots qui font une conversation</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Après le kit de secours de la leçon 1, place aux phrases qui
            rendent une rencontre chaleureuse : s&apos;émerveiller,
            remercier, et savoir se montrer humble comme il se fait au
            Japon.
          </p>

          <VocabGrid
            items={[
              { jp: "すごい!", fr: "Incroyable !" },
              { jp: "おいしい!", fr: "C'est délicieux !" },
              { jp: "たのしかったです。", fr: "C'était amusant." },
              {
                jp: "ありがとうございました。",
                fr: "Merci (pour ce qui vient de se terminer).",
              },
              {
                jp: "すみません、にほんごが へたです。",
                fr: "Désolé(e), je ne suis pas doué(e) en japonais.",
              },
            ]}
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>S&apos;émerveiller à voix haute</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Deux exclamations que tu utiliseras sans doute plusieurs fois
            par jour au Japon — aucune grammaire nouvelle, juste des
            réflexes à automatiser.
          </p>

          <ExampleCard jp="すごい!" fr="Incroyable !" speakText="すごい!" />
          <p className="example-note">
            Marche pour un paysage, une technologie, une performance — un
            émerveillement général.
          </p>

          <ExampleCard jp="おいしい!" fr="C'est délicieux !" speakText="おいしい!" />
          <p className="example-note">
            Ce mot te suit depuis la semaine 2 — en exclamation seule, il
            devient le compliment le plus simple et le plus utile à table.
          </p>

          <Quiz
            promptFr="Tu goûtes un plat délicieux, que dis-tu spontanément ?"
            choices={["すごい!", "おいしい!", "たのしかったです。"]}
            answer="おいしい!"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Raconter un bon moment</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Le passé des adjectifs en い, vu en semaine 5, sert enfin à
            raconter la journée qui vient de se terminer.
          </p>

          <ExampleCard
            jp="たのしかったです。"
            fr="C'était amusant."
            speakText="たのしかったです。"
          />
          <p className="example-note">
            La formule idéale en fin de visite, de repas ou de sortie — un
            bilan positif tout fait.
          </p>

          <Quiz
            promptFr="Comment dit-on « c'était amusant » ?"
            choices={["たのしいです", "たのしかったです", "たのしくないです"]}
            answer="たのしかったです"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>ありがとう — la nuance du passé</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Une seule lettre change, et le sens se précise : ございます
            reste ouvert, ございました referme un moment qui vient de se
            terminer.
          </p>

          <ExampleCard
            jp="ありがとうございます。"
            fr="merci — pour quelque chose qui continue ou en général"
            speakText="ありがとうございます。"
          />
          <ExampleCard
            jp="ありがとうございました。"
            fr="merci — pour quelque chose qui vient de se terminer"
            speakText="ありがとうございました。"
          />
          <p className="example-note">
            En quittant un restaurant, un hôtel, ou après un service rendu :
            ございました. Pour remercier quelqu&apos;un qui est encore en
            train de t&apos;aider : ございます.
          </p>

          <Quiz
            promptFr="Tu quittes le restaurant après un bon repas, que dis-tu au personnel ?"
            choices={["ありがとうございます。", "ありがとうございました。"]}
            answer="ありがとうございました。"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>L&apos;humilité polie</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Une dernière phrase, très utile pour désamorcer une conversation
            qui va trop vite pour toi — et qui s&apos;accompagne d&apos;un
            vrai réflexe culturel à connaître avant le départ.
          </p>

          <ExampleCard
            jp="すみません、にほんごが へたです。"
            fr="Désolé(e), je ne suis pas doué(e) en japonais."
            speakText="すみません、日本語が下手です。"
          />
          <p className="example-note">
            Une phrase d&apos;humilité qui ouvre la porte à la patience de
            ton interlocuteur — et souvent à un sourire.
          </p>

          <div className="callout">
            <strong>Se rabaisser un peu, c&apos;est poli au Japon.</strong>{" "}
            Contrairement au réflexe occidental de se mettre en valeur, il
            est courant et bien vu de minimiser légèrement ses propres
            compétences (へたです, まだまだです...) même quand on se
            débrouille très bien. Dire にほんごが へたです après quelques
            phrases correctes ne sera jamais vu comme un mensonge : c&apos;est
            une marque de modestie attendue, pas un aveu d&apos;échec.
          </div>

          <Quiz
            promptFr="Après avoir bien parlé japonais, un serveur te complimente. Quelle réponse est la plus naturelle culturellement ?"
            choices={[
              "そうです、すごく上手です!",
              "いえいえ、まだ へたです。",
              "はい、天才です。",
            ]}
            answer="いえいえ、まだ へたです。"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Deux kanji du quotidien, utiles pour parler de chez soi et des
            gens qu&apos;on croise.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="家"
              reading="か / いえ"
              strokes={10}
              exampleWord="家"
              exampleReading="いえ"
              exampleFr="maison"
              speakText="いえ"
            />
            <KanjiCard
              kanji="会"
              reading="かい / あ"
              strokes={6}
              exampleWord="会う"
              exampleReading="あう"
              exampleFr="rencontrer"
              speakText="あう"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            か et かい reviennent dans des mots composés (家族 &laquo;famille&raquo;,
            会社 &laquo;entreprise&raquo;) ; seuls, retiens surtout いえ et
            あう.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 3</h2>
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
                S&apos;entraîner à choisir entre ありがとうございます et
                ありがとうございました selon la situation.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Répéter すみません、にほんごが へたです jusqu&apos;à ce
                qu&apos;elle sorte naturellement.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 家 et 会 avec leurs lectures jusqu&apos;à les
                reconnaître sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 12 · construite le 5 juillet 2026 — la leçon 3
          assemble tout ce qui a été appris dans le programme en une seule
          présentation complète.
        </footer>
      </div>
    </>
  );
}
