import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import VocabGrid from "@/components/VocabGrid";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import Dialogue from "@/components/Dialogue";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 12 · Leçon 1 — 困ったときの一言",
  description:
    "Phrases de survie pour demander de l'aide : 助けて, 道に迷いました, 日本語がわかりません, もう一度お願いします, et plus, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 概観" },
  { id: "s2", label: "2 · 救助" },
  { id: "s3", label: "3 · 理解" },
  { id: "s4", label: "4 · 減速" },
  { id: "s5", label: "5 · 会話" },
  { id: "s6", label: "6 · 漢字" },
];

const LOST_LINES = [
  {
    who: "A",
    jp: "すみません、たすけて ください。みちに まよいました。",
    fr: "Excusez-moi, aidez-moi s'il vous plaît. Je suis perdu(e).",
  },
  {
    who: "B",
    jp: "だいじょうぶですか。どこに いきたいですか。",
    fr: "Ça va ? Où voulez-vous aller ?",
  },
  {
    who: "A",
    jp: "えきに いきたいです。えいごは はなせますか。",
    fr: "Je veux aller à la gare. Parlez-vous anglais ?",
  },
  {
    who: "B",
    jp: "すこし はなせます。いっしょに いきましょう。",
    fr: "J'en parle un peu. Allons-y ensemble.",
  },
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
          <div className="eyebrow">最終週・サバイバル日本語 — 十二週目・一課</div>
          <h1 className="title">困ったときの一言</h1>
          <div className="meta-line">Semaine 12 · Leçon 1 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Six phrases qui sauvent</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Dernière semaine avant l&apos;embarquement. Les quatre leçons qui
            suivent n&apos;apportent presque plus de grammaire nouvelle :
            elles rassemblent tout ce qui existe déjà dans ta tête en
            phrases &laquo;clé en main&raquo; pour le voyage. On commence
            par le kit de secours minimal.
          </p>

          <VocabGrid
            items={[
              { jp: "たすけて!", fr: "Au secours !" },
              { jp: "みちに まよいました。", fr: "Je suis perdu(e)." },
              {
                jp: "にほんごが わかりません。",
                fr: "Je ne comprends pas le japonais.",
              },
              {
                jp: "もういちど おねがいします。",
                fr: "Encore une fois, s'il vous plaît.",
              },
              {
                jp: "ゆっくり はなして ください。",
                fr: "Parlez lentement, s'il vous plaît.",
              },
              { jp: "えいごは はなせますか。", fr: "Parlez-vous anglais ?" },
            ]}
          />
          <p className="example-note">
            Les sections suivantes reprennent chacune de ces phrases avec
            son détail, son écriture en kanji et sa nuance d&apos;usage.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Appeler à l&apos;aide, se dire perdu</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Deux réflexes à avoir prêts avant même de réfléchir : crier pour
            être aidé, et poser des mots simples sur le fait d&apos;être
            perdu.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>
                  助<rt>たす</rt>
                </ruby>
                けて!
              </>
            }
            fr="Au secours !"
            speakText="助けて!"
          />
          <p className="example-note">
            Se crie fort, pour une vraie urgence (danger, malaise, vol). Pour
            une simple gêne, on reste plutôt sur すみません.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>
                  道<rt>みち</rt>
                </ruby>
                に{" "}
                <ruby>
                  迷<rt>まよ</rt>
                </ruby>
                いました。
              </>
            }
            fr="Je suis perdu(e)."
            speakText="道に迷いました。"
          />
          <p className="example-note">
            道 (route, chemin) aura son propre kanji un peu plus loin dans
            cette leçon. 迷う, c&apos;est &laquo;se perdre&raquo;, ici à la
            forme polie du passé.
          </p>

          <Quiz
            promptFr="Comment dit-on « Je suis perdu(e) » ?"
            choices={["たすけて", "みちに まよいました", "にほんごが わかりません"]}
            answer="みちに まよいました"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Dire qu&apos;on ne comprend pas</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Deux phrases qui désamorcent la panique quand le japonais va
            trop vite ou reste flou.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>
                  日本語<rt>にほんご</rt>
                </ruby>
                が わかりません。
              </>
            }
            fr="Je ne comprends pas le japonais."
            speakText="日本語がわかりません。"
          />
          <p className="example-note">
            わかりません est le négatif poli de わかります
            (&laquo;comprendre&raquo;), que tu utilises déjà depuis
            plusieurs semaines.
          </p>

          <ExampleCard
            jp={
              <>
                もう{" "}
                <ruby>
                  一度<rt>いちど</rt>
                </ruby>{" "}
                お
                <ruby>
                  願<rt>ねが</rt>
                </ruby>
                いします。
              </>
            }
            fr="Encore une fois, s'il vous plaît."
            speakText="もう一度お願いします。"
          />
          <p className="example-note">
            Formule passe-partout et très polie, utilisable dès qu&apos;on
            veut qu&apos;on répète — une phrase, une annonce, un prix.
          </p>

          <Quiz
            promptJp="日本語が ___。"
            promptFr="Je ne comprends pas le japonais."
            choices={["わかります", "わかりません", "わかりました"]}
            answer="わかりません"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Ralentir la conversation, demander l&apos;anglais</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Deux phrases qui donnent de l&apos;air quand la conversation
            devient trop rapide ou trop technique pour toi.
          </p>

          <ExampleCard
            jp={
              <>
                ゆっくり{" "}
                <ruby>
                  話<rt>はな</rt>
                </ruby>
                して ください。
              </>
            }
            fr="Parlez lentement, s'il vous plaît."
            speakText="ゆっくり話してください。"
          />
          <p className="example-note">
            Le ~て ください vu en semaine 3 : そのまま réutilisable pour
            n&apos;importe quelle demande polie.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>
                  英語<rt>えいご</rt>
                </ruby>
                は{" "}
                <ruby>
                  話<rt>はな</rt>
                </ruby>
                せますか。
              </>
            }
            fr="Parlez-vous anglais ?"
            speakText="英語は話せますか。"
          />
          <p className="example-note">
            話せます, c&apos;est la forme potentielle (&laquo;peut
            parler&raquo;) et non simplement 話します (&laquo;parle&raquo;)
            — le petit nuance vue en semaine 7.
          </p>

          <Quiz
            promptFr="Quelle phrase demande à quelqu'un de parler plus lentement ?"
            choices={[
              "ゆっくり話してください",
              "英語は話せますか",
              "もう一度お願いします",
            ]}
            answer="ゆっくり話してください"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Écoute — perdu près de la gare</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Un mini-dialogue qui enchaîne plusieurs phrases du jour. Écoute-le
            en entier une première fois, puis ligne par ligne pour répéter.
          </p>

          <Dialogue lines={LOST_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Où le touriste veut-il aller ?"
            choices={["à la gare", "à l'hôtel", "au restaurant"]}
            answer="à la gare"
          />
          <Quiz
            promptFr="La personne qui aide parle-t-elle anglais ?"
            choices={["Oui, un peu", "Non, pas du tout", "Oui, parfaitement"]}
            answer="Oui, un peu"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Deux kanji utiles pour se repérer en ville — 道 vient justement
            de servir dans 道に迷いました.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="道"
              reading="どう / みち"
              strokes={12}
              exampleWord="道"
              exampleReading="みち"
              exampleFr="chemin, route — clin d'œil à 道に迷いました"
              speakText="みち"
            />
            <KanjiCard
              kanji="店"
              reading="てん / みせ"
              strokes={8}
              exampleWord="店"
              exampleReading="みせ"
              exampleFr="magasin"
              speakText="みせ"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            どう et てん apparaissent surtout dans des mots composés (道路
            &laquo;route&raquo;, 店員 &laquo;employé de magasin&raquo;) ; à
            l&apos;oral seul, retiens surtout みち et みせ.
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
                Réciter les six phrases de survie sans regarder la
                traduction.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Réécouter 助けて et 道に迷いました jusqu&apos;à pouvoir les
                redire du premier coup.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 道 et 店 avec leurs lectures jusqu&apos;à les
                reconnaître sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 12 · construite le 5 juillet 2026 — la leçon 2
          continue avec les petites phrases de politesse et de conversation.
        </footer>
      </div>
    </>
  );
}
