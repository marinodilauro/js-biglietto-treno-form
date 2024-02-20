// Creo due variabili per l'età dell'utente e i km che deve percorrere
// Assegno a queste due variabili dei valori tramite input utente

const inputNameElement = document.getElementById("inputName");
let userName = inputNameElement.value;

const inputAgeElement = document.getElementById("inputAge");
let userAge = inputAgeElement.value;

const inputDistanceElement = document.getElementById("inputDistance");
let travelDistance = inputDistanceElement.value;

// Creo una costante per il prezzo al km del biglietto (0.21€)

const ticketBasePrice = 0.21;
console.log(ticketBasePrice);

// Creo una varaibile e le assegno il prezzo del biglietto dell'utente (sarà 0.21 moltiplicato il valore della variabile "km da percorrere")

let ticketFinalPrice = ticketBasePrice * travelDistance;
console.log(ticketFinalPrice);

// Creo due variabili per lo sconto ai minorenni e per lo sconto agli over 65 anni

const minorDiscount = 0.2;
const seniorDiscount = 0.4;

// Stampo il prezzo del biglietto

const submitButtonElement = document.getElementById("submitBtn");

submitButtonElement.addEventListener("click", function () {

  userName = inputNameElement.value;
  console.log(userName);

  userAge = inputAgeElement.value;
  console.log(userAge);

  travelDistance = inputDistanceElement.value;
  console.log(travelDistance);

  // Creo una varaibile e le assegno il prezzo del biglietto dell'utente (sarà 0.21 moltiplicato il valore della variabile "km da percorrere")

  let ticketFinalPrice = ticketBasePrice * travelDistance;

  // Verifico l'età dell'utente per applicare lo sconto

  if (userAge < 18) {
    ticketFinalPrice = ticketFinalPrice - (ticketFinalPrice * minorDiscount);
  } else if (userAge >= 65) {
    ticketFinalPrice = ticketFinalPrice - (ticketFinalPrice * seniorDiscount);
  }

  alert(`Il biglietto costerà ${ticketFinalPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}`);
});