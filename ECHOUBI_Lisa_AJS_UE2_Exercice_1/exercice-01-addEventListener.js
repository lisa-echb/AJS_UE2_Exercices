"use strict";

/* 
 NOM: ECHOUBI 
 PRENOM: Lisa 
 CLASSE: P2A 
 TITRE DE L'EXERCICE : UE2 - Exercice 1 
 */

console.error("EXERCICE 1");
console.warn("1.  Ajouter un bouton dans la page index.html avec l'id #btnSaluer");
console.warn("2. Sélectionnez le bouton #btnSaluer avec getElementById");
const monBouton = document.getElementById("btnSaluer");

console.warn("3.  Mettez en place un écouteur 'click' avec addEventListener");
console.warn("4. Et affichez en console le texte 'Bonjour!'");
monBouton.addEventListener("click", (event) => {
    console.log("Bonjour!");
});



