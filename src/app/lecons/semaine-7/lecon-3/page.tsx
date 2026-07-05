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
  title: "Semaine 7 · Leçon 3 — ～なければならない (révision)",
  description:
    "Révision approfondie de l'obligation en japonais : ない-form + ければなりません, de nombreux exemples, et la contraction ～なきゃ à l'oral.",
};

const STEPS = [
  { id: "s1", label: "1 · 復習" },
  { id: "s2", label: "2 · 作り方" },
  { id: "s3", label: "3 · 例文" },
  { id: "s4", label: "4 · 練習" },
  { id: "s5", label: "5 · なきゃ" },
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
          <div className="eyebrow">義務表現の復習 — 七週目・三課</div>
          <h1 className="title">～なければならない（義務）</h1>
          <div className="meta-line">Semaine 7 · Leçon 3 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Une notion déjà vue — qu&apos;on reprend à fond</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Cette leçon n&apos;est pas une découverte : tu as déjà travaillé
            l&apos;obligation avec un professeur particulier, il y a un
            moment. Si tout ça te semble à moitié oublié, c&apos;est tout à
            fait normal — c&apos;est exactement pour ça qu&apos;on la reprend
            ici en profondeur, avec plus d&apos;exemples que d&apos;habitude,
            jusqu&apos;à ce que ～なければならない redevienne un réflexe avant
            le départ.
          </p>
          <p>
            En clair, ～なければならない correspond au français &laquo;il faut
            que je...&raquo; ou &laquo;je dois...&raquo;. C&apos;est une
            obligation, pas une simple envie (～たい) ni une capacité
            (可能形) — les trois de cette semaine se complètent, mais ne se
            remplacent pas.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>まなければなりません。
              </>
            }
            fr="Je dois prendre un médicament."
            speakText="薬を飲まなければなりません。"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Comment se construit la forme</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            On part de la forme négative ない (déjà connue depuis la semaine
            3), on retire le い final, et on ajoute ければなりません. のむ →
            のまない → のまなければなりません.
          </p>

          <ConjugationTable
            title="ない形 → ～なければなりません"
            rows={[
              {
                label: "のむ → のまない",
                jp: (
                  <>
                    <ruby>飲<rt>の</rt></ruby>まなければなりません
                  </>
                ),
                speakText: "飲まなければなりません。",
                note: "五段",
              },
              {
                label: "いく → いかない",
                jp: (
                  <>
                    <ruby>行<rt>い</rt></ruby>かなければなりません
                  </>
                ),
                speakText: "行かなければなりません。",
                note: "五段（例外的な音）",
              },
              {
                label: "たべる → たべない",
                jp: (
                  <>
                    <ruby>食<rt>た</rt></ruby>べなければなりません
                  </>
                ),
                speakText: "食べなければなりません。",
                note: "一段",
              },
              {
                label: "おきる → おきない",
                jp: (
                  <>
                    <ruby>起<rt>お</rt></ruby>きなければなりません
                  </>
                ),
                speakText: "起きなければなりません。",
                note: "一段",
              },
              {
                label: "する → しない",
                jp: "しなければなりません",
                speakText: "しなければなりません。",
                note: "不規則",
              },
            ]}
          />
          <p className="example-note">
            Retiens le chemin en deux étapes : verbe → forme ない → retire le
            い final de ない → ajoute ければなりません. Le même chemin marche
            pour tous les verbes, sans exception.
          </p>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Beaucoup d&apos;exemples, pour bien fixer</h2>
            <span className="time">~9 min</span>
          </div>
          <p>
            Puisque c&apos;est une révision, on multiplie les exemples plutôt
            que d&apos;en rester à un ou deux — écoute chacun, répète-le à
            voix haute avant de passer au suivant.
          </p>

          <ExampleCard
            jp={
              <>
                パスポートを もって <ruby>行<rt>い</rt></ruby>かなければなりません。
              </>
            }
            fr="Je dois emporter mon passeport."
            speakText="パスポートをもって行かなければなりません。"
          />
          <ExampleCard
            jp={
              <>
                <ruby>明日<rt>あした</rt></ruby> <ruby>早<rt>はや</rt></ruby>く <ruby>起<rt>お</rt></ruby>きなければなりません。
              </>
            }
            fr="Je dois me lever tôt demain."
            speakText="明日早く起きなければなりません。"
          />
          <ExampleCard
            jp={
              <>
                <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>らなければなりません。
              </>
            }
            fr="Je dois prendre le train."
            speakText="電車に乗らなければなりません。"
          />
          <ExampleCard
            jp={
              <>
                <ruby>宿題<rt>しゅくだい</rt></ruby>を しなければなりません。
              </>
            }
            fr="Je dois faire mes devoirs."
            speakText="宿題をしなければなりません。"
          />
          <ExampleCard
            jp={
              <>
                日本語を <ruby>勉強<rt>べんきょう</rt></ruby>しなければなりません。
              </>
            }
            fr="Je dois étudier le japonais."
            speakText="日本語を勉強しなければなりません。"
          />

          <p className="example-note">
            Remarque à quel point le patron reste identique dans les cinq
            phrases : seul le verbe conjugué en ない change, ければなりません
            reste toujours pareil à la fin.
          </p>
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Pratique</h2>
            <span className="time">~4 min</span>
          </div>
          <Quiz
            promptFr="Comment dit-on « je dois prendre un médicament » ?"
            choices={["のまなければなりません", "のみたいです", "のめます"]}
            answer="のまなければなりません"
          />
          <Quiz
            promptFr="Quelle est la forme ない de 行く ?"
            choices={["いかない", "いきない", "いくない"]}
            answer="いかない"
          />
          <SentenceAssembler
            tiles={["パスポートを", "もって", "いかなければなりません", "いきます"]}
            answer={["パスポートを", "もって", "いかなければなりません"]}
            targetFr="Je dois emporter mon passeport."
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>À l&apos;oral : ～なきゃ</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            À l&apos;oral, ～なければ(いけない/なりません) se raccourcit
            presque toujours en ～なきゃ — et la fin (いけない ou なりません)
            disparaît carrément. C&apos;est une contraction tellement
            fréquente qu&apos;elle mérite plusieurs exemples à elle seule.
          </p>

          <ConjugationTable
            title="丁寧形 と なきゃ の対応"
            rows={[
              {
                label: "いかなければなりません",
                jp: "いかなきゃ！",
                speakText: "いかなきゃ。",
                note: "faut y aller !",
              },
              {
                label: "おきなければなりません",
                jp: "おきなきゃ！",
                speakText: "おきなきゃ。",
                note: "faut se lever !",
              },
              {
                label: "のまなければなりません",
                jp: "のまなきゃ。",
                speakText: "のまなきゃ。",
                note: "faut le prendre (médicament)",
              },
              {
                label: "しなければなりません",
                jp: "しなきゃ。",
                speakText: "しなきゃ。",
                note: "faut le faire",
              },
            ]}
          />

          <div className="callout">
            <strong>Usage réel.</strong> ～なきゃ est partout dans le japonais
            parlé quotidien — entre amis, en famille, avec des collègues
            proches, tu l&apos;entendras bien plus souvent que la forme
            complète ～なければなりません. Mais garde toujours la forme
            complète à l&apos;écrit, dans un mail, ou face à un inconnu en
            registre poli.
          </div>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Version orale contractée de 行かなければなりません ?"
            choices={["いかなきゃ", "いかなければ", "いかない"]}
            answer="いかなきゃ"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>Deux kanji déjà utilisés en hiragana depuis plusieurs semaines.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="高"
              reading="こう / たか"
              strokes={10}
              exampleWord="高い"
              exampleReading="たかい"
              exampleFr="cher, haut — callback, enfin son kanji !"
              speakText="たかい"
            />
            <KanjiCard
              kanji="安"
              reading="あん / やす"
              strokes={6}
              exampleWord="安い"
              exampleReading="やすい"
              exampleFr="pas cher, bon marché — même callback, enfin son kanji !"
              speakText="やすい"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            高い et 安い forment une paire opposée très utile en boutique —
            tu les as déjà utilisés à l&apos;oral depuis la semaine 5, il ne
            manquait que leur kanji.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 4</h2>
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
                Redire de mémoire les 5 exemples de ～なければなりません de la
                section 3, sans regarder.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner à voix haute sur いかなきゃ！/ おきなきゃ！
                jusqu&apos;à ce que la contraction devienne naturelle.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 高 et 安 avec leurs deux lectures.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 7 · cette révision approfondie de l&apos;obligation
          était nécessaire avant le voyage — la leçon 4 mélange 可能形, ～たい
          et ～なければならない/なきゃ dans une conversation de voyage.
        </footer>
      </div>
    </>
  );
}
