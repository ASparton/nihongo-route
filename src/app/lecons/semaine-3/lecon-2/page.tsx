import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import ConjugationTable from "@/components/ConjugationTable";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 3 · Leçon 2 — La forme て",
  description:
    "Former la forme て à partir des verbes godan, ichidan et irréguliers, avec l'exception 行く→行って — audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · て形" },
  { id: "s2", label: "2 · 五段の音" },
  { id: "s3", label: "3 · 例外" },
  { id: "s4", label: "4 · 一段・不規則" },
  { id: "s5", label: "5 · まとめ" },
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
          <div className="eyebrow">て形 — 三週目・二課</div>
          <h1 className="title">La forme て</h1>
          <div className="meta-line">Semaine 3 · Leçon 2 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Pourquoi la forme て ?</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            La forme て est le pivot de presque toute la grammaire verbale à
            venir : elle servira dès la leçon 3 à faire des demandes polies
            (～てください) et à décrire une action en cours (～ています), puis
            plus tard à bien d&apos;autres constructions.
          </p>
          <p>
            Sa formation dépend du groupe du verbe — exactement les mêmes
            groupes que la leçon 1.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Godan : trois familles de sons</h2>
            <span className="time">~9 min</span>
          </div>
          <p>
            Les verbes godan se répartissent en trois familles selon leur
            terminaison en -u :
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>買<rt>か</rt></ruby>う → <ruby>買<rt>か</rt></ruby>って
              </>
            }
            fr="う・つ・る deviennent って"
            speakText="かって"
          />
          <ExampleCard
            jp={
              <>
                <ruby>飲<rt>の</rt></ruby>む → <ruby>飲<rt>の</rt></ruby>んで
              </>
            }
            fr="む・ぶ・ぬ deviennent んで"
            speakText="のんで"
          />
          <ExampleCard
            jp={
              <>
                <ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby>いて
              </>
            }
            fr="く devient いて"
            speakText="かいて"
          />
          <ExampleCard
            jp={
              <>
                <ruby>急<rt>いそ</rt></ruby>ぐ → <ruby>急<rt>いそ</rt></ruby>いで
              </>
            }
            fr="ぐ devient いで"
            speakText="いそいで"
          />
          <ExampleCard
            jp={
              <>
                <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby>して
              </>
            }
            fr="す devient して"
            speakText="はなして"
          />
          <p className="example-note">
            まつ（<ruby>待<rt>ま</rt></ruby>つ）→まって、かえる（
            <ruby>帰<rt>かえ</rt></ruby>る）→かえって、よむ（
            <ruby>読<rt>よ</rt></ruby>む）→よんで、あそぶ（
            <ruby>遊<rt>あそ</rt></ruby>ぶ）→あそんで : la même famille de
            sons donne toujours la même terminaison en て.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="よむ（lire）→ forme て ?"
            choices={["よんで", "よって", "よいて", "よんて"]}
            answer="よんで"
          />
          <Quiz
            promptFr="かく（écrire）→ forme て ?"
            choices={["かいて", "かって", "かんで", "かくて"]}
            answer="かいて"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>
              <ruby>行<rt>い</rt></ruby>く : l&apos;exception à retenir
            </h2>
            <span className="time">~4 min</span>
          </div>
          <div className="callout seal">
            <strong>La faute classique de débutant.</strong> いく（
            <ruby>行<rt>い</rt></ruby>く）se termine en く, donc en appliquant
            la règle à la lettre on serait tenté de dire いいて — c&apos;est
            faux. <ruby>行<rt>い</rt></ruby>く est la{" "}
            <strong>seule</strong> exception de toute cette liste : sa forme
            て est irrégulièrement いって, comme s&apos;il se terminait en つ
            ou る.
          </div>

          <ExampleCard
            jp={
              <>
                <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>って
              </>
            }
            fr="exception ! jamais いいて"
            speakText="いって"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Comment dit-on la forme て de いく（aller）?"
            choices={["いって", "いいて", "いくて"]}
            answer="いって"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>
              <ruby>一段動詞<rt>いちだんどうし</rt></ruby>と
              <ruby>不規則動詞<rt>ふきそくどうし</rt></ruby>
            </h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Les verbes ichidan restent aussi simples qu&apos;à la leçon 1 :
            on retire る et on ajoute て. する et{" "}
            <ruby>来<rt>く</rt></ruby>る gardent leur propre forme
            irrégulière.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べて
              </>
            }
            fr="ichidan : る → て"
            speakText="たべて"
          />
          <ExampleCard
            jp={
              <>
                <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>て
              </>
            }
            fr="ichidan : る → て"
            speakText="みて"
          />
          <ExampleCard
            jp="する → して"
            fr="irrégulier"
            speakText="して"
          />
          <ExampleCard
            jp={
              <>
                <ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>き</rt></ruby>て
              </>
            }
            fr="irrégulier"
            speakText="きて"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="みる（regarder）→ forme て ?"
            choices={["みて", "みんで", "みいて", "みます"]}
            answer="みて"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Tout regrouper</h2>
            <span className="time">~6 min</span>
          </div>
          <p>Le tableau complet, à revoir jusqu&apos;à ne plus hésiter :</p>

          <ConjugationTable
            rows={[
              {
                label: "かう",
                jp: (
                  <>
                    <ruby>買<rt>か</rt></ruby>う → <ruby>買<rt>か</rt></ruby>って
                  </>
                ),
                speakText: "かって",
                note: "う→って",
              },
              {
                label: "まつ",
                jp: (
                  <>
                    <ruby>待<rt>ま</rt></ruby>つ → <ruby>待<rt>ま</rt></ruby>って
                  </>
                ),
                speakText: "まって",
                note: "つ→って",
              },
              {
                label: "かえる",
                jp: (
                  <>
                    <ruby>帰<rt>かえ</rt></ruby>る → <ruby>帰<rt>かえ</rt></ruby>って
                  </>
                ),
                speakText: "かえって",
                note: "る→って",
              },
              {
                label: "のむ",
                jp: (
                  <>
                    <ruby>飲<rt>の</rt></ruby>む → <ruby>飲<rt>の</rt></ruby>んで
                  </>
                ),
                speakText: "のんで",
                note: "む→んで",
              },
              {
                label: "よむ",
                jp: (
                  <>
                    <ruby>読<rt>よ</rt></ruby>む → <ruby>読<rt>よ</rt></ruby>んで
                  </>
                ),
                speakText: "よんで",
                note: "む→んで",
              },
              {
                label: "かく",
                jp: (
                  <>
                    <ruby>書<rt>か</rt></ruby>く → <ruby>書<rt>か</rt></ruby>いて
                  </>
                ),
                speakText: "かいて",
                note: "く→いて",
              },
              {
                label: "いく",
                jp: (
                  <>
                    <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>って
                  </>
                ),
                speakText: "いって",
                note: "exception ! pas いいて",
              },
              {
                label: "はなす",
                jp: (
                  <>
                    <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby>して
                  </>
                ),
                speakText: "はなして",
                note: "す→して",
              },
              {
                label: "たべる",
                jp: (
                  <>
                    <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べて
                  </>
                ),
                speakText: "たべて",
                note: "ichidan : る→て",
              },
              {
                label: "する",
                jp: <>する → して</>,
                speakText: "して",
                note: "irrégulier",
              },
              {
                label: "くる",
                jp: (
                  <>
                    <ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>き</rt></ruby>て
                  </>
                ),
                speakText: "きて",
                note: "irrégulier",
              },
            ]}
          />

          <div className="callout">
            <strong>À l&apos;oral, on enchaîne tout avec て.</strong> Dans une
            conversation, on relie plusieurs actions en cascade avec la forme
            て toute seule. À l&apos;écrit ou dans un registre plus soutenu,
            on préfère des phrases complètes en ます reliées par それから
            (« et ensuite »).
          </div>

          <ExampleCard
            jp={
              <>
                パンを <ruby>食<rt>た</rt></ruby>べて、コーヒーを{" "}
                <ruby>飲<rt>の</rt></ruby>んで、でかけます。
              </>
            }
            fr="à l'oral — tout s'enchaîne avec て"
            speakText="パンを たべて、コーヒーを のんで、でかけます。"
          />
          <ExampleCard
            jp={
              <>
                パンを <ruby>食<rt>た</rt></ruby>べます。それから、コーヒーを{" "}
                <ruby>飲<rt>の</rt></ruby>みます。
              </>
            }
            fr="plus soutenu — phrases séparées + それから"
            speakText="パンを たべます。それから、コーヒーを のみます。"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>La suite de la semaine : mercredi et jeudi.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="水"
              reading="すい"
              strokes={4}
              exampleWord="水曜日"
              exampleReading="すいようび"
              exampleFr="mercredi"
              speakText="すいようび"
            />
            <KanjiCard
              kanji="木"
              reading="もく"
              strokes={4}
              exampleWord="木曜日"
              exampleReading="もくようび"
              exampleFr="jeudi"
              speakText="もくようび"
            />
          </div>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 3</h2>
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
                Réciter les 11 formes て du tableau jusqu&apos;à ne plus
                hésiter, en insistant sur いく→いって.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Répéter à voix haute : «{" "}
                <ruby>行<rt>い</rt></ruby>く, <ruby>行<rt>い</rt></ruby>って —
                jamais <ruby>行<rt>い</rt></ruby>いて ».
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir <ruby>水<rt>すい</rt></ruby> et{" "}
                <ruby>木<rt>もく</rt></ruby> avec leur lecture jusqu&apos;à les
                reconnaître
                sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 3 · construite le 5 juillet 2026 — la leçon 3
          utilise cette forme て pour demander poliment et décrire une action
          en cours.
        </footer>
      </div>
    </>
  );
}
