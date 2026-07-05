import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import KatakanaWarmup from "@/components/KatakanaWarmup";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import Dialogue from "@/components/Dialogue";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 1 · Leçon 1 — Grande révision des bases",
  description:
    "Révision condensée : kana, particules は・が・を・に・で, X は Y です, これ/それ/あれ, ここ/そこ/あそこ, あります/います, nombres 1-10 — avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · カナ" },
  { id: "s2", label: "2 · 助詞" },
  { id: "s3", label: "3 · 文型" },
  { id: "s4", label: "4 · 指示語" },
  { id: "s5", label: "5 · 存在" },
  { id: "s6", label: "6 · 数字と会話" },
  { id: "s7", label: "7 · 漢字" },
];

const DIALOGUE_LINES = [
  {
    who: "A",
    jp: "すみません、コンビニは どこですか。",
    fr: "Excusez-moi, où est le konbini ?",
  },
  {
    who: "B",
    jp: "あそこに あります。",
    fr: "Il est là-bas.",
  },
  {
    who: "A",
    jp: "ありがとうございます。これは いくらですか。",
    fr: "Merci beaucoup. Ça coûte combien, ceci ?",
  },
  {
    who: "B",
    jp: "それは 二百円です。",
    fr: "Ça, c'est 200 yens.",
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
          <div className="eyebrow">基礎固め — 一週目・一課（総復習）</div>
          <h1 className="title">Grande révision des bases</h1>
          <div className="meta-line">Semaine 1 · Leçon 1 · ~40 minutes</div>
          <p style={{ fontSize: 13, marginTop: 6 }}>
            Cette leçon condense en une seule fois tout ce que tu as déjà vu
            avec ton ami : les particules, X は Y です, これ/それ/あれ,
            ここ/そこ/あそこ et les nombres. On va vite — l&apos;idée est de
            vérifier que tout est bien solide avant de passer à du contenu
            nouveau dès la leçon 2.
          </p>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Échauffement katakana</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Cinq mots que tu croiseras dès l&apos;aéroport. Lis-les
            d&apos;abord sans regarder la traduction.
          </p>
          <KatakanaWarmup word="コーヒー" meaning="café — kōhī" />
          <KatakanaWarmup word="タクシー" meaning="taxi" />
          <KatakanaWarmup word="ホテル" meaning="hôtel" />
          <KatakanaWarmup word="パスポート" meaning="passeport" />
          <KatakanaWarmup word="カメラ" meaning="appareil photo" />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Les particules は・が・を・に・で</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Cinq petits mots qui font tout le travail de construction de la
            phrase japonaise. Un rappel rapide, puis directement les
            exercices.
          </p>

          <ExampleCard
            jp={<>わたし<span className="p-mark">は</span> がくせいです。</>}
            fr="thème — en ce qui me concerne, je suis étudiant"
            speakText="わたしは がくせいです。"
          />
          <ExampleCard
            jp={<>ねこ<span className="p-mark">が</span> います。</>}
            fr="sujet nouveau / existence — il y a un chat"
            speakText="ねこが います。"
          />
          <ExampleCard
            jp={<>みず<span className="p-mark">を</span> のみます。</>}
            fr="complément d'objet direct — je bois de l'eau"
            speakText="みずを のみます。"
          />
          <ExampleCard
            jp={<>がっこう<span className="p-mark">に</span> いきます。</>}
            fr="destination — je vais à l'école"
            speakText="がっこうに いきます。"
          />
          <ExampleCard
            jp={<>でんしゃ<span className="p-mark">で</span> いきます。</>}
            fr="moyen — j'y vais en train"
            speakText="でんしゃで いきます。"
          />

          <h3 className="sub-heading">À toi</h3>

          <Quiz
            promptJp="わたし ___ にほんじんです。"
            promptFr="Moi, je suis japonais(e)."
            choices={["は", "が", "を", "に", "で"]}
            answer="は"
          />
          <Quiz
            promptJp="みず ___ のみます。"
            promptFr="Je bois de l'eau."
            choices={["は", "が", "を", "に", "で"]}
            answer="を"
          />
          <Quiz
            promptJp="がっこう ___ いきます。"
            promptFr="Je vais à l'école."
            choices={["は", "が", "を", "に", "で"]}
            answer="に"
          />
          <Quiz
            promptJp="でんしゃ ___ いきます。"
            promptFr="J'y vais en train."
            choices={["は", "が", "を", "に", "で"]}
            answer="で"
          />
          <Quiz
            promptJp="ねこ ___ います。"
            promptFr="Il y a un chat."
            choices={["は", "が", "を", "に", "で"]}
            answer="が"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>X は Y です — et sa version orale</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Le squelette de la plupart de tes premières phrases, dans ses
            trois formes, plus le raccourci que tu entendras partout à
            l&apos;oral.
          </p>

          <ExampleCard
            jp="わたしは がくせいです。"
            fr="affirmatif — je suis étudiant(e)"
            speakText="わたしは がくせいです。"
          />
          <ExampleCard
            jp="わたしは がくせいでは ありません。"
            fr="négatif (écrit/formel) — je ne suis pas étudiant(e)"
            speakText="わたしは がくせいでは ありません。"
          />
          <ExampleCard
            jp="わたしは がくせいじゃ ありません。"
            fr="négatif (oral, même poli) — c'est ce que tu entendras le plus"
            speakText="わたしは がくせいじゃ ありません。"
          />
          <ExampleCard
            jp="あなたは がくせいですか。"
            fr="interrogatif — es-tu étudiant(e) ?"
            speakText="あなたは がくせいですか。"
          />

          <div className="callout">
            <strong>では → じゃ.</strong> では est correct partout, mais à
            l&apos;oreille à Tokyo, c&apos;est じゃ que tu entendras dans la
            quasi-totalité des cas, même en registre poli.
          </div>

          <h3 className="sub-heading">Assemble la phrase — négatif</h3>
          <SentenceAssembler
            tiles={["わたしは", "にほんじん", "じゃ", "ありません", "です"]}
            answer={["わたしは", "にほんじん", "じゃ", "ありません"]}
            targetFr="Moi, je ne suis pas japonais(e)."
          />

          <h3 className="sub-heading">Assemble la phrase — question</h3>
          <SentenceAssembler
            tiles={["あなたは", "がくせい", "です", "か", "でした"]}
            answer={["あなたは", "がくせい", "です", "か"]}
            targetFr="Es-tu étudiant(e) ?"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>これ・それ・あれ / この・その・あの + の</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            これ/それ/あれ sont autonomes (« ceci/cela/cela-là »). この/その/あの
            ont toujours besoin d&apos;un nom juste après. の relie deux noms
            (possession ou association).
          </p>
          <ExampleCard
            jp="これは わたしの ほんです。"
            fr="Ceci est mon livre."
            speakText="これは わたしの ほんです。"
          />
          <ExampleCard
            jp="あの 人は がくせいです。"
            fr="Cette personne là-bas est étudiante."
            speakText="あの 人は がくせいです。"
          />
          <ExampleCard
            jp="これは 何ですか。"
            fr="Qu'est-ce que c'est ?"
            speakText="これは 何ですか。"
          />

          <div className="callout">
            <strong>À l&apos;oral, on saute です/か.</strong> Entre amis, on
            entend souvent juste 「これ何?」au lieu de 「これは何ですか。」— la
            question complète reste la version à connaître par cœur, mais ne
            sois pas surpris d&apos;entendre la version courte.
          </div>

          <Quiz
            promptJp="___ かばんは たかいです。"
            promptFr="Ce sac(-ci) est cher (un nom suit directement)."
            choices={["これ", "この"]}
            answer="この"
          />
          <SentenceAssembler
            tiles={["それは", "わたしの", "かばん", "です", "かばんは"]}
            answer={["それは", "わたしの", "かばん", "です"]}
            targetFr="Cela, c'est mon sac."
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>ここ・そこ・あそこ + あります・います</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            あります pour les choses inanimées, います pour les êtres
            vivants — et les trois pronoms de lieu qui vont avec.
          </p>
          <ExampleCard
            jp="トイレは あそこに あります。"
            fr="Les toilettes sont là-bas. (inanimé)"
            speakText="トイレは あそこに あります。"
          />
          <ExampleCard
            jp="ねこが そこに います。"
            fr="Il y a un chat là-bas. (animé)"
            speakText="ねこが そこに います。"
          />
          <ExampleCard
            jp="えきは ここに あります。"
            fr="La gare est ici."
            speakText="えきは ここに あります。"
          />

          <div className="callout">
            <strong>Le raccourci le plus utile en voyage :</strong> pointer du
            doigt et dire juste 「あそこ!」sans faire de phrase complète est
            parfaitement naturel pour indiquer une direction.
          </div>

          <Quiz
            promptJp="ねこが そこに ___。"
            promptFr="Il y a un chat là-bas."
            choices={["あります", "います"]}
            answer="います"
          />
          <Quiz
            promptJp="トイレは あそこに ___。"
            promptFr="Les toilettes sont là-bas."
            choices={["あります", "います"]}
            answer="あります"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Nombres 1-10 et dialogue de synthèse</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            いち・に・さん・し(よん)・ご・ろく・しち(なな)・はち・きゅう(く)・じゅう
            — plusieurs chiffres ont deux lectures possibles, les deux sont
            correctes.
          </p>
          <ExampleCard
            jp="ひとつ、ふたつ、みっつ..."
            fr="1, 2, 3 objets (compteur つ, lecture irrégulière — on approfondira plus tard)"
            speakText="ひとつ、ふたつ、みっつ"
          />

          <Dialogue lines={DIALOGUE_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Où se trouve le konbini ?"
            choices={["Ici", "Là-bas", "On ne sait pas"]}
            answer="Là-bas"
          />
          <Quiz
            promptFr="Combien coûte l'objet ?"
            choices={["100円", "200円", "300円"]}
            answer="200円"
          />
        </section>

        <section className="block" id="s7">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Deux kanji pour amorcer les nombres — ils reviendront toute la
            semaine dans jpdb et Duolingo.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="一"
              reading="いち"
              strokes={1}
              exampleWord="一番"
              exampleReading="いちばん"
              exampleFr="le premier, le meilleur"
              speakText="いちばん"
            />
            <KanjiCard
              kanji="二"
              reading="に"
              strokes={2}
              exampleWord="二人"
              exampleReading="ふたり"
              exampleFr="deux personnes (lecture irrégulière)"
              speakText="ふたり"
            />
          </div>
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
                Si un des exercices ci-dessus a coincé, réécoute la carte
                audio correspondante avant de continuer.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Revoir 一 et 二 avec leur lecture jusqu&apos;à les reconnaître
                sans hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 1 (révision condensée) — la leçon 2 attaque du
          contenu nouveau : les particules de fin de phrase ね・よ・わ, qui te
          serviront tout de suite à sonner plus naturel.
        </footer>
      </div>
    </>
  );
}
