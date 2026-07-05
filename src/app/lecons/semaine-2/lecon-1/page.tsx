import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 2 · Leçon 1 — い形容詞入門",
  description:
    "Les adjectifs en い : forme affirmative, négative, placement devant un nom, et le cas irrégulier いい/よくない, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · い形" },
  { id: "s2", label: "2 · 否定" },
  { id: "s3", label: "3 · 名詞前" },
  { id: "s4", label: "4 · いい" },
  { id: "s5", label: "5 · 会話体" },
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
          <div className="eyebrow">形容詞の世界 — 二週目・一課</div>
          <h1 className="title">い形容詞入門</h1>
          <div className="meta-line">Semaine 2 · Leçon 1 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Les adjectifs en い</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            En japonais, une grande famille d&apos;adjectifs se termine par
            い. Ils se comportent presque comme un verbe : ils peuvent
            porter la phrase tout seuls, avec です pour la politesse.
          </p>

          <ExampleCard
            jp="この ラーメンは おいしいです。"
            fr="Ce ramen est délicieux."
            speakText="この ラーメンは おいしいです。"
          />
          <ExampleCard
            jp="あの ホテルは たかいです。"
            fr="Cet hôtel est cher."
            speakText="あの ホテルは たかいです。"
          />
          <p className="example-note">
            たかい veut dire à la fois <strong>cher</strong> et{" "}
            <strong>haut</strong> — le contexte tranche.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>La forme négative</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Pour nier un adjectif en い, on enlève le い final et on ajoute{" "}
            くないです. Simple et régulier — sauf une exception qu&apos;on
            verra plus bas.
          </p>

          <ExampleCard
            jp="これは やすくないです。"
            fr="Ce n'est pas bon marché."
            speakText="これは やすくないです。"
          />
          <p className="example-note">
            やすい (bon marché) → やす<strong>くない</strong>です. On garde
            la racine やす et on colle くないです.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="この コーヒーは たか___です。"
            promptFr="Ce café n'est pas cher."
            choices={["くない", "じゃない", "ない"]}
            answer="くない"
          />
          <Quiz
            promptFr="Comment dit-on « ce n'est pas bon marché » ?"
            choices={["やすいです", "やすくないです", "やすじゃないです"]}
            answer="やすくないです"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Devant un nom</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Un い adjectif se place directement avant le nom qu&apos;il
            décrit, sans aucune particule entre les deux.
          </p>

          <ExampleCard
            jp="とうきょうは おおきい 町です。"
            fr="Tokyo est une grande ville."
            speakText="とうきょうは おおきい 町です。"
          />
          <p className="example-note">
            おおきい 町 = &laquo;grande ville&raquo;. Compare avec 町は
            おおきいです (la ville est grande) : même sens, structure
            différente.
          </p>

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["とうきょうは", "おおきい", "町です", "たかい"]}
            answer={["とうきょうは", "おおきい", "町です"]}
            targetFr="Tokyo est une grande ville."
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Le piège いい</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            いい (bien, bon) est le seul い adjectif vraiment irrégulier.
            Au négatif, on ne dit jamais いくない — on repasse par
            l&apos;ancienne forme よい.
          </p>

          <ExampleCard
            jp="この カメラは いいですか。"
            fr="Cet appareil est-il bien ?"
            speakText="この カメラは いいですか。"
          />
          <ExampleCard
            jp="いいえ、よくないです。"
            fr="Non, pas vraiment."
            speakText="いいえ、よくないです。"
          />
          <p className="example-note">
            いい → <strong>よくない</strong>です (jamais いくないです). Un
            réflexe à automatiser tout de suite.
          </p>

          <Quiz
            promptFr="Comment dit-on « ce n'est pas bien » ?"
            choices={["いくないです", "よくないです", "いいじゃないです"]}
            answer="よくないです"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>À l&apos;oral, ça se raccourcit</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            おいしい est parfaitement correct partout. Mais entre amis, à
            l&apos;oral, tu entendras très souvent うまい à la place —
            surtout dans la bouche des hommes ou en registre décontracté.
          </p>

          <ExampleCard
            jp="この ラーメン、おいしい!"
            fr="registre neutre / poli allégé"
            speakText="この ラーメン、おいしい!"
          />
          <ExampleCard
            jp="この ラーメン、うまい!"
            fr="familier — très courant entre amis"
            speakText="この ラーメン、うまい!"
          />

          <div className="callout">
            <strong>おいしい reste le mot le plus sûr.</strong> Mais si tu
            entends うまい au restaurant ou entre copains, c&apos;est
            exactement la même idée — juste plus familier, et plus
            spontané.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>Deux nombres qui complètent la série de la semaine 1.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="九"
              reading="きゅう"
              strokes={2}
              exampleWord="九時"
              exampleReading="くじ"
              exampleFr="neuf heures — attention, on dit くじ, pas きゅうじ"
              speakText="くじ"
            />
            <KanjiCard
              kanji="十"
              reading="じゅう"
              strokes={2}
              exampleWord="十分"
              exampleReading="じゅっぷん"
              exampleFr="dix minutes — on entend aussi じっぷん"
              speakText="じゅっぷん"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            九時 se lit toujours くじ (jamais きゅうじ). 十分 a deux
            lectures qui circulent toutes les deux : じゅっぷん et じっぷん
            — les deux sont comprises sans problème.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 2</h2>
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
                Redire de mémoire les 5 exemples い形容詞 sans regarder.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Automatiser いい → よくないです jusqu&apos;à ne plus
                hésiter.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 九 et 十 avec leurs lectures dans くじ et じゅっぷん.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 2 · construite le 5 juillet 2026 — la leçon 2
          passera aux adjectifs en な, la deuxième grande famille.
        </footer>
      </div>
    </>
  );
}
