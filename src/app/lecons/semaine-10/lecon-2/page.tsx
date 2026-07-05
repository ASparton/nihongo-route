import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import ConjugationTable from "@/components/ConjugationTable";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 10 · Leçon 2 — Le langage parlé : les raccourcis à l'oral",
  description:
    "Le grand dossier des contractions orales japonaises : ~って, ~とく, ~んです, ら抜き言葉 et では→じゃ, formel vs parlé, avec audio.",
};

const STEPS = [
  { id: "s1", label: "1 · 序" },
  { id: "s2", label: "2 · って" },
  { id: "s3", label: "3 · とく" },
  { id: "s4", label: "4 · んです" },
  { id: "s5", label: "5 · 総まとめ" },
  { id: "s6", label: "6 · 漢字" },
];

const RECAP_ROWS = [
  {
    label: "～という → って",
    jp: <>田中さんが 来るって。</>,
    speakText: "田中さんが 来るって。",
    note: "rapporter une parole",
  },
  {
    label: "～ておく → とく",
    jp: <>買っとく。</>,
    speakText: "買っとく。",
    note: "faire à l'avance",
  },
  {
    label: "～んです",
    jp: <>行きたいんです。</>,
    speakText: "行きたいんです。",
    note: "explication, justification",
  },
  {
    label: "ら抜き言葉",
    jp: <>食べれる。</>,
    speakText: "食べれる。",
    note: "食べられる sans ら",
  },
  {
    label: "では → じゃ",
    jp: <>じゃ ありません。</>,
    speakText: "じゃ ありません。",
    note: "rappel semaine 1",
  },
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
          <div className="eyebrow">くだけた話し方 — 十週目・二課</div>
          <h1 className="title">
            Le langage parlé : les raccourcis à l&apos;oral
          </h1>
          <div className="meta-line">Semaine 10 · Leçon 2 · ~35 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Pourquoi cette leçon existe</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            Tu connais déjà la grammaire &laquo;propre&raquo; : celle des
            manuels, celle qu&apos;on écrit. Mais à l&apos;oreille, dans la
            rue, au konbini, entre amis, les Japonais contractent
            énormément — et si tu ne connais pas ces raccourcis, tu risques
            de comprendre chaque mot &laquo;officiel&raquo; d&apos;une phrase
            sans jamais reconnaître sa version réelle, parlée à toute
            vitesse.
          </p>
          <p>
            Cette leçon est le cœur de la semaine : cinq contractions que tu
            vas entendre en boucle pendant ton voyage. Le but n&apos;est pas
            de toutes les utiliser toi-même (même si tu peux essayer), mais
            surtout de les <strong>reconnaître instantanément</strong> à
            l&apos;oreille. Pour chacune, tu vas voir la forme écrite/formelle
            et sa version orale, côte à côte.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>1. ～という → ～って (rapporter une parole)</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            という sert à citer ou rapporter ce que quelqu&apos;un a dit,
            pensé ou lu. À l&apos;oral, という — et même 言っていた/言った —
            se contractent presque toujours en って.
          </p>

          <ExampleCard
            jp="田中さんが 来ると 言っていました。"
            fr="forme formelle/écrite — M. Tanaka a dit qu'il viendrait."
            speakText="田中さんが 来ると 言っていました。"
          />
          <ExampleCard
            jp="田中さんが 来るって。"
            fr="forme parlée — même sens, en beaucoup plus court."
            speakText="田中さんが 来るって。"
          />
          <p className="example-note">
            と 言っていました devient simplement って. On peut aussi
            l&apos;entendre en version intermédiaire, 田中さんが 来るって
            言ってた — mais dans une conversation rapide, seul le って final
            suffit souvent à faire passer l&apos;idée &laquo;il/elle a dit
            que...&raquo;.
          </p>

          <ExampleCard
            jp="あの 店は おいしいと 言っていました。"
            fr="forme formelle — on m'a dit que ce restaurant était bon."
            speakText="あの 店は おいしいと 言っていました。"
          />
          <ExampleCard
            jp="あの 店、おいしいって。"
            fr="forme parlée — ce resto, il paraît que c'est bon."
            speakText="あの 店、おいしいって。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="À l'oral, «on m'a dit que c'était bon» se raccourcit surtout en..."
            choices={["おいしいって", "おいしいとく", "おいしいんです"]}
            answer="おいしいって"
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>2. ～ておく → ～とく (faire à l&apos;avance)</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            ～ておく indique qu&apos;on fait quelque chose maintenant, en
            préparation pour plus tard — &laquo;faire d&apos;avance&raquo;,
            &laquo;garder fait&raquo;. À l&apos;oral, ておく se contracte
            systématiquement en とく.
          </p>

          <ExampleCard
            jp="チケットを 買っておきます。"
            fr="forme formelle — je vais acheter le billet à l'avance."
            speakText="チケットを 買っておきます。"
          />
          <ExampleCard
            jp="チケット、買っとくね。"
            fr="forme parlée — je prends le billet d'avance, hein."
            speakText="チケット、買っとくね。"
          />
          <p className="example-note">
            ておきます → ときます, et à la forme simple, ておく → とく. Tu
            reconnais au passage le ね de complicité vu en leçon 1 !
          </p>

          <ExampleCard
            jp="言っておきます。"
            fr="forme formelle — je vais le dire d'avance (te prévenir)."
            speakText="言っておきます。"
          />
          <ExampleCard
            jp="言っとく。"
            fr="forme parlée — je te le dis d'avance, familier et très courant."
            speakText="言っとく。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="チケット、買っ___ね。"
            promptFr="Je prends le billet d'avance, hein."
            choices={["とく", "って", "んです"]}
            answer="とく"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>3. ～んです (expliquer, justifier)</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            んです (contraction orale de のです) ne change pas vraiment le
            sens littéral d&apos;une phrase, mais lui ajoute une
            <strong> nuance</strong> : celle d&apos;une explication ou
            d&apos;une justification, souvent en réponse à un contexte
            implicite. C&apos;est une des contractions les plus fréquentes de
            tout le japonais parlé, dans tous les registres.
          </p>

          <ExampleCard
            jp="行きたいです。"
            fr="simple énoncé de fait — je veux y aller."
            speakText="行きたいです。"
          />
          <ExampleCard
            jp="行きたいんです。"
            fr="avec nuance d'explication — c'est que je veux y aller (sous-entendu : voilà pourquoi je te demande ça / voilà ma raison)."
            speakText="行きたいんです。"
          />
          <p className="example-note">
            Imagine qu&apos;on te demande &laquo;pourquoi tu regardes les
            horaires de train ?&raquo; — répondre 行きたいんです sonne
            naturel, comme une justification. Répondre juste 行きたいです
            sonnerait un peu abrupt, presque hors contexte.
          </p>

          <ExampleCard
            jp="お金が ありません。"
            fr="simple énoncé — je n'ai pas d'argent."
            speakText="お金が ありません。"
          />
          <ExampleCard
            jp="お金が ないんです。"
            fr="avec nuance — c'est que je n'ai pas d'argent (justification, ex : pour refuser poliment un achat)."
            speakText="お金が ないんです。"
          />

          <div className="callout">
            <strong>Astuce d&apos;oreille.</strong> Dès que tu entends une
            phrase se terminer par んです ou んですか, pense &laquo;il y a
            une raison ou une explication sous-jacente&raquo; plutôt que
            &laquo;simple fait&raquo;. C&apos;est souvent ce petit ん qui
            adoucit une question un peu directe — 何が あったんですか。 sonne
            bien plus naturel que 何が ありましたか。
          </div>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="La phrase qui sonne comme une justification (« c'est que je n'ai pas d'argent ») est..."
            choices={["お金が ありません。", "お金が ないんです。"]}
            answer="お金が ないんです。"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Deux réflexes déjà vus — et le tableau récap</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            Deux contractions rencontrées plus tôt dans le programme méritent
            un rappel express, car elles font partie du même paquet de
            &laquo;réflexes à l&apos;oreille&raquo; que celles du jour.
          </p>

          <h3 className="sub-heading">4. ら抜き言葉 (rappel semaine 7)</h3>
          <ExampleCard
            jp="食べられる。"
            fr="forme standard du potentiel — je peux manger."
            speakText="食べられる。"
          />
          <ExampleCard
            jp="食べれる。"
            fr="ら抜き言葉, très répandu à l'oral — même sens, ら a disparu."
            speakText="食べれる。"
          />
          <p className="example-note">
            Le potentiel des verbes en る perd souvent son ら à
            l&apos;oral : 見られる → 見れる, 来られる → 来れる. C&apos;est
            techniquement &laquo;fautif&raquo; à l&apos;écrit formel, mais
            omniprésent dans la conversation quotidienne, surtout chez les
            jeunes générations.
          </p>

          <h3 className="sub-heading">5. では → じゃ (rappel semaine 1)</h3>
          <ExampleCard
            jp="学生では ありません。"
            fr="formel/écrit — je ne suis pas étudiant(e)."
            speakText="学生では ありません。"
          />
          <ExampleCard
            jp="学生じゃ ありません。"
            fr="oral poli — ce que tu entendras le plus."
            speakText="学生じゃ ありません。"
          />

          <div className="callout seal">
            <strong>Les 5 réflexes à avoir à l&apos;oreille au Japon :</strong>
            <br />
            1. という → って (rapporter une parole)
            <br />
            2. ておく → とく (faire à l&apos;avance)
            <br />
            3. のです → んです (expliquer, justifier)
            <br />
            4. ら抜き言葉 : 食べられる → 食べれる
            <br />
            5. では → じゃ
            <br />
            Tu n&apos;as pas besoin de toutes les produire parfaitement dès
            maintenant — mais dès que ton oreille les reconnaît sans effort,
            une grande partie du japonais &laquo;parlé rapide&raquo; devient
            soudain beaucoup plus clair.
          </div>

          <h3 className="sub-heading">Tableau récap</h3>
          <ConjugationTable title="Les 5 contractions de la semaine" rows={RECAP_ROWS} />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Deux kanji de couleurs et de météo, qui reviendront quand tu
            décriras ce que tu vois pendant le voyage.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="雪"
              reading="せつ"
              strokes={11}
              exampleWord="雪"
              exampleReading="ゆき"
              exampleFr="la neige"
              speakText="ゆき"
            />
            <KanjiCard
              kanji="色"
              reading="しょく"
              strokes={6}
              exampleWord="色"
              exampleReading="いろ"
              exampleFr="la couleur"
              speakText="いろ"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            Comme pour 雨 en leçon 1 : la lecture affichée sur le kanji seul
            (せつ, しょく) est surtout utile dans des mots composés, alors que
            au quotidien, pour parler de la neige ou d&apos;une couleur, ce
            sont bien ゆき et いろ que tu utiliseras.
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
                Réécouter les 5 paires formel/parlé du tableau récap jusqu&apos;à
                reconnaître chaque version orale sans lire le texte.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Chercher une courte vidéo ou un extrait de drama japonais et
                essayer de repérer au moins une contraction (って, とく,
                んです...) à l&apos;oreille.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 雪 et 色 jusqu&apos;à reconnaître ゆき et いろ sans
                hésiter.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 10 · le point le plus demandé de tout le
          programme — reviens sur cette page autant de fois que nécessaire,
          ces cinq réflexes se travaillent surtout à l&apos;oreille, dans la
          durée.
        </footer>
      </div>
    </>
  );
}
