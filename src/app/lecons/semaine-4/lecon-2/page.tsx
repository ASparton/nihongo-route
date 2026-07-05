import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import ConjugationTable from "@/components/ConjugationTable";
import Dialogue from "@/components/Dialogue";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 4 · Leçon 2 — くだけた過去形",
  description:
    "Le passé familier : ~た et ~なかった, et surtout quand parler poli ou familier — avec dialogue, audio et deux nouveaux kanji (何・時).",
};

const STEPS = [
  { id: "s1", label: "1 · た形" },
  { id: "s2", label: "2 · なかった" },
  { id: "s3", label: "3 · 練習" },
  { id: "s4", label: "4 · 丁寧 vs くだけた" },
  { id: "s5", label: "5 · 会話体" },
  { id: "s6", label: "6 · 漢字" },
];

const DIALOGUE_LINES = [
  { who: "A", jp: "すしを たべた？", fr: "T'as mangé des sushis ?" },
  { who: "B", jp: "うん、たべた！", fr: "Ouais, j'en ai mangé !" },
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
          <div className="eyebrow">総仕上げ — 四週目・二課</div>
          <h1 className="title">くだけた過去形</h1>
          <div className="meta-line">Semaine 4 · Leçon 2 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>た形 — l&apos;affirmatif familier</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            La forme familière du passé se construit à partir de la forme て
            que tu connais déjà : mêmes changements de son, mais on remplace
            juste て par た (et で par だ).
          </p>

          <ConjugationTable
            title="て形 → た形 (même changement de son)"
            rows={[
              { label: "たべる (manger)", jp: "たべて → たべた", speakText: "たべた" },
              { label: "のむ (boire)", jp: "のんで → のんだ", speakText: "のんだ" },
              { label: "かう (acheter)", jp: "かって → かった", speakText: "かった" },
              {
                label: "いく (aller)",
                jp: "いって → いった",
                note: "exception déjà connue",
                speakText: "いった",
              },
            ]}
          />

          <ExampleCard
            jp={
              <>
                きのう <ruby>映画<rt>えいが</rt></ruby>を <ruby>見<rt>み</rt></ruby>た。
              </>
            }
            fr="Hier j'ai regardé un film. (familier)"
            speakText="きのう えいがを みた。"
          />
          <p className="example-note">
            見る → 見<strong>た</strong>. Aucun です ni ました : c&apos;est ce
            qui rend la phrase familière.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>なかった — le négatif familier</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Pour le négatif familier, on part cette fois de la forme ない que
            tu connais déjà, et on la transforme en なかった.
          </p>

          <ExampleCard
            jp={
              <>
                ぜんぜん <ruby>寝<rt>ね</rt></ruby>なかった。
              </>
            }
            fr="Je n'ai pas du tout dormi."
            speakText="ぜんぜん ねなかった。"
          />
          <p className="example-note">
            寝る → 寝ない → 寝<strong>なかった</strong>. ぜんぜん + négatif =
            &laquo;pas du tout&raquo;.
          </p>

          <ConjugationTable
            title="ない形 → なかった形"
            rows={[
              { label: "たべる (manger)", jp: "たべない → たべなかった", speakText: "たべなかった" },
              { label: "のむ (boire)", jp: "のまない → のまなかった", speakText: "のまなかった" },
              { label: "ねる (dormir)", jp: "ねない → ねなかった", speakText: "ねなかった" },
              { label: "いく (aller)", jp: "いかない → いかなかった", speakText: "いかなかった" },
            ]}
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>À toi</h2>
            <span className="time">~5 min</span>
          </div>

          <Quiz
            promptJp="きのう えいがを ___。"
            promptFr="Hier j'ai regardé un film. (familier)"
            choices={["みた", "みなかった", "みます"]}
            answer="みた"
          />
          <Quiz
            promptJp="ぜんぜん ___。"
            promptFr="Je n'ai pas du tout dormi."
            choices={["ねた", "ねなかった", "ねます"]}
            answer="ねなかった"
          />

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["すしを", "たべた", "たべなかった", "たべます"]}
            answer={["すしを", "たべた"]}
            targetFr="J'ai mangé des sushis. (familier)"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>丁寧語 vs くだけた語 — quand utiliser quoi</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            C&apos;est le cœur de cette leçon : les deux formes que tu viens
            d&apos;apprendre disent exactement la même chose, mais elles ne
            s&apos;emploient pas dans les mêmes situations.
          </p>

          <div className="callout seal">
            <strong>Le repère à retenir :</strong>
            <br />
            ～ました / ～ませんでした (poli) → avec des inconnus, au travail,
            dans un magasin ou un restaurant, lors d&apos;une première
            rencontre, ou avec quelqu&apos;un de plus âgé ou hiérarchiquement
            supérieur.
            <br />
            ～た / ～なかった (familier) → avec des amis proches, ta famille,
            ou des personnes du même âge une fois la relation établie.
          </div>

          <p>
            Utiliser le registre familier avec un inconnu peut sonner
            impoli ou déplacé. À l&apos;inverse, rester en ました 100% du
            temps avec des amis proches peut sonner froid ou distant — un
            peu comme vouvoyer un ami d&apos;enfance en français.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>食<rt>た</rt></ruby>べました。
              </>
            }
            fr="poli — à un inconnu, dans un magasin"
            speakText="たべました。"
          />
          <ExampleCard
            jp={
              <>
                <ruby>食<rt>た</rt></ruby>べた。
              </>
            }
            fr="familier — à un ami proche"
            speakText="たべた。"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Écoute — entre amis</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Un échange typique entre proches, tout en registre familier.
            Écoute-le en entier, puis ligne par ligne.
          </p>

          <Dialogue lines={DIALOGUE_LINES} />

          <Quiz
            promptFr="Ce dialogue est-il en registre poli ou familier ?"
            choices={["poli", "familier"]}
            answer="familier"
          />
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>Deux kanji indispensables pour parler de l&apos;heure.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="何"
              reading="なに・なん"
              strokes={7}
              exampleWord="何時"
              exampleReading="なんじ"
              exampleFr="quelle heure ?"
              speakText="なんじ"
            />
            <KanjiCard
              kanji="時"
              reading="じ"
              strokes={10}
              exampleWord="時間"
              exampleReading="じかん"
              exampleFr="le temps, une durée"
              speakText="じかん"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            何 se lit なん devant じ (何時) mais なに dans beaucoup
            d&apos;autres mots — l&apos;oreille s&apos;habitue vite. 時間 te
            servira dès que tu voudras demander ou indiquer une durée.
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
                Redire de mémoire た et なかった pour たべる, のむ, かう, いく
                et ねる.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Vérifier, pour trois situations de la journée, si tu
                emploierais ました ou た — et pourquoi.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 何 et 時 avec なんじ et じかん.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 4 · construite le 5 juillet 2026 — la leçon 3
          enchaînera plusieurs actions avec て pour décrire une routine
          complète.
        </footer>
      </div>
    </>
  );
}
