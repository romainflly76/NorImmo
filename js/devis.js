// function verif_champ() 
// { 
// var mots_cles = document.getElementsByTagName("surface").value;
// 	if (mots_cles == "") 
// 	{ 
// 	alert("Un champ n'est pas remplie"); 
// 	return false; 
// 	} 
// 	return true; 
// } 

function afficher() {
    var surfaceInput = document.getElementById("surface").value;
    document.getElementById("surfaceChoice").innerText = "- Une surface de : " + surfaceInput + " m2";

    var roomNbInput = document.getElementById("roomsnumber").value;
    document.getElementById("roomNbChoice").innerText = "- Un nombre de chambres de : " + roomNbInput;

    var materiauxInput = document.getElementById("materiaux").value;
    console.log(materiauxInput);
    if (materiauxInput == 1) {
        document.getElementById("materiauxChoice").innerText = "- Un materiaux en : Bois";
    } 
    else if (materiauxInput == 2) {
        document.getElementById("materiauxChoice").innerText = "- Un materiaux en : Parpaings";
    } 
    else if (materiauxInput == 3) {
        document.getElementById("materiauxChoice").innerText = "- Un materiaux en : Briques";
    }
}

document.getElementById("montantDevis").innerText = "montant calculé :";