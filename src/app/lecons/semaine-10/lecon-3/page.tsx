import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import Dialogue from "@/components/Dialogue";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 10 · Leçon 3 — Écouter le keigo au magasin",
  description:
    "Reconnaître à l'oreille les formules de politesse des vendeurs — いらっしゃいませ, 少々お待ちください, かしこまりました, ~でございます — sans avoir à les produire.",
};

const STEPS = [
  { id: "s1", label: "1 · 序" },
  { id: "s2", label: "2 · 入店" },
  { id: "s3", label: "3 · 応答" },
  { id: "s4", label: "4 · レジで" },
  { id: "s5", label: "5 · 漢字" },
];

const REGISTER_LINES = [
  {
    who: "店員",
    jp: "いらっしゃいませ!",
    fr: "Bienvenue ! (dit dès que tu entres dans une boutique)",
  },
  {
    who: "客",
    jp: "すみません、これ いくらですか。",
    fr: "Excusez-moi, ça coûte combien ?",
  },
  {
    who: "店員",
    jp: "少々 お待ちください。",
    fr: "Un instant, s'il vous plaît (le vendeur va vérifier).",
  },
  {
    who: "店員",
    jp: "千円で ございます。",
    fr: "Cela fait 1000 yens.",
  },
  {
    who: "客",
    jp: "じゃあ、これに します。",
    fr: "Alors, je prends ça.",
  },
  {
    who: "店員",
    jp: "かしこまりました。",
    fr: "Bien compris / entendu (formule de service très polie).",
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
          <div className="eyebrow">お店の敬語 — 十週目・三課</div>
          <h1 className="title">Écouter le keigo au magasin</h1>
          <div className="meta-line">Semaine 10 · Leçon 3 · ~28 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Reconnaître, pas produire</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Le keigo (敬語, langage honorifique) est un système entier de
            politesse, bien trop vaste pour un programme de trois mois. La
            bonne nouvelle : en tant que client, tu n&apos;as{" "}
            <strong>jamais</strong> besoin de le produire toi-même — seuls
            les vendeurs, employés et serveurs l&apos;utilisent envers toi.
          </p>
          <p>
            Cette leçon te donne donc quatre formules à reconnaître
            <strong> à l&apos;oreille</strong>, sans jamais entrer dans leur
            mécanique grammaticale. Le but : ne pas être surpris ou perdu
            quand tu les entendras — pas de les répéter.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>À l&apos;entrée : いらっしゃいませ</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            La formule la plus entendue de tout séjour au Japon. Elle est
            criée ou dite avec entrain dès que tu passes la porte d&apos;un
            magasin, d&apos;un restaurant ou d&apos;une supérette.
          </p>

          <ExampleCard
            jp="いらっしゃいませ!"
            fr="Bienvenue ! — tu n'as rien à répondre, un simple signe de tête suffit."
            speakText="いらっしゃいませ!"
          />

          <h3 className="sub-heading">少々 お待ちください</h3>
          <p>
            Dite quand le vendeur a besoin d&apos;un instant — pour vérifier
            un prix, aller chercher quelque chose en réserve, préparer ta
            commande.
          </p>
          <ExampleCard
            jp="少々 お待ちください。"
            fr="Un instant, s'il vous plaît (patientez svp)."
            speakText="少々 お待ちください。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Ce que tu entends en poussant la porte d'un konbini, c'est..."
            choices={["いらっしゃいませ!", "かしこまりました。", "でございます。"]}
            answer="いらっしゃいませ!"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Deux formules de service très polies</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Deux tournures que tu croiseras surtout à la caisse ou après avoir
            fait une demande.
          </p>

          <ExampleCard
            jp="かしこまりました。"
            fr="Bien compris / entendu — réponse très polie à une demande ou une commande."
            speakText="かしこまりました。"
          />
          <p className="example-note">
            Un vendeur te dit かしこまりました dès que tu as fait un choix ou
            une demande claire — l&apos;équivalent poli de &laquo;très
            bien&raquo; ou &laquo;entendu&raquo;.
          </p>

          <ExampleCard
            jp="千円で ございます。"
            fr="Cela fait 1000 yens. (でございます = version très polie de です)"
            speakText="千円で ございます。"
          />
          <p className="example-note">
            でございます remplace です dans un contexte de service très formel.
            Tu l&apos;entendras surtout pour annoncer un prix ou confirmer une
            information — retiens juste que c&apos;est &laquo;です, en encore
            plus poli&raquo;, rien de plus à décortiquer pour l&apos;instant.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Après que tu as dit «je prends ça», le vendeur répond souvent..."
            choices={["かしこまりました。", "いらっしゃいませ!", "もう少し 安く なりませんか。"]}
            answer="かしこまりました。"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Écoute — à la caisse</h2>
            <span className="time">~9 min</span>
          </div>
          <p>
            Les quatre formules réunies dans une scène de caisse complète.
            Écoute-la en entier, puis ligne par ligne, en te concentrant sur
            les répliques du vendeur (店員).
          </p>

          <Dialogue lines={REGISTER_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Quelle formule signale que le vendeur va prendre un instant pour vérifier quelque chose ?"
            choices={["少々 お待ちください。", "いらっしゃいませ!", "これに します。"]}
            answer="少々 お待ちください。"
          />
          <Quiz
            promptFr="Combien coûte l'article dans le dialogue ?"
            choices={["1000 yens", "500 yens", "2500 yens"]}
            answer="1000 yens"
          />

          <div className="callout">
            <strong>Rappelle-toi.</strong> Tu n&apos;as besoin de retenir que
            deux ou trois phrases de ton côté (これに します, いくらですか) —
            tout le reste de ce dialogue, c&apos;est simplement ce que tu dois
            savoir reconnaître pour ne pas être perdu.
          </div>
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>Deux kanji de couleurs, pour continuer la série commencée hier.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="白"
              reading="はく"
              strokes={5}
              exampleWord="白"
              exampleReading="しろ"
              exampleFr="le blanc"
              speakText="しろ"
            />
            <KanjiCard
              kanji="黒"
              reading="こく"
              strokes={11}
              exampleWord="黒"
              exampleReading="くろ"
              exampleFr="le noir"
              speakText="くろ"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            Même logique que 雪 et 色 : はく et こく servent surtout dans des
            mots composés, alors que しろ et くろ sont les lectures à
            connaître pour parler d&apos;un objet blanc ou noir au quotidien.
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
                Réécouter le dialogue de la caisse jusqu&apos;à reconnaître les
                4 formules du vendeur sans hésiter.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Se rappeler : aucune de ces formules n&apos;est à répéter
                soi-même — juste à comprendre.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 白 et 黒 jusqu&apos;à reconnaître しろ et くろ sans
                hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 10 · la leçon 4 rassemble tout — négociation,
          contractions à l&apos;oral et keigo de reconnaissance — dans un
          jeu de rôle complet.
        </footer>
      </div>
    </>
  );
}
