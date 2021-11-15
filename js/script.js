// RACCOLTA DATI
// Chiedo all'utente il numero di chilometri
const userKm = parseInt( prompt('Indicare il numero di chilometri') );

// Chiedo all'utente l'età
const userAge = parseInt( prompt('Indicare la propria età') );

// LOGICA
// Calcolo prezzo
let price = userKm * 0.21;
let discount = 0;
let userMessage = 'Il prezzo del biglietto è:';

// If per sconto in base all'età
if( userAge < 18 ) {
    discount = price * 0.2;
    price = price - discount;
    userMessage = 'Il prezzo del biglietto con lo sconto under18 è:';
} else if( userAge >= 65 ) {
    discount = price * 0.4;
    price = price - discount;
    userMessage = 'Il prezzo del biglietto con lo sconto over65 è:';
}

// OUTPUT
alert(userMessage + '  ' + price.toFixed(2) + ' € ');
