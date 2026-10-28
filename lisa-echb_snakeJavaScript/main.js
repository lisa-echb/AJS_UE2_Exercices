'use strict';

const canvas = document.getElementById("jeu");
const graph = canvas.getContext("2d");

console.log(canvas.width);
console.log(canvas.height);

// Je veux dessiner un rectangle
graph.fillStyle = "#3887ff";
graph.fillRect(10, 50, 70, 70);


// Couleurs et vitesse
const fond = "#b8f2a1";
const couleurSerpent = "#000000";
const couleurPomme = "#ff0000";
const taille = 20;
const vitesse = 250;

// Serpent
let serpent = [];

let partie1 = {};
partie1.x = 100;
partie1.y = 100;

let partie2 = {};
partie2.x = 80;
partie2.y = 100;

let partie3 = {};
partie3.x = 60;
partie3.y = 100;

serpent.push(partie1);
serpent.push(partie2);
serpent.push(partie3);

let direction = "ArrowRight";
let prochaineDirection = "ArrowRight";
let score = 0;
let perdu = false;

// Créer une pomme
function nouvellePomme() {
    let pomme;
    let surSerpent = true;

    while (surSerpent) {
        pomme = {};

        pomme.x = Math.floor(Math.random() * (canvas.width / taille)) * taille;
        pomme.y = Math.floor(Math.random() * (canvas.height / taille)) * taille;

        surSerpent = false;

        for (let i = 0; i < serpent.length; i++) {
            if (
                serpent[i].x === pomme.x &&
                serpent[i].y === pomme.y
            ) {
                surSerpent = true;
            }
        }
    }

    return pomme;
}

let pomme = nouvellePomme();

// Dessiner le jeu
function dessiner() {
    graph.fillStyle = fond;
    graph.fillRect(0, 0, canvas.width, canvas.height);

    // Pomme rouge
    graph.fillStyle = couleurPomme;
    graph.fillRect(pomme.x, pomme.y, taille, taille);

    // Serpent noir
    graph.fillStyle = couleurSerpent;
    for (let partie of serpent) {
        graph.fillRect(partie.x, partie.y, taille, taille);
    }

    // Score
    console.log("Score : " + score, 10, 25);

    if (perdu) {
        console.warn("Partie terminée !", 30, 70);
    }
}

// Clavier
document.addEventListener("keydown", function(event) {
    const touches = [
        "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"
    ];

    if (touches.includes(event.key)) {
        event.preventDefault();
    }

    if (event.key === "ArrowUp" && direction !== "ArrowDown") {
        prochaineDirection = "ArrowUp";
    }
    if (event.key === "ArrowDown" && direction !== "ArrowUp") {
        prochaineDirection = "ArrowDown";
    }
    if (event.key === "ArrowLeft" && direction !== "ArrowRight") {
        prochaineDirection = "ArrowLeft";
    }
    if (event.key === "ArrowRight" && direction !== "ArrowLeft") {
        prochaineDirection = "ArrowRight";
    }
});

// Déplacer le serpent
function boucle() {
    if (perdu) {
        return;
    }

    direction = prochaineDirection;

    const tete = {};
    tete.x = serpent[0].x;
    tete.y = serpent[0].y;

    if (direction === "ArrowRight") tete.x += taille;
    if (direction === "ArrowLeft") tete.x -= taille;
    if (direction === "ArrowUp") tete.y -= taille;
    if (direction === "ArrowDown") tete.y += taille;

    // Collision avec les bords
    if (
        tete.x < 0 ||
        tete.y < 0 ||
        tete.x + taille > canvas.width ||
        tete.y + taille > canvas.height
    ) {
        perdu = true;
        dessiner();
        return;
    }

    // Vérifier si le serpent mange la pomme
    const mangePomme = tete.x === pomme.x && tete.y === pomme.y;

    serpent.unshift(tete);

    if (mangePomme) {
        score++;
        pomme = nouvellePomme();
    } else {
        serpent.pop();
    }

    dessiner();
}

dessiner();
setInterval(boucle, vitesse);