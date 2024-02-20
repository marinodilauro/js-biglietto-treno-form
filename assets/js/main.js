// Creo due variabili per l'età dell'utente e i km che deve percorrere
// Assegno a queste due variabili dei valori tramite input utente

const inputNameElement = document.getElementById("inputName");
const userName = inputNameElement.value;
console.log(userName);

const inputAgeElement = document.getElementById("inputAge");
const userAge = inputAgeElement.value;
console.log(userAge);

const inputDistanceElement = document.getElementById("inputDistance");
const travelDistance = inputDistanceElement.value;
console.log(travelDistance);

// Creo una costante per il prezzo al km del biglietto (0.21€)

const ticketBasePrice = 0.21;
console.log(ticketBasePrice);

// Creo una varaibile e le assegno il prezzo del biglietto dell'utente (sarà 0.21 moltiplicato il valore della variabile "km da percorrere")

let ticketFinalPrice = ticketBasePrice * travelDistance;
console.log(ticketFinalPrice);

// Creo due variabili per lo sconto ai minorenni e per lo sconto agli over 65 anni

const minorDiscount = 0.2;
const seniorDiscount = 0.4;

// Verifico l'età dell'utente per applicare lo sconto

if (userAge < 18) {
  ticketFinalPrice = ticketFinalPrice - (ticketFinalPrice * minorsDiscount);
} else if (userAge >= 65) {
  ticketFinalPrice = ticketFinalPrice - (ticketFinalPrice * seniorsDiscount);
}