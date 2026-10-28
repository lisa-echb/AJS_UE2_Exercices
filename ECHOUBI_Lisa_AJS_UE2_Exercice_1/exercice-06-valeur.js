"use strict";

/* 
 NOM: ECHOUBI 
 PRENOM: Lisa 
 CLASSE: P2A 
 TITRE DE L'EXERCICE : UE2 - Exercice 6
 */

console.error("EXERCICE 6");
console.warn("1. Ajoutez dans la page index.html un champ de saisie avec l'id #exempleInput, un bouton avec l'id #btnLire et un paragraphe avec l'id #afficheValeur.");
console.warn("2. Au clic sur le bouton #btnLire, lisez le contenu du champ #exempleInput.");
console.warn("3. Si le champ est vide, affichez 'Champ vide'; sinon affichez 'Vous avez saisi : …' dans la console et dansle paragraphe #afficheValeur");

const boutonLire = document.getElementById("btnLire");
const valeurTexte = document.getElementById("exempleInput");
const afficherValeur = document.getElementById("afficheValeur");

boutonLire.addEventListener("click", () => {
    const texte = valeurTexte.value.trim();
    if (texte === "") {
        console.log("Champ vide");
        afficherValeur.textContent = "Champ vide";
    } else {
        console.log("Vous avez saisi : " + valeurTexte.value)
        afficherValeur.textContent = "Vous avez saisi : " + valeurTexte.value;
    }
});