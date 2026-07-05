import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import ConjugationTable from "@/components/ConjugationTable";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 7 · Leçon 1 — 可能形",
  description:
    "La forme potentielle : dire ce qu'on peut faire, pour les verbes godan, ichidan et irréguliers, avec le ら抜き言葉 à l'oral, audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 導入" },
  { id: "s2", label: "2 · 五段" },
  { id: "s3", label: "3 · 一段・不規則" },
  { id: "s4", label: "4 · 練習" },
  { id: "s5", label: "5 · 話し言葉" },
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
          <div className="eyebrow">可能形 — 七週目・一課</div>
          <h1 className="title">可能形 — できることを言う</h1>
          <div className="meta-line">Semaine 7 · Leçon 1 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Une nouvelle phase : pouvoir, vouloir, devoir</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Jusqu&apos;ici tu as surtout décrit des faits. Cette semaine
            ouvre une nouvelle phase construite sur les verbes : dire ce
            qu&apos;on <strong>peut</strong> faire (可能形, aujourd&apos;hui),
            ce qu&apos;on <strong>veut</strong> faire (leçon 2), et ce
            qu&apos;on <strong>doit</strong> faire (leçon 3).
          </p>
          <p>
            Le 可能形 (forme potentielle) transforme un verbe en
            &laquo;pouvoir faire ce verbe&raquo; — l&apos;équivalent du
            &laquo;pouvoir + infinitif&raquo; français, mais fondu directement
            dans la terminaison du verbe.
          </p>

          <ExampleCard
            jp={
              <>
                日本語が <ruby>話<rt>はな</rt></ruby>せますか。
              </>
            }
            fr="Pouvez-vous parler japonais ?"
            speakText="日本語が話せますか。"
          />
          <ExampleCard
            jp={
              <>
                すこし <ruby>話<rt>はな</rt></ruby>せます。
              </>
            }
            fr="Je peux en parler un peu."
            speakText="すこし話せます。"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Verbes 五段 → 可能形</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Pour un verbe godan (五段), on remplace la terminaison en -u par
            la même consonne suivie de -e, puis on ajoute る. のむ (boire)
            devient のめる (pouvoir boire).
          </p>

          <ConjugationTable
            title="五段動詞 → 可能形"
            rows={[
              {
                label: "のむ（辞書形）",
                jp: (
                  <>
                    <ruby>飲<rt>の</rt></ruby>める
                  </>
                ),
                speakText: "飲めます。",
                note: "五段 — のむ→のめる",
              },
              {
                label: "はなす",
                jp: (
                  <>
                    <ruby>話<rt>はな</rt></ruby>せる
                  </>
                ),
                speakText: "話せます。",
                note: "五段 — はなす→はなせる",
              },
              {
                label: "かく",
                jp: (
                  <>
                    <ruby>書<rt>か</rt></ruby>ける
                  </>
                ),
                speakText: "書けます。",
                note: "五段 — かく→かける",
              },
              {
                label: "かう",
                jp: (
                  <>
                    <ruby>買<rt>か</rt></ruby>える
                  </>
                ),
                speakText: "買えます。",
                note: "五段 — かう→かえる",
              },
            ]}
          />
          <p className="example-note">
            Le motif est régulier pour tous les godan : dernière syllabe en
            -u → même consonne + -e, puis る. う→える, む→める, す→せる,
            く→ける...
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Quelle est la forme potentielle de のむ (boire) ?"
            choices={["のめる", "のむ", "のみたい"]}
            answer="のめる"
          />
          <Quiz
            promptFr="Quelle est la forme potentielle de かう (acheter) ?"
            choices={["かえる", "かける", "かべる"]}
            answer="かえる"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Verbes 一段 et irréguliers → 可能形</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Pour un verbe ichidan (一段), on retire simplement le る final et
            on ajoute られる. たべる (manger) devient たべられる (pouvoir
            manger). する et くる sont irréguliers : できる et こられる.
          </p>

          <ConjugationTable
            title="一段動詞・不規則動詞 → 可能形"
            rows={[
              {
                label: "たべる（辞書形）",
                jp: (
                  <>
                    <ruby>食<rt>た</rt></ruby>べられる
                  </>
                ),
                speakText: "食べられます。",
                note: "一段",
              },
              {
                label: "みる",
                jp: (
                  <>
                    <ruby>見<rt>み</rt></ruby>られる
                  </>
                ),
                speakText: "見られます。",
                note: "一段",
              },
              {
                label: "する",
                jp: "できる",
                speakText: "できます。",
                note: "不規則",
              },
              {
                label: "くる",
                jp: (
                  <>
                    <ruby>来<rt>く</rt></ruby>られる
                  </>
                ),
                speakText: "来られます。",
                note: "不規則",
              },
            ]}
          />
          <p className="example-note">
            Retiens surtout できる — tu l&apos;utiliseras sans arrêt pour dire
            &laquo;je peux le faire&raquo;, quel que soit le verbe en する
            derrière.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>富士山<rt>ふじさん</rt></ruby>が <ruby>見<rt>み</rt></ruby>られます。
              </>
            }
            fr="On peut voir le Mont Fuji."
            speakText="富士山が見られます。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Quelle est la forme potentielle de たべる (manger) ?"
            choices={["たべられる", "たべたい", "たべない"]}
            answer="たべられる"
          />
          <Quiz
            promptFr="Quelle est la forme potentielle de する (faire) ?"
            choices={["できる", "しられる", "せる"]}
            answer="できる"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Pratique</h2>
            <span className="time">~5 min</span>
          </div>
          <p>Assemble la phrase avec le verbe potentiel qui convient.</p>

          <SentenceAssembler
            tiles={["にほんごが", "はなせますか", "はなします", "はなせません"]}
            answer={["にほんごが", "はなせますか"]}
            targetFr="Pouvez-vous parler japonais ?"
          />

          <Quiz
            promptFr="Comment dit-on « je ne peux pas venir » (くる) ?"
            choices={["こられません", "きません", "こません"]}
            answer="こられません"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>À l&apos;oral : ら抜き言葉</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Pour les verbes ichidan, à l&apos;oral on entend très souvent la
            forme raccourcie sans ら : たべれる au lieu de たべられる. Ce
            phénomène s&apos;appelle 「ら抜き言葉」— littéralement,
            &laquo;parler sans ら&raquo;.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>食<rt>た</rt></ruby>べられます。
              </>
            }
            fr="forme standard — écrit, formel"
            speakText="食べられます。"
          />
          <ExampleCard
            jp={
              <>
                <ruby>食<rt>た</rt></ruby>べれます。
              </>
            }
            fr="ら抜き言葉 — oral très répandu"
            speakText="食べれます。"
          />

          <div className="callout">
            <strong>Usage réel.</strong> Le ら抜き言葉 est extrêmement
            répandu à l&apos;oral, chez à peu près tous les locuteurs
            natifs — mais il reste considéré comme familier et
            &laquo;non-standard&raquo; à l&apos;écrit. Comprends-le partout,
            mais garde られる dans tes propres écrits et à l&apos;examen.
          </div>

          <Quiz
            promptFr="Laquelle est la forme standard à l'écrit ?"
            choices={["たべられる", "たべれる"]}
            answer="たべられる"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Deux kanji que tu utilises en hiragana depuis des semaines —
            enfin le moment de voir leur kanji.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="大"
              reading="だい / おお"
              strokes={3}
              exampleWord="大きい"
              exampleReading="おおきい"
              exampleFr="grand — enfin son kanji, utilisé depuis la semaine 2 !"
              speakText="おおきい"
            />
            <KanjiCard
              kanji="小"
              reading="しょう / こ"
              strokes={3}
              exampleWord="小さい"
              exampleReading="ちいさい"
              exampleFr="petit — même callback, enfin le kanji de ちいさい !"
              speakText="ちいさい"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            大 et 小 se combinent aussi tout seuls comme noms (大, 小) pour
            dire &laquo;grande taille&raquo;/&laquo;petite taille&raquo; sur
            les menus ou les vêtements — un repère bien pratique en voyage.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 2</h2>
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
                Redire de mémoire les 4 verbes godan (のむ, はなす, かく, かう)
                et leur forme potentielle, sans regarder.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner sur たべられる/たべれる et できる jusqu&apos;à
                ce que ça sorte sans hésiter.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 大 et 小 avec leurs deux lectures.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 7 · le 可能形 ouvre la phase &laquo;verbes
          avancés&raquo; — la leçon 2 lui ajoute la façon de dire ce qu&apos;on
          veut faire.
        </footer>
      </div>
    </>
  );
}
