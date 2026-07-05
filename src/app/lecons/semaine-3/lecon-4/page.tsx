import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import Dialogue from "@/components/Dialogue";
import ConjugationTable from "@/components/ConjugationTable";
import KanjiCard from "@/components/KanjiCard";
import HankoButton from "@/components/HankoButton";

export const metadata: Metadata = {
  title: "Semaine 3 · Leçon 4 — 曜日の復習と会話",
  description:
    "Grande révision des groupes de verbes, de la forme て, de ～てください et ～ています, avec un dialogue complet et le kanji capstone 曜.",
};

const STEPS = [
  { id: "s1", label: "1 · 復習" },
  { id: "s2", label: "2 · 動詞とて形" },
  { id: "s3", label: "3 · 依頼と進行" },
  { id: "s4", label: "4 · 会話" },
  { id: "s5", label: "5 · 組み立て" },
  { id: "s6", label: "6 · 漢字" },
];

const DIALOGUE_LINES = [
  {
    who: "A",
    jp: "すみません、しゃしんを とってください。",
    fr: "Excusez-moi, prenez une photo, s'il vous plaît.",
  },
  {
    who: "B",
    jp: "はい、いいですよ。ここに たってください。",
    fr: "Oui, avec plaisir. Tenez-vous ici, s'il vous plaît.",
  },
  {
    who: "A",
    jp: "ありがとうございます。いま、いいですか。",
    fr: "Merci beaucoup. C'est bon maintenant ?",
  },
  {
    who: "B",
    jp: "はい、どうぞ。",
    fr: "Oui, allez-y.",
  },
];

const DAYS = [
  { kanji: "日曜日", reading: "にちようび", fr: "dimanche" },
  { kanji: "月曜日", reading: "げつようび", fr: "lundi" },
  { kanji: "火曜日", reading: "かようび", fr: "mardi" },
  { kanji: "水曜日", reading: "すいようび", fr: "mercredi" },
  { kanji: "木曜日", reading: "もくようび", fr: "jeudi" },
  { kanji: "金曜日", reading: "きんようび", fr: "vendredi" },
  { kanji: "土曜日", reading: "どようび", fr: "samedi" },
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
          <div className="eyebrow">曜日の総復習 — 三週目・四課</div>
          <h1 className="title">Révision : verbes, forme て et jours</h1>
          <div className="meta-line">Semaine 3 · Leçon 4 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Grande révision</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Semaine chargée : les groupes de verbes (leçon 1), la forme て
            (leçon 2), puis ～てください et ～ています (leçon 3). Cette
            dernière leçon rassemble tout dans un dialogue, quelques
            exercices, et un dernier kanji qui complète les sept jours de la
            semaine.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Révision : groupes et forme て</h2>
            <span className="time">~7 min</span>
          </div>

          <ConjugationTable
            title="Pense-bête"
            rows={[
              {
                label: "のむ",
                jp: (
                  <>
                    <ruby>飲<rt>の</rt></ruby>む → <ruby>飲<rt>の</rt></ruby>んで
                  </>
                ),
                speakText: "のんで",
                note: "godan : む→んで",
              },
              {
                label: "いく",
                jp: (
                  <>
                    <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>って
                  </>
                ),
                speakText: "いって",
                note: "exception ! pas いきて",
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

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="のむ → forme て ?"
            choices={["のんで", "のって", "のいて", "のんて"]}
            answer="のんで"
          />
          <Quiz
            promptFr="いく → forme て ? (piège !)"
            choices={["いって", "いいて", "いくて"]}
            answer="いって"
          />
          <Quiz
            promptFr="たべる → forme て ?"
            choices={["たべて", "たべって", "たべんで", "たべます"]}
            answer="たべて"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Révision : ～てください と ～ています</h2>
            <span className="time">~7 min</span>
          </div>

          <Quiz
            promptFr="Tu veux demander à un passant de prendre une photo. Que dis-tu ?"
            choices={[
              "しゃしんを とってください。",
              "しゃしんを とっています。",
              "しゃしんを とります。",
            ]}
            answer="しゃしんを とってください。"
          />
          <Quiz
            promptFr="Tu expliques que tu es en train de manger, maintenant. Quelle phrase ?"
            choices={["たべています。", "たべてください。", "たべます。"]}
            answer="たべています。"
          />

          <div className="callout">
            <strong>Récap du registre familier de la semaine.</strong> À
            l&apos;oral, entre amis : <ruby>行<rt>い</rt></ruby>く！au lieu de{" "}
            <ruby>行<rt>い</rt></ruby>きます, <ruby>食<rt>た</rt></ruby>べてる
            au lieu de <ruby>食<rt>た</rt></ruby>べています, まって！au lieu
            de まってください。On creusera ce registre familier en profondeur
            à la semaine 4.
          </div>
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Écoute — demander une photo</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Un dialogue directement utile en voyage : demander à quelqu&apos;un
            de prendre une photo, puis attendre. Écoute-le en entier d&apos;abord,
            puis ligne par ligne pour répéter (shadowing).
          </p>

          <Dialogue lines={DIALOGUE_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Que demande A à B au début du dialogue ?"
            choices={["De prendre une photo", "De s'asseoir", "L'heure"]}
            answer="De prendre une photo"
          />
          <Quiz
            promptFr="Où B demande-t-il à A de se placer ?"
            choices={["Là-bas", "Ici", "Dehors"]}
            answer="Ici"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Assemble la phrase</h2>
            <span className="time">~4 min</span>
          </div>

          <h3 className="sub-heading">Demande polie</h3>
          <SentenceAssembler
            tiles={["ちょっと", "まって", "ください", "たべて"]}
            answer={["ちょっと", "まって", "ください"]}
            targetFr="Attendez un peu, s'il vous plaît."
          />

          <h3 className="sub-heading">Action en cours</h3>
          <SentenceAssembler
            tiles={["いま", "ばんごはんを", "たべています", "たべます"]}
            answer={["いま", "ばんごはんを", "たべています"]}
            targetFr="Je suis en train de dîner, maintenant."
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>
              Kanji du jour : <ruby>曜<rt>よう</rt></ruby> — le kanji qui
              complète la semaine
            </h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            <ruby>月<rt>げつ</rt></ruby>・<ruby>火<rt>か</rt></ruby>・
            <ruby>水<rt>すい</rt></ruby>・<ruby>木<rt>もく</rt></ruby>・
            <ruby>金<rt>きん</rt></ruby>・<ruby>土<rt>ど</rt></ruby> forment
            tous leur jour avec <ruby>曜日<rt>ようび</rt></ruby>.
            Aujourd&apos;hui, <ruby>曜<rt>よう</rt></ruby> lui-même — le
            morceau commun à tous les jours de la semaine.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="曜"
              reading="よう"
              strokes={18}
              exampleWord="何曜日"
              exampleReading="なんようび"
              exampleFr="quel jour de la semaine ?"
              speakText="なんようびですか。"
            />
          </div>

          <ExampleCard
            jp="なんようびですか。"
            fr="Quel jour de la semaine sommes-nous ?"
            speakText="なんようびですか。"
          />

          <h3 className="sub-heading">Les sept jours, enfin au complet</h3>
          <p>
            En combinant <ruby>曜<rt>よう</rt></ruby> avec{" "}
            <ruby>日<rt>にち</rt></ruby> (déjà connu depuis les semaines
            1-2), on peut même écrire dimanche :{" "}
            <ruby>日曜日<rt>にちようび</rt></ruby>.
          </p>
          <div className="vocab-grid">
            {DAYS.map((day) => (
              <div className="vocab-item" key={day.kanji}>
                <span>
                  <span className="jp">
                    <ruby>
                      {day.kanji}
                      <rt>{day.reading}</rt>
                    </ruby>
                  </span>
                  <span className="fr">{day.fr}</span>
                </span>
                <HankoButton text={day.reading} />
              </div>
            ))}
          </div>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la semaine 4</h2>
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
                Réciter les 7 jours de la semaine (
                <ruby>日<rt>にち</rt></ruby>
                <ruby>月<rt>げつ</rt></ruby>
                <ruby>火<rt>か</rt></ruby>
                <ruby>水<rt>すい</rt></ruby>
                <ruby>木<rt>もく</rt></ruby>
                <ruby>金<rt>きん</rt></ruby>
                <ruby>土<rt>ど</rt></ruby> + <ruby>曜日<rt>ようび</rt></ruby>)
                dans l&apos;ordre, sans hésiter.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Rejouer le dialogue « しゃしんを とってください » à voix
                haute, dans les deux rôles.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Refaire le tableau de la leçon 2 de mémoire : les 11 formes て,
                いく→いって en tête.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 4 · semaine 3 · construite le 5 juillet 2026 — les verbes,
          la forme て, les demandes polies et les jours de la semaine sont
          posés. La semaine 4 approfondira le registre familier entrevu ici.
        </footer>
      </div>
    </>
  );
}
