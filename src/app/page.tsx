import Link from "next/link";
import CountdownBadge from "@/components/CountdownBadge";
import KanjiTracker from "@/components/KanjiTracker";

const PHASES = [
  {
    weeks: "SEM. 1–2",
    jp: "基礎固め",
    fr: "Consolider les bases",
    focus: "Révision condensée (は・が・を・に・で, これ/それ/あれ, X は Y です) + 終助詞 ね・よ・わ, réactions どう/そう, あげる/くれる/もらう.",
  },
  {
    weeks: "SEM. 3–4",
    jp: "動詞を動かす",
    fr: "Faire vivre les verbes",
    focus: "Groupes ichidan/godan, forme て, ~てください, ~ています, passé/négatif.",
  },
  {
    weeks: "SEM. 5–6",
    jp: "形容詞と説明",
    fr: "Adjectifs et description",
    focus: "Adjectifs い et な (paradigme complet), comparaisons ~より / ~の方が.",
  },
  {
    weeks: "SEM. 7–8",
    jp: "気持ちと許可",
    fr: "Souhaits, obligation, permission",
    focus: "Forme potentielle, ~たい, ~なければならない, ~てはいけない, ~てもいいですか.",
  },
  {
    weeks: "SEM. 9–10",
    jp: "旅の言葉",
    fr: "Langage du voyage",
    focus: "Restaurant, transport, achats, compteurs, contractions familières (じゃ, ~って).",
  },
  {
    weeks: "SEM. 11–12",
    jp: "実践と総復習",
    fr: "Pratique réelle et révision",
    focus: "Simulations de conversation, points faibles, fiche de survie, sprint kanji.",
  },
];

const WEEKS = [
  {
    num: "S1",
    dates: "04–10 juil.",
    grammar:
      "Grande révision (kana, は/が/を/に/で, これ/それ/あれ, あります/います, X は Y です) · 終助詞 ね/よ/わ/かな · どう/そう (réactions) · あげる/くれる/もらう",
    kanji: "一二三四五六七八",
    phaseStart: true,
  },
  {
    num: "S2",
    dates: "11–17 juil.",
    grammar: "Adjectifs い/な (introduction) · compteurs simples · 自己紹介 (se présenter)",
    kanji: "九十百千万円人日",
  },
  {
    num: "S3",
    dates: "18–24 juil.",
    grammar: "Groupes ichidan/godan · forme て · ~てください · ~ています",
    kanji: "月火水木金土曜",
    phaseStart: true,
  },
  {
    num: "S4",
    dates: "25–31 juil.",
    grammar: "Passé/négatif poli et familier · connecteur て (et, puis) · révision S1–S4",
    kanji: "年今何時分半週午",
  },
  {
    num: "S5",
    dates: "01–07 août",
    grammar: "Adjectifs い complets (passé/négatif) · adjectifs な complets · ~より / ~の方が",
    kanji: "山川田本国語学校",
    phaseStart: true,
  },
  {
    num: "S6",
    dates: "08–14 août",
    grammar: "Décrire personnes/lieux · ~が欲しい / ~をください · révision vocabulaire voyage",
    kanji: "先生私友男女子名",
  },
  {
    num: "S7",
    dates: "15–21 août",
    grammar: "Forme potentielle · ~たい (souhaits) · ~なければならない (obligation)",
    kanji: "大小多少高安新古",
    phaseStart: true,
  },
  {
    num: "S8",
    dates: "22–28 août",
    grammar: "~てはいけない (interdiction) · ~てもいいですか (permission) · révision phase 4",
    kanji: "長短上下中外前後",
  },
  {
    num: "S9",
    dates: "29 août–04 sept.",
    grammar: "Restaurant / commande · transport / directions · compteurs ~つ ~人 ~枚 ~回",
    kanji: "左右内東西南北天",
    phaseStart: true,
  },
  {
    num: "S10",
    dates: "05–11 sept.",
    grammar:
      "Achats / marché · contractions familières (じゃ, ~って, ~んです) · keigo de reconnaissance en magasin",
    kanji: "気雨雪色白黒赤青",
  },
  {
    num: "S11",
    dates: "12–18 sept.",
    grammar: "Simulations : aéroport, hôtel, restaurant · révision ciblée des points faibles",
    kanji: "体手足目口耳車駅",
    phaseStart: true,
  },
  {
    num: "S12",
    dates: "19–24 sept.",
    grammar: "Sprint phrases de survie · auto-présentation finale · fiche récap imprimable",
    kanji: "道店家会話食飲買",
  },
];

const RITUAL = [
  {
    tag: "Vocabulaire",
    text: "Duolingo (routine déjà en place) + jpdb chaque jour — c'est la matière première que les leçons transforment en phrases.",
  },
  {
    tag: "Grammaire",
    text: "Reprendre 5 minutes les exemples audio de la dernière leçon (bouton d'écoute) jusqu'à pouvoir les redire sans relire.",
  },
  {
    tag: "Écoute",
    text: "5 à 10 minutes de shadowing sur la vidéo recommandée de la semaine (répéter à voix haute juste après le locuteur).",
  },
  {
    tag: "Kanji",
    text: "Revoir les 2 kanji du jour avec leur lecture — jpdb les recroisera naturellement dans son SRS.",
  },
];

const VIDEOS = [
  {
    chan: "Cure Dolly — «Japanese from Scratch»",
    why: "Explique la grammaire japonaise avec sa vraie logique interne plutôt que par calque du français/anglais — utile pour la phase particules et verbes.",
    search: "chercher : cure dolly wa ga particle / cure dolly te form",
  },
  {
    chan: "Japanese Ammo with Misa",
    why: "Locutrice native, explications posées, très bon pour la conjugaison des verbes et adjectifs avec de vrais exemples.",
    search: "chercher : japanese ammo with misa te form / i-adjectives",
  },
  {
    chan: "Comprehensible Japanese (Yuki)",
    why: "Vidéos parlées en japonais simple avec support visuel — excellent pour l'écoute pure une fois les bases de S1–S4 posées.",
    search: "chercher : comprehensible japanese beginner story",
  },
  {
    chan: "JapanesePod101",
    why: "Dialogues courts et situations concrètes (restaurant, transport, hôtel) — idéal pour la phase «langage du voyage».",
    search: "chercher : japanesepod101 restaurant phrases / survival phrases",
  },
];

const LESSONS = [
  {
    week: 1,
    items: [
      {
        href: "/lecons/semaine-1/lecon-1",
        title: "Leçon 1 — Grande révision des bases",
        meta: "kana, particules, これ/それ/あれ, あります/います, nombres · kanji 一二",
      },
      {
        href: "/lecons/semaine-1/lecon-2",
        title: "Leçon 2 — 終助詞 ね・よ・わ・かな",
        meta: "particules de fin de phrase · kanji 三四",
      },
      {
        href: "/lecons/semaine-1/lecon-3",
        title: "Leçon 3 — どう・そう : réagir en japonais",
        meta: "そうですか / そうですね / なるほど · kanji 五六",
      },
      {
        href: "/lecons/semaine-1/lecon-4",
        title: "Leçon 4 — あげる・くれる・もらう",
        meta: "donner et recevoir · kanji 七八",
      },
    ],
  },
  {
    week: 2,
    items: [
      {
        href: "/lecons/semaine-2/lecon-1",
        title: "Leçon 1 — い形容詞入門",
        meta: "adjectifs い · kanji 九十",
      },
      {
        href: "/lecons/semaine-2/lecon-2",
        title: "Leçon 2 — な形容詞入門",
        meta: "adjectifs な · kanji 百千",
      },
      {
        href: "/lecons/semaine-2/lecon-3",
        title: "Leçon 3 — 自己紹介",
        meta: "se présenter · kanji 万円",
      },
      {
        href: "/lecons/semaine-2/lecon-4",
        title: "Leçon 4 — Compter et réviser",
        meta: "compteurs つ・人 · kanji 人日",
      },
    ],
  },
  {
    week: 3,
    items: [
      {
        href: "/lecons/semaine-3/lecon-1",
        title: "Leçon 1 — Les groupes de verbes",
        meta: "ichidan/godan · kanji 月火",
      },
      {
        href: "/lecons/semaine-3/lecon-2",
        title: "Leçon 2 — La forme て",
        meta: "て形 (avec l'exception 行って) · kanji 水木",
      },
      {
        href: "/lecons/semaine-3/lecon-3",
        title: "Leçon 3 — ～てください と ～ています",
        meta: "demande polie, action en cours · kanji 金土",
      },
      {
        href: "/lecons/semaine-3/lecon-4",
        title: "Leçon 4 — 曜日の復習と会話",
        meta: "révision + dialogue · kanji 曜",
      },
    ],
  },
  {
    week: 4,
    items: [
      {
        href: "/lecons/semaine-4/lecon-1",
        title: "Leçon 1 — 丁寧な過去形",
        meta: "~ました/~ませんでした · kanji 年今",
      },
      {
        href: "/lecons/semaine-4/lecon-2",
        title: "Leçon 2 — くだけた過去形",
        meta: "~た/~なかった, registre poli vs familier · kanji 何時",
      },
      {
        href: "/lecons/semaine-4/lecon-3",
        title: "Leçon 3 — て形でつなぐ",
        meta: "enchaîner des actions · kanji 分半",
      },
      {
        href: "/lecons/semaine-4/lecon-4",
        title: "Leçon 4 — 総復習",
        meta: "grande révision S1-4 · kanji 週午",
      },
    ],
  },
  {
    week: 5,
    items: [
      {
        href: "/lecons/semaine-5/lecon-1",
        title: "Leçon 1 — い形容詞の全活用",
        meta: "présent/passé, affirmatif/négatif · kanji 山川",
      },
      {
        href: "/lecons/semaine-5/lecon-2",
        title: "Leçon 2 — な形容詞の全活用",
        meta: "présent/passé, affirmatif/négatif · kanji 田本",
      },
      {
        href: "/lecons/semaine-5/lecon-3",
        title: "Leçon 3 — 比較する",
        meta: "より・のほうが・いちばん · kanji 国語",
      },
      {
        href: "/lecons/semaine-5/lecon-4",
        title: "Leçon 4 — 場所を説明する",
        meta: "révision + description · kanji 学校",
      },
    ],
  },
  {
    week: 6,
    items: [
      {
        href: "/lecons/semaine-6/lecon-1",
        title: "Leçon 1 — Décrire une personne : くて・で",
        meta: "relier deux qualités · kanji 先生",
      },
      {
        href: "/lecons/semaine-6/lecon-2",
        title: "Leçon 2 — 欲しい と ください",
        meta: "vouloir / demander · kanji 私友",
      },
      {
        href: "/lecons/semaine-6/lecon-3",
        title: "Leçon 3 — Décrire un lieu : vocabulaire de voyage",
        meta: "おおい vs おおきい · kanji 男女",
      },
      {
        href: "/lecons/semaine-6/lecon-4",
        title: "Leçon 4 — Conversation en boutique + révision",
        meta: "dialogue shopping · kanji 子名",
      },
    ],
  },
  {
    week: 7,
    items: [
      {
        href: "/lecons/semaine-7/lecon-1",
        title: "Leçon 1 — 可能形",
        meta: "pouvoir faire (+ ら抜き言葉) · kanji 大小",
      },
      {
        href: "/lecons/semaine-7/lecon-2",
        title: "Leçon 2 — ～たい",
        meta: "vouloir faire · kanji 多少",
      },
      {
        href: "/lecons/semaine-7/lecon-3",
        title: "Leçon 3 — ～なければならない (révision)",
        meta: "obligation (+ ~なきゃ) · kanji 高安",
      },
      {
        href: "/lecons/semaine-7/lecon-4",
        title: "Leçon 4 — Parler de ses projets de voyage",
        meta: "révision + dialogue · kanji 新古",
      },
    ],
  },
  {
    week: 8,
    items: [
      {
        href: "/lecons/semaine-8/lecon-1",
        title: "Leçon 1 — ~てはいけない (révision)",
        meta: "interdiction (+ ~ちゃだめ) · kanji 長短",
      },
      {
        href: "/lecons/semaine-8/lecon-2",
        title: "Leçon 2 — ~てもいいですか",
        meta: "demander la permission · kanji 上下",
      },
      {
        href: "/lecons/semaine-8/lecon-3",
        title: "Leçon 3 — 美術館・お寺のルール",
        meta: "mise en situation combinée · kanji 中外",
      },
      {
        href: "/lecons/semaine-8/lecon-4",
        title: "Leçon 4 — 総復習",
        meta: "grande révision S5-8 · kanji 前後",
      },
    ],
  },
  {
    week: 9,
    items: [
      {
        href: "/lecons/semaine-9/lecon-1",
        title: "Leçon 1 — Commander au restaurant",
        meta: "~にします · kanji 左右",
      },
      {
        href: "/lecons/semaine-9/lecon-2",
        title: "Leçon 2 — Demander son chemin",
        meta: "directions, transport · kanji 東内",
      },
      {
        href: "/lecons/semaine-9/lecon-3",
        title: "Leçon 3 — 数える : つ・人・枚・回",
        meta: "compteurs approfondis · kanji 西南",
      },
      {
        href: "/lecons/semaine-9/lecon-4",
        title: "Leçon 4 — Restaurant : jeu de rôle et révision",
        meta: "dialogue complet · kanji 北天",
      },
    ],
  },
  {
    week: 10,
    items: [
      {
        href: "/lecons/semaine-10/lecon-1",
        title: "Leçon 1 — Achats et négociation de prix",
        meta: "marchander poliment · kanji 気雨",
      },
      {
        href: "/lecons/semaine-10/lecon-2",
        title: "Leçon 2 — Le langage parlé : les raccourcis à l'oral",
        meta: "って・とく・んです・ら抜き・じゃ · kanji 雪色",
      },
      {
        href: "/lecons/semaine-10/lecon-3",
        title: "Leçon 3 — Écouter le keigo au magasin",
        meta: "reconnaissance seulement · kanji 白黒",
      },
      {
        href: "/lecons/semaine-10/lecon-4",
        title: "Leçon 4 — Jeu de rôle konbini/marché et révision",
        meta: "dialogue complet · kanji 赤青",
      },
    ],
  },
  {
    week: 11,
    items: [
      {
        href: "/lecons/semaine-11/lecon-1",
        title: "Leçon 1 — Aéroport et contrôle des passeports",
        meta: "simulation · kanji 体手",
      },
      {
        href: "/lecons/semaine-11/lecon-2",
        title: "Leçon 2 — L'arrivée à l'hôtel",
        meta: "simulation check-in · kanji 足目",
      },
      {
        href: "/lecons/semaine-11/lecon-3",
        title: "Leçon 3 — Au restaurant : allergie et addition",
        meta: "simulation complète · kanji 口耳",
      },
      {
        href: "/lecons/semaine-11/lecon-4",
        title: "Leçon 4 — Revoir ses points faibles",
        meta: "bilan personnalisé · kanji 車駅",
      },
    ],
  },
  {
    week: 12,
    items: [
      {
        href: "/lecons/semaine-12/lecon-1",
        title: "Leçon 1 — 困ったときの一言",
        meta: "phrases de survie · kanji 道店",
      },
      {
        href: "/lecons/semaine-12/lecon-2",
        title: "Leçon 2 — 気持ちを伝える一言",
        meta: "petite conversation, politesse · kanji 家会",
      },
      {
        href: "/lecons/semaine-12/lecon-3",
        title: "Leçon 3 — 最終自己紹介",
        meta: "présentation finale complète · kanji 話食",
      },
      {
        href: "/lecons/semaine-12/lecon-4",
        title: "Leçon 4 — 旅の前の最終チェック",
        meta: "fiche récap + clôture du programme · kanji 飲買",
      },
    ],
  },
];

const KANJI_WEEKS = WEEKS.map((w) => w.kanji);

export default function Home() {
  return (
    <div className="page-wide">
      <header className="lesson-head" style={{ paddingTop: 0 }}>
        <div className="eyebrow">航海図 — こうかいず（旅の計画表）</div>
        <h1 className="title">Programme de japonais jusqu&apos;au départ</h1>
        <p className="lede" style={{ marginBottom: 0 }}>
          12 semaines, 4 leçons par semaine, pour tenir une conversation
          simple à Tokyo — et poser les fondations d&apos;un apprentissage qui
          continue après le vol retour.
        </p>
        <CountdownBadge />
      </header>

      <h2 className="section-title">
        Les six étapes <span className="jp">六つの段階</span>
      </h2>
      <p className="lede">
        Chaque étape dure deux semaines et empile une couche de grammaire sur
        la précédente. Duolingo et jpdb tournent tous les jours en fond — ce
        programme leur donne la structure pour transformer le vocabulaire
        appris en phrases.
      </p>

      <div className="phases">
        {PHASES.map((phase) => (
          <div className="phase" key={phase.weeks}>
            <div className="weeks">{phase.weeks}</div>
            <div className="jp-name">{phase.jp}</div>
            <div className="fr-name">{phase.fr}</div>
            <div className="focus">{phase.focus}</div>
          </div>
        ))}
      </div>

      <h2 className="section-title">
        Semaine par semaine <span className="jp">週間表</span>
      </h2>
      <p className="lede">
        Les dates s&apos;alignent sur ton calendrier réel. La leçon 1 (dans
        l&apos;index ci-dessous) inaugure la semaine 1 — les suivantes seront
        construites au fil de ta progression pour rester ajustées à ce que tu
        maîtrises vraiment.
      </p>

      <div className="table-scroll">
        <table className="weeks-table">
          <thead>
            <tr>
              <th>Sem.</th>
              <th>Dates</th>
              <th>Grammaire &amp; structures</th>
              <th>Kanji de la semaine</th>
            </tr>
          </thead>
          <tbody>
            {WEEKS.map((w) => (
              <tr key={w.num} className={w.phaseStart ? "phase-start" : undefined}>
                <td className="wk-num">{w.num}</td>
                <td className="wk-dates">{w.dates}</td>
                <td>{w.grammar}</td>
                <td className="kanji-cell">{w.kanji.split("").join(" ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="section-title">
        Suivi des kanji <span className="jp">漢字帳</span>
      </h2>
      <p className="lede">
        Environ 96 kanji N5 parmi les plus utiles au quotidien, répartis 2 par
        leçon (8 par semaine). Les cases se remplissent au fil des semaines —
        jpdb et Duolingo t&apos;en montreront sûrement d&apos;autres en
        parallèle, tant mieux.
      </p>
      <KanjiTracker weeks={KANJI_WEEKS} />

      <h2 className="section-title">
        Les leçons <span className="jp">授業一覧</span>
      </h2>
      <p className="lede">
        Chaque leçon est une page interactive autonome : explications
        courtes, exemples audio, exercices à correction immédiate, et un
        aparté sur l&apos;usage courant.
      </p>
      <div className="lessons-index">
        {LESSONS.map((week) => (
          <div key={week.week}>
            <div
              className="wk-num"
              style={{ margin: "18px 0 8px", fontSize: 13 }}
            >
              Semaine {week.week}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {week.items.map((lesson) => (
                <Link href={lesson.href} className="lesson-link" key={lesson.href}>
                  <span>
                    <span className="l-title">{lesson.title}</span>
                    <br />
                    <span className="l-meta">{lesson.meta}</span>
                  </span>
                  <span className="l-status">disponible</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title">
        Rituel quotidien <span className="jp">毎日の習慣</span>
      </h2>
      <p className="lede">
        Entre deux leçons (environ 3 jours d&apos;écart), 15 minutes par jour
        suffisent pour que la grammaire &laquo;prenne&raquo;.
      </p>
      <ul className="ritual-list">
        {RITUAL.map((r) => (
          <li key={r.tag}>
            <span className="tag">{r.tag}</span>
            <span>{r.text}</span>
          </li>
        ))}
      </ul>

      <h2 className="section-title">
        Ressources vidéo compagnes <span className="jp">動画資料</span>
      </h2>
      <p className="lede">
        Des chaînes connues pour l&apos;apprentissage du japonais, à utiliser
        en écoute avant ou après chaque leçon. Cherche-les directement sur
        YouTube — mieux un nom de chaîne qu&apos;un lien invérifiable.
      </p>
      <div className="video-list">
        {VIDEOS.map((v) => (
          <div className="v" key={v.chan}>
            <div className="chan">{v.chan}</div>
            <div className="why">{v.why}</div>
            <div className="search">{v.search}</div>
          </div>
        ))}
      </div>

      <div className="callout seal">
        <strong>Format des leçons.</strong> Explications courtes, exemples en
        japonais avec bouton d&apos;écoute (voix de synthèse du navigateur),
        exercices corrigés ○ ✕ à l&apos;encre rouge — comme un enseignant
        japonais corrige une copie — et un aparté sur la façon dont on
        raccourcit ces tournures à l&apos;oral. Pas de romaji : les lectures
        de kanji passent par des furigana, comme dans un vrai manuel.
      </div>

      <h2 className="section-title">
        Et maintenant <span className="jp">次へ</span>
      </h2>
      <p className="lede">
        Les leçons suivantes seront construites une à la fois, juste avant
        que tu en aies besoin : ça permet d&apos;ajuster le rythme et le
        contenu à ce qui a vraiment été retenu, plutôt que de figer 48 leçons
        à l&apos;avance sur des hypothèses.
      </p>

      <footer className="note">
        Programme construit le 4 juillet 2026 · ajustable à tout moment selon
        ta progression réelle avec Duolingo et jpdb.
      </footer>
    </div>
  );
}
