import type { Metadata } from "next";
import Link from "next/link";
import StepRail from "@/components/StepRail";
import VoiceStatus from "@/components/VoiceStatus";
import Quiz from "@/components/Quiz";
import SentenceAssembler from "@/components/SentenceAssembler";
import VocabGrid from "@/components/VocabGrid";
import Dialogue from "@/components/Dialogue";
import KanjiCard from "@/components/KanjiCard";

export const metadata: Metadata = {
  title: "Semaine 4 · Leçon 4 — 総復習",
  description:
    "Grande révision des semaines 1 à 4 (particules, これ/それ/あれ, あります/います, adjectifs, verbes, passé) avec une mini conversation au café.",
};

const STEPS = [
  { id: "s1", label: "1 · 助詞" },
  { id: "s2", label: "2 · 存在・形容詞" },
  { id: "s3", label: "3 · 動詞・過去形" },
  { id: "s4", label: "4 · 会話：カフェで" },
  { id: "s5", label: "5 · 会話体のコツ" },
  { id: "s6", label: "6 · 漢字" },
];

const CAFE_LINES = [
  {
    who: "A",
    jp: "すみません、コーヒーを 一つ ください。",
    fr: "Excusez-moi, un café, s'il vous plaît.",
  },
  {
    who: "B",
    jp: "はい、かしこまりました。おさとうは いりますか。",
    fr: "Bien sûr. Voulez-vous du sucre ?",
  },
  {
    who: "A",
    jp: "いいえ、けっこうです。あ、これは いくらですか。",
    fr: "Non, ça va, merci. Ah, combien coûte ceci ?",
  },
  {
    who: "B",
    jp: "三百円です。",
    fr: "Ça fait 300 yens.",
  },
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
          <div className="eyebrow">総仕上げ — 四週目・四課</div>
          <h1 className="title">総復習</h1>
          <div className="meta-line">Semaine 4 · Leçon 4 · ~30 minutes</div>
          <VoiceStatus />
        </header>

        <section className="block" id="s1">
          <div className="block-head">
            <h2>Particules et これ・それ・あれ</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Un petit rappel de vocabulaire avant d&apos;attaquer les
            révisions — clique pour écouter chaque mot.
          </p>
          <VocabGrid
            items={[
              { jp: "がくせい", fr: "étudiant(e)" },
              { jp: "せんせい", fr: "professeur" },
              { jp: "えき", fr: "gare" },
              { jp: "でんしゃ", fr: "train" },
              { jp: "びょういん", fr: "hôpital" },
            ]}
          />

          <h3 className="sub-heading">À toi</h3>
          <Quiz
            promptJp="わたし ___ にほんじんです。"
            promptFr="Moi, je suis japonais(e)."
            choices={["は", "を", "で"]}
            answer="は"
          />
          <Quiz
            promptJp="みず ___ のみます。"
            promptFr="Je bois de l'eau."
            choices={["は", "が", "を"]}
            answer="を"
          />
          <Quiz
            promptFr="Un objet loin de toi ET loin de ton interlocuteur se dit..."
            choices={["これ", "それ", "あれ"]}
            answer="あれ"
          />
        </section>

        <section className="block" id="s2">
          <div className="block-head">
            <h2>あります・います et les adjectifs</h2>
            <span className="time">~6 min</span>
          </div>
          <p>Révision mélangée sur l&apos;existence et les descriptions.</p>

          <Quiz
            promptJp="ねこ ___ います。"
            promptFr="Il y a un chat."
            choices={["は", "が", "を"]}
            answer="が"
          />
          <Quiz
            promptFr="Pour un objet inanimé (un livre, une table), on emploie..."
            choices={["います", "あります"]}
            answer="あります"
          />
          <Quiz
            promptFr="Comment dit-on « ce n'est pas bon marché » ?"
            choices={["やすいです", "やすくないです", "やすじゃないです"]}
            answer="やすくないです"
          />

          <h3 className="sub-heading">Assemble la phrase</h3>
          <SentenceAssembler
            tiles={["とうきょうは", "おおきい", "町です", "たかい"]}
            answer={["とうきょうは", "おおきい", "町です"]}
            targetFr="Tokyo est une grande ville."
          />
        </section>

        <section className="block" id="s3">
          <div className="block-head">
            <h2>Verbes, て形 et passé</h2>
            <span className="time">~6 min</span>
          </div>
          <p>Le gros morceau de ces quatre semaines, tout mélangé.</p>

          <Quiz
            promptJp="きのう、すしを ___。"
            promptFr="Hier, j'ai mangé des sushis. (poli)"
            choices={["たべます", "たべました", "たべませんでした"]}
            answer="たべました"
          />
          <Quiz
            promptJp="きのう えいがを ___。"
            promptFr="Hier j'ai regardé un film. (familier)"
            choices={["みる", "みた", "みない"]}
            answer="みた"
          />
          <Quiz
            promptJp="えきに ___、でんしゃに のります。"
            promptFr="Je vais à la gare et je prends le train."
            choices={["いって", "いった", "いきます"]}
            answer="いって"
          />
          <Quiz
            promptFr="Registre familier utilisé avec un inconnu au travail : bonne ou mauvaise idée ?"
            choices={["bonne idée", "mauvaise idée"]}
            answer="mauvaise idée"
          />
        </section>

        <section className="block" id="s4">
          <div className="block-head">
            <h2>Conversation de synthèse — au café</h2>
            <span className="time">~6 min</span>
          </div>
          <p>
            Un dialogue qui mélange une demande polie, これ, et un prix en
            chiffres. Écoute-le en entier, puis ligne par ligne.
          </p>

          <Dialogue lines={CAFE_LINES} />

          <h3 className="sub-heading">Vérifie ta compréhension</h3>
          <Quiz
            promptFr="Que commande le client ?"
            choices={["un café", "un thé", "de l'eau"]}
            answer="un café"
          />
          <Quiz
            promptFr="Le client veut-il du sucre ?"
            choices={["Oui", "Non"]}
            answer="Non"
          />
          <Quiz
            promptFr="Combien coûte le café ?"
            choices={["100円", "300円", "1000円"]}
            answer="300円"
          />
        </section>

        <section className="block" id="s5">
          <div className="block-head">
            <h2>Ce que tu entendras vraiment dans un café</h2>
            <span className="time">~3 min</span>
          </div>
          <p>
            かしこまりました est la formule standard du personnel de service
            pour dire &laquo;bien entendu&raquo; — tu ne l&apos;emploieras
            jamais toi-même, mais tu l&apos;entendras partout. お + nom
            (おさとう) est un préfixe poli très courant dans ce contexte.
          </p>

          <div className="callout">
            <strong>けっこうです, ton meilleur ami en voyage.</strong> C&apos;est
            la façon polie de dire &laquo;non merci, ça va&raquo; — bien
            plus naturelle que いいです dans une interaction avec un
            commerçant ou un serveur.
          </div>
        </section>

        <section className="block" id="s6">
          <div className="block-head">
            <h2>Kanji du jour</h2>
            <span className="time">~4 min</span>
          </div>
          <p>
            Deux kanji très pratiques pour t&apos;organiser une fois sur
            place — semaines et horaires.
          </p>

          <div className="kanji-corner">
            <KanjiCard
              kanji="週"
              reading="しゅう"
              strokes={11}
              exampleWord="今週"
              exampleReading="こんしゅう"
              exampleFr="cette semaine"
              speakText="こんしゅう"
            />
            <KanjiCard
              kanji="午"
              reading="ご"
              strokes={4}
              exampleWord="午前"
              exampleReading="ごぜん"
              exampleFr="le matin (AM)"
              speakText="ごぜん"
            />
          </div>
          <p style={{ fontSize: 13 }}>
            午前 (ごぜん, le matin) a pour miroir 午後 (ごご, l&apos;après-midi
            et le soir) — deux mots que tu croiseras sur presque tous les
            horaires de trains et d&apos;ouverture au Japon.
          </p>
        </section>

        <section className="block" style={{ borderBottom: "none" }}>
          <div className="block-head">
            <h2>Avant la semaine 5</h2>
            <span className="time">d&apos;ici quelques jours</span>
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
                Refaire tous les Quiz de cette leçon jusqu&apos;à un score
                sans erreur.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c3" />
              <label htmlFor="c3">
                Rejouer le dialogue du café à voix haute, dans les deux
                rôles.
              </label>
            </li>
            <li>
              <input type="checkbox" id="c4" />
              <label htmlFor="c4">
                Revoir tous les kanji des semaines 1 à 4 d&apos;un coup, sans
                t&apos;arrêter sur celui qui bloque.
              </label>
            </li>
          </ul>
        </section>

        <footer className="note">
          Leçon 4 · semaine 4 · construite le 5 juillet 2026 — phase 2
          terminée. La suite s&apos;appuiera sur ce socle pour aborder un
          langage plus proche du voyage concret.
        </footer>
      </div>
    </>
  );
}
