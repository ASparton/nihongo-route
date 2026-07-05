import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 8 · Leçon 1 — ~てはいけない : révision approfondie",
  description:
    "Révision solide de l'interdiction ~てはいけない (forme て + はいけません), avec la contraction orale ~ちゃだめ très fréquente entre amis et avec les enfants.",
};

const STEPS = [
  { id: "s1", label: "1 · 復習" },
  { id: "s2", label: "2 · 禁止" },
  { id: "s3", label: "3 · 例文" },
  { id: "s4", label: "4 · ちゃだめ" },
  { id: "s5", label: "5 · 練習" },
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
          <div className="eyebrow">禁止表現 — 八週目・一課</div>
          <h1 className="title">~てはいけない : révision approfondie</h1>
          <div className="meta-line">Semaine 8 · Leçon 1 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Un rappel avant de continuer</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Tu as déjà vu cette structure une fois, avec un professeur —
            mais elle s&apos;est visiblement un peu envolée depuis, et
            c&apos;est tout à fait normal : l&apos;interdiction est une des
            notions qui s&apos;oublie le plus vite si on ne la pratique pas.
            On reprend donc tout depuis la base, avec plusieurs exemples
            bien ancrés, avant d&apos;enchaîner en leçon 3 avec la
            permission et l&apos;obligation dans des situations réelles de
            musée ou de temple.
          </p>
          <p>
            La bonne nouvelle : tu connais déjà la forme て depuis la
            semaine 3 (~てください, ~ています). Toute la nouveauté
            aujourd&apos;hui, c&apos;est ce qu&apos;on colle derrière.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>La formule : て + はいけません</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Pour dire qu&apos;une action est <strong>interdite</strong>, on
            prend le verbe à la forme て, puis on ajoute
            <strong> はいけません</strong> (poli) ou{" "}
            <strong>はいけない</strong> (neutre / familier). Littéralement,
            c&apos;est presque &laquo; même si tu fais X, ça ne va
            pas &raquo; — d&apos;où l&apos;idée d&apos;interdiction.
          </p>

          <ExampleCard
            jp={
              <>
                すって<span className="p-mark">は</span> いけません。
              </>
            }
            fr="il est interdit de fumer (verbe : すう, fumer)"
            speakText="すっては いけません。"
          />
          <p className="example-note">
            すう (fumer) → すって (forme て) → すっては いけません. C&apos;est
            exactement la structure que tu verras sur les panneaux{" "}
            <ruby>
              禁煙<rt>きんえん</rt>
            </ruby>{" "}
            (non-fumeur) un peu partout au Japon.
          </p>

          <div className="callout">
            <strong>Usage réel.</strong> Cette formule est partout dans les
            lieux publics japonais : temples, musées, trains, parcs. Tu la
            reconnaîtras vite sur les panneaux, même écrite de façon plus
            formelle (
            <ruby>
              禁止<rt>きんし</rt>
            </ruby>
            , ご
            <ruby>
              遠慮<rt>えんりょ</rt>
            </ruby>
            ください). Mais à l&apos;oral, c&apos;est bien ~てはいけません
            que tu entendras si quelqu&apos;un t&apos;explique une règle
            directement.
          </div>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Plusieurs exemples pour bien ancrer</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Trois interdictions très utiles pour un voyage au Japon — en
            particulier dans les temples et les musées. Écoute chaque
            phrase avant de lire la traduction.
          </p>

          <ExampleCard
            jp={
              <>
                ここで タバコを すって<span className="p-mark">は</span>{" "}
                いけません。
              </>
            }
            fr="Il est interdit de fumer ici."
            speakText="ここで タバコを すっては いけません。"
          />
          <ExampleCard
            jp={
              <>
                しゃしんを とって<span className="p-mark">は</span>{" "}
                いけません。
              </>
            }
            fr="Il est interdit de prendre des photos."
            speakText="しゃしんを とっては いけません。"
          />
          <p className="example-note">
            とても utile : beaucoup de temples et de musées japonais
            interdisent les photos à l&apos;intérieur — tu croiseras cette
            phrase, ou son équivalent écrit, très souvent.
          </p>
          <ExampleCard
            jp={
              <>
                ここに はいって<span className="p-mark">は</span> いけません。
              </>
            }
            fr="Il est interdit d'entrer ici."
            speakText="ここに はいっては いけません。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Comment dit-on « il est interdit de fumer ici » ?"
            choices={[
              "ここで タバコを すっては いけません。",
              "ここで タバコを すいます。",
              "ここで タバコを すっても いいです。",
            ]}
            answer="ここで タバコを すっては いけません。"
          />
          <Quiz
            promptFr="Comment dit-on « il est interdit de prendre des photos » ?"
            choices={[
              "しゃしんを とります。",
              "しゃしんを とっては いけません。",
              "しゃしんを とりません。",
            ]}
            answer="しゃしんを とっては いけません。"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>À l&apos;oral : ~ちゃだめ</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            ~てはいけない est correct, mais un peu long et un peu formel à
            l&apos;oral. Dans la conversation courante — et surtout quand on
            parle à des enfants, ou entre amis proches — on utilise presque
            toujours la contraction <strong>~ちゃだめ</strong> (ou ~じゃ
            だめ pour les verbes en ぬ・む・ぶ・ぐ). C&apos;est extrêmement
            fréquent : garde bien cette forme en tête, tu l&apos;entendras
            beaucoup plus souvent que ~てはいけない à l&apos;oral.
          </p>

          <ExampleCard
            jp="たべては いけません。"
            fr="formel — il est interdit de manger"
            speakText="たべては いけません。"
          />
          <ExampleCard
            jp="たべちゃ だめ！"
            fr="oral, familier — pas le droit de manger ! (ex : à un enfant)"
            speakText="たべちゃ だめ！"
          />
          <ExampleCard
            jp="ここで あそんじゃ だめだよ。"
            fr="oral — pas le droit de jouer ici (あそぶ → あそんじゃ)"
            speakText="ここで あそんじゃ だめだよ。"
          />
          <ExampleCard
            jp="もう おこっちゃ だめ！"
            fr="oral, entre amis — arrête de te fâcher ! (おこる → おこっちゃ)"
            speakText="もう おこっちゃ だめ！"
          />

          <div className="callout seal">
            <strong>Retiens surtout ~ちゃだめ.</strong> Tu continueras à
            croiser ~てはいけません dans les explications de règles
            officielles ou écrites, mais à l&apos;oreille, entre amis ou
            avec des enfants, c&apos;est ~ちゃだめ (parfois ~ちゃだめだよ,
            plus doux) que tu entendras dans la grande majorité des cas.
          </div>
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Assemble et vérifie</h2>
            <span className="time">~4 min</span>
          </div>

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["ここに", "はいって", "は", "いけません", "います"]}
            answer={["ここに", "はいって", "は", "いけません"]}
            targetFr="Il est interdit d'entrer ici."
          />

          <Quiz
            promptFr="Que veut dire「たべちゃ だめ！」?"
            choices={[
              "Tu peux manger.",
              "Pas le droit de manger !",
              "Tu veux manger ?",
            ]}
            answer="Pas le droit de manger !"
          />
          <Quiz
            promptFr="Quelle forme est la plus courante à l'oral entre amis ?"
            choices={["~てはいけません", "~ちゃだめ", "~なければならない"]}
            answer="~ちゃだめ"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Deux adjectifs opposés, très utiles pour décrire des trajets,
            des files d&apos;attente ou des durées de visite.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="長"
              reading="ちょう / なが"
              strokes={8}
              exampleWord="長い"
              exampleReading="ながい"
              exampleFr="long"
              speakText="ながい"
            />
            <KanjiCard
              kanji="短"
              reading="たん / みじか"
              strokes={12}
              exampleWord="短い"
              exampleReading="みじかい"
              exampleFr="court"
              speakText="みじかい"
            />
          </div>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon suivante</h2>
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
                Redire les trois exemples d&apos;interdiction (タバコ,
                しゃしん, 入る) sans regarder la traduction.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner à transformer ~てはいけません en ~ちゃだめ
                sur 3-4 verbes de son choix.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 長い et 短い jusqu&apos;à les reconnaître sans
                hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 8 · construite le 5 juillet 2026 — la leçon 2
          enchaîne avec le pendant positif de ~てはいけない : demander la
          permission avec ~てもいいですか.
        </footer>
      </div>
    </>
  );
}
