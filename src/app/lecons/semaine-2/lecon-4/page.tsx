import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import Dialogue from "@/components/Dialogue";
import KanjiCard from "@/components/KanjiCard";
import VocabGrid from "@/components/VocabGrid";

export const metadata: Metadata = {
  title: "Semaine 2 · Leçon 4 — Compter et réviser",
  description:
    "Compter les objets et les personnes (ひとつ/一人・ふたつ/二人) et grande révision de la semaine : particules, これ/それ/あれ, あります/います, adjectifs い/な.",
};

const STEPS = [
  { id: "s1", label: "1 · 物" },
  { id: "s2", label: "2 · 人" },
  { id: "s3", label: "3 · 市場" },
  { id: "s4", label: "4 · 復習" },
  { id: "s5", label: "5 · 総復習" },
  { id: "s6", label: "6 · 漢字" },
];

const MARKET_LINES = [
  {
    who: "A",
    jp: "これを 一つ ください。",
    fr: "Ça, un s'il vous plaît (litt. je vous en prends un).",
  },
  {
    who: "B",
    jp: "はい、二百円です。",
    fr: "Voilà, ça fait deux cents yens.",
  },
  {
    who: "A",
    jp: "ありがとうございます。",
    fr: "Merci beaucoup.",
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
          <div className="eyebrow">数と総復習 — 二週目・四課</div>
          <h1 className="title">数える人と物 + 復習</h1>
          <div className="meta-line">Semaine 2 · Leçon 4 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Compter les objets — rappel</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            La série ひとつ・ふたつ・みっつ compte les objets sans forme
            précise — vue en semaine 1, elle revient ici avant
            d&apos;attaquer les personnes.
          </p>

          <VocabGrid
            items={[
              { jp: "ひとつ", fr: "un (objet)" },
              { jp: "ふたつ", fr: "deux (objets)" },
              { jp: "みっつ", fr: "trois (objets)" },
            ]}
          />
          <p className="example-note">
            Cette série est <strong>irrégulière</strong> jusqu&apos;à dix —
            elle ne suit pas いち・に・さん.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Compter les personnes</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Pour les personnes, un et deux sont eux aussi irréguliers —
            puis à partir de trois, on repasse par les chiffres normaux
            avec le suffixe 人 (にん).
          </p>

          <VocabGrid
            items={[
              { jp: "一人", fr: "une personne — ひとり (irrégulier)" },
              { jp: "二人", fr: "deux personnes — ふたり (irrégulier)" },
              { jp: "三人", fr: "trois personnes — さんにん (régulier)" },
            ]}
          />
          <p className="example-note">
            À partir de 三人, le motif redevient prévisible : 四人
            (よにん), 五人 (ごにん)... Seuls 一人 et 二人 sortent du moule.
          </p>

          <Quiz
            promptFr="Comment dit-on « deux personnes » ?"
            choices={["ににん", "ふたり", "にじん"]}
            answer="ふたり"
          />
          <Quiz
            promptFr="Comment dit-on « trois personnes » ?"
            choices={["みっつ", "さんにん", "みたり"]}
            answer="さんにん"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Écoute — au marché</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Une petite scène d&apos;achat, avec un compteur d&apos;objets et
            un nombre. Écoute-la en entier, puis ligne par ligne.
          </p>

          <Dialogue lines={MARKET_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Combien d'objets le client demande-t-il ?"
            choices={["Un", "Deux", "Trois"]}
            answer="Un"
          />
          <Quiz
            promptFr="Combien ça coûte ?"
            choices={["百円", "二百円", "千円"]}
            answer="二百円"
          />

          <div className="callout">
            <strong>これを 一つ ください reste la forme la plus sûre.</strong>{" "}
            Mais entre habitués, au marché ou dans une petite boutique, on
            entend souvent juste 「これ、一つ!」— sans を ni ください,
            presque pointé du doigt. À réserver pour quand tu maîtrises
            déjà la version complète.
          </div>
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Révision — particules et démonstratifs</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            On remet la main sur は・が・を・に・で et sur これ/それ/あれ,
            vus en semaine 1.
          </p>

          <Quiz
            promptJp="これ___ わたしの カメラです。"
            promptFr="Ça, c'est mon appareil photo."
            choices={["は", "を", "に"]}
            answer="は"
          />
          <Quiz
            promptFr="Comment dit-on « ça » quand l'objet est proche de toi ?"
            choices={["これ", "それ", "あれ"]}
            answer="これ"
          />
          <Quiz
            promptJp="こうえんに ねこ___ います。"
            promptFr="Il y a un chat dans le parc."
            choices={["が", "を", "で"]}
            answer="が"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Grande révision — adjectifs de la semaine</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Pour finir, un mélange d&apos;adjectifs en い et en な, avec
            leurs formes affirmatives et négatives.
          </p>

          <ExampleCard
            jp="この 町は しずかで きれいです。"
            fr="Cette ville est calme et propre."
            speakText="この 町は しずかで きれいです。"
          />
          <p className="example-note">
            で relie deux な adjectifs entre eux — un petit bonus pratique
            pour enchaîner des descriptions.
          </p>

          <Quiz
            promptFr="Comment dit-on « ce n'est pas cher » (い adjectif) ?"
            choices={["たかくないです", "たかじゃないです", "たかいないです"]}
            answer="たかくないです"
          />
          <Quiz
            promptFr="Comment dit-on « ce n'est pas célèbre » (な adjectif) ?"
            choices={["ゆうめいくないです", "ゆうめいじゃないです", "ゆうめいないです"]}
            answer="ゆうめいじゃないです"
          />
          <Quiz
            promptJp="いいえ、___です。"
            promptFr="Non, ce n'est pas bien (irrégulier)."
            choices={["よくない", "いくない", "いいじゃない"]}
            answer="よくない"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Deux kanji à lectures multiples — ils reviennent sans cesse,
            autant les maîtriser maintenant.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="人"
              reading="ひと / じん / にん"
              strokes={2}
              exampleWord="一人"
              exampleReading="ひとり"
              exampleFr="une personne (lecture irrégulière)"
              speakText="ひとり"
            />
            <KanjiCard
              kanji="日"
              reading="ひ / にち"
              strokes={4}
              exampleWord="日本人"
              exampleReading="にほんじん"
              exampleFr="japonais(e) — clin d'œil à la leçon 1 de la semaine 1"
              speakText="にほんじん"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            人 change de lecture selon le mot : ひと (personne, seul), じん
            (nationalité, comme 日本人), にん (compteur, comme 三人). 日 fait
            de même entre ひ (jour) et にち (dans les mots composés).
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la semaine 3</h2>
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
                Réviser ひとつ/ふたつ/みっつ et 一人/二人/三人 jusqu&apos;à
                ne plus les confondre.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Relire les 4 leçons de la semaine et repérer ce qui reste
                flou.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 人 et 日 avec toutes leurs lectures (ひと/じん/にん,
                ひ/にち).
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 4 · semaine 2 · construite le 5 juillet 2026 — la semaine 3
          attaquera les verbes et la forme en ～ています, en s&apos;appuyant
          sur tout ce qui vient d&apos;être consolidé ici.
        </footer>
      </div>
    </>
  );
}
