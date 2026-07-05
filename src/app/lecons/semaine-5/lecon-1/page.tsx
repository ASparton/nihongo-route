import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import ConjugationTable from "@/components/ConjugationTable";
import Quiz from "@/components/Quiz";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 5 · Leçon 1 — い形容詞の全活用",
  description:
    "Le paradigme complet des adjectifs en い : présent, négatif, passé, passé négatif — et l'exception いい, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 現在形" },
  { id: "s2", label: "2 · 全活用" },
  { id: "s3", label: "3 · いい" },
  { id: "s4", label: "4 · 例文" },
  { id: "s5", label: "5 · 口語" },
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
          <div className="eyebrow">形容詞を極める — 五週目・一課</div>
          <h1 className="title">い形容詞の全活用</h1>
          <div className="meta-line">Semaine 5 · Leçon 1 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Rappel — la forme présente</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Jusqu&apos;ici tu n&apos;as utilisé que la forme présente
            affirmative des adjectifs en い : たかい, おおきい, おもしろい...
            Cette semaine, on construit les trois formes qui manquent —
            négatif, passé, passé négatif — à partir de cette même racine.
          </p>

          <ExampleCard
            jp="この かばんは たかいです。"
            fr="Ce sac est cher."
            speakText="この かばんは たかいです。"
          />
          <p className="example-note">
            たかい reste inchangé devant です : c&apos;est la forme que tu
            connais déjà.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Le paradigme complet — たかい</h2>
            <span className="time">~10 min</span>
          </div>
          <p>
            On part toujours de la racine sans le い final (たか-), puis on
            ajoute la terminaison qui correspond à chaque forme. Écoute
            chaque ligne avant de continuer.
          </p>

          <ConjugationTable
            title="たかい（高い）— cher, haut"
            rows={[
              {
                label: "現在・肯定",
                jp: "たかい",
                speakText: "たかいです。",
                note: "présent affirmatif",
              },
              {
                label: "現在・否定",
                jp: "たかくない",
                speakText: "たかくないです。",
                note: "たか + くない",
              },
              {
                label: "過去・肯定",
                jp: "たかかった",
                speakText: "たかかったです。",
                note: "たか + かった",
              },
              {
                label: "過去・否定",
                jp: "たかくなかった",
                speakText: "たかくなかったです。",
                note: "たか + くなかった",
              },
            ]}
          />
          <p className="example-note">
            Le motif est régulier pour <strong>tous</strong> les adjectifs en
            い : retire le い final, puis colle くない / かった / くなかった.
            Ajoute です à la fin pour rester poli.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Quelle est la forme « passé négatif » de たかい ?"
            choices={["たかくない", "たかかった", "たかくなかった"]}
            answer="たかくなかった"
          />
          <Quiz
            promptFr="Quelle est la forme « présent négatif » de おもしろい (intéressant) ?"
            choices={["おもしろくない", "おもしろかった", "おもしろいじゃない"]}
            answer="おもしろくない"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>L&apos;exception — いい</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            いい (bien, bon) est le seul adjectif en い vraiment irrégulier.
            Le radical いく- n&apos;existe pas : à partir du négatif, on
            repasse par よ-.
          </p>

          <ConjugationTable
            title="いい — bien, bon (irrégulier)"
            rows={[
              {
                label: "現在・肯定",
                jp: "いい",
                speakText: "いいです。",
              },
              {
                label: "現在・否定",
                jp: "よくない",
                speakText: "よくないです。",
                note: "jamais いくない",
              },
              {
                label: "過去・肯定",
                jp: "よかった",
                speakText: "よかったです。",
                note: "jamais いかった",
              },
              {
                label: "過去・否定",
                jp: "よくなかった",
                speakText: "よくなかったです。",
                note: "jamais いかなかった",
              },
            ]}
          />
          <p className="example-note">
            Retiens ce petit changement de son : いい → <strong>よ</strong>
            くない → <strong>よ</strong>かった → <strong>よ</strong>くなかった.
            Toutes les autres formes en い suivent la règle normale.
          </p>

          <Quiz
            promptFr="Comment dit-on « ce n'était pas bien » ?"
            choices={["いかった", "よかった", "よくなかった"]}
            answer="よくなかった"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>En contexte</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Deux phrases avec un même adjectif, à l&apos;affirmatif puis au
            négatif — pour sentir le contraste à l&apos;oreille.
          </p>

          <ExampleCard
            jp="この 映画は おもしろかったです。"
            fr="Ce film était intéressant."
            speakText="この 映画は おもしろかったです。"
          />
          <ExampleCard
            jp="ぜんぜん おもしろくなかったです。"
            fr="Il n'était pas intéressant du tout."
            speakText="ぜんぜん おもしろくなかったです。"
          />
          <p className="example-note">
            ぜんぜん (pas du tout) renforce presque toujours une forme
            négative — jamais une forme affirmative.
          </p>
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>À l&apos;oral, on étire la voyelle</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Dans une conversation spontanée entre amis, il est très courant
            d&apos;allonger la dernière voyelle d&apos;un adjectif au passé
            pour marquer l&apos;émotion — surtout la déception ou
            l&apos;enthousiasme.
          </p>

          <ExampleCard
            jp="つまらなかったー。"
            fr="C'était vraiment nul (intonation étirée)."
            speakText="つまらなかったー。"
          />

          <div className="callout">
            <strong>Usage réel.</strong> Ce つまらなかったー n&apos;a rien
            d&apos;une erreur — c&apos;est un vrai trait de l&apos;oral
            spontané japonais. Tu l&apos;entendras aussi bien sur おいしかっ
            たー! (c&apos;était trop bon !) que sur つかれたー (je suis
            épuisé). Ne l&apos;écris jamais ainsi dans un contexte formel.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>Deux kanji de paysage, utiles dès que tu voyageras hors des villes.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="山"
              reading="やま / さん"
              strokes={3}
              exampleWord="富士山"
              exampleReading="ふじさん"
              exampleFr="le Mont Fuji"
              speakText="ふじさん"
            />
            <KanjiCard
              kanji="川"
              reading="かわ / せん"
              strokes={3}
              exampleWord="川"
              exampleReading="かわ"
              exampleFr="rivière"
              speakText="かわ"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            山 se lit やま seul (山が 見えます, on voit une montagne), mais
            さん dans un nom composé comme 富士山. 川 suit le même schéma :
            かわ seul, せん dans certains noms composés.
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
                Redire de mémoire les 4 formes de たかい dans l&apos;ordre,
                sans regarder.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner sur いい → よくない → よかった → よくなかった
                jusqu&apos;à ne plus hésiter.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 山 et 川 avec leurs deux lectures.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 5 · construite le 5 juillet 2026 — la leçon 2
          applique exactement le même chantier aux adjectifs en な.
        </footer>
      </div>
    </>
  );
}
