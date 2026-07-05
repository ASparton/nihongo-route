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
  title: "Semaine 5 · Leçon 2 — な形容詞の全活用",
  description:
    "Le paradigme complet des adjectifs en な : だ, じゃない, だった, じゃなかった — avec げんき et きれい, audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · だ" },
  { id: "s2", label: "2 · げんき" },
  { id: "s3", label: "3 · きれい" },
  { id: "s4", label: "4 · 例文" },
  { id: "s5", label: "5 · 口語" },
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
          <div className="eyebrow">形容詞を極める — 五週目・二課</div>
          <h1 className="title">な形容詞の全活用</h1>
          <div className="meta-line">Semaine 5 · Leçon 2 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Rappel — だ, la forme neutre de です</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Un adjectif en な se comporte comme un nom : c&apos;est en réalité
            だ (forme neutre) ou です (forme polie) qui porte le temps et la
            négation, pas l&apos;adjectif lui-même.
          </p>

          <ExampleCard
            jp="げんきだ。"
            fr="Je vais bien. (forme neutre/dictionnaire)"
            speakText="げんきだ。"
          />
          <ExampleCard
            jp="げんきです。"
            fr="Je vais bien. (forme polie, celle que tu utilises)"
            speakText="げんきです。"
          />
          <p className="example-note">
            だ et です portent exactement le même sens ici — seul le registre
            change. On garde だ dans les tableaux ci-dessous car c&apos;est
            lui qui change de forme.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Le paradigme complet — げんき</h2>
            <span className="time">~9 min</span>
          </div>
          <p>
            げんき (en forme, en bonne santé) suit le même moule que tous
            les adjectifs en な : だ se transforme, la racine ne bouge pas.
          </p>

          <ConjugationTable
            title="げんき（元気）— en forme"
            rows={[
              {
                label: "現在・肯定",
                jp: "げんきだ",
                speakText: "げんきです。",
                note: "poli : げんきです",
              },
              {
                label: "現在・否定",
                jp: "げんきじゃない",
                speakText: "げんきじゃないです。",
                note: "poli : げんきじゃないです",
              },
              {
                label: "過去・肯定",
                jp: "げんきだった",
                speakText: "げんきでした。",
                note: "poli : げんきでした",
              },
              {
                label: "過去・否定",
                jp: "げんきじゃなかった",
                speakText: "げんきじゃなかったです。",
                note: "poli : げんきじゃなかったです",
              },
            ]}
          />
          <p className="example-note">
            La racine げんき ne change jamais : seule la partie だ / じゃない
            / だった / じゃなかった bouge, exactement comme です le fait au
            présent.
          </p>

          <Quiz
            promptFr="Quelle est la forme « passé négatif » de げんきだ ?"
            choices={["げんきじゃない", "げんきだった", "げんきじゃなかった"]}
            answer="げんきじゃなかった"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Deuxième exemple — きれい</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Même moule avec きれい (propre, joli) — pour vérifier que le
            motif tient avec un autre adjectif en な.
          </p>

          <ConjugationTable
            title="きれい（綺麗）— propre, joli"
            rows={[
              {
                label: "現在・肯定",
                jp: "きれいだ",
                speakText: "きれいです。",
              },
              {
                label: "現在・否定",
                jp: "きれいじゃない",
                speakText: "きれいじゃないです。",
              },
              {
                label: "過去・肯定",
                jp: "きれいだった",
                speakText: "きれいでした。",
              },
              {
                label: "過去・否定",
                jp: "きれいじゃなかった",
                speakText: "きれいじゃなかったです。",
              },
            ]}
          />

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["この へやは", "きれいじゃなかった", "です", "きれいだ"]}
            answer={["この へやは", "きれいじゃなかった", "です"]}
            targetFr="Cette pièce n'était pas propre."
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>En contexte</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Une phrase de bilan de journée, typique pour raconter un voyage
            le soir.
          </p>

          <ExampleCard
            jp="きょうは あまり げんきじゃなかったです。"
            fr="Aujourd'hui, je n'étais pas très en forme."
            speakText="きょうは あまり げんきじゃなかったです。"
          />
          <p className="example-note">
            あまり (pas trop, pas vraiment) fonctionne comme ぜんぜん : il
            accompagne presque toujours une forme négative.
          </p>
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>À l&apos;oral, だ remplace です</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Entre amis, だ (et son passé だった) remplace です dans les
            questions et réponses rapides — un raccourci naturel que tu
            entendras partout.
          </p>

          <ExampleCard
            jp="元気だった?"
            fr="Ça allait bien ? (question familière)"
            speakText="げんきだった?"
          />

          <div className="callout">
            <strong>Usage réel.</strong> 元気だった? est la question que tu
            poseras spontanément à un ami que tu retrouves après plusieurs
            jours. La réponse la plus naturelle : 「うん、元気だったよ!」 —
            court, direct, avec よ pour donner du ton.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Deux kanji très fréquents dans les noms propres et le vocabulaire
            de base.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="田"
              reading="た / でん"
              strokes={5}
              exampleWord="田中さん"
              exampleReading="たなかさん"
              exampleFr="M./Mme Tanaka (nom de famille très courant)"
              speakText="たなかさん"
            />
            <KanjiCard
              kanji="本"
              reading="ほん / もと"
              strokes={5}
              exampleWord="本"
              exampleReading="ほん"
              exampleFr="livre"
              speakText="ほん"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            田 apparaît dans une quantité de noms de famille japonais (田中,
            山田, 田村...). 本, déjà croisé en clin d&apos;œil depuis la
            semaine 1 avec 日本, se lit simplement ほん quand il signifie
            « livre ».
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
                Redire de mémoire les 4 formes de げんきだ et きれいだ, dans
                l&apos;ordre.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner à demander 「元気だった?」 et à y répondre à
                voix haute.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 田 et 本 avec leurs deux lectures.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 5 · construite le 5 juillet 2026 — la leçon 3
          combine い et な adjectifs pour comparer deux choses entre elles.
        </footer>
      </div>
    </>
  );
}
