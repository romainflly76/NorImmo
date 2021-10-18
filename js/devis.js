// declaration des variables pour la fonction afficher()
var surfaceInput;
var roomNbInput;
var materiauxInput;
// declaration des variables pour la fonction calculDevis() 
var totalDevis;

function afficher() {
    // recuperation de la valeur entré par l'utilisateur pour la surface.
    surfaceInput = document.getElementById("surface").value;
    // affichage de la valeur entré par l'utilisateur dans la section recapitulatif.
    document.getElementById("surfaceChoice").innerText = "- Une surface de : " + surfaceInput + "m2";

    // recuperation de la valeur entré par l'utilisateur pour le nombre de chambre.
    roomNbInput = document.getElementById("roomsnumber").value;
    // affichage de la valeur entré par l'utilisateur dans la section recapitulative.
    document.getElementById("roomNbChoice").innerText = "- Un nombre de chambres de : " + roomNbInput;

    // recuperation de la valeur du dropdown pour le type de materiaux.
    materiauxInput = document.getElementById("materiaux").value;
    // affichage du type de materiaux dans la section recapitulative selon la "value" obtenue. 
    if (materiauxInput == 1) {
        document.getElementById("materiauxChoice").innerText = "- Un materiaux en : Bois";
    } else if (materiauxInput == 2) {
        document.getElementById("materiauxChoice").innerText = "- Un materiaux en : Parpaings";
    } else if (materiauxInput == 3) {
        document.getElementById("materiauxChoice").innerText = "- Un materiaux en : Briques";
    }
}
 

function calculDevis() {
    // calcul du sousTotal ne tenant pas compte du type de materiaux.
    let sousTotal = ((1000* surfaceInput)+(10000*roomNbInput));
    // calcul du total suivant le materiaux choisi
    if (materiauxInput == 1) {
        totalDevis = sousTotal + (sousTotal * 0.15);
    }
    else if (materiauxInput == 2) {
        totalDevis = sousTotal + (sousTotal * 0.20);
    }
    else if (materiauxInput == 3) {
        totalDevis = sousTotal + (sousTotal * 0.30);
    }
    // affichage du total dans la section du montant devis.
    document.getElementById("montantDevis").innerText = "montant calculé :\n" + totalDevis + "€";
    document.getElementById("contactfinal").innerText = "Pour un devis plus precis merci de nous contacté via le formulaire de contact";
    
}