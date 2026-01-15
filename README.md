==================================================
Tasks manager by -DAKS
==================================================

Application web full-stack développée avec React pour le frontend
et Node.js/ MongoDB / Express pour le backend.

---

## DESCRIPTION

Ce projet est un exemple de gestionnaires de tâches.

Il repose sur une architecture client-serveur moderne avec une
séparation claire entre le frontend et le backend.

---

## TECHNOLOGIES UTILISÉES

Frontend :

- React
- JavaScript 
- HTML5 / CSS3
- Axios

Backend :

- Node.js
- Express.js
- Base de données : MongoDB
- ORM / ODM : Mongoose

---

## STRUCTURE DU PROJET

Tasks/
|
|-- client/ frontend
| |-- node_modules/
| |-- public/
| |-- src/
| |-- package.json
|
|-- server/ backend
| |-- Database/
| |-- models/
| |-- node_modules/
| |-- routes/
| |-- package.json
|
|-- README.md

---

## INSTALLATION

Prérequis :

- Node.js ( v22.14.0 )
- npm 
- Une base de données MongoDB

Étapes :

1. Cloner le dépôt :
   git clone git@github.com:Daks38/Tasks.git
   cd Tasks

2. Installer les dépendances backend :
   cd backend
   npm install

3. Installer les dépendances frontend :
   cd ../frontend
   npm install

---

## LANCEMENT DU PROJET

Lancer le backend :
cd backend
npm run dev

Lancer le frontend :
cd frontend
npm run dev

L’application sera accessible à l’adresse :
http://localhost:3000

---

## VARIABLES D’ENVIRONNEMENT

Créer un fichier .env dans le dossier server :

PORT=3000


---

## API (EXEMPLE)

## Méthode | Endpoint | Description

GET | /tasks/ | Récupérer les tâches
GET | /tasks/{id} | Récupérer une tâche par id
POST | /tasks/ | Créer une tâches 
PUT | /tasks/{id} | Modifier une 
DELETE | /tasks/{id} | Supprimer une tâche

---

