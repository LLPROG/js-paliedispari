
/*
Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


let result = document.querySelector('#result');

let parola = prompt('dammi una parola')

function palindroma(userParola) {
    
    let parolaSplit = userParola.split('');

    let parolaReverse = parolaSplit.reverse();

    let parolaReverseUguale = parolaReverse.join('');
    
    if (parolaReverseUguale == userParola) {
        return true
    } else {
        return false
    }
}

if (palindroma(parola)) {
    result.innerHTML = 'la parola che hai scelto é palindroma'
} else {
    result.innerHTML = 'la parola che hai scelto non é palindroma'

}

*/




/*

Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

let userParola = prompt('scegli pari o dispari');

let comparation = 'pari';

let userNumber = parseInt(prompt('scegli un numero da 1 a 5'));

//random compur function

function numberRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerNumber = numberRandom(5, 1);


if (userNumber > 5 || userNumber <1) {

    alert('insert a correct number')


} else {
    // function pari
    function pari (firstValue, secondValue) {

        if ((firstValue + secondValue) % 2 === 0) {
            return true
        } else {
            return false
        }
    }
    
    //function addizione
    function addiction (firstValue, secondValue) {
        return firstValue + secondValue;
    }

    let computer = document.querySelector('#computer');
    let sum = document.querySelector('#sum');
    let userParolaHtml = document.querySelector('#user-parola');
    let winner = document.querySelector('#winner');

    computer.innerHTML = 'il computer ha scelto: ' + computerNumber;

    sum.innerHTML = 'la somma tra: ' + userNumber + ' e ' + computerNumber + ' é: ' + addiction(userNumber, computerNumber);

    userParolaHtml.innerHTML = 'hai scelto ' + userParola;

    
    if (pari(computerNumber, userNumber)) {

        if (userParola.toLowerCase() === comparation.toLowerCase()) {
            winner.innerHTML = 'hai vinto';
        } else {
            winner.innerHTML = 'hai perso';
        }

    } else {

        if (userParola.toLowerCase() === comparation.toLowerCase()) {
            winner.innerHTML = 'hai perso';
        } else {
            winner.innerHTML = 'hai vinto';
        }
    }
}









