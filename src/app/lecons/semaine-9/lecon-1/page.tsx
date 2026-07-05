import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import Dialogue from "@/components/Dialogue";
import KanjiCard from "@/components/KanjiCard";
import VocabGrid from "@/components/VocabGrid";

export const metadata: Metadata = {
  title: "Semaine 9 · Leçon 1 — Commander au restaurant",
  description:
    "Vocabulaire du restaurant, la formule ~にします pour faire un choix face à un menu, et les phrases essentielles pour appeler, commander et payer.",
};

const STEPS = [
  { id: "s1", label: "1 · 語彙" },
  { id: "s2", label: "2 · にします" },
  { id: "s3", label: "3 · 注文" },
  { id: "s4", label: "4 · 会話" },
  { id: "s5", label: "5 · 漢字" },
];

const RESTAURANT_LINES = [
  {
    who: "A",
    jp: "すみません、メニューを ください。",
    fr: "Excusez-moi, le menu s'il vous plaît.",
  },
  {
    who: "B",
    jp: "はい、どうぞ。",
    fr: "Voilà, tenez.",
  },
  {
    who: "A",
    jp: "おすすめは 何ですか。",
    fr: "Quelle est la recommandation ?",
  },
  {
    who: "B",
    jp: "てんぷらが おすすめです。",
    fr: "Le tempura est notre recommandation.",
  },
  {
    who: "A",
    jp: "じゃあ、これに します。",
    fr: "Alors, je prends ça.",
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
          <div className="eyebrow">外食の言葉 — 九週目・一課</div>
          <h1 className="title">レストランで注文する</h1>
          <div className="meta-line">Semaine 9 · Leçon 1 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Vocabulaire du restaurant</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            On attaque la phase &laquo;langage du voyage&raquo; : toute la
            grammaire vue jusqu&apos;ici va maintenant servir dans des
            situations concrètes. On commence par une table.
          </p>
          <VocabGrid
            items={[
              { jp: "メニュー", fr: "menu" },
              { jp: "みず", fr: "eau" },
              { jp: "おちゃ", fr: "thé" },
              { jp: "おすすめ", fr: "recommandation, plat conseillé" },
              { jp: "おかいけい", fr: "l'addition" },
              { jp: "とりあえず", fr: "pour commencer, déjà (en attendant)" },
            ]}
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Faire un choix : ~に します</h2>
            <span className="time">~10 min</span>
          </div>
          <p>
            Devant un menu, on ne dit pas ce qu&apos;on désire en général :
            on <strong>choisit</strong> parmi les options qu&apos;on a sous
            les yeux. C&apos;est exactement le rôle de [nom]
            <span className="p-mark">に</span> します.
          </p>

          <ExampleCard
            jp={
              <>
                これ<span className="p-mark">に</span> します。
              </>
            }
            fr="Je prends ça (décision face aux options)."
            speakText="これに します。"
          />
          <p className="example-note">
            Littéralement &laquo;je fais / je décide pour ça&raquo; — に
            marque le résultat du choix.
          </p>

          <h3 className="sub-heading">~にします vs ~がほしいです</h3>
          <p>
            En semaine 6, ~が ほしいです servait à exprimer un{" "}
            <strong>désir général</strong> (&laquo;je voudrais...&raquo;).
            ~に します exprime autre chose : une{" "}
            <strong>décision précise</strong>, prise en regardant des
            options concrètes.
          </p>

          <ExampleCard
            jp="コーヒーが ほしいです。"
            fr="Je voudrais un café (désir, en général)."
            speakText="コーヒーが ほしいです。"
          />
          <ExampleCard
            jp={
              <>
                コーヒー<span className="p-mark">に</span> します。
              </>
            }
            fr="Je prends un café (choix, parmi le menu)."
            speakText="コーヒーに します。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Tu regardes le menu et tu te décides. Tu dis..."
            choices={["これが ほしいです。", "これに します。"]}
            answer="これに します。"
          />
          <Quiz
            promptJp="コーヒー ___ します。"
            promptFr="Je prends un café (décision)."
            choices={["が", "に", "を"]}
            answer="に"
          />
          <SentenceAssembler
            tiles={["これ", "に", "します", "が", "ほしい"]}
            answer={["これ", "に", "します"]}
            targetFr="Je prends ça."
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Passer commande</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Quatre phrases qui couvrent tout un repas, de l&apos;arrivée à
            l&apos;addition.
          </p>

          <ExampleCard
            jp="すみません、メニューを ください。"
            fr="Excusez-moi, le menu s'il vous plaît."
            speakText="すみません、メニューを ください。"
          />
          <ExampleCard
            jp="おすすめは 何ですか。"
            fr="Quelle est la recommandation ?"
            speakText="おすすめは 何ですか。"
          />
          <ExampleCard
            jp={
              <>
                これ<span className="p-mark">に</span> します。
              </>
            }
            fr="Je prends ça."
            speakText="これに します。"
          />
          <ExampleCard
            jp="おかいけいを おねがいします。"
            fr="L'addition, s'il vous plaît."
            speakText="おかいけいを おねがいします。"
          />

          <div className="callout seal">
            <strong>Usage réel.</strong> とりあえず sert à commander une
            première chose tout en signalant qu&apos;on va continuer :
            &laquo;とりあえず、おちゃを ください。&raquo; (&laquo;Pour
            commencer, du thé, s&apos;il vous plaît.&raquo;) C&apos;est le mot
            le plus utilisé à l&apos;arrivée dans un izakaya, avant même
            d&apos;avoir regardé le menu.
          </div>

          <Quiz
            promptFr="Comment demander le menu ?"
            choices={[
              "メニューを ください。",
              "メニューに します。",
              "メニューが ほしいです。",
            ]}
            answer="メニューを ください。"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Écoute — au restaurant</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Une commande complète, du menu à la décision finale. Écoute-la en
            entier, puis ligne par ligne.
          </p>

          <Dialogue lines={RESTAURANT_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Qu'est-ce que le client demande d'abord ?"
            choices={["Le menu", "L'addition", "Une recommandation"]}
            answer="Le menu"
          />
          <Quiz
            promptFr="Que recommande le serveur ?"
            choices={["Le thé", "Le tempura", "Le café"]}
            answer="Le tempura"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Deux kanji très utiles pour comprendre des indications, y
            compris à table (&laquo;les baguettes sont à droite&raquo;) et
            surtout dans la rue dès la leçon suivante.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="左"
              reading="さ / ひだり"
              strokes={5}
              exampleWord="左"
              exampleReading="ひだり"
              exampleFr="gauche"
              speakText="ひだり"
            />
            <KanjiCard
              kanji="右"
              reading="う / みぎ"
              strokes={5}
              exampleWord="右"
              exampleReading="みぎ"
              exampleFr="droite"
              speakText="みぎ"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            左 et 右 se ressemblent à l&apos;écrit — le petit trait du haut
            change de sens selon le kanji. Ils reviendront tout de suite en
            leçon 2 pour les directions.
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
                Répéter à voix haute les 4 phrases de commande jusqu&apos;à
                les dire sans hésiter.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                S&apos;entraîner à distinguer ~が ほしいです et ~に します
                sur 5 objets au hasard autour de soi.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 左 et 右 jusqu&apos;à les reconnaître instantanément.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 9 · construite le 5 juillet 2026 — première
          leçon de la phase &laquo;langage du voyage&raquo;, toute la
          grammaire des huit semaines précédentes va maintenant servir dans
          des situations réelles.
        </footer>
      </div>
    </>
  );
}
