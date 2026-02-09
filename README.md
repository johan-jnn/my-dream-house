# My Dream House

A small website that has a really cool repository with very skilled developpers.

## Collaborateurs

- Enzo DI GIOVANNI
- Johan JANIN

## Stack

- [Vite](https://vite.dev/)
- [VueJS](https://vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Installation

```sh
# Replace bun with your favorite package manager
bun install
bun run dev --open
```

## Inspirations

- [Dribble inspiration](https://dribbble.com/shots/27011248-Housesky-Property-Landing-Page)

## Utilisation de Git Stash

### Objectif

Gérer un changement de contexte en cours de développement en utilisant `git stash`.

### Scénario

Pendant le développement de la feature "add-some-content-on-homepage", nous avons dû interrompre le travail pour traiter une autre issue sur la branche `feat/build-ci`.

### Commandes utilisées

#### 1. Sauvegarder les modifications en cours

```sh
git stash save 'wip: add some content on homepage'
```

> Met de côté les modifications non commitées avec un message descriptif. Le working directory redevient propre.

#### 2. Changer de branche pour traiter une autre issue

```sh
git checkout feat/build-ci
```

> On peut maintenant travailler sur une autre branche sans perdre nos modifications.

#### 3. Travailler sur l'autre issue

```sh
git add . && git commit -sm "#4 add some very important comment"
git push origin feat/build-ci
```

> Commit et push des modifications sur la branche secondaire.

#### 4. Revenir sur la branche initiale

```sh
git checkout feat/add-some-content-on-homepage
```

#### 5. Récupérer et supprimer le stash

```sh
git stash pop
```

> `pop` = `apply` + `drop`. Applique les modifications sauvegardées ET supprime le stash de la liste.

#### 6. Finaliser la fonctionnalité

```sh
git add . && git commit -sm "#9 add some content on homepage"
git push origin feat/add-some-content-on-homepage
```

### Commandes utiles

| Commande                   | Description                                        |
| -------------------------- | -------------------------------------------------- |
| `git stash`                | Sauvegarde les modifications (sans message)        |
| `git stash save 'message'` | Sauvegarde avec un message                         |
| `git stash list`           | Liste tous les stashs                              |
| `git stash apply`          | Applique le dernier stash (le garde dans la liste) |
| `git stash pop`            | Applique et supprime le dernier stash              |
| `git stash drop`           | Supprime le dernier stash sans l'appliquer         |

### Différence entre `apply` et `pop`

- **`git stash apply`** : Applique les modifications mais conserve le stash dans la liste (utile si on veut l'appliquer sur plusieurs branches)
- **`git stash pop`** : Applique les modifications ET supprime le stash de la liste (usage standard)

## Résolution de conflit

Durant la [pull request #30](https://github.com/johan-jnn/my-dream-house/pull/30), il y a eu un conflit dans le fichier [QuoteSlider.vue](./src/components/QuoteSlider.vue).

La PR nous a demandée de la résoudre avant de pouvoir merger vers `dev`.

La PR étant initié par Enzo, la résolution a été faite par Johan. Il a du récupérer le contenu de la branche de la PR.

```sh
git fetch
git switch style/adjust-font-size-on-quote

git merge origin/dev
```

Après avoir résolu les conflits, on pousse les changements sur la branche :

```sh
git add .
git commit -sm "fix: merge conflict on QuoteSlider.vue"
git push origin style/adjust-font-size-on-quote
```

Puis la PR a pu être merge sur `dev`
