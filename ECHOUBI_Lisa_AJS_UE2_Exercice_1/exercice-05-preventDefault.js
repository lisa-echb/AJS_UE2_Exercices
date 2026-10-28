"use strict";

/* 
 NOM: ECHOUBI 
 PRENOM: Lisa 
 CLASSE: P2A 
 TITRE DE L'EXERCICE : UE2 - Exercice 5 
 */

console.error("EXERCICE 5");
console.warn("1. Ajoutez dans la page index.html un formulaire avec l'id #monForm (avec au moins un bouton d'envoi)et un paragraphe avec l'id #messageForm");
console.warn("2. Empêchez le rechargement de la page lors de l'envoi du formulaire.");
console.warn("3. Affichez 'Formulaire intercepté' dans la console et dans le paragraphe #messageForm.");

const monForm = document.getElementById("monForm");
let messageForm = document.getElementById("messageForm");

monForm.addEventListener("submit", (event) => {
    let message = "Formulaire intercepté";
    event.preventDefault();

    console.log(message);
    messageForm.textContent = message;
})