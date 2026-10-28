"use strict";

/* 
 NOM: ECHOUBI 
 PRENOM: Lisa 
 CLASSE: P2A 
 TITRE DE L'EXERCICE : UE2 - Exercice 2
 */

console.error("EXERCICE 2");
console.warn("1.  Ajoutez dans la page index.html un bouton avec l'id #btnCompteur et un paragraphe avec l'id #afficheCompteur");
console.warn("2.  Déclarez une variable compteur initialisée à 0");
let compteur = 0;

console.warn("3. À chaque clic sur le bouton #btnCompteur, incrémentez compteur");
console.warn("4. Affichez la valeur du compteur dans la console et dans le paragraphe #afficheCompteur");
const boutonCompteur = document.getElementById("btnCompteur");
let afficher = document.getElementById("afficheCompteur");

boutonCompteur.addEventListener("click", (event) => {
    compteur += 1;
    console.log("Compteur : " + compteur);

    afficher.textContent = compteur;

});

