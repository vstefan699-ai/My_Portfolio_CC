// listen for button clicks
document.getElementById("placeOrder").addEventListener("click", placeOrder);

/**
 * gets form values
 * calculates prices
 * produces output
 */

function placeOrder() {
    // get form values
    var numPizzas = document.getElementById("numPizzas").value;
    var typePizza = document.getElementById("typePizza").value;
    var deliveryCity = document.getElementById("deliveryCity").value;
    var birthday = document.getElementById("birthday").value;

    // get the pizza price
    var orderPrice = calculatePrice(numPizzas, typePizza);
    // get the delivery price
    var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

    // create the output
    var theOutput = "<p>Thank you for your order!</p>";

    // output the delivery price, if there is one
    if (deliveryPrice === 0) {
        theOutput += "<p>You get free delivery!</p>";
    } else {
        theOutput += "<p>Your delivery cost is: R" + deliveryPrice;
    }
    theOutput += "<p>Your total is: R" + (orderPrice + deliveryPrice);

    // display the output
    document.getElementById("displayTotal").innerHTML = theOutput;
    displayTotal.style.display = "block"
}

/**
 * calculates pizza price
 */
function calculatePrice(numPizzas, typePizza) {

    var orderPrice = Number(numPizzas) * 80;
    var extraCharge = 0;

    // calculate extraCharge, if there is one
    if (typePizza === "cheese") {
        extraCharge = Number(numPizzas) * 2;
    } else if (typePizza === "pepperoni") {
        extraCharge = Number(numPizzas) * 5;
    } else if (typePizza === "somethingMeaty") {
        extraCharge = Number(numPizzas) * 12;
    } else if (typePizza === "chickenMayo") {
        extraCharge = Number(numPizzas) * 13;
    } else if (typePizza === "bbqBacon") {
        extraCharge = Number(numPizzas) * 14;
    } else {
        (typePizza === "seafood")
        extraCharge = Number(numPizzas) * 20;
    }
    orderPrice += extraCharge;
    return orderPrice;
}
/**
  * calculates delivery price
 */
function calculateDelivery(orderPrice, deliveryCity, birthday) {

    var deliveryPrice = 0;

    // calculate delivery price, if there is one
    if (((deliveryCity === "CapeTown") && (orderPrice >
        10)) || (birthday === "yes")) {
        deliveryPrice = 0;
    } else {
        deliveryPrice = 30;
    }
    return deliveryPrice;
}

// COMMENTS FOR ABOVE CODE:
// // Listen for a click on the "Place Order" button
// document.getElementById("placeOrder").addEventListener("click", placeOrder);

// /**
//  * placeOrder()
//  * - Reads values from the form
//  * - Calculates pizza and delivery prices
//  * - Builds and displays the final message
//  */
// function placeOrder() {

//     // Get the number of pizzas entered by the user
//     var numPizzas = document.getElementById("numPizzas").value;

//     // Get the selected pizza type from the dropdown
//     var typePizza = document.getElementById("typePizza").value;

//     // Get the selected delivery city
//     var deliveryCity = document.getElementById("deliveryCity").value;

//     // Check whether the user selected "yes" for birthday
//     var birthday = document.getElementById("birthday").value;

//     // Calculate the total pizza price based on quantity and type
//     var orderPrice = calculatePrice(numPizzas, typePizza);

//     // Calculate the delivery price based on order price, city, and birthday
//     var deliveryPrice = calculateDelivery(orderPrice, deliveryCity, birthday);

//     // Start building the output HTML
//     var theOutput = "<p>Thank you for your order!</p>";

//     // Show delivery cost message
//     if (deliveryPrice === 0) {
//         // Delivery is free
//         theOutput += "<p>You get free delivery!</p>";
//     } else {
//         // Delivery costs money
//         theOutput += "<p>Your delivery cost is: R" + deliveryPrice + "</p>";
//     }

//     // Show the final total (pizza price + delivery)
//     theOutput += "<p>Your total is: R" + (orderPrice + deliveryPrice) + "</p>";

//     // Display the output inside the displayTotal element
//     document.getElementById("displayTotal").innerHTML = theOutput;

//     // Make sure the result section is visible
//     displayTotal.style.display = "block";
// }

// /**
//  * calculatePrice()
//  * - Calculates the total pizza price
//  * - Adds extra cost depending on the pizza type
//  */
// function calculatePrice(numPizzas, typePizza) {

//     // Base price: R80 per pizza
//     var orderPrice = Number(numPizzas) * 80;

//     // Extra cost depending on pizza type
//     var extraCharge = 0;

//     // Add extra charge based on selected pizza
//     if (typePizza === "cheese") {
//         extraCharge = Number(numPizzas) * 2;
//     } else if (typePizza === "pepperoni") {
//         extraCharge = Number(numPizzas) * 5;
//     } else if (typePizza === "somethingMeaty") {
//         extraCharge = Number(numPizzas) * 12;
//     } else if (typePizza === "chickenMayo") {
//         extraCharge = Number(numPizzas) * 13;
//     } else if (typePizza === "bbqBacon") {
//         extraCharge = Number(numPizzas) * 14;
//     } else {
//         // Default case (e.g. seafood)
//         extraCharge = Number(numPizzas) * 20;
//     }

//     // Add extra charge to base price
//     orderPrice += extraCharge;

//     // Return the final pizza price
//     return orderPrice;
// }

// /**
//  * calculateDelivery()
//  * - Determines whether delivery is free or costs R30
//  */
// function calculateDelivery(orderPrice, deliveryCity, birthday) {

//     var deliveryPrice = 0;

//     // Free delivery if:
//     // - City is CapeTown AND order is more than R10
//     // OR
//     // - It is the user's birthday
//     if (((deliveryCity === "CapeTown") && (orderPrice > 10)) || (birthday === "yes")) {
//         deliveryPrice = 0;
//     } else {
//         // Otherwise delivery costs R30
//         deliveryPrice = 30;
//     }

//     // Return the delivery price
//     return deliveryPrice;
// }
