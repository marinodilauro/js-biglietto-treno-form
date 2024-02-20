// Creo due variabili per l'età dell'utente e i km che deve percorrere
// Assegno a queste due variabili dei valori tramite input utente

const inputNameElement = document.getElementById("inputName");
let userName = inputNameElement.value;

const inputAgeElement = document.getElementById("inputAgeRange");
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

// Stampo il prezzo del biglietto al click del bottone "Scopri il prezzo"

const submitButtonElement = document.getElementById("submitBtn");

submitButtonElement.addEventListener("click", function () {

  // Assegno alle variabili il valore degli inputs dell'utente

  userName = inputNameElement.value;
  console.log(userName);

  userAge = inputAgeElement.value;
  console.log(userAge);

  travelDistance = inputDistanceElement.value;
  console.log(travelDistance);

  // Creo una varaibile e le assegno il prezzo del biglietto dell'utente (sarà 0.21 moltiplicato il valore della variabile "km da percorrere")

  let ticketFinalPrice = ticketBasePrice * travelDistance;

  // Verifico l'età dell'utente per applicare lo sconto

  if (userAge == "1") {
    ticketFinalPrice = ticketFinalPrice - (ticketFinalPrice * minorDiscount);
  } else if (userAge == "3") {
    ticketFinalPrice = ticketFinalPrice - (ticketFinalPrice * seniorDiscount);
  }

  // Stampo il prezzo del biglietto nella pagina

  let priceOutput = document.getElementById("price");

  priceOutput.innerHTML = `Il biglietto costerà ${ticketFinalPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}`;
});



// Resetto i campi e riavvio l'app al click del bottone "Ripeti"

const repeatButtonElement = document.getElementById("repeatBtn");

repeatButtonElement.addEventListener("click", function () {

  // Resetto il valore degli inputs dell'utente

  inputAgeElement.value = "";
  console.log(userName);

  inputNameElement.value = "";
  console.log(userAge);

  inputDistanceElement.value = "";
  console.log(travelDistance);

  // Resetto il valore del prezzo del biglietto

  let ticketFinalPrice = null;

  // Cancello il prezzo del biglieto dalla pagina

  let priceOutput = document.getElementById("price");

  priceOutput.innerHTML = null;
});