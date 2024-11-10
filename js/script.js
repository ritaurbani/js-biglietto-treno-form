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

//FUNZIONI - Carrozza# / CP Code
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//EVENT-LISTENER
formElement.addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();

    const name = nameInputElement.value.trim();//Salvo valori dell input
    const age = ageInputElement.value.trim(); 
    const km = parseInt(kmInputElement.value.trim());

//INVOCO FUNZIONI
    const carrozzaNumber = getRandomInt(1, 10);
    console.log(carrozzaNumber);
    const cpNumber = getRandomInt(1, 99999);
    console.log(cpNumber);

//Final Price
    const ticketPrice = km * 0.21              
    console.log(ticketPrice);

    let finalPrice;                                          

    if (age === "maggiorenne") {
        const discountedPrice20 = ticketPrice / 100 * 20;    
        finalPrice = ticketPrice - discountedPrice20;        
    } else if (age === "Sopra i 65") {
        const discountedPrice40 = ticketPrice / 100 * 40;    
        finalPrice = ticketPrice - discountedPrice40;        
    } else {
        finalPrice = ticketPrice;
    }
    const finalTicketPrice = finalPrice.toFixed(2);  
    console.log(finalTicketPrice);                    
        
    // Display values in the HTML ticket
    nameElem.innerHTML = name;
    carrozzaElem.innerHTML = carrozzaNumber;
    cpElem.innerHTML = cpNumber;
    finalPriceElem.innerHTML = `${finalTicketPrice} €`;
})