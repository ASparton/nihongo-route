import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 1 · Leçon 2 — 終助詞 ね・よ・わ・かな",
  description:
    "Les particules de fin de phrase ね, よ, わ et かな : la touche qui rend une phrase japonaise naturelle — avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · ね" },
  { id: "s2", label: "2 · よ" },
  { id: "s3", label: "3 · わ・かな" },
  { id: "s4", label: "4 · 練習" },
  { id: "s5", label: "5 · 漢字" },
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
          <div className="eyebrow">基礎固め — 一週目・二課</div>
          <h1 className="title">終助詞 ね・よ・わ・かな</h1>
          <div className="meta-line">Semaine 1 · Leçon 2 · ~30 minutes</div>
          <p style={{ fontSize: 13, marginTop: 6 }}>
            Du contenu nouveau : les particules qu&apos;on colle en fin de
            phrase pour lui donner un ton. Elles ne changent presque jamais le
            sens, mais sans elles une phrase japonaise sonne plate — et
            comprendre leur nuance, c&apos;est aussi comprendre la
            personnalité d&apos;un personnage à l&apos;oreille (utile pour
            plus tard, quand tu regarderas des animes sans sous-titres).
          </p>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>ね — chercher l&apos;accord</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            ね s&apos;ajoute à une phrase complète pour inviter l&apos;autre à
            confirmer, ou simplement pour partager une impression. C&apos;est
            l&apos;équivalent du « hein » ou du « n&apos;est-ce pas » français.
          </p>
          <ExampleCard
            jp="これは にほんの おちゃですね。"
            fr="C'est du thé japonais, n'est-ce pas ?"
            speakText="これは にほんの おちゃですね。"
          />
          <ExampleCard
            jp="すごいですね!"
            fr="Incroyable, hein !"
            speakText="すごいですね!"
          />
          <p className="example-note">
            Utilise ね chaque fois que tu veux inviter la personne en face à
            réagir avec toi — c&apos;est l&apos;une des particules les plus
            fréquentes de toute conversation japonaise.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>よ — informer, affirmer</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            よ s&apos;utilise quand tu donnes une information que l&apos;autre
            ne connaît pas encore, ou pour affirmer quelque chose avec
            assurance. C&apos;est l&apos;inverse de ね : avec ね tu partages,
            avec よ tu informes.
          </p>
          <ExampleCard
            jp="あそこに コンビニが ありますよ。"
            fr="Il y a un konbini là-bas, tu sais."
            speakText="あそこに コンビニが ありますよ。"
          />
          <ExampleCard
            jp="はい、ありますよ。"
            fr="Oui, il y en a (je te le confirme)."
            speakText="はい、ありますよ。"
          />

          <div className="callout">
            <strong>ね vs よ.</strong> 「たかいですね」(c&apos;est cher,
            hein — je pense que tu es d&apos;accord) est très différent de
            「たかいですよ」(c&apos;est cher, je t&apos;informe — tu ne le
            savais peut-être pas). Le sens de base ne change pas, seul le ton
            change.
          </div>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>わ et かな</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            わ adoucit ou rend une phrase plus expressive — historiquement
            associée à un style féminin, mais aujourd&apos;hui entendue chez
            beaucoup de locuteurs, et très fréquente dans le dialecte du
            Kansai quel que soit le genre. かな marque le doute, quand on se
            pose la question à soi-même.
          </p>
          <ExampleCard
            jp="すごいわ!"
            fr="Incroyable, dis donc !"
            speakText="すごいわ!"
          />
          <ExampleCard
            jp="あめかな?"
            fr="Il pleut, peut-être ?"
            speakText="あめかな?"
          />
          <p className="example-note">
            かな ne s&apos;utilise presque jamais avec ですか — c&apos;est déjà
            une façon de se poser la question tout seul, pas de la poser à
            quelqu&apos;un.
          </p>
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>À toi</h2>
            <span className="time">~6 min</span>
          </div>
          <Quiz
            promptFr="Tu dis à un ami quelque chose qu'il ne sait pas encore et tu veux l'informer avec assurance. Tu ajoutes..."
            choices={["ね", "よ", "かな"]}
            answer="よ"
          />
          <Quiz
            promptFr="Tu regardes un beau paysage avec un ami et tu veux partager ton impression en cherchant son accord. Tu ajoutes..."
            choices={["ね", "よ", "かな"]}
            answer="ね"
          />
          <Quiz
            promptFr="Tu te demandes tout seul si le magasin est ouvert aujourd'hui. Tu dis..."
            choices={["あいてる?", "あいてるね。", "あいてるかな?"]}
            answer="あいてるかな?"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <div className="kanji-corner">
            <KanjiCard
              kanji="三"
              reading="さん"
              strokes={3}
              exampleWord="三つ"
              exampleReading="みっつ"
              exampleFr="trois objets"
              speakText="みっつ"
            />
            <KanjiCard
              kanji="四"
              reading="よん"
              strokes={5}
              exampleWord="四人"
              exampleReading="よにん"
              exampleFr="quatre personnes"
              speakText="よにん"
            />
          </div>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 3</h2>
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
                Essaie d&apos;ajouter ね à une phrase simple à voix haute, juste
                pour habituer ta bouche au son.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Revoir 三 et 四 avec leur lecture.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 1 — la leçon 3 continue avec とても・あまり・すごく,
          pour dire à quel point quelque chose est vrai.
        </footer>
      </div>
    </>
  );
}
