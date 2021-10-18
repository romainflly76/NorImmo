// EXPRESSION REGULIERE  DANS LE FORMULAIRE //

let form = document.querySelector('#loginForm'); /* qui va contenir tout le formulaire*/

/* en ayant ecris des name sous les imputs , on utilise la variable form . ___, cela recupere le input de "nom" par exemple*/





// ************** ecouter la modification de "nom" ************** //

form.nom.addEventListener('change', function() { /* on va ecouter le changement dans le input, on utilise une fonction de callback*/
    validNom(this) /* Appelle une foction (ex: validNom) et rentrer dans cette fonction ce que l'utilisateur est en train de saisir "THIS" ça passe le formEmail dans la fonction validNom*/
}) 

// ************** ecouter la modification de "prénom" ************** //

form.prenom.addEventListener('change', function() { 
    validPrenom(this) 
}) 

// ************** ecouter la modification de "N° de téléphone" ************** //

form.telephone.addEventListener('change', function() { 
    validTelephone(this) 
}) 

// ************** ecouter la modification de "Motif du contact" ************** //

form.motif.addEventListener('change', function() { 
    validMotif(this) 
}) 

// ************** ecouter la modification de "Message" ************** //

form.message.addEventListener('change', function() { 
    validMessage(this) 
}) 

// ************** ecouter la modification de "Email" ************** //

form.email.addEventListener('change', function() { /* on va ecouter le changement dans le input, on utilise une fonction de callback*/
    validEmail(this) /* Appelle une foction (ex: valiEmail) et rentrer dans cette fonction ce que l'utilisateur est en train de saisir "THIS" ça passe le formEmail dans la fonction validEmail*/
}) 


//******************* VALIDATION NOM *************** */

const validNom = function(inputNom) {

    let msgNom;
    let validName = false;

    // au moins 2 caracteres//
    if(inputNom.value.length <2) {
        msgNom = 'le nom doit contenir au moins 2 caractères';
    }

        else {
            msgNom = "le Nom est valide"
            validName = true;
        }
        //recuperation de la balise small//
let small = inputNom.nextElementSibling;

// on test l'expression reguliere//
if (validName) {
    small.innerHTML = "Nom valide";
    small.classList.remove('text-danger');
    small.classList.add('text-success');
}
else {
    small.innerHTML = msgNom;
    small.classList.remove('text-success');
    small.classList.add('text-danger');
}
    }

//******************* VALIDATION PRENOM *************** */

const validPrenom = function(inputPrenom) {

    let msgPrenom;
    let validPrename = false;

    // au moins 2 caracteres//
    if(inputPrenom.value.length <2) {
        msgPrenom = 'le prénom doit contenir au moins 2 caractères';
    }

        else {
            msgPrenom = "le Prénom est valide"
            validPrename = true;
        }
        //recuperation de la balise small//
let small = inputPrenom.nextElementSibling;

// on test l'expression reguliere//
if (validPrename) {
    small.innerHTML = "Prénom valide";
    small.classList.remove('text-danger');
    small.classList.add('text-success');
}
else {
    small.innerHTML = msgPrenom;
    small.classList.remove('text-success');
    small.classList.add('text-danger');
}
    }    


// ***************** Validation motif du contact*******************//

function testListe() {

    nb=form.motif.length; // le nombre de motifs possible//
    i=0;
    //parcours de tous les éléments//
    for (i=0;i<nb;i++){
        if(form.motif.options[i].selected) {
            sMotifName=form.motif.options[i].value;
            (sMotifName+"est selectionné");
        }
    }
}

// ***************** Validation message *******************//








 //******************* VALIDATION EMAIL *************** */

 // creation de la fonction validEmail qui est egale à une fonction (inputEmail) recuperation de form.email//
const validEmail = function(inputEmail) {
    // dans cette fonction on doit valider le format d'un email en créant une Regexp (expression reguliere) //
    let emailRegexp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g'); // format objet //
    //^= accepte de a à z minuscules et majuscules, de 0 à 9, les underscores et point, un arobas {1} une fois etc.. $ (fin de l'expression reguliere//
    // deuxieme parametre, marqueur flag = on doit le faire de maniere global (donc 'g')//

     // tester si l'utilisateur a saisie dans le formulaire//
    let testEmail = emailRegexp.test(inputEmail.value)
    // on passe en parametre ce quez l'utilisateur passe dans le formulaire, donc la valeur de input email (inputEmail.value)//


// *************** RECUPERATION DE LA BALISE SMALL ***********//

    let small = inputEmail.nextElementSibling; // pour attraper la balise suivante, nextElementSibling attrape la balise juste apres//


if(testEmail == true) { // si test email est vrai//

    // on change le texte sous la balise suivante "small"//
small.innerHTML ="Adresse valide"; // on inscrit la données "Adresse valide" dans l'html//
small.classList.remove('text-danger'); // CSS pour enlever le texte "danger" s'il etait là avant//
small.classList.add('text-success'); //CSS pour mettre en vert la balise//
}
else {
    small.innerHTML ="Adresse invalide"; // sinon "Adresse invalide"//
    small.classList.remove('text-succes'); // CSS pour enlever le texte "sucess" s'il etait là avant//
    small.classList.add('text-danger'); // CSS pour mettre en rouge la balise//
}
};
