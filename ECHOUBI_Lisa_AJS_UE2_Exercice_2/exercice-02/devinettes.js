"use strict";

/* 
 NOM: ECHOUBI 
 PRENOM: Lisa 
 CLASSE: P2A 
 TITRE DE L'EXERCICE :  UE2 - Unité 2 - Exercice 2
 */
//
console.error("EXERCICE 2");

const formulaire = document.getElementById("monForm");
const propositions = document.getElementById("idProposition");
const idBoutton = document.getElementById("idBoutton");
const idNouvPartie = document.getElementById("idNouvPartie");
const message = document.getElementById("message");

let nbAleatoire = Math.floor(Math.random() * 100) + 1;
let reste = 10;
let trouver = false;

formulaire.addEventListener("click", function (event) {
    event.preventDefault();

    if (event.target.id === "idNouvPartie") {
        nbAleatoire = Math.floor(Math.random() * 100) + 1;
        reste = 10;
        trouver = false;

        propositions.value = "";
        message.textContent = "Mon message";
        message.className = "alert alert-secondary";

        return;
    }

    if (event.target.id === "idBoutton") {


        if (trouver || reste === 0) {
            return;
        }

        let proposition = Number(propositions.value);

        if (
            propositions.value.trim() === "" || proposition < 1 || proposition > 100 || !Number.isInteger(proposition)) {
            message.textContent = "Entrez une valeur valable entre 1 et 100.";
            message.className = "alert alert-danger";
            return;
        }

        if (proposition === nbAleatoire) {
            trouver = true;
            message.textContent = "Bien joué, c'était le résultat !";
            message.className = "alert alert-success";
            return;
        }

        reste--;

        if (proposition < nbAleatoire) {
            message.textContent = "Le nombre à trouver est plus grand que " + proposition + ". Il vous reste " + reste + " essais.";
        } else {
            message.textContent = "Le nombre à trouver est plus petit que " + proposition + ". Il vous reste " + reste + " essais.";
        }

        message.className = "alert alert-danger";

        if (reste === 0) {
            message.textContent = "Dommage, vous avez épuisé vos essais. Le nombre était " + nbAleatoire + ".";
        }
    }
});

// jeuDevinettes();

console.log(nbAleatoire);