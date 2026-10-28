"use strict";

/* 
 NOM: ECHOUBI 
 PRENOM: Lisa 
 CLASSE: P2A 
 TITRE DE L'EXERCICE : UE2 - Exercice 3 
 */

console.error("EXERCICE 3");
console.warn("1. Ajoutez dans la page index.html un champ de saisie avec l'id #champSaisie et un paragraphe avec l'id #afficheSaisie");
console.warn("2. À chaque frappe dans le champ #champSaisie , affichez la valeur actuelle dans la console.");
console.warn("3. Affichez aussi cette valeur dans le paragraphe #afficheSaisie");

let champSaisie = document.getElementById("champSaisie");

let afficherChamp = document.getElementById("afficheSaisie");

champSaisie.addEventListener("input", (event) => {
    let valeur_champ = event.target.value
    console.log("En direct : " + valeur_champ);

    afficherChamp.textContent = valeur_champ;
})

