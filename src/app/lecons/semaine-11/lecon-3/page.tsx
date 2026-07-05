import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import Dialogue from "@/components/Dialogue";
import VocabGrid from "@/components/VocabGrid";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 11 · Leçon 3 — Au restaurant : allergie et addition",
  description:
    "Simulation complète d'un repas au restaurant : recommandation, allergie alimentaire, choix et paiement, avec rappel du potentiel négatif.",
};

const STEPS = [
  { id: "s1", label: "1 · 到着" },
  { id: "s2", label: "2 · 会話" },
  { id: "s3", label: "3 · 理解" },
  { id: "s4", label: "4 · 食べられません" },
  { id: "s5", label: "5 · 語彙" },
  { id: "s6", label: "6 · 漢字" },
];

const DIALOGUE_LINES = [
  {
    who: "A",
    jp: "いらっしゃいませ。ごちゅうもんは?",
    fr: "Bienvenue. Vous avez choisi ?",
  },
  {
    who: "B",
    jp: "おすすめは なんですか。",
    fr: "Qu'est-ce que vous recommandez ?",
  },
  {
    who: "A",
    jp: "この ラーメンが にんきです。",
    fr: "Ce ramen est populaire.",
  },
  {
    who: "B",
    jp: "すみません、たまごアレルギーが あります。たまごが はいって いますか。",
    fr: "Excusez-moi, j'ai une allergie aux œufs. Y a-t-il des œufs dedans ?",
  },
  {
    who: "A",
    jp: "いいえ、はいって いません。ごあんしんください。",
    fr: "Non, il n'y en a pas. Ne vous inquiétez pas.",
  },
  {
    who: "B",
    jp: "じゃあ、これに します。",
    fr: "Alors, je prends ça.",
  },
  {
    who: "A",
    jp: "おかいけいは せんにひゃくえんです。",
    fr: "(plus tard) L'addition est de 1200 yens.",
  },
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
          <div className="eyebrow">レストラン：アレルギーと会計 — 十一週目・三課</div>
          <h1 className="title">レストランでの やりとり</h1>
          <div className="meta-line">Semaine 11 · Leçon 3 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Un repas, du début à la fin</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Aujourd&apos;hui, le dialogue le plus long de la semaine : de la
            recommandation du serveur jusqu&apos;à l&apos;addition, en
            passant par un point capital pour un vrai voyage — comment
            signaler une allergie alimentaire.
          </p>
          <p>
            Tu vas retrouver にします (semaine 5), ください et le potentiel
            négatif (semaine 7) : rien de neuf, mais tout mis bout à bout
            dans une seule scène réaliste.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Commander, avec une allergie</h2>
            <span className="time">~9 min</span>
          </div>
          <p>
            Écoute le dialogue en entier une première fois, puis ligne par
            ligne. La dernière ligne se situe plus tard dans le repas — au
            moment de payer.
          </p>

          <Dialogue lines={DIALOGUE_LINES} />

          <p className="example-note">
            はいって いますか reprend ています pour une caractéristique
            actuelle du plat (&laquo;est-ce qu&apos;il y en a dedans, en ce
            moment&raquo;) — la même logique que よやくして います vue à la
            leçon 2, appliquée cette fois à un ingrédient plutôt qu&apos;à
            une réservation.
          </p>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Vérifie ta compréhension</h2>
            <span className="time">~5 min</span>
          </div>
          <Quiz
            promptFr="Qu'est-ce que le serveur recommande ?"
            choices={["Un curry", "Un ramen", "Un sushi"]}
            answer="Un ramen"
          />
          <Quiz
            promptFr="À quelle allergie le client fait-il référence ?"
            choices={["Les crustacés", "Les œufs", "Le gluten"]}
            answer="Les œufs"
          />
          <Quiz
            promptFr="Combien coûte l'addition ?"
            choices={["1200 yens", "12 000 yens", "120 yens"]}
            answer="1200 yens"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Rappel : le potentiel négatif</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Signaler une allergie ne se limite pas à demander &laquo;y a-t-il
            X dedans&raquo; : tu peux aussi dire directement ce que tu{" "}
            <strong>ne peux pas</strong> manger, avec le potentiel négatif vu
            à la semaine 7.
          </p>

          <ExampleCard
            jp="たまごは たべられません。"
            fr="Je ne peux pas manger d'œufs."
            speakText="たまごは たべられません。"
          />
          <ExampleCard
            jp="ピーナッツは たべられません。"
            fr="Je ne peux pas manger de cacahuètes."
            speakText="ピーナッツは たべられません。"
          />

          <div className="callout seal">
            <strong>Usage réel.</strong> ～は たべられません est plus direct
            et plus sûr que ～が はいって いますか si l&apos;allergie est
            sérieuse — dis-le clairement, sans attendre la réponse du
            serveur.
          </div>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="たまごは たべ ___。"
            promptFr="Je ne peux pas manger d'œufs."
            choices={["られません", "ます", "たいです"]}
            answer="られません"
          />
          <SentenceAssembler
            tiles={["たまごは", "たべられません", "たべます", "アレルギーが"]}
            answer={["たまごは", "たべられません"]}
            targetFr="Je ne peux pas manger d'œufs."
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Vocabulaire du repas</h2>
            <span className="time">~3 min</span>
          </div>
          <VocabGrid
            items={[
              { jp: "注文", fr: "commande — ちゅうもん" },
              { jp: "おすすめ", fr: "recommandation" },
              { jp: "アレルギー", fr: "allergie" },
              { jp: "お会計", fr: "l'addition — おかいけい" },
              { jp: "人気", fr: "populaire — にんき" },
            ]}
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            On termine la série &laquo;le corps&raquo; commencée à la
            leçon 1, avec deux kanji très utiles pour parler de
            goût et d&apos;audition.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="口"
              reading="くち"
              strokes={3}
              exampleWord="口"
              exampleReading="くち"
              exampleFr="la bouche"
              speakText="くち"
            />
            <KanjiCard
              kanji="耳"
              reading="みみ"
              strokes={6}
              exampleWord="耳"
              exampleReading="みみ"
              exampleFr="l'oreille"
              speakText="みみ"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            体・手・足・目・口・耳 : la série &laquo;le corps&raquo; est
            complète. Six kanji très fréquents, à revoir ensemble jusqu&apos;à
            les reconnaître tous sans hésiter.
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
                Rejouer tout le dialogue du restaurant, de la commande à
                l&apos;addition, sans regarder.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Dire à voix haute une phrase avec ～は たべられません pour
                un aliment qui te concerne vraiment.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir les six kanji du corps (体・手・足・目・口・耳)
                d&apos;un seul coup.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 11 · dernière grande situation avant le bilan de
          la leçon 4, qui te fera repérer toi-même tes points faibles.
        </footer>
      </div>
    </>
  );
}
