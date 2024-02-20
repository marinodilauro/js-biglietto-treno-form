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

// Creo una varaibile e le assegno il prezzo del biglietto dell'utente (sarà 0.21 moltiplicato il valore della variabile "km da percorrere")

let ticketFinalPrice = ticketBasePrice * travelDistance;

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

  // Creo una varaibile per il tipo di offerta del biglietto

  let offerType = "Biglietto tariffa standard"

  // Verifico l'età dell'utente per applicare lo sconto

  if (userAge == "1") {
    ticketFinalPrice = ticketFinalPrice - (ticketFinalPrice * minorDiscount);
    offerType = "Biglietto con sconto minorenni"
  } else if (userAge == "3") {
    ticketFinalPrice = ticketFinalPrice - (ticketFinalPrice * seniorDiscount);
    offerType = "Biglietto con sconto over 65"
  }

  // Mostro la card di output nella pagina

  let ticketCardElement = document.querySelector(".mc_ticket_output");

  ticketCardElement.classList.remove("d-none");

  // Stampo il nome dell'utente nella pagina

  let nameOutput = document.querySelector(".mc_user_name");

  nameOutput.innerHTML = userName.toLocaleString("it-IT");

  // Stampo il numero della carrozza nella pagina

  let carriageOutput = document.querySelector(".mc_carriage_number");

  carriageOutput.innerHTML = (Math.floor(Math.random() * 21) + 1);

  // Stampo il tipo di offerta del biglietto nella pagina

  let offerOutput = document.querySelector(".mc_offer_type");

  offerOutput.innerHTML = offerType.toLocaleString("it-IT");

  // Stampo codice CP nella pagina

  let cpCodeOutput = document.querySelector(".mc_cp_code_number");

  cpCodeOutput.innerHTML = (Math.floor(Math.random() * 10001) + 1);

  // Stampo il prezzo del biglietto nella pagina

  let priceOutput = document.querySelector("p.mc_ticket_price");

  priceOutput.innerHTML = `${ticketFinalPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}`;

});


// Resetto i campi e riavvio l'app al click del bottone "Ripeti"

const cancelButtonElement = document.getElementById("cancelBtn");

cancelButtonElement.addEventListener("click", function () {

  // Resetto il valore degli inputs dell'utente

  inputAgeElement.value = "";
  console.log(userName);

  inputNameElement.value = "";
  console.log(userAge);

  inputDistanceElement.value = "";
  console.log(travelDistance);

});


// Resetto i campi e riavvio l'app al click del bottone "Ripeti"

const repeatButtonElement = document.getElementById("repeatBtn");

repeatButtonElement.addEventListener("click", function () {

  // Nascondo la card di output nella pagina

  let ticketCardElement = document.querySelector(".mc_ticket_output");

  ticketCardElement.classList.add("d-none");

  // Resetto il valore degli inputs dell'utente

  inputAgeElement.value = "";
  console.log(userName);

  inputNameElement.value = "";
  console.log(userAge);

  inputDistanceElement.value = "";
  console.log(travelDistance);

  // Resetto il valore del prezzo del biglietto

  let ticketFinalPrice = null;

  // Cancello tutti i valori dalla pagina


  let nameOutput = document.querySelector(".mc_user_name");

  nameOutput.innerHTML = null;

  let carriageOutput = document.querySelector(".mc_carriage_number");

  carriageOutput.innerHTML = null;

  let offerOutput = document.querySelector(".mc_offer_type");

  offerOutput.innerHTML = null;

  let cpCodeOutput = document.querySelector(".mc_cp_code_number");

  cpCodeOutput.innerHTML = null;

  let priceOutput = document.getElementById("price");

  priceOutput.innerHTML = null;

});