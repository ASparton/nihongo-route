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
  title: "Semaine 7 · Leçon 2 — ～たい",
  description:
    "Dire ce qu'on veut faire avec le radical en ます + たい, conjugué comme un adjectif en い, avec audio et exercices.",
};

const STEPS = [
  { id: "s1", label: "1 · 形成" },
  { id: "s2", label: "2 · 肯定" },
  { id: "s3", label: "3 · 否定・過去" },
  { id: "s4", label: "4 · 練習" },
  { id: "s5", label: "5 · 使い方" },
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
          <div className="eyebrow">願望表現 — 七週目・二課</div>
          <h1 className="title">～たい：したいことを言う</h1>
          <div className="meta-line">Semaine 7 · Leçon 2 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Former ～たい</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Après le 可能形 (pouvoir faire), voici comment dire ce qu&apos;on{" "}
            <strong>veut</strong> faire. On prend le radical en ます (celui
            qu&apos;on utilise pour la forme polie), on retire ます, et on
            ajoute たい.
          </p>

          <ConjugationTable
            title="ます語幹 + たい"
            rows={[
              {
                label: "のみます",
                jp: (
                  <>
                    <ruby>飲<rt>の</rt></ruby>みたい
                  </>
                ),
                speakText: "飲みたいです。",
                note: "のむ → のみたい",
              },
              {
                label: "たべます",
                jp: (
                  <>
                    <ruby>食<rt>た</rt></ruby>べたい
                  </>
                ),
                speakText: "食べたいです。",
                note: "たべる → たべたい",
              },
              {
                label: "いきます",
                jp: (
                  <>
                    <ruby>行<rt>い</rt></ruby>きたい
                  </>
                ),
                speakText: "行きたいです。",
                note: "いく → いきたい",
              },
            ]}
          />
          <p className="example-note">
            À partir de là, たい se comporte exactement comme un adjectif en
            い (vu en détail en semaine 5) — c&apos;est le radical en ます qui
            change selon le verbe, mais たい se conjugue toujours pareil.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Dire ce qu&apos;on veut — forme affirmative</h2>
            <span className="time">~7 min</span>
          </div>

          <ExampleCard
            jp={
              <>
                <ruby>富士山<rt>ふじさん</rt></ruby>を <ruby>見<rt>み</rt></ruby>たいです。
              </>
            }
            fr="Je veux voir le Mont Fuji."
            speakText="富士山を見たいです。"
          />
          <ExampleCard
            jp={
              <>
                すしを <ruby>食<rt>た</rt></ruby>べたいです。
              </>
            }
            fr="Je veux manger des sushis."
            speakText="すしを食べたいです。"
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Comment dit-on « je veux boire » ?"
            choices={["のみたいです", "のむです", "のみますたい"]}
            answer="のみたいです"
          />
          <SentenceAssembler
            tiles={["ふじさんを", "みたいです", "みます", "みました"]}
            answer={["ふじさんを", "みたいです"]}
            targetFr="Je veux voir le Mont Fuji."
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Négatif et passé — comme un adjectif en い</h2>
            <span className="time">~8 min</span>
          </div>
          <p>
            たい se conjugue avec les mêmes terminaisons que たかい ou
            おもしろい : ～たいです, ～たくないです, ～たかったです,
            ～たくなかったです.
          </p>

          <ConjugationTable
            title="～たい の活用（見る → 見たい）"
            rows={[
              {
                label: "現在・肯定",
                jp: (
                  <>
                    <ruby>見<rt>み</rt></ruby>たいです
                  </>
                ),
                speakText: "見たいです。",
              },
              {
                label: "現在・否定",
                jp: (
                  <>
                    <ruby>見<rt>み</rt></ruby>たくないです
                  </>
                ),
                speakText: "見たくないです。",
              },
              {
                label: "過去・肯定",
                jp: (
                  <>
                    <ruby>見<rt>み</rt></ruby>たかったです
                  </>
                ),
                speakText: "見たかったです。",
              },
              {
                label: "過去・否定",
                jp: (
                  <>
                    <ruby>見<rt>み</rt></ruby>たくなかったです
                  </>
                ),
                speakText: "見たくなかったです。",
              },
            ]}
          />

          <ExampleCard
            jp={
              <>
                どこも <ruby>行<rt>い</rt></ruby>きたくないです。
              </>
            }
            fr="Je ne veux aller nulle part."
            speakText="どこも行きたくないです。"
          />
          <p className="example-note">
            どこ (où) + も + forme négative = &laquo;nulle part&raquo;. Le
            même patron fonctionne avec なにも (rien) ou だれも (personne) —
            un mot interrogatif + も + négation.
          </p>

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptFr="Comment dit-on « je ne voulais pas manger » ?"
            choices={["たべたくなかったです", "たべたかったです", "たべますでした"]}
            answer="たべたくなかったです"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Pratique</h2>
            <span className="time">~5 min</span>
          </div>
          <SentenceAssembler
            tiles={["どこも", "いきたくないです", "いきたいです", "いきます"]}
            answer={["どこも", "いきたくないです"]}
            targetFr="Je ne veux aller nulle part."
          />
          <Quiz
            promptFr="Comment dit-on « je voulais boire » ?"
            choices={["のみたかったです", "のみたくないです", "のみますでした"]}
            answer="のみたかったです"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>À qui s&apos;applique ～たい ?</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            ～たい s&apos;utilise surtout pour parler de <strong>ses propres</strong>{" "}
            envies. On peut aussi le demander directement à quelqu&apos;un
            avec ～たいですか — c&apos;est naturel entre amis ou en famille.
          </p>

          <ExampleCard
            jp="何が したいですか。"
            fr="Qu'est-ce que tu veux faire ?"
            speakText="何がしたいですか。"
          />

          <div className="callout">
            <strong>Usage réel.</strong> Pour dire ce qu&apos;une{" "}
            <strong>autre personne</strong> (un tiers, absent de la
            conversation) veut faire, ～たい ne suffit plus — il faut une
            forme différente (～たがっている), vue plus tard. Pour
            l&apos;instant, retiens juste que ～たい parle de toi, ou pose une
            question directe à ton interlocuteur.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~3 min</span>
          </div>
          <p>Deux kanji déjà croisés en hiragana, enfin sous leur forme écrite.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="多"
              reading="た / おお"
              strokes={6}
              exampleWord="多い"
              exampleReading="おおい"
              exampleFr="nombreux — callback de la semaine 6, enfin son kanji !"
              speakText="おおい"
            />
            <KanjiCard
              kanji="少"
              reading="しょう / すこ"
              strokes={4}
              exampleWord="少し"
              exampleReading="すこし"
              exampleFr="un peu — un adverbe que tu utiliseras tout le temps"
              speakText="すこし"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            多い et 少ない (peu, pas beaucoup) fonctionnent comme n&apos;importe
            quel adjectif en い ; 少し, lui, est un adverbe fixe — pas de
            conjugaison, on le colle simplement devant le verbe ou
            l&apos;adjectif qu&apos;il modère.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 3</h2>
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
                Redire de mémoire les 4 formes de 見たい (見たいです,
                見たくないです, 見たかったです, 見たくなかったです).
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Dire à voix haute 3 choses que tu veux faire au Japon avec
                ～たいです.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 多 et 少 avec leurs lectures.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 2 · semaine 7 · construite le 5 juillet 2026 — la leçon 3
          reprend en profondeur ～なければならない, déjà vue une fois mais à
          bien consolider avant le départ.
        </footer>
      </div>
    </>
  );
}
