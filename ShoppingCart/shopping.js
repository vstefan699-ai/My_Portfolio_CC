// Array of item numbers (used as display numbers in the table)
var nums = [1, 2, 3, 4, 5];

// Array of item names available in the shop
var items = ["Sterrie Stampie", "2l Orange Juice", "1kg Chicken Breasts", "250g Pasta", "1kg Potatoes"];

// Array of item prices (each index matches the same index in items array)
var prices = [15.50, 29.99, 49.99, 24.99, 20.00];

// Array to store how many of each item the user selects
var quantities = [0, 0, 0, 0, 0];

// Array to store total price per item (price × quantity)
var totals = [0.0, 0.0, 0.0, 0.0, 0.0];

// Variable to store the total amount of the entire order
var totalOrderAmt = 0;


// Function to increase quantity of a selected item
function add_selection(x) {

    // Log the selected item index to the console (for testing/debugging)
    console.log(x);

    // Increase the quantity of the selected item
    quantities[x] = quantities[x] + 1;

    // Recalculate total cost for that specific item
    totals[x] = prices[x] * quantities[x];

    // Add the item price to the overall order total
    totalOrderAmt += prices[x];

    // Refresh the table display
    display_all();
}


// Function to decrease quantity of a selected item
function remove_selection(x) {

    // Only allow removal if quantity is greater than 0
    if (quantities[x] > 0) {

        // Decrease quantity
        quantities[x] = quantities[x] - 1;

        // Recalculate total cost for that item
        totals[x] = prices[x] * quantities[x];

        // Subtract item price from overall total
        totalOrderAmt -= prices[x];
    }

    // Refresh the table display
    display_all();
}
 

// Function to build and display the full shopping table
function display_all() {

   // Start building HTML table as a string
   var myTable = "<table class='shop-table'>";

   // Add table header row
   myTable += "<tr>";
   myTable += "<th>Num</th>";
   myTable += "<th>Item</th>";
   myTable += "<th>Price</th>";
   myTable += "<th>Quantity</th>";
   myTable += "<th>Total</th>";
   myTable += "<th>Add</th>";
   myTable += "<th>Remove</th>";
   myTable += "</tr>";

    // Loop through all items and build table rows
    for (var i = 0; i < items.length; i++) {

        myTable += "<tr>";

        // Display item number
        myTable += "<td>" + nums[i] + "</td>";

        // Display item name
        myTable += "<td>" + items[i] + "</td>";

        // Display item price
        myTable += "<td>" + prices[i] + "</td>";

        // Display current quantity selected
        myTable += "<td>" + quantities[i] + "</td>";

        // Display total price for that item
        myTable += "<td>" + totals[i] + "</td>";

        // Add button (calls add_selection with item index)
        myTable += "<td><button id='Add' onclick='add_selection(" + i + ")'>Add</button></td>";

        // Remove button (calls remove_selection with item index)
        myTable += "<td><button id='Remove' onclick='remove_selection(" + i + ")'>Remove</button></td>";

        myTable += "</tr>";
    }

    // Close table tag
    myTable += "</table>";

    // Insert the table into the HTML element with id="demo"
    document.getElementById("demo").innerHTML = myTable;
}


// Function to calculate and display final checkout total
function checkout() {

    // Local variable to calculate total (not actually used in display)
    var total = 0;

    // Loop through totals array and add everything together
    for (var i = 0; i < totals.length; i++) {
        total += totals[i];
    }

    // Display total order amount (formatted to 2 decimal places)
    document.getElementById("total").innerHTML =
        "<h3>Total Amount: R " + totalOrderAmt.toFixed(2) + "</h3>";
}


// When the page loads, automatically display the table
window.onload = function() {
    display_all();
}
