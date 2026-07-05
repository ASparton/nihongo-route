import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 3 · Leçon 3 — ～てください と ～ています",
  description:
    "Demander poliment avec ～てください et décrire une action en cours ou un état avec ～ています — avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · て形の使い方" },
  { id: "s2", label: "2 · ～てください" },
  { id: "s3", label: "3 · ～ています" },
  { id: "s4", label: "4 · 会話体" },
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
          <div className="eyebrow">依頼と進行 — 三週目・三課</div>
          <h1 className="title">～てください と ～ています</h1>
          <div className="meta-line">Semaine 3 · Leçon 3 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Deux emplois très utiles de て</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            La forme て de la leçon 2 sert de brique à deux constructions
            que tu utiliseras tous les jours en voyage : demander poliment
            à quelqu&apos;un de faire quelque chose, et décrire une action en
            train de se passer ou un état durable.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>～てください : demander poliment</h2>
            <span className="time">~9 min</span>
          </div>
          <p>
            <strong>forme て + ください</strong> = une demande polie. C&apos;est
            la structure la plus simple pour demander un service à
            quelqu&apos;un.
          </p>

          <ExampleCard
            jp={
              <>
                ちょっと <ruby>待<rt>ま</rt></ruby>ってください。
              </>
            }
            fr="Attendez un peu, s'il vous plaît."
            speakText="ちょっと まってください。"
          />
          <ExampleCard
            jp="しゃしんを とってください。"
            fr="Prenez une photo, s'il vous plaît."
            speakText="しゃしんを とってください。"
          />
          <p className="example-note">
            <strong>とる</strong> = prendre (une photo) : un verbe godan
            (とる→とって) extrêmement utile en voyage pour demander à un
            passant de te prendre en photo.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Comment demander poliment à quelqu'un d'attendre ?"
            choices={["まってください", "まちます", "まって", "まつです"]}
            answer="まってください"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>～ています : action en cours / état</h2>
            <span className="time">~9 min</span>
          </div>
          <p>
            <strong>forme て + います</strong> a deux emplois : une action{" "}
            <strong>en train de se dérouler</strong>, ou un{" "}
            <strong>état durable</strong>.
          </p>

          <ExampleCard
            jp={
              <>
                いま、ばんごはんを <ruby>食<rt>た</rt></ruby>べています。
              </>
            }
            fr="Je suis en train de dîner."
            speakText="いま、ばんごはんを たべています。"
          />
          <ExampleCard
            jp="あめが ふっています。"
            fr="Il est en train de pleuvoir."
            speakText="あめが ふっています。"
          />
          <p className="example-note">
            Ces deux phrases décrivent une action <strong>en cours</strong>,
            juste maintenant.
          </p>

          <ExampleCard
            jp="とうきょうに すんでいます。"
            fr="J'habite à Tokyo."
            speakText="とうきょうに すんでいます。"
          />
          <p className="example-note">
            Rappel de la semaine 2 : ～に<ruby>住<rt>す</rt></ruby>んでいます
            décrit un <strong>état durable</strong> — c&apos;est exactement
            la même forme ～ています, juste avec un verbe qui exprime un état
            plutôt qu&apos;une action ponctuelle.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Que signifie « あめが ふっています » ?"
            choices={[
              "Il va pleuvoir",
              "Il est en train de pleuvoir",
              "Il a plu hier",
            ]}
            answer="Il est en train de pleuvoir"
          />
          <Quiz
            promptJp="いま、テレビを ___。"
            promptFr="Je suis en train de regarder la télé. (みる)"
            choices={["みています", "みてください", "みます"]}
            answer="みています"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>À l&apos;oral, juste ～て</h2>
            <span className="time">~4 min</span>
          </div>
          <div className="callout">
            <strong>Entre amis, ください disparaît souvent.</strong> Avec des
            proches, la demande polie ～てください se réduit très souvent à la
            forme て toute seule, dite avec de l&apos;intonation — presque un
            petit ordre affectueux.
          </div>

          <ExampleCard
            jp={
              <>
                ちょっと <ruby>待<rt>ま</rt></ruby>ってください。
              </>
            }
            fr="version polie — avec un inconnu"
            speakText="ちょっと まってください。"
          />
          <ExampleCard
            jp={
              <>
                <ruby>待<rt>ま</rt></ruby>って！
              </>
            }
            fr="version courte — entre amis ou en famille"
            speakText="まって！"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>La suite de la semaine : vendredi et samedi.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="金"
              reading="きん"
              strokes={8}
              exampleWord="金曜日"
              exampleReading="きんようび"
              exampleFr="vendredi"
              speakText="きんようび"
            />
            <KanjiCard
              kanji="土"
              reading="ど"
              strokes={3}
              exampleWord="土曜日"
              exampleReading="どようび"
              exampleFr="samedi"
              speakText="どようび"
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
                Répéter à voix haute まってください、とってください et いま～
                しています jusqu&apos;à ce qu&apos;elles sortent sans effort.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner à passer de la version polie à la version
                courte (まってください ↔ まって！).
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir <ruby>金<rt>きん</rt></ruby> et{" "}
                <ruby>土<rt>ど</rt></ruby> avec leur lecture jusqu&apos;à les
                reconnaître sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 3 · construite le 5 juillet 2026 — la leçon 4
          fait la grande révision de la semaine, avec un dialogue complet et
          le kanji <ruby>曜<rt>よう</rt></ruby> qui rassemble tous les jours
          vus jusqu&apos;ici.
        </footer>
      </div>
    </>
  );
}
