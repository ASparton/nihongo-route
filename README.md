# 航海図 — nihongo-route

Site de leçons de japonais interactif : programme sur 12 semaines, exercices
corrigés à l'instant, audio de synthèse japonais, suivi des kanji. Next.js
(App Router), sans dépendance externe au runtime — déployable gratuitement
sur Vercel.

## Développer en local

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/page.tsx` — programme complet (roadmap, phases, suivi kanji, index des leçons)
- `src/app/lecons/semaine-X/lecon-Y/page.tsx` — une page par leçon
- `src/components/` — briques réutilisables (bouton audio, quiz, assembleur de phrase, dialogue, carte kanji...)
- `src/lib/speech.ts` — synthèse vocale japonaise via l'API `speechSynthesis` du navigateur (aucun appel réseau)

## Déployer sur Vercel

Aucune variable d'environnement, aucune base de données — c'est un site
100 % statique.

1. `npx vercel` depuis ce dossier (ou connecte le repo GitHub sur
   [vercel.com/new](https://vercel.com/new)).
2. Accepte les réglages par défaut (framework détecté : Next.js).
3. C'est déployé — le plan gratuit de Vercel suffit largement pour ce site.

## Ajouter une leçon

1. Crée `src/app/lecons/semaine-X/lecon-Y/page.tsx` en copiant la structure
   de `lecon-1`.
2. Réutilise les composants existants (`ExampleCard`, `Quiz`,
   `SentenceAssembler`, `Dialogue`, `KanjiCard`, `KatakanaWarmup`).
3. Ajoute une entrée dans le tableau `LESSONS` de `src/app/page.tsx`.
