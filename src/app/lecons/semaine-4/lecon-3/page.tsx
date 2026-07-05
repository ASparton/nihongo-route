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
  title: "Semaine 4 · Leçon 3 — て形でつなぐ",
  description:
    "Enchaîner plusieurs actions avec la forme て pour décrire une routine, avec audio, exercices et deux nouveaux kanji (分・半).",
};

const STEPS = [
  { id: "s1", label: "1 · て形の役割" },
  { id: "s2", label: "2 · 駅へ" },
  { id: "s3", label: "3 · 3つの動作" },
  { id: "s4", label: "4 · 練習" },
  { id: "s5", label: "5 · 会話体" },
  { id: "s6", label: "6 · 漢字" },
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
          <div className="eyebrow">総仕上げ — 四週目・三課</div>
          <h1 className="title">て形でつなぐ</h1>
          <div className="meta-line">Semaine 4 · Leçon 3 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Un nouveau rôle pour て</h2>
            <span className="time">~5 min</span>
          </div>
          <p>
            Tu as déjà utilisé て pour faire une demande (～てください) et
            pour décrire un état en cours (～ています). Aujourd&apos;hui,
            découvre son troisième grand rôle : enchaîner plusieurs actions
            dans l&apos;ordre, comme une suite de virgules.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>朝<rt>あさ</rt></ruby>、<ruby>起<rt>お</rt></ruby>きて、
                コーヒーを 飲みます。
              </>
            }
            fr="Le matin, je me lève et je bois un café."
            speakText="あさ、おきて、コーヒーを のみます。"
          />
          <p className="example-note">
            起きて (て形) enchaîne directement sur 飲みます. Seule la{" "}
            <strong>dernière</strong> action porte le temps et la politesse.
          </p>
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>Direction la gare</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Rappel : 行く est le seul verbe où la forme て est irrégulière
            (行って, pas 行いて). Elle s&apos;enchaîne comme n&apos;importe
            quelle autre forme て.
          </p>

          <ExampleCard
            jp={
              <>
                <ruby>駅<rt>えき</rt></ruby>に <ruby>行<rt>い</rt></ruby>って、
                <ruby>電車<rt>でんしゃ</rt></ruby>に <ruby>乗<rt>の</rt></ruby>
                ります。
              </>
            }
            fr="Je vais à la gare et je prends le train."
            speakText="えきに いって、でんしゃに のります。"
          />
          <p className="example-note">
            行って（行く） + 乗ります（乗る） : deux verbes de groupes
            différents, même mécanique de liaison.
          </p>
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Enchaîner trois actions</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Rien n&apos;empêche d&apos;enchaîner plus de deux actions : chaque
            verbe intermédiaire reste en て, et seul le dernier porte
            ます/です.
          </p>

          <ExampleCard
            jp={
              <>
                シャワーを <ruby>浴<rt>あ</rt></ruby>びて、
                <ruby>朝<rt>あさ</rt></ruby>ごはんを{" "}
                <ruby>食<rt>た</rt></ruby>べて、
                <ruby>出<rt>で</rt></ruby>かけます。
              </>
            }
            fr="Je prends une douche, je prends mon petit-déjeuner, et je sors."
            speakText="シャワーを あびて、あさごはんを たべて、でかけます。"
          />

          <ConjugationTable
            title="le patron général"
            rows={[
              {
                label: "schéma",
                jp: "Vて、Vて、Vます。",
                note: "autant de て que d'actions intermédiaires",
              },
            ]}
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>À toi</h2>
            <span className="time">~5 min</span>
          </div>

          <Quiz
            promptFr="Dans une chaîne Vて, Vて, Vます, quelle partie porte le temps et la politesse ?"
            choices={["la première action", "la dernière action", "chaque action séparément"]}
            answer="la dernière action"
          />
          <Quiz
            promptJp="えきに ___、でんしゃに のります。"
            promptFr="Je vais à la gare et je prends le train."
            choices={["いって", "いきます", "いった"]}
            answer="いって"
          />

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["おきて", "コーヒーを", "のみます", "のみました"]}
            answer={["おきて", "コーヒーを", "のみます"]}
            targetFr="Je me lève et je bois un café."
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>À l&apos;oral, la phrase peut s&apos;arrêter en て</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            En conversation détendue, il est très courant de décrire sa
            routine en laissant la phrase inachevée sur un て, sans jamais la
            refermer avec ます ou です — un peu comme &laquo;je me lève, je
            prends une douche... &raquo; qui reste en suspens, avec la suite
            sous-entendue.
          </p>

          <ExampleCard
            jp="あさ、おきて、シャワー あびて…"
            fr="je me lève, je prends une douche... (et la suite, sous-entendue)"
            speakText="あさ、おきて、シャワー あびて。"
          />

          <div className="callout">
            <strong>Une phrase qui traîne en て n&apos;est pas fautive.</strong>{" "}
            À l&apos;oral, la laisser ouverte comme ça est parfaitement
            naturel — c&apos;est même souvent plus naturel qu&apos;une liste
            fermée avec ます à chaque étape.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>Deux kanji pour préciser l&apos;heure au-delà des heures rondes.</p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="分"
              reading="ふん・ぶん"
              strokes={4}
              exampleWord="三十分"
              exampleReading="さんじゅっぷん"
              exampleFr="trente minutes — ふん devient ぷん après certains nombres"
              speakText="さんじゅっぷん"
            />
            <KanjiCard
              kanji="半"
              reading="はん"
              strokes={5}
              exampleWord="三時半"
              exampleReading="さんじはん"
              exampleFr="trois heures et demie"
              speakText="さんじはん"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            Le son ふん se transforme souvent en ぷん ou ぶん selon le
            nombre qui précède (comme 三十分 → さんじゅっぷん). Pas besoin
            de mémoriser une règle complète maintenant : l&apos;oreille
            s&apos;y habitue avec la pratique.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la leçon 4</h2>
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
                Décrire à voix haute ta propre routine du matin en trois
                actions enchaînées avec て.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Réécouter les exemples 駅・電車 jusqu&apos;à les redire sans
                hésiter.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir 分 et 半 avec さんじゅっぷん et さんじはん.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 3 · semaine 4 · construite le 5 juillet 2026 — la leçon 4
          fera la grande révision des semaines 1 à 4, avec une mini
          conversation de synthèse.
        </footer>
      </div>
    </>
  );
}
