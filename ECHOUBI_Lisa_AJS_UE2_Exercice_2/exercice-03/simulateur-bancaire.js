"use strict";

/* 
 NOM: ECHOUBI 
 PRENOM: Lisa 
 CLASSE: P2A 
 TITRE DE L'EXERCICE : UE1 - Exercice 3
 */

console.error("EXERCICE 3");
console.error("Saisissez une note par exercice de cette consigne (3 notes, barème suisse 1 à 6).");
console.error("Testez le script avec l'enseignant : il vous donne une note pour chaque exercice, vous la tapez dans la console, puis vous vérifiez la moyenne ensemble");

console.warn("1. Demandez la note de l'exercice 1, puis de l'exercice 2, puis de l'exercice 3.");
console.warn("2. Vérifiez que chaque saisie est un nombre entre 1 et 6 (demi-points acceptés, ex. 4.5 ). Sinon, affichez un message et redemandez.");
console.warn("3. Stockez les 3 notes dans un tableau.");
console.warn("4. Calculez la moyenne : somme des notes ÷ 3.");
// 1ère note
function entreeNotes(note1, note2, note3) {

    if (note1 > 6 || note1 < 1) {
        console.log("Note 1 invalide, mettez une note entre 1 et 6");
    } else {
        // 2ème note
        if (note2 > 6 || note2 < 1) {
            console.log("Note 2 invalide, mettez une note entre 1 et 6");
        } else {
            // 3ème note
            if (note3 > 6 || note3 < 1) {
                console.log("Note 3 invalide, mettez une note entre 1 et 6");
            } else {
                // Push les notes dans un tableau
                const tableauNote = [];
                tableauNote.push(note1, note2, note3);

                // Moyenne
                let somme = 0;
                for (const n of tableauNote) {
                    somme = somme + n;
                }

                let moyenneNotes = somme / 3;
                // Arrondi a .5 si nécessaire ou alors arrondi a la valeur plus petit
                moyenneNotes = Math.floor(moyenneNotes * 2) / 2;
                console.log("La moyenne des notes : " + moyenneNotes);

                if (moyenneNotes < 4) {
                    console.log("Insuffisant");
                } else if (moyenneNotes >= 4 && moyenneNotes <= 4.9) {
                    console.log("Suffisant");
                } else if (moyenneNotes >= 5 && moyenneNotes <= 5.4) {
                    console.log("Bien");
                } else {
                    console.log("Très bien");
                }
            }
        }
    }
}

let note1 = Math.floor(prompt());
let note2 = Math.floor(prompt());
let note3 = Math.floor(prompt());
console.warn("5. Affichez les 3 notes, la moyenne, la note la plus haute et la note la plus basse.");
console.log("Les notes que vous avez entré : " + note1, note2, note3)


console.warn("6. Affichez un message selon la moyenne : insuffisant (moins de 4), suffisant (4 à 4.9), bien (5 à 5.4), très bien (5.5 à 6).");
entreeNotes(note1, note2, note3);
// console.log("La plus petite note : " + );

