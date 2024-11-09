//prelevo form, Input

const formElement = document.getElementById("user-form");
const nameInputElement = document.getElementById("name");
const ageInputElement = document.getElementById("age");
const kmInputElement = document.getElementById("km");

// console.log(formElement,nameInputElement, ageInputElement,kmInputElement)

//Preleviamo Elementi della CARD
const nameElem = document.querySelector(".name-card");
const carrozzaElem = document.querySelector(".carrozza-card");
const cpElem = document.querySelector(".cp-card");
const finalPriceElem = document.querySelector(".finalPrice-card");

//FUNZIONI

//ESECUZIONE LOGICA - Carrozza#
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// const carrozzaNumber = getRandomInt(1, 10);
// const cpNumber = getRandomInt(99998,99999)



//ESECUZIONE LOGICA - CP Code



//ESECUZIONE LOGICA - Final Price


formElement.addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();

    const name = nameInputElement.value.trim();//Salvo valori dell input
    const age = parseInt(ageInputElement.value.trim()); 
    const km = parseInt(kmInputElement.value.trim());

//INVOCO FUNZIONI
      
    const carrozzaNumber = getRandomInt(1, 10);
    console.log(carrozzaNumber);
    const cpNumber = getRandomInt(99998, 99999);
    console.log(cpNumber);

    const ticketPrice = km * 0.21              // Definire prezzo biglietto: in base ai km(0.21 al km)
    console.log(ticketPrice);

    let finalPrice;                                          // Dichiaro la variabile del prezzo finale

    if (age < 18) {
        const discountedPrice20 = ticketPrice / 100 * 20;    // Se l'eta'utente e'minore di 18, applica sconto 20% a prezzo biglietto - (prezzo biglietto / 100 * 20)
        finalPrice = ticketPrice - discountedPrice20;        //Calcolare prezzo finale sottraendo sconto a prezzo biglietto
    } else if (age > 65) {
        const discountedPrice40 = ticketPrice / 100 * 40;    // Se l'eta'utente e'maggiore di 65, applica sconto 40% a prezzo biglietto - (prezzo biglietto / 100 * 40)
        finalPrice = ticketPrice - discountedPrice40;        //Calcolare prezzo finale sottraendo sconto a prezzo biglietto
    } else {
        finalPrice = ticketPrice;
    }
    //OUTPUT
    const finalTicketPrice = finalPrice.toFixed(2);  // Round to 2 decimal places
    console.log(finalTicketPrice);                    // Log the final price
        // Display in the HTML element

    //Stampa valori degli elementi in pagina
    nameElem.innerHTML = name;
    carrozzaElem.innerHTML = carrozzaNumber;
    cpElem.innerHTML = cpNumber;
    finalPriceElem.innerHTML = `${finalTicketPrice} €`;


})