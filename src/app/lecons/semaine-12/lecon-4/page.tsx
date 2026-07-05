import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import VocabGrid from "@/components/VocabGrid";
import ExampleCard from "@/components/ExampleCard";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 12 · Leçon 4 — 旅の前の最終チェック",
  description:
    "La fiche récap finale du programme entier, groupée par thème (restaurant, rue, hôtel, problème), et le mot de clôture avant le départ.",
};

const STEPS = [
  { id: "s1", label: "1 · 挨拶" },
  { id: "s2", label: "2 · レストラン" },
  { id: "s3", label: "3 · 道" },
  { id: "s4", label: "4 · ホテル" },
  { id: "s5", label: "5 · トラブル" },
  { id: "s6", label: "6 · 漢字" },
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
          <div className="eyebrow">最終週・サバイバル日本語 — 十二週目・四課</div>
          <h1 className="title">旅の前の最終チェック</h1>
          <div className="meta-line">Semaine 12 · Leçon 4 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Salutations, toujours</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Dernière leçon du programme entier : une fiche récap à
            connaître par cœur, ou à imprimer. On commence par la base,
            valable à toute heure et en toute situation.
          </p>

          <VocabGrid
            items={[
              { jp: "こんにちは。", fr: "Bonjour." },
              { jp: "こんばんは。", fr: "Bonsoir." },
              { jp: "おはようございます。", fr: "Bonjour (le matin)." },
              { jp: "すみません。", fr: "Excusez-moi." },
              { jp: "ありがとうございます。", fr: "Merci." },
            ]}
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Au restaurant</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Trois phrases suffisent pour commander presque n&apos;importe
            où, du petit comptoir au restaurant assis.
          </p>

          <ExampleCard
            jp="これを ください。"
            fr="Ça, s'il vous plaît."
            speakText="これをください。"
          />
          <ExampleCard
            jp="これに します。"
            fr="Je prends ça / je me décide pour ça."
            speakText="これにします。"
          />
          <ExampleCard
            jp="いくらですか。"
            fr="Combien ça coûte ?"
            speakText="いくらですか。"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Dans la rue</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Pour pointer, demander un lieu, ou simplement gagner quelques
            secondes de réflexion.
          </p>

          <VocabGrid
            items={[
              { jp: "これ", fr: "ceci — proche de moi" },
              { jp: "それ", fr: "cela — proche de toi" },
              { jp: "あれ", fr: "cela, là-bas — loin de nous deux" },
            ]}
          />
          <ExampleCard
            jp="えきは どこですか。"
            fr="Où est la gare ?"
            speakText="えきはどこですか。"
          />
          <ExampleCard
            jp="ちょっと まって ください。"
            fr="Attendez un instant, s'il vous plaît."
            speakText="ちょっとまってください。"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>À l&apos;hôtel</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Une seule structure, très rentable, pour demander une
            permission poliment.
          </p>

          <ExampleCard
            jp="これを つかっても いいですか。"
            fr="Puis-je utiliser ceci ?"
            speakText="これをつかってもいいですか。"
          />
          <p className="example-note">
            ～ても いいですか se recycle pour presque tout : ouvrir la
            fenêtre, garder une clé plus longtemps, prendre une photo...
          </p>
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>En cas de problème — le rappel</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Le kit de secours de la leçon 1, condensé en un seul endroit
            pour ne jamais avoir à le chercher.
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
                jp: "ゆっくり はなして ください。",
                fr: "Parlez lentement, s'il vous plaît.",
              },
              {
                jp: "すみません、にほんごが へたです。",
                fr: "Désolé(e), je ne suis pas doué(e) en japonais.",
              },
            ]}
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Une belle façon de clore le programme : deux des tout premiers
            verbes que tu as appris reçoivent enfin leur kanji.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="飲"
              reading="いん / のむ"
              strokes={12}
              exampleWord="飲む"
              exampleReading="のむ"
              exampleFr="boire — callback constant depuis le début, qui a enfin son kanji"
              speakText="のむ"
            />
            <KanjiCard
              kanji="買"
              reading="ばい / かう"
              strokes={12}
              exampleWord="買う"
              exampleReading="かう"
              exampleFr="acheter — callback constant depuis le début, qui a enfin son kanji"
              speakText="かう"
            />
          </div>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Derniers gestes avant le départ</h2>
            <span className="time">avant le 25 septembre</span>
          </div>
          <ul className="checklist">
            <li>
              <input type="checkbox" id="c1" />
              <label htmlFor="c1">
                Relire cette fiche récap une dernière fois la veille du
                départ.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c2" />
              <label htmlFor="c2">
                Faire une capture d&apos;écran ou imprimer cette page pour
                l&apos;avoir hors connexion.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Continuer Duolingo + jpdb tous les jours, y compris pendant
                le voyage si possible.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 飲 et 買 une dernière fois avec leurs lectures.
              </label>
            </li>
          </ul>
        </section>

        <div className="callout seal">
          Douze semaines plus tard, te voilà prêt(e) à partir. Tu ne seras
          pas parfait(e) — il te manquera des mots, tu hésiteras, tu
          confondras parfois は et が — et ce n&apos;est pas grave du tout.
          Ce que tu as construit ici te suffit largement pour saluer,
          commander, demander ton chemin, te présenter, remercier et
          réclamer de l&apos;aide si besoin : c&apos;est déjà tenir une
          vraie conversation simple, pas seulement réciter des phrases de
          manuel. Profite du voyage, écoute autour de toi, et n&apos;aie
          pas peur de te tromper à voix haute — c&apos;est comme ça qu&apos;on
          progresse le plus vite. Au retour, garde Duolingo et jpdb comme
          des habitudes, pas comme un devoir : les bases posées ici,
          semaine après semaine, sont exactement ce qui te permettra un
          jour de regarder un anime sans sous-titres et de comprendre ce
          qui se dit. Bon voyage — 気をつけて いってらっしゃい。
        </div>

        <footer className="note">
          Leçon 4 · semaine 12 · construite le 5 juillet 2026 — dernière
          leçon du programme. Bonne route, et à bientôt pour la suite,
          sous-titres en moins.
        </footer>
      </div>
    </>
  );
}
