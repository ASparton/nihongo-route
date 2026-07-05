import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import ConjugationTable from "@/components/ConjugationTable";
import KanjiCard from "@/components/KanjiCard";
import VocabGrid from "@/components/VocabGrid";

export const metadata: Metadata = {
  title: "Semaine 9 · Leçon 3 — 数える : つ・人・枚・回",
  description:
    "Approfondir les compteurs japonais : rappel de つ et 人, puis découverte de 枚 (objets plats) et 回 (nombre de fois), avec les lectures irrégulières à connaître avant le voyage.",
};

const STEPS = [
  { id: "s1", label: "1 · 復習" },
  { id: "s2", label: "2 · 枚" },
  { id: "s3", label: "3 · 回" },
  { id: "s4", label: "4 · 練習" },
  { id: "s5", label: "5 · 漢字" },
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
          <div className="eyebrow">数え方を増やす — 九週目・三課</div>
          <h1 className="title">数える : つ・人・枚・回</h1>
          <div className="meta-line">Semaine 9 · Leçon 3 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Rappel : つ et 人</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Vus en semaine 2 : つ compte les objets sans forme précise, 人
            compte les personnes. Deux compteurs déjà connus, avant d&apos;en
            ajouter deux nouveaux aujourd&apos;hui.
          </p>
          <VocabGrid
            items={[
              { jp: "ひとつ", fr: "un (objet)" },
              { jp: "ふたつ", fr: "deux (objets)" },
              { jp: "ひとり", fr: "une personne" },
              { jp: "ふたり", fr: "deux personnes" },
            ]}
          />
          <Quiz
            promptFr="Comment compter deux tasses de thé (objets) ?"
            choices={["ふたつ", "ふたり", "にまい"]}
            answer="ふたつ"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Nouveau compteur : 枚 — objets plats</h2>
            <span className="time">~9 min</span>
          </div>
          <p>
            枚 compte tout ce qui est plat et fin : billets de banque,
            tickets, feuilles de papier. Très pratique dès qu&apos;on achète
            quelque chose au guichet.
          </p>

          <ConjugationTable
            title="枚 — billets, tickets, feuilles"
            rows={[
              { label: "1", jp: <ruby>一枚<rt>いちまい</rt></ruby>, speakText: "いちまい" },
              { label: "2", jp: <ruby>二枚<rt>にまい</rt></ruby>, speakText: "にまい" },
              { label: "3", jp: <ruby>三枚<rt>さんまい</rt></ruby>, speakText: "さんまい" },
              { label: "4", jp: <ruby>四枚<rt>よんまい</rt></ruby>, speakText: "よんまい" },
              { label: "5", jp: <ruby>五枚<rt>ごまい</rt></ruby>, speakText: "ごまい" },
            ]}
          />
          <p className="example-note">
            Bonne nouvelle : la série de 枚 est entièrement régulière —
            いち・に・さん・よん・ご + まい, sans surprise.
          </p>

          <ExampleCard
            jp={
              <>
                きっぷを 二<ruby>枚<rt>まい</rt></ruby> ください。
              </>
            }
            fr="Deux billets, s'il vous plaît."
            speakText="きっぷを にまい ください。"
          />
          <p className="example-note">
            Très pratique au guichet d&apos;une gare ou d&apos;un musée.
          </p>

          <Quiz
            promptFr="Pour compter des tickets de train, on utilise..."
            choices={["つ", "人", "枚"]}
            answer="枚"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Nouveau compteur : 回 — nombre de fois</h2>
            <span className="time">~9 min</span>
          </div>
          <p>
            回 compte le nombre de fois qu&apos;une action se produit.
            Attention : contrairement à 枚, cette série a des lectures
            irrégulières à cause de petits changements de son.
          </p>

          <ConjugationTable
            title="回 — nombre de fois"
            rows={[
              {
                label: "1",
                jp: <ruby>一回<rt>いっかい</rt></ruby>,
                speakText: "いっかい",
                note: "いっかい, pas いちかい",
              },
              { label: "2", jp: <ruby>二回<rt>にかい</rt></ruby>, speakText: "にかい" },
              {
                label: "3",
                jp: <ruby>三回<rt>さんかい</rt></ruby>,
                speakText: "さんかい",
                note: "さんかい, pas さんがい",
              },
              { label: "4", jp: <ruby>四回<rt>よんかい</rt></ruby>, speakText: "よんかい" },
              { label: "5", jp: <ruby>五回<rt>ごかい</rt></ruby>, speakText: "ごかい" },
            ]}
          />

          <ExampleCard
            jp={
              <>
                <ruby>一回<rt>いっかい</rt></ruby>{" "}
                <ruby>食<rt>た</rt></ruby>べました。
              </>
            }
            fr="J'en ai mangé une fois."
            speakText="いっかい たべました。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="« Une fois » se dit..."
            choices={["いちかい", "いっかい", "ひとつ"]}
            answer="いっかい"
          />
          <Quiz
            promptFr="« Trois fois » se dit..."
            choices={["さんがい", "さんかい", "みっつ"]}
            answer="さんかい"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Pratique — choisis le bon compteur</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Le vrai défi de つ・人・枚・回 : reconnaître d&apos;un coup
            d&apos;œil lequel utiliser.
          </p>

          <Quiz
            promptFr="Pour compter des pommes (objets sans forme précise)..."
            choices={["つ", "人", "枚", "回"]}
            answer="つ"
          />
          <Quiz
            promptFr="Pour compter des personnes..."
            choices={["つ", "人", "枚", "回"]}
            answer="人"
          />
          <Quiz
            promptFr="Pour compter des tickets de musée..."
            choices={["つ", "人", "枚", "回"]}
            answer="枚"
          />
          <Quiz
            promptFr="Pour dire combien de fois on a fait quelque chose..."
            choices={["つ", "人", "枚", "回"]}
            answer="回"
          />

          <div className="callout">
            <strong>Ce n&apos;est qu&apos;un début.</strong> Il existe des
            dizaines de compteurs en japonais (本 pour les objets longs, 匹
            pour les petits animaux...). つ・人・枚・回 couvrent déjà la
            grande majorité des situations de voyage — le reste
            s&apos;apprendra au fil des besoins.
          </div>

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["きっぷを", "二枚", "ください", "二人", "二つ"]}
            answer={["きっぷを", "二枚", "ください"]}
            targetFr="Deux billets, s'il vous plaît."
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Deux nouveaux points cardinaux, pour compléter 東 vu en leçon 2.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="西"
              reading="せい / にし"
              strokes={6}
              exampleWord="西"
              exampleReading="にし"
              exampleFr="ouest"
              speakText="にし"
            />
            <KanjiCard
              kanji="南"
              reading="なん / みなみ"
              strokes={9}
              exampleWord="南"
              exampleReading="みなみ"
              exampleFr="sud"
              speakText="みなみ"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            Avec 東 (est) déjà vu, il ne manquera plus que 北 (nord) en
            leçon 4 pour avoir les quatre points cardinaux au complet.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon suivante</h2>
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
                Réciter 一回・二回・三回 jusqu&apos;à ne plus hésiter sur
                いっかい/さんかい.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner à choisir le bon compteur (つ・人・枚・回) sur
                5 objets du quotidien.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">Revoir 西 et 南 avec leurs lectures.</label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 9 · construite le 5 juillet 2026 — les
          compteurs 枚 et 回 serviront tout le temps du voyage, de la gare
          au musée en passant par le restaurant.
        </footer>
      </div>
    </>
  );
}
