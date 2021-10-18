const items = document.querySelectorAll("div.slider img");  /* selectionne toutes photo de la div .slider et les met dans un tableau*/
const nbSlide = items.length; /*nombre d'images dans le tableau items*/
const suivant = document.querySelector('.right'); /*bouton selecteurr droite*/
const precedent = document.querySelector('.left'); /*bouton seleceur gauche*/
let count = 0; /*compteur, demarre de 0*/

function slideSuivante(){
    items[count].classList.remove('active'); /* items à 0(donc premiere image) on lui retire la classe active, elle va passer de active display none à display block*/

    if(count < nbSlide - 1){ /* on fait aparaitre la slide suivante*/
        count++; /* count++ on passe à l'image suivante (il n'a pas encore parcouru le tableau)*/
    } else {
        count = 0; /*sinon, on remet le compteur à 0*/
    }

    items[count].classList.add('active') /* le prochain item (la prochaine photo) on lui ajoute la classe active pour qu'elle s'affiche*/
    console.log(count);
    
}
suivant.addEventListener('click', slideSuivante) /* On est à l'ecoute du clique et lorsque l'on clique on envoi la fonction faite precedement c'est à dire envoyer l'image suivante*/


function slidePrecedente(){  /* on fait l'inverse, on retire la classe active*/
    items[count].classList.remove('active');

    if(count > 0){  /* si Count est superieur à 0 */
        count--; /* on decrémente de -1*/
    } else {
        count = nbSlide - 1; /* sinon Count = nb de slide -1 (ça ramene à l'image de fin du tableau*/
    }

    items[count].classList.add('active')   /* On rajoute la classe active à l'item qui correspond au nouveau count*/ 
}
precedent.addEventListener('click', slidePrecedente) /* On est à l'ecoute du clique et lorsque l'on clique sur image precedente, cela renvoi la fonction (precedente) */

setInterval("slideSuivante(1)", 4000);
