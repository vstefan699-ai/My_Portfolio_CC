// Generate a random whole number between 0 and 20
let randRandom = Math.floor(Math.random() * 21);

// Display the random number in the console (mainly for testing)
console.log("randomNumber: " + randRandom);

// This function runs when the user submits their guess
function storedValue() {
   // Get the input element from the HTML
   let input = document.getElementById("numberInput");

   // Convert the input value (string) into a number
   let userGuess = parseInt(input.value);

   // Clear the input field after the user submits
   input.value = "";

   // Send the guessed number to the game logic function
   startGame(userGuess);
}

// This function contains the main game logic
function startGame(userGuess) {

   // Check if the input is NOT a number
   if (isNaN(userGuess)) {
      document.getElementById("result").innerHTML = "Enter a valid number";
   }

   // If the guess is higher than the random number
   else if (userGuess > randRandom) {
      document.getElementById("result").innerHTML = "Incorrect, number is too high";
   } 

   // If the guess is lower than the random number
   else if (userGuess < randRandom) {
      document.getElementById("result").innerHTML = "Incorrect, number is too low";
   } 

   // If the guess matches the random number
   else {
      document.getElementById("result").innerHTML =
         "EXCELLENT!! <br> You guessed the correct number " + randRandom;

      // Disable input field after correct guess (prevents further guesses)
      document.getElementById("numberInput").disabled = true;

      // Disable button after correct guess
      document.getElementById("btn").disabled = true;
   }
}