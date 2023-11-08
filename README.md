# Tournoi Asynconf 2023

Contexte :
J'ai créé cette application lors du tournois [Asynconf 2023](https://asynconf.fr/). Nous avions 24h pour faire une application répondant aux critères.

Ressources :
- [Sujet](sujet_tournoi.pdf)
- [Règlement](reglement_tournoi.pdf)

Résultat :
8e/80 (UI simple et intuitive, pourrait etre + detaillee. PS: le forcing de PORT pour le front est infonctionnel et j'ai du le patcher. Continue comme ca ! la doc et l'API te donne un bonus ainsi que la page 404)

## Prerequisites
- nodejs
- npm

## Installation
A faire dans les deux projets (backend et frontend)
```bash
npm install
```

## Usage
A faire dans les deux projets (backend et frontend)
```bash
npm start
```

## Tests
A faire dans le projet backend
```bash
npm run test
```

## Documentation
Les endpoints sont tous documentés, cette documentation est accessible lorsque le backend est lancé à l'aide de l'url suivante : http://localhost:3000/api-docs

## Choix d'architecture
J'ai développé mon application en faisant en sorte que les questions/réponses soit modificables sans avoir a développer de nouveaux modules ou à déployer quoi que ce soit. De ce fait, vous pouvez ajouter/supprimer des options, des questions... en requetant la base de données.
