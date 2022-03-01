
/*
Palidroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


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
    console.log('é palindroma');
} else {
    console.log('non é palindroma');

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

function numberRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerNumber = numberRandom(5, 1);


if (userNumber > 5 || userNumber <1) {

    alert('insert a correct number')

} else {
    
    function pari (firstValue, secondValue) {

        if ((firstValue + secondValue) % 2 === 0) {
            return true
        } else {
            return false
        }
    }
    
    function addiction (firstValue, secondValue) {
        return firstValue + secondValue;
    }
    
    console.log('il computer ha scelto: ' + computerNumber);
    console.log('la somma tra: ' + userNumber + ' e ' + computerNumber + ' é: ' + addiction(userNumber, computerNumber));
    console.log('hai scelto ' + userParola)
    
    if (pari(computerNumber, userNumber)) {
        if (userParola.toLowerCase() === comparation.toLowerCase()) {
            console.log('hai vinto');
        } else {
            console.log('hai perso');
        }

    } else {

        if (userParola.toLowerCase() === comparation.toLowerCase()) {
            console.log('hai perso');
        } else {
            console.log('hai vinto');
        }
    
    }
}









