// RACCOLTA DATI
// Chiedo all'utente il numero di chilometri
const userKm = parseInt( prompt('Indicare il numero di chilometri') );

// Chiedo all'utente l'età
const userAge = parseInt( prompt('Indicare la propra età') );

// LOGICA
// Calcolo prezzo 0.21 €/km
let price = userKm * '0.21';

// Sconto età under18 e over 65
let discount20 = (price * 20) / 100;
let discount40 = (price * 40) / 100;

// If per sconto in base all'età
if( userAge < 18 ) {
    price = price - discount20;
} else if( userAge >= 65 ) {
    price = price - discount40;
}

// Messaggio all'utente del prezzo in base allo sconto e all'età
let message;

if( userAge < 18 ) {
    message = 'Il prezzo del biglietto con lo sconto under18 è:';
} else if( userAge >= 65 ) {
    message = 'Il prezzo del biglietto con lo sconto over65 è:';
} else {
    message = 'Il prezzo del biglietto è:';
}

// OUTPUT
alert(message + '  ' + price.toFixed(2) + ' € ');
