//prelevo form, Input

const formElement = document.getElementById("user-form");
const ageInputElement = document.getElementById("age");
const kmInputElement = document.getElementById("km");

console.log(formElement,ageInputElement,kmInputElement)

formElement.addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();

    const age = parseInt(ageInputElement.value.trim());
    const km = parseInt(kmInputElement.value.trim());

    const ticketPrice = km * 0.21              // Definire prezzo biglietto: in base ai km(0.21 al km)
    console.log(ticketPrice);


    //ESECUZIONE LOGICA


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

    console.log(finalPrice.toFixed(2));    // stampo in console.log il prezzo finale viaggio: (con 2 due decimali)

})