var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var Message = document.querySelector('.Message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('section');

var compteur = 0;

//Nombres aleatoires 

random1 = Math.random()*11 << 0; //pour generer des nombres entre 0 et 11
random2 = Math.random()*11 << 0; //pour generer des nombres entre 0 et 11
console.log(random1);
console.log(random2);

//Inserer les nombres au hazard dans les variables nb1 et nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;

//fonction de verification

function verifier() {
    var res = document.querySelector('.res').value;
    if(random1 + random2 == res) {
        Message.style.background = "green";
        Message.innerHTML = "Correcte."

        //créer d'autres nombres aleatoires
        random1 = Math.random()*11 << 0; //pour generer des nombres entre 0 et 11
        random2 = Math.random()*11 << 0; //pour generer des nombres entre 0 et 11
        console.log(random1);
        console.log(random2);

        //Inserer les nombres au hazard dans les variables nb1 et nb2
        nb1.innerHTML = random1;
        nb2.innerHTML = random2;
        compteur = compteur + 1;

    } else {
        Message.style.background = "red";
        Message.innerHTML = "Vous avez perdu."
        section.innerHTML = " ";
        score.innerHTML = `<span>${compteur}</span><br> Points`
        link.style.display = "block";
    }
}
