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
  title: "Semaine 6 · Leçon 1 — Décrire une personne : くて・で",
  description:
    "Enchaîner deux qualités avec くて (adjectifs en い) et で (adjectifs en な) pour décrire quelqu'un, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 人物描写" },
  { id: "s2", label: "2 · くて" },
  { id: "s3", label: "3 · で" },
  { id: "s4", label: "4 · くて vs くない" },
  { id: "s5", label: "5 · 語彙" },
  { id: "s6", label: "6 · 漢字" },
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
          <div className="eyebrow">人物描写 — 六週目・一課</div>
          <h1 className="title">Décrire une personne : くて et で</h1>
          <div className="meta-line">Semaine 6 · Leçon 1 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Décrire quelqu&apos;un</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Tu sais déjà utiliser un adjectif seul, en い ou en な, pour
            décrire une personne.
          </p>
          <ExampleCard
            jp="あの 人は しんせつです。"
            fr="Cette personne est gentille."
            speakText="あの 人は しんせつです。"
          />
          <p>
            Mais comment dire &laquo;grand <strong>et</strong> plein
            d&apos;énergie&raquo;, ou &laquo;belle <strong>et</strong>
            gentille&raquo;, en une seule phrase ? C&apos;est tout le sujet de
            cette leçon.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Enchaîner deux adjectifs en い : くて</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Pour relier un adjectif en い à la suite de la phrase, on retire
            le い final et on ajoute くて. たかい (grand) devient
            たかくて — &laquo;il est grand, et...&raquo;
          </p>

          <ExampleCard
            jp="かれは たかくて、げんきです。"
            fr="Il est grand et plein d'énergie."
            speakText="かれは たかくて、げんきです。"
          />
          <p className="example-note">
            たかい → <strong>たかくて</strong> (on retire le い, on ajoute
            くて).
          </p>

          <ExampleCard
            jp="かのじょは やさしくて、おもしろいです。"
            fr="Elle est gentille et drôle."
            speakText="かのじょは やさしくて、おもしろいです。"
          />
          <p className="example-note">
            やさしい → <strong>やさしくて</strong>. Le deuxième adjectif, lui,
            garde sa forme normale en です à la fin.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="かれは たか___、げんきです。"
            promptFr="Il est grand et plein d'énergie."
            choices={["くて", "くない", "です"]}
            answer="くて"
          />
          <SentenceAssembler
            tiles={["かのじょは", "やさしくて", "おもしろいです", "やさしいです"]}
            answer={["かのじょは", "やさしくて", "おもしろいです"]}
            targetFr="Elle est gentille et drôle."
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Enchaîner un adjectif en な : で</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Pour un adjectif en な, c&apos;est encore plus simple : on retire
            だ et on ajoute で. きれいだ (joli, beau) devient きれいで.
          </p>

          <ExampleCard
            jp="かのじょは きれいで、やさしいです。"
            fr="Elle est belle et gentille."
            speakText="かのじょは きれいで、やさしいです。"
          />
          <p className="example-note">
            きれい(だ) → <strong>きれいで</strong>. Le deuxième adjectif peut
            être en い ou en な, peu importe : で ne change pas la suite de
            la phrase.
          </p>

          <ExampleCard
            jp="あの 先生は しんせつで、おもしろいです。"
            fr="Ce professeur est gentil et intéressant."
            speakText="あの 先生は しんせつで、おもしろいです。"
          />
          <p className="example-note">
            しんせつ(だ) → <strong>しんせつで</strong> — même logique.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="かのじょは きれい___、やさしいです。"
            promptFr="Elle est belle et gentille."
            choices={["で", "くて", "だ"]}
            answer="で"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Le piège : くて n&apos;est pas くない</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            くて et くない se ressemblent à l&apos;œil et se confondent
            facilement au début. Ce sont deux choses totalement différentes.
          </p>

          <div className="callout">
            <strong>くて enchaîne, くない nie.</strong> たかくて veut dire
            &laquo;il est grand, et...&raquo; (on continue la phrase). たかく
            <strong>ない</strong> veut dire &laquo;il n&apos;est pas
            grand&raquo; (négation, forme déjà vue en semaine 3). Le て et le
            ない se ressemblent visuellement — regarde bien laquelle des deux
            syllabes suit くand ne les mélange pas.
          </div>

          <ExampleCard
            jp="かれは たかくて、げんきです。"
            fr="Il est grand et plein d'énergie. (くて — on enchaîne)"
            speakText="かれは たかくて、げんきです。"
          />
          <ExampleCard
            jp="かれは たかくないです。"
            fr="Il n'est pas grand. (くない — négation)"
            speakText="かれは たかくないです。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="«Il est grand et plein d'énergie» se dit avec..."
            choices={["たかくて", "たかくない"]}
            answer="たかくて"
          />
          <Quiz
            promptFr="«Il n'est pas grand» se dit avec..."
            choices={["たかくて", "たかくない"]}
            answer="たかくない"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Vocabulaire — traits de personnalité</h2>
            <span className="time">~4 min</span>
          </div>
          <p>Quelques adjectifs utiles pour décrire les gens que tu vas rencontrer.</p>
          <VocabGrid
            items={[
              { jp: "やさしい", fr: "gentil(le), doux(ce)" },
              { jp: "きれい", fr: "beau/belle, joli(e)" },
              { jp: "げんき", fr: "plein(e) d'énergie, en forme" },
              { jp: "しんせつ", fr: "aimable, serviable" },
              { jp: "おもしろい", fr: "intéressant(e), drôle" },
              { jp: "たかい", fr: "grand(e) (taille)" },
            ]}
          />

          <div className="callout seal">
            <strong>Usage réel.</strong> Dans une conversation, tu entendras
            très souvent une personne décrite avec deux qualités enchaînées :
            &laquo;やさしくて、おもしろい人ですね&raquo; (&laquo;c&apos;est
            quelqu&apos;un de gentil et drôle, hein&raquo;) est le genre de
            phrase toute faite qui revient sans arrêt pour parler de
            quelqu&apos;un qu&apos;on vient de rencontrer.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Deux kanji très fréquents, qui se combinent aussi entre eux et
            avec un kanji déjà connu.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="先"
              reading="せん"
              strokes={6}
              exampleWord="先生"
              exampleReading="せんせい"
              exampleFr="professeur, enseignant"
              speakText="せんせい"
            />
            <KanjiCard
              kanji="生"
              reading="せい"
              strokes={5}
              exampleWord="先週"
              exampleReading="せんしゅう"
              exampleFr="la semaine dernière"
              speakText="せんしゅう"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            Remarque :{" "}
            <ruby>
              先週
              <rt>せんしゅう</rt>
            </ruby>{" "}
            réutilise le 週 de la semaine 1 (jour de la semaine / semaine).
            Retiens surtout{" "}
            <ruby>
              先生
              <rt>せんせい</rt>
            </ruby>{" "}
            — tu vas t&apos;en servir dès que tu voudras t&apos;adresser
            poliment à un professeur ou un médecin.
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
                Décrire 3 personnes que tu connais à voix haute avec くて ou
                で (ex : やさしくて、おもしろいです).
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Répéter à voix haute la paire たかくて / たかくない jusqu&apos;à
                bien sentir la différence.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 先 et 生 jusqu&apos;à reconnaître 先生 et 先週 sans
                hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 6 · le point du jour, くて/で, revient partout dès
          qu&apos;on décrit quelqu&apos;un ou quelque chose — la suite de la
          semaine s&apos;appuie directement sur lui.
        </footer>
      </div>
    </>
  );
}
