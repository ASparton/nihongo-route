import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import ConjugationTable from "@/components/ConjugationTable";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 3 · Leçon 1 — Les groupes de verbes",
  description:
    "Distinguer les verbes ichidan et godan, former la base ます, et repérer les irréguliers する/来る — avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 動詞" },
  { id: "s2", label: "2 · 一段" },
  { id: "s3", label: "3 · 五段" },
  { id: "s4", label: "4 · 不規則" },
  { id: "s5", label: "5 · まとめ" },
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
          <div className="eyebrow">動詞のグループ — 三週目・一課</div>
          <h1 className="title">Les groupes de verbes</h1>
          <div className="meta-line">Semaine 3 · Leçon 1 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Pourquoi des groupes ?</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Jusqu&apos;ici tu t&apos;es appuyé sur です, あります et います.
            Cette semaine, on attaque les vrais verbes d&apos;action —
            manger, aller, parler, acheter... Bonne nouvelle : il n&apos;y a
            que <strong>trois</strong> catégories, et on les reconnaît en un
            coup d&apos;œil sur la forme dictionnaire (celle du dictionnaire,
            non conjuguée).
          </p>
          <p>
            On commence par la forme polie en <strong>ます</strong>, celle
            qu&apos;on utilise dans la quasi-totalité des situations avec des
            inconnus — guichets, restaurants, hôtels.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>
              Verbes ichidan（<ruby>一段<rt>いちだん</rt></ruby>）
            </h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Ces verbes se terminent tous en <strong>る</strong>. La règle est
            la plus simple des trois : on enlève juste る et on ajoute ます.
          </p>

          <ExampleCard
            jp={
              <>
                パンを <ruby>食<rt>た</rt></ruby>べます。
              </>
            }
            fr="Je mange du pain."
            speakText="パンを たべます。"
          />
          <ExampleCard
            jp={
              <>
                テレビを <ruby>見<rt>み</rt></ruby>ます。
              </>
            }
            fr="Je regarde la télévision."
            speakText="テレビを みます。"
          />
          <ExampleCard
            jp={
              <>
                あさ、<ruby>七<rt>しち</rt></ruby>じに{" "}
                <ruby>起<rt>お</rt></ruby>きます。
              </>
            }
            fr="Le matin, je me lève à 7 heures."
            speakText="あさ、しちじに おきます。"
          />
          <p className="example-note">
            <strong>
              <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べます
            </strong>
            , <strong><ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>ます</strong>,{" "}
            <strong><ruby>起<rt>お</rt></ruby>きる → <ruby>起<rt>お</rt></ruby>きます</strong> :
            à chaque fois, on retire simplement る.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="あさ、パンを ___。"
            promptFr="Je mange du pain, le matin. (たべる)"
            choices={["たべます", "たべる", "たべって", "たべういます"]}
            answer="たべます"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>
              Verbes godan（<ruby>五段<rt>ごだん</rt></ruby>）
            </h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Ces verbes se terminent en -u (む・く・す・う・つ・ぬ・ぶ・ぐ・る).
            Pour la forme polie, le son -u final change en -i, puis on
            ajoute ます.
          </p>

          <ExampleCard
            jp={
              <>
                みずを <ruby>飲<rt>の</rt></ruby>みます。
              </>
            }
            fr="Je bois de l'eau."
            speakText="みずを のみます。"
          />
          <ExampleCard
            jp={
              <>
                えきに <ruby>行<rt>い</rt></ruby>きます。
              </>
            }
            fr="Je vais à la gare."
            speakText="えきに いきます。"
          />
          <ExampleCard
            jp={
              <>
                にほんごを <ruby>話<rt>はな</rt></ruby>します。
              </>
            }
            fr="Je parle japonais."
            speakText="にほんごを はなします。"
          />
          <ExampleCard
            jp={
              <>
                おみやげを <ruby>買<rt>か</rt></ruby>います。
              </>
            }
            fr="J'achète un souvenir."
            speakText="おみやげを かいます。"
          />
          <p className="example-note">
            のむ→のみます、いく→いきます、はなす→はなします、かう→かいます :
            le son avant ます passe toujours de -u à -i.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="えきに ___。"
            promptFr="Je vais à la gare. (いく)"
            choices={["いきます", "いくます", "いっます", "いきる"]}
            answer="いきます"
          />
          <Quiz
            promptFr="のむ（boire）appartient à quel groupe ?"
            choices={["ichidan", "godan", "irrégulier"]}
            answer="godan"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>
              する と <ruby>来<rt>く</rt></ruby>る — les irréguliers
            </h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            する ne suit aucune des deux règles. Piège classique :{" "}
            <ruby>来<rt>く</rt></ruby>る se termine en る comme un ichidan,
            mais sa conjugaison est irrégulière — sa lecture change même
            selon la forme (<ruby>来<rt>く</rt></ruby>る = くる, mais{" "}
            <ruby>来<rt>き</rt></ruby>ます = きます).
          </p>

          <ExampleCard
            jp="しゅくだいを します。"
            fr="Je fais mes devoirs."
            speakText="しゅくだいを します。"
          />
          <ExampleCard
            jp={
              <>
                あした、にほんに <ruby>来<rt>き</rt></ruby>ます。
              </>
            }
            fr="Demain, je viens au Japon."
            speakText="あした、にほんに きます。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="らいしゅう、にほんに ___。"
            promptFr="La semaine prochaine, je viens au Japon. (くる)"
            choices={["きます", "くます", "くきます", "こます"]}
            answer="きます"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Tout regrouper</h2>
            <span className="time">~5 min</span>
          </div>
          <p>Le tableau à connaître par cœur avant la leçon 2 :</p>

          <ConjugationTable
            rows={[
              {
                label: "たべる",
                jp: (
                  <>
                    <ruby>食<rt>た</rt></ruby>べる → <ruby>食<rt>た</rt></ruby>べます
                  </>
                ),
                speakText: "たべます",
                note: "ichidan",
              },
              {
                label: "みる",
                jp: (
                  <>
                    <ruby>見<rt>み</rt></ruby>る → <ruby>見<rt>み</rt></ruby>ます
                  </>
                ),
                speakText: "みます",
                note: "ichidan",
              },
              {
                label: "おきる",
                jp: (
                  <>
                    <ruby>起<rt>お</rt></ruby>きる → <ruby>起<rt>お</rt></ruby>きます
                  </>
                ),
                speakText: "おきます",
                note: "ichidan",
              },
              {
                label: "のむ",
                jp: (
                  <>
                    <ruby>飲<rt>の</rt></ruby>む → <ruby>飲<rt>の</rt></ruby>みます
                  </>
                ),
                speakText: "のみます",
                note: "godan",
              },
              {
                label: "いく",
                jp: (
                  <>
                    <ruby>行<rt>い</rt></ruby>く → <ruby>行<rt>い</rt></ruby>きます
                  </>
                ),
                speakText: "いきます",
                note: "godan",
              },
              {
                label: "はなす",
                jp: (
                  <>
                    <ruby>話<rt>はな</rt></ruby>す → <ruby>話<rt>はな</rt></ruby>します
                  </>
                ),
                speakText: "はなします",
                note: "godan",
              },
              {
                label: "かう",
                jp: (
                  <>
                    <ruby>買<rt>か</rt></ruby>う → <ruby>買<rt>か</rt></ruby>います
                  </>
                ),
                speakText: "かいます",
                note: "godan",
              },
              {
                label: "する",
                jp: <>する → します</>,
                speakText: "します",
                note: "irrégulier",
              },
              {
                label: "くる",
                jp: (
                  <>
                    <ruby>来<rt>く</rt></ruby>る → <ruby>来<rt>き</rt></ruby>ます
                  </>
                ),
                speakText: "きます",
                note: "irrégulier",
              },
            ]}
          />

          <div className="callout">
            <strong>À l&apos;oral, ça se raccourcit aussi.</strong> Entre
            amis ou en famille, on laisse tomber ます et on utilise
            directement la forme dictionnaire — même pour annoncer ce qu&apos;on
            va faire.{" "}
            <ruby>行<rt>い</rt></ruby>く！(« j&apos;y vais ! ») sonne bien
            plus naturel que <ruby>行<rt>い</rt></ruby>きます entre proches.
            On creusera ce registre{" "}
            <strong>familier</strong> en semaine 4 — pour l&apos;instant,
            garde ます comme choix le plus sûr avec des inconnus.
          </div>

          <ExampleCard
            jp={
              <>
                がっこうに <ruby>行<rt>い</rt></ruby>きます。
              </>
            }
            fr="poli — à l'écrit, avec un inconnu"
            speakText="がっこうに いきます。"
          />
          <ExampleCard
            jp={
              <>
                がっこうに <ruby>行<rt>い</rt></ruby>く！
              </>
            }
            fr="familier — entre amis"
            speakText="がっこうに いく！"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Toute cette semaine, un kanji de jour de la semaine apparaîtra à
            chaque leçon. On commence avec lundi et mardi.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="月"
              reading="げつ"
              strokes={4}
              exampleWord="月曜日"
              exampleReading="げつようび"
              exampleFr="lundi"
              speakText="げつようび"
            />
            <KanjiCard
              kanji="火"
              reading="か"
              strokes={4}
              exampleWord="火曜日"
              exampleReading="かようび"
              exampleFr="mardi"
              speakText="かようび"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            Note : <ruby>月<rt>げつ</rt></ruby> se lit aussi がつ quand on
            compte les mois (<ruby>一月<rt>いちがつ</rt></ruby> = いちがつ,
            janvier). Pour les jours de la semaine, retiens げつ.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 2</h2>
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
                Réciter les 9 verbes du tableau (forme dictionnaire → ます)
                jusqu&apos;à ne plus hésiter.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner à dire à voix haute si un verbe est ichidan
                ou godan, dès qu&apos;on le croise dans jpdb.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir <ruby>月<rt>げつ</rt></ruby> et{" "}
                <ruby>火<rt>か</rt></ruby> avec leur lecture jusqu&apos;à les
                reconnaître sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 3 · construite le 5 juillet 2026 — la leçon 2
          s&apos;attaque à la forme て, le pivot de presque toute la
          grammaire verbale à venir.
        </footer>
      </div>
    </>
  );
}
