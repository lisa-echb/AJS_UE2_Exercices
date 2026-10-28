"use strict";

/* 
 NOM: ECHOUBI 
 PRENOM: Lisa 
 CLASSE: P2A 
 TITRE DE L'EXERCICE : UE2 - Exercice 4 
 */

console.error("EXERCICE 4");
console.warn("1.Ajoutez dans la page index.html deux boutons avec les ids #btnA et #btnB");
console.warn("2. Utilisezune même fonction nommée gererClic pour réagir au clic des deux boutons.");
console.warn("3. Dans gererClic, affichez le type d'événement et l'id de l'élément cliqué");

const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");

function gererClic(event) {
    console.log("Type : " + event.type);
    console.log("id : " + event.target.id);
}

btnA.addEventListener("click", gererClic);
btnB.addEventListener("click", gererClic);

console.warn("4. Vérifiez en cliquant sur chaque bouton que l'élément identifié change bien.");
