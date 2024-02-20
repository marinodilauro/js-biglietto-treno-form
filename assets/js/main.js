// Create three variables for user name, age and travel distance and assign values from inputs fields

const inputNameElement = document.getElementById("inputName");
let userName = inputNameElement.value;

const inputAgeElement = document.getElementById("inputAgeRange");
let userAge = inputAgeElement.value;

const inputDistanceElement = document.getElementById("inputDistance");
let travelDistance = inputDistanceElement.value;


// Create constant for ticket base price

const ticketBasePrice = 0.21;


// Create two variables for minors and seniors discount

const minorDiscount = 0.2;
const seniorDiscount = 0.4;


// Create variables for ticket details HTML reference on screen

let nameOutput = document.querySelector(".mc_user_name");

let offerOutput = document.querySelector(".mc_offer_type");

let carriageOutput = document.querySelector(".mc_carriage_number");

let cpCodeOutput = document.querySelector(".mc_cp_code_number");

let priceOutput = document.querySelector("p.mc_ticket_price");


// Show ticket details card

const submitButtonElement = document.getElementById("submitBtn");

submitButtonElement.addEventListener("click", showTicketDetails);


// Reset input field and re-run app on "Ripeti" button click

const repeatButtonElement = document.getElementById("repeatBtn");

repeatButtonElement.addEventListener("click", function () {

  // Hide ticket card on screen
  hideTicketCard();

  // Reset input fields value
  resetInputFields();

  // Cancel all ticket values from the screen
  cancelAllTicketValues();

  // Disable "Ripeti" button
  disableButton()

});


// #region ||||| FUNCTIONS |||||

// Function to show ticket details card on screen

function showTicketDetails() {

  // Assign input fields value to variables
  userName = inputNameElement.value;
  console.log(userName);

  userAge = inputAgeElement.value;
  console.log(userAge);

  travelDistance = inputDistanceElement.value;
  console.log(travelDistance);

  // Create a variable and assing ticket price (0.21 times travelDistance value)
  let ticketFinalPrice = ticketBasePrice * travelDistance;

  // Create a variable for ticket offer type
  let offerType = "Biglietto tariffa standard"

  // Verify user age to apply discount
  if (userAge == "1") {
    ticketFinalPrice = ticketFinalPrice - (ticketFinalPrice * minorDiscount);
    offerType = "Biglietto con sconto minorenni"
  } else if (userAge == "3") {
    ticketFinalPrice = ticketFinalPrice - (ticketFinalPrice * seniorDiscount);
    offerType = "Biglietto con sconto over 65"
  }

  // Show ticket card on screen
  showTicketCard();

  // Print user name on screen
  nameOutput.innerHTML = userName.toLocaleString("it-IT");

  // Print carriage number on screen
  carriageOutput.innerHTML = (Math.floor(Math.random() * 21) + 1);

  // Print ticket offer type on screen
  offerOutput.innerHTML = offerType;

  // Print CP code on screen
  cpCodeOutput.innerHTML = (Math.floor(Math.random() * 10001) + 1);

  // Print ticket price on screen
  priceOutput.innerHTML = `${ticketFinalPrice.toLocaleString("it-IT", { style: "currency", currency: "EUR" })}`;

  // Enable "Ripeti" button
  enableButton()

}

// Function to show ticket card on screen

function showTicketCard() {

  let ticketCardElement = document.querySelector(".mc_ticket_output");

  ticketCardElement.classList.remove("d-none");
}

// Function to hide ticket card on screen

function hideTicketCard() {

  let ticketCardElement = document.querySelector(".mc_ticket_output");

  ticketCardElement.classList.add("d-none");
}

// Function enable buttons

function enableButton() {

  repeatButtonElement.removeAttribute("disabled");
  repeatButtonElement.classList.add("mc_btn_bg")
  repeatButtonElement.classList.remove("btn-secondary")
}

// Function disable buttons

function disableButton() {

  repeatButtonElement.setAttribute("disabled", "true");
  repeatButtonElement.classList.add("btn-secondary")
  repeatButtonElement.classList.remove("mc_btn_bg")
}

// Function to reset input fields value

function resetInputFields() {

  inputAgeElement.value = "";
  console.log(userName);

  inputNameElement.value = "";
  console.log(userAge);

  inputDistanceElement.value = "";
  console.log(travelDistance);
}

// Function to cancel all ticket values from the screen

function cancelAllTicketValues() {

  let ticketFinalPrice = null;

  let nameOutput = document.querySelector(".mc_user_name");

  nameOutput.innerHTML = null;

  let carriageOutput = document.querySelector(".mc_carriage_number");

  carriageOutput.innerHTML = null;

  let offerOutput = document.querySelector(".mc_offer_type");

  offerOutput.innerHTML = null;

  let cpCodeOutput = document.querySelector(".mc_cp_code_number");

  cpCodeOutput.innerHTML = null;

  let priceOutput = document.querySelector(".mc_ticket_price");

  priceOutput.innerHTML = null;
}

// #endregion ||||| FUNCTIONS |||||