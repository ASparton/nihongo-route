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
  title: "Semaine 7 · Leçon 4 — Parler de ses projets de voyage",
  description:
    "Un dialogue combinant 可能形, ～たい et ～なければならない/なきゃ pour parler de projets de voyage, et grande révision de la semaine.",
};

const STEPS = [
  { id: "s1", label: "1 · 導入" },
  { id: "s2", label: "2 · 対話" },
  { id: "s3", label: "3 · 文法確認" },
  { id: "s4", label: "4 · 練習" },
  { id: "s5", label: "5 · 漢字" },
];

const TRIP_LINES = [
  {
    who: "A",
    jp: "日本で 何が したいですか。",
    fr: "Qu'est-ce que tu veux faire au Japon ?",
  },
  {
    who: "B",
    jp: "ふじさんが 見たいです。でも、早く 行かなきゃ、電車に 乗れませんよ。",
    fr: "Je veux voir le Mont Fuji. Mais si on ne part pas vite, on ne pourra pas prendre le train !",
  },
  {
    who: "A",
    jp: "そうですね。パスポートを 忘れちゃ だめですよ。",
    fr: "Tu as raison. Il ne faut surtout pas oublier ton passeport !",
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
          <div className="eyebrow">旅の計画 — 七週目・四課</div>
          <h1 className="title">旅の計画を話す + 復習</h1>
          <div className="meta-line">Semaine 7 · Leçon 4 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Tout se combine</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Cette semaine t&apos;a donné trois outils pour parler de tes
            projets : 可能形 (pouvoir faire), ～たい (vouloir faire), et
            ～なければならない / ～なきゃ (devoir faire). Le dialogue
            d&apos;aujourd&apos;hui les mélange tous les trois, exactement
            comme une vraie conversation de voyage.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Écoute — projets de voyage</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Écoute le dialogue en entier une première fois, puis ligne par
            ligne pour répéter (shadowing).
          </p>

          <Dialogue lines={TRIP_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Qu'est-ce que B veut faire au Japon ?"
            choices={["Voir le Mont Fuji", "Manger des sushis", "Voir des amis"]}
            answer="Voir le Mont Fuji"
          />
          <Quiz
            promptFr="Que ne faut-il surtout pas oublier, selon A ?"
            choices={["Le passeport", "Le téléphone", "L'argent"]}
            answer="Le passeport"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Décortiquer le dialogue</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Chaque bout de phrase du dialogue reprend un point vu cette
            semaine — repère-les un par un.
          </p>

          <ExampleCard
            jp="何が したいですか。"
            fr="Qu'est-ce que tu veux faire ? (～たい, leçon 2)"
            speakText="何がしたいですか。"
          />
          <ExampleCard
            jp={
              <>
                <ruby>見<rt>み</rt></ruby>たいです。
              </>
            }
            fr="Je veux voir. (～たい, leçon 2)"
            speakText="見たいです。"
          />
          <ExampleCard
            jp={
              <>
                <ruby>早<rt>はや</rt></ruby>く <ruby>行<rt>い</rt></ruby>かなきゃ。
              </>
            }
            fr="Il faut y aller vite ! (～なければならない → ～なきゃ, leçon 3)"
            speakText="早く行かなきゃ。"
          />
          <ExampleCard
            jp={
              <>
                <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>れませんよ。
              </>
            }
            fr="On ne pourra pas prendre le train ! (可能形 négatif, leçon 1)"
            speakText="電車に乗れませんよ。"
          />
          <ExampleCard
            jp={
              <>
                パスポートを <ruby>忘<rt>わす</rt></ruby>れちゃ だめですよ。
              </>
            }
            fr="Il ne faut pas oublier son passeport !"
            speakText="パスポートを忘れちゃだめですよ。"
          />
          <p className="example-note">
            忘れちゃ だめ annonce discrètement le sujet de la semaine
            prochaine : comment dire ce qu&apos;il est <strong>interdit</strong>{" "}
            de faire. Pas besoin de le maîtriser aujourd&apos;hui — retiens
            juste que だめ signale une interdiction, on y reviendra en
            détail.
          </p>
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Grande révision de la semaine</h2>
            <span className="time">~6 min</span>
          </div>
          <p>Un dernier mélange des trois notions pour vérifier que tout tient.</p>

          <Quiz
            promptFr="« 見られます » veut dire..."
            choices={["on peut voir", "on doit voir", "on veut voir"]}
            answer="on peut voir"
          />
          <Quiz
            promptFr="« 行きたいです » veut dire..."
            choices={["je veux y aller", "je peux y aller", "je dois y aller"]}
            answer="je veux y aller"
          />
          <Quiz
            promptFr="« 行かなきゃ » veut dire..."
            choices={["je dois y aller", "je veux y aller", "je peux y aller"]}
            answer="je dois y aller"
          />

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["ふじさんが", "みたいです", "みます", "みました"]}
            answer={["ふじさんが", "みたいです"]}
            targetFr="Je veux voir le Mont Fuji."
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>Deux kanji simples, pour finir la semaine tout en douceur.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="新"
              reading="しん / あたら"
              strokes={13}
              exampleWord="新しい"
              exampleReading="あたらしい"
              exampleFr="nouveau, neuf"
              speakText="あたらしい"
            />
            <KanjiCard
              kanji="古"
              reading="こ / ふる"
              strokes={5}
              exampleWord="古い"
              exampleReading="ふるい"
              exampleFr="vieux, ancien"
              speakText="ふるい"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            新しい et 古い forment une autre paire d&apos;opposés très
            fréquente — utile pour décrire un quartier, un bâtiment ou un
            objet trouvé en brocante.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la semaine 8</h2>
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
                Relire les 4 leçons de la semaine et repérer ce qui reste
                flou entre 可能形, ～たい et ～なければならない.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Rejouer le dialogue de voyage à voix haute, les deux rôles.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 新 et 古 avec leurs deux lectures.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 4 · semaine 7 · construite le 5 juillet 2026 — la semaine 8
          reviendra sur だめ/てはいけない pour dire ce qui est interdit, en
          s&apos;appuyant directement sur 忘れちゃだめ vu ici.
        </footer>
      </div>
    </>
  );
}
