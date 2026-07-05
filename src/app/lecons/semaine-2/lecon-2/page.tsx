import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 2 · Leçon 2 — な形容詞入門",
  description:
    "Les adjectifs en な : な devant un nom, です/だ en position de prédicat, la négation じゃないです, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · な形" },
  { id: "s2", label: "2 · 名詞前" },
  { id: "s3", label: "3 · 述語" },
  { id: "s4", label: "4 · 否定" },
  { id: "s5", label: "5 · 会話体" },
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
          <div className="eyebrow">形容詞の世界 — 二週目・二課</div>
          <h1 className="title">な形容詞入門</h1>
          <div className="meta-line">Semaine 2 · Leçon 2 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Une deuxième famille d&apos;adjectifs</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Les な adjectifs se comportent presque comme des noms. Le な
            n&apos;apparaît que dans un cas précis — devant un nom qu&apos;ils
            décrivent directement.
          </p>

          <ExampleCard
            jp="おかあさんは げんきです。"
            fr="Maman va bien."
            speakText="おかあさんは げんきです。"
          />
          <p className="example-note">
            げんき (en forme, en bonne santé) se comporte ici comme un nom :
            pas de な, juste です.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>な devant un nom</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Dès que l&apos;adjectif en な se colle directement devant le
            nom qu&apos;il décrit, il faut insérer な entre les deux.
          </p>

          <ExampleCard
            jp="ここは しずかな こうえんです。"
            fr="C'est un parc calme."
            speakText="ここは しずかな こうえんです。"
          />
          <ExampleCard
            jp="この 町は ゆうめいです。"
            fr="Cette ville est célèbre."
            speakText="この 町は ゆうめいです。"
          />
          <p className="example-note">
            Compare : しずか<strong>な</strong> こうえん (nom collé, な
            obligatoire) contre 町は しずかです (prédicat, pas de な).
          </p>

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["ここは", "しずかな", "こうえんです", "しずかです"]}
            answer={["ここは", "しずかな", "こうえんです"]}
            targetFr="C'est un parc calme."
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>En position de prédicat : pas de な</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Quand l&apos;adjectif en な termine la phrase (il n&apos;est
            plus collé à un nom), on utilise simplement です — et jamais
            な.
          </p>

          <ExampleCard
            jp="この 町は ゆうめいです。"
            fr="Cette ville est célèbre."
            speakText="この 町は ゆうめいです。"
          />
          <p className="example-note">
            ゆうめい<strong>です</strong>, pas ゆうめい
            <strong>なです</strong>. À l&apos;écrit familier ou dans un
            journal intime, on remplace parfois です par だ : ゆうめいだ.
          </p>

          <Quiz
            promptJp="この 町は ゆうめい___。"
            promptFr="Cette ville est célèbre."
            choices={["です", "なです", "いです"]}
            answer="です"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>La forme négative</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Pour nier un adjectif en な en position de prédicat, on ajoute
            じゃないです après la racine — même mécanisme que pour X は Y
            です.
          </p>

          <ExampleCard
            jp="あの レストランは きれいじゃないです。"
            fr="Ce restaurant n'est pas propre."
            speakText="あの レストランは きれいじゃないです。"
          />
          <p className="example-note">
            きれい (propre, joli) → きれい<strong>じゃないです</strong>.
            On retrouve じゃ, déjà vu la semaine 1 pour nier です.
          </p>

          <Quiz
            promptFr="Comment dit-on « ce n'est pas propre » ?"
            choices={["きれいくないです", "きれいじゃないです", "きれいないです"]}
            answer="きれいじゃないです"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>À l&apos;oral, ça se raccourcit</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Entre amis, です disparaît carrément. La phrase se réduit à
            l&apos;adjectif lui-même, souvent suivi d&apos;une particule
            finale comme よ pour marquer l&apos;affirmation.
          </p>

          <ExampleCard
            jp="元気?"
            fr="ça va ? (forme complète : 元気ですか)"
            speakText="げんき?"
          />
          <ExampleCard
            jp="元気だよ!"
            fr="ça va ! (だ remplace です, よ ajoute du naturel)"
            speakText="げんきだよ!"
          />

          <div className="callout">
            <strong>元気ですか reste la forme à connaître par cœur.</strong>{" "}
            Mais entre copains, tu entendras surtout 「元気?」「元気だよ!」
            — court, direct, avec よ pour donner du ton à la réponse.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>Deux grands nombres, utiles dès que tu paies quelque chose.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="百"
              reading="ひゃく"
              strokes={6}
              exampleWord="百円"
              exampleReading="ひゃくえん"
              exampleFr="cent yens"
              speakText="ひゃくえん"
            />
            <KanjiCard
              kanji="千"
              reading="せん"
              strokes={3}
              exampleWord="千円"
              exampleReading="せんえん"
              exampleFr="mille yens"
              speakText="せんえん"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            百円 et 千円 sont les billets et pièces que tu manipuleras tous
            les jours au Japon — autant les reconnaître d&apos;un coup
            d&apos;œil.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 3</h2>
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
                Redire de mémoire しずかな こうえん et 町は ゆうめいです
                sans hésiter sur le な.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner à répondre 「元気だよ!」 à voix haute.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 百 et 千 avec leurs lectures ひゃく et せん.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 2 · construite le 5 juillet 2026 — la leçon 3
          passera à l&apos;auto-présentation, en assemblant ce qui a déjà
          été vu.
        </footer>
      </div>
    </>
  );
}
