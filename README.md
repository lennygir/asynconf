# Asynconf contest

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