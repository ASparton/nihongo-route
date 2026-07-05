import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import ExampleCard from "@/components/ExampleCard";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import ConjugationTable from "@/components/ConjugationTable";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 4 · Leçon 1 — 丁寧な過去形",
  description:
    "Le passé poli : ~ました et ~ませんでした, avec exemples audio, une astuce d'intonation à l'oral et deux nouveaux kanji (年・今).",
};

const STEPS = [
  { id: "s1", label: "1 · ました" },
  { id: "s2", label: "2 · ませんでした" },
  { id: "s3", label: "3 · 練習" },
  { id: "s4", label: "4 · 会話体" },
  { id: "s5", label: "5 · 漢字" },
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
          <div className="eyebrow">総仕上げ — 四週目・一課</div>
          <h1 className="title">丁寧な過去形</h1>
          <div className="meta-line">Semaine 4 · Leçon 1 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>ました — l&apos;affirmatif poli du passé</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Tu connais déjà la base ます (ますstem). Pour parler du passé au
            registre poli, il suffit de remplacer ます par ました. C&apos;est
            tout — aucune irrégularité pour cette forme.
          </p>

          <ExampleCard
            jp={
              <>
                きのう、すしを <ruby>食<rt>た</rt></ruby>べました。
              </>
            }
            fr="Hier, j'ai mangé des sushis."
            speakText="きのう、すしを たべました。"
          />
          <p className="example-note">
            たべます → たべ<strong>ました</strong>. On garde la base et on
            change juste la fin.
          </p>

          <ExampleCard
            jp="でんしゃに のりました。"
            fr="J'ai pris le train."
            speakText="でんしゃに のりました。"
          />
          <p className="example-note">
            のります (base のり, verbe en godan) → のり<strong>ました</strong>.
            Même mécanisme, quel que soit le groupe du verbe.
          </p>

          <ConjugationTable
            title="ます形 → ました形"
            rows={[
              { label: "たべる (manger)", jp: "たべます → たべました", speakText: "たべました" },
              { label: "いく (aller)", jp: "いきます → いきました", speakText: "いきました" },
              { label: "のむ (boire)", jp: "のみます → のみました", speakText: "のみました" },
              { label: "する (faire)", jp: "します → しました", speakText: "しました" },
            ]}
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>ませんでした — le négatif poli du passé</h2>
            <span className="time">~7 min</span>
          </div>
          <p>
            Même logique : on part de la forme négative présente ~ません et
            on ajoute でした. La base ます-stem ne change pas.
          </p>

          <ExampleCard
            jp={
              <>
                きょう、がっこうに <ruby>行<rt>い</rt></ruby>きませんでした。
              </>
            }
            fr="Aujourd'hui, je ne suis pas allé à l'école."
            speakText="きょう、がっこうに いきませんでした。"
          />
          <p className="example-note">
            いきません → いきません<strong>でした</strong>. Le でした porte
            tout le poids du passé.
          </p>

          <ExampleCard
            jp={
              <>
                なにも <ruby>食<rt>た</rt></ruby>べませんでした。
              </>
            }
            fr="Je n'ai rien mangé."
            speakText="なにも たべませんでした。"
          />
          <p className="example-note">
            なにも + forme négative = &laquo;rien du tout&raquo;, exactement
            comme &laquo;ne... rien&raquo; en français.
          </p>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>À toi</h2>
            <span className="time">~6 min</span>
          </div>

          <Quiz
            promptJp="きのう、すしを ___。"
            promptFr="Hier, j'ai mangé des sushis."
            choices={["たべました", "たべます", "たべません"]}
            answer="たべました"
          />
          <Quiz
            promptJp="きょう、がっこうに ___。"
            promptFr="Aujourd'hui, je ne suis pas allé à l'école."
            choices={["いきました", "いきません", "いきませんでした"]}
            answer="いきませんでした"
          />
          <Quiz
            promptFr="Comment dit-on « je n'ai rien mangé » ?"
            choices={["なにか たべました", "なにも たべませんでした", "なにも たべました"]}
            answer="なにも たべませんでした"
          />

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["がっこうに", "いきませんでした", "いきました", "いきます"]}
            answer={["がっこうに", "いきませんでした"]}
            targetFr="Je ne suis pas allé à l'école."
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>À l&apos;oral, une question sans ですか</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            きのう (hier) se raccourcit rarement — il reste tel quel. Mais il
            existe une astuce orale très fréquente : on transforme une
            affirmation en question informelle en montant simplement
            l&apos;intonation à la fin, sans ajouter ですか.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>食<rt>た</rt></ruby>べました。
              </>
            }
            fr="affirmation neutre"
            speakText="たべました。"
          />
          <ExampleCard
            jp={
              <>
                <ruby>食<rt>た</rt></ruby>べました？
              </>
            }
            fr="question informelle — mêmes mots, intonation montante, aucun ですか"
            speakText="たべました？"
          />

          <div className="callout">
            <strong>Écoute la mélodie, pas seulement les mots.</strong> À
            l&apos;oral, énormément de questions informelles se forment
            juste en levant le ton sur la dernière syllabe d&apos;une phrase
            en ました. C&apos;est extrêmement courant, même en registre poli.
          </div>
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Deux kanji très utiles pour parler du temps — avec chacun une
            lecture spéciale à retenir.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="年"
              reading="ねん・とし"
              strokes={6}
              exampleWord="今年"
              exampleReading="ことし"
              exampleFr="cette année — lecture irrégulière ことし (pas こんねん)"
              speakText="ことし"
            />
            <KanjiCard
              kanji="今"
              reading="いま・こん"
              strokes={4}
              exampleWord="今日"
              exampleReading="きょう"
              exampleFr="aujourd'hui — lecture spéciale, comme 日 déjà vu"
              speakText="きょう"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            今年 se lit toujours ことし dans l&apos;usage courant, jamais
            こんねん. Et 今日 (きょう) est un clin d&apos;œil à 日 que tu
            connais déjà : la lecture du mot entier ne se déduit pas des
            lectures habituelles des deux kanji pris séparément.
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
                Redire de mémoire ました et ませんでした pour たべる, いく et
                する.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Essayer à voix haute la question à intonation montante
                (たべました？) sur trois verbes différents.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 年 et 今 avec leurs lectures spéciales ことし et きょう.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 1 · semaine 4 · construite le 5 juillet 2026 — la leçon 2
          passera au registre familier, et à la question centrale : quand
          l&apos;utiliser.
        </footer>
      </div>
    </>
  );
}
