import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 1 · Leçon 3 — どう・そう : réagir en japonais",
  description:
    "どうですか (comment tu trouves ça), そうです/そうですか (c'est ça / ah bon), なるほど (je vois) — les réactions les plus fréquentes d'une conversation japonaise, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · どう" },
  { id: "s2", label: "2 · そう" },
  { id: "s3", label: "3 · こう・ああ" },
  { id: "s4", label: "4 · 練習" },
  { id: "s5", label: "5 · 漢字" },
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
          <div className="eyebrow">基礎固め — 一週目・三課</div>
          <h1 className="title">どう・そう : réagir en japonais</h1>
          <div className="meta-line">Semaine 1 · Leçon 3 · ~25 minutes</div>
          <p style={{ fontSize: 13, marginTop: 6 }}>
            これ/それ/あれ (leçon 1) ont une suite : こう/そう/ああ/どう parlent
            de <strong>manière</strong> plutôt que d&apos;objet — « comme ça »,
            « comment ». Ce sont surtout そう et どう qui te serviront tout de
            suite, pour réagir dans une conversation.
          </p>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>どう — demander « comment »</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            どうですか sert à demander l&apos;avis ou l&apos;état de quelque
            chose — très utile pour proposer quelque chose ou demander un
            ressenti.
          </p>
          <ExampleCard
            jp="これは どうですか。"
            fr="Comment tu trouves ça ? / Qu'en dis-tu ?"
            speakText="これは どうですか。"
          />
          <ExampleCard
            jp="げんきですか。— どうも、げんきです。"
            fr="Ça va ? — Oui, très bien, merci."
            speakText="げんきですか。どうも、げんきです。"
          />
          <p className="example-note">
            どうも seul est aussi une petite formule de politesse toute faite
            (« merci », en plus léger que ありがとう).
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>そう — la réaction la plus utile de tout le japonais</h2>
            <span className="time">~9 min</span>
          </div>
          <p>
            そう veut dire « comme ça / ainsi ». Combiné à です/ですか, il
            devient la réaction la plus fréquente d&apos;une conversation
            japonaise — tu l&apos;entendras à chaque échange.
          </p>
          <ExampleCard
            jp="そうですか。"
            fr="Ah bon ? / Je vois. (tu apprends une information)"
            speakText="そうですか。"
          />
          <ExampleCard
            jp="そうですね。"
            fr="C'est vrai, tu as raison. (tu es d'accord — ね du cours précédent !)"
            speakText="そうですね。"
          />
          <ExampleCard
            jp="そう!そうそう!"
            fr="Exactement ! Voilà, voilà ! (registre familier, très courant)"
            speakText="そう!そうそう!"
          />
          <ExampleCard
            jp="なるほど。"
            fr="Je comprends, je vois. (quand une explication te devient claire)"
            speakText="なるほど。"
          />

          <div className="callout">
            <strong>そうですか vs そうですね.</strong> そうですか réagit à une
            information nouvelle (« ah bon, je ne savais pas »). そうですね
            réagit à une opinion en marquant ton accord (« oui, c&apos;est
            vrai »). Les confondre ne casse rien, mais les distinguer te fera
            sonner beaucoup plus naturel.
          </div>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>こう・ああ — compléter la série</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            こう (« comme ça, ici/comme je fais ») et ああ (« comme ça-là,
            comme ce qu&apos;on voit tous les deux ») sont moins fréquents que
            そう au quotidien, mais ils complètent la logique : これ/この/ここ/こう
            partagent tous le même こ- (proche de moi), それ/その/そこ/そう
            partagent そ- (proche de toi / dont on parle), あれ/あの/あそこ/ああ
            partagent あ- (loin des deux).
          </p>
          <ExampleCard
            jp="こう します。"
            fr="Je fais comme ça (en montrant)."
            speakText="こう します。"
          />
          <ExampleCard
            jp="ああ、そうですか。"
            fr="Ah, je vois. (ああ ici comme simple exclamation « ah »)"
            speakText="ああ、そうですか。"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>À toi</h2>
            <span className="time">~4 min</span>
          </div>
          <Quiz
            promptFr="Un ami te dit un fait que tu ne savais pas du tout. Tu réagis avec..."
            choices={["そうですか。", "そうですね。", "どうですか。"]}
            answer="そうですか。"
          />
          <Quiz
            promptFr="Un ami donne son avis et tu es complètement d'accord. Tu réagis avec..."
            choices={["そうですか。", "そうですね。", "なるほど。"]}
            answer="そうですね。"
          />
          <SentenceAssembler
            tiles={["これは", "どうですか", "そうですか", "。"]}
            answer={["これは", "どうですか", "。"]}
            targetFr="Comment tu trouves ça ?"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <div className="kanji-corner">
            <KanjiCard
              kanji="五"
              reading="ご"
              strokes={4}
              exampleWord="五分"
              exampleReading="ごふん"
              exampleFr="cinq minutes"
              speakText="ごふん"
            />
            <KanjiCard
              kanji="六"
              reading="ろく"
              strokes={4}
              exampleWord="六時"
              exampleReading="ろくじ"
              exampleFr="six heures"
              speakText="ろくじ"
            />
          </div>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 4</h2>
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
                Réagis mentalement avec そうですか ou そうですね la prochaine fois
                qu&apos;on te dit quelque chose, même en français.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">Revoir 五 et 六 avec leur lecture.</label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 1 — la leçon 4 termine la semaine avec
          あげる・くれる・もらう, donner et recevoir.
        </footer>
      </div>
    </>
  );
}
