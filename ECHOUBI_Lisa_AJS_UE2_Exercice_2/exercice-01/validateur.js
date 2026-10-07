"use strict";

/* 
 NOM: ECHOUBI 
 PRENOM: Lisa 
 CLASSE: P2A 
 TITRE DE L'EXERCICE : UE2 - Unité 2 - Exercice 1 
 */

console.error("EXERCICE 1");
console.error("Le mot de passe doit contenir : au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial (!@#$%^&* ).");

console.warn("1. Proposez un formulaire pour saisir le mot de passe et le valider.")
console.warn("2. Pour chaque règle non respectée, affichez un message d'erreur distinct.")
console.warn("3. Si toutes les règles sont respectées, affichez un message de succès.")

const monForm = document.getElementById("monForm");
const motDePasseEntree = document.getElementById("votreMDP");
const envoie = document.getElementById("unBouton");
const message = document.getElementById("message");

monForm.addEventListener("click", function (event) {
    let passWordValide = true;
    const motDePasse = motDePasseEntree.value;

    while (passWordValide) {
        // Vérification de la taille du mot de passe
        if (motDePasse.length <= 8) {
            message.textContent = "Le mot de passe doit contenir au moin 8 caractères.";
            message.className = "alert alert-danger";
            passWordValide = false;
        } else {
            // Comptage de majuscule
            let compteurMaj = 0;

            for (const maj of motDePasse) {
                if (maj >= 'A' && maj <= 'Z') {
                    compteurMaj++;
                }
            }

            if (compteurMaj < 1) {
                message.textContent = "Le mot de passe doit contenir au moin 1 majuscule.";
                message.className = "alert alert-danger";
                passWordValide = false;
            } else {
                // Comptage de minuscule
                let compteurMin = 0;

                for (const min of motDePasse) {
                    if (min >= 'a' && min <= 'z') {
                        compteurMin++;
                    }
                }

                if (compteurMin < 1) {

                    message.textContent = "Le mot de passe doit contenir au moin 1 minuscule.";
                    message.className = "alert alert-danger";
                    passWordValide = false;
                } else {
                    // Comptage de caractères spéciaux
                    const speciaux = "!@#$ %^&*";
                    let ilContient = false;

                    for (const s of speciaux) {
                        if (motDePasse.includes(s)) {
                            ilContient = true;
                        }
                    }

                    if (ilContient == false) {
                        message.textContent = "Le mot de passe doit contenir au moin 1 caractère spécial.";
                        message.className = "alert alert-danger";
                        passWordValide = false;
                    }
                    else {
                        // retour
                        message.textContent = "Mot de passe validé";
                        return message.className = "alert alert-success";
                        // return console.log(passWordValide);
                    }
                }
            }
        }
    }
})

