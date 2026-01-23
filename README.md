# My Dream House

A small website with a cool repo to show off our ci and collaboration skills

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
