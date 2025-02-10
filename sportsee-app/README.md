# SportSee

Ce repo contient le code source pour l'application SportSee, un tableau de bord d'analyse sportive.  Cette application consomme une API pour récupérer les données des utilisateurs.

## 1. Informations générales

Ce projet peut être lancé avec ou sans Docker. Cette documentation présente les différentes méthodes pour lancer le projet facilement.

## 2. Projet (sans Docker)

### 2.1 Prérequis

-   [NodeJS (version 12.18)](https://nodejs.org/en/) ou supérieure (testé jusqu'à Node 20.0)
-   [Yarn](https://yarnpkg.com/)

Si vous travaillez avec plusieurs versions de NodeJS, nous vous recommandons d'installer [nvm](https://github.com/nvm-sh/nvm). Cet outil vous permettra de gérer facilement vos versions de NodeJS.

### 2.2 Lancement du projet

1.  Clonez le repository sur votre ordinateur.
2.  La commande `yarn` vous permettra d'installer les dépendances.
3.  La commande `yarn dev` vous permettra de lancer l'application en mode développement.

## 3. Projet (avec Docker)

### 3.1 Prérequis

-   [Docker Desktop](https://www.docker.com/products/docker-desktop)

### 3.2 Démarrage du projet

1.  La commande `docker image build --no-cache -t sportsee-app .` vous permettra de construire votre image.
2.  La commande `docker container run --name sportsee-app -p 5173:5173 -dt sportsee-app` vous permettra de créer votre container Docker et d'exécuter votre image sur le port 5173 (port par défaut pour Vite).
3.  La commande `docker container stop sportsee-app` vous permettra d'arrêter votre container.
4.  La commande `docker container rm sportsee-app` vous permettra de supprimer votre container.

### 3.3 VS Code et conteneurs distants

Si vous utilisez VS Code, vous pouvez facilement lancer votre projet dans un environnement Docker.

Vous aurez besoin de l'[extension Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack). Une fois cette extension installée, cliquez simplement sur le bouton `Reopen in Container`.

Une fois dans le conteneur, exécutez la commande `yarn dev`.

## 4. Dépendances

Ce projet utilise les dépendances suivantes:

*   **Framework/Librairies**:
    *   [React](https://react.dev/)
    *   [React-dom](https://react.dev/)
    *   [React-router-dom](https://reactrouter.com/en/main)
    *   [Recharts](https://recharts.org/en-US/)
    *   [Prop-types](https://www.npmjs.com/package/prop-types)
    *   [daisyUI](https://daisyui.com/)
*   **Outils de développement**:
    *   [Vite](https://vitejs.dev/)
    *   [ESLint](https://eslint.org/)
    *   [TailwindCss](https://tailwindcss.com/)
    *   [PostCss](https://postcss.org/)
    *   [Autoprefixer](https://github.com/postcss/autoprefixer)
    *   [vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr)
    *   [@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)

## 5. Scripts

Voici les scripts disponibles dans ce projet:

-   `yarn dev`: Lance l'application en mode développement.
-   `yarn build`: Construit l'application pour la production.
-   `yarn lint`: Effectue une analyse statique du code avec ESLint.
-   `yarn preview`: Lance une prévisualisation de l'application construite.

## 6. Endpoints de l'API

L'application SportSee utilise les endpoints suivants pour récupérer les données des utilisateurs :

*   `GET http://localhost:3000/user/:userId` - Récupère les informations d'un utilisateur. Cet endpoint inclut l'ID de l'utilisateur, ses informations (prénom, nom et âge), le score du jour (todayScore) et les données clés (calories, macronutriments, etc.).
*   `GET http://localhost:3000/user/:userId/activity` - Récupère l'activité d'un utilisateur jour par jour, avec les kilogrammes et les calories brûlées.
*   `GET http://localhost:3000/user/:userId/average-sessions` - Récupère les sessions moyennes d'un utilisateur par jour. La semaine commence le lundi.
*   `GET http://localhost:3000/user/:userId/performance` - Récupère les performances d'un utilisateur (énergie, endurance, etc.).

**Important :** Actuellement, seuls deux utilisateurs sont disponibles avec les IDs 12 et 18.

### 6.1 Exemples de requêtes

*   `GET http://localhost:3000/user/12/performance` - Récupère les performances de l'utilisateur avec l'ID 12.
*   `GET http://localhost:3000/user/18` - Récupère les informations principales de l'utilisateur 18.

## 7. Remarques importantes

*   Assurez-vous d'avoir les prérequis installés avant de lancer le projet.
*   Les configurations Docker peuvent varier en fonction de votre environnement.
*   Consultez la documentation des différentes librairies et outils pour plus d'informations.
*   N'oubliez pas de configurer les variables d'environnement nécessaires (si votre application en utilise).

