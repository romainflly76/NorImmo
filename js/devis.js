var surfaceInput;
var roomNbInput;
var materiauxInput;
var totalDevis;

function afficher() {
    surfaceInput = document.getElementById("surface").value;
    document.getElementById("surfaceChoice").innerText = "- Une surface de : " + surfaceInput + "m2";
    
    roomNbInput = document.getElementById("roomsnumber").value;
    document.getElementById("roomNbChoice").innerText = "- Un nombre de chambres de : " + roomNbInput;

    materiauxInput = document.getElementById("materiaux").value;
    if (materiauxInput == 1) {
        document.getElementById("materiauxChoice").innerText = "- Un materiaux en : Bois";
    } else if (materiauxInput == 2) {
        document.getElementById("materiauxChoice").innerText = "- Un materiaux en : Parpaings";
    } else if (materiauxInput == 3) {
        document.getElementById("materiauxChoice").innerText = "- Un materiaux en : Briques";
    }
}
 

function calculDevis() {
    let sousTotal = ((1000* surfaceInput)+(10000*roomNbInput));
    if (materiauxInput == 1) {
        totalDevis = sousTotal + (sousTotal * 0.15);
    }
    else if (materiauxInput == 2) {
        totalDevis = sousTotal + (sousTotal * 0.20);
    }
    else if (materiauxInput == 3) {
        totalDevis = sousTotal + (sousTotal * 0.30);
    }
    document.getElementById("montantDevis").innerText = "montant calculé :\n" + totalDevis + "€";
}