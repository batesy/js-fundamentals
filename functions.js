// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(kids, partner, city, job){
  alert("You will be a " + job + " in " + city + ", and married to " + partner + " with " + kids + " kids.")
}

tellFortune(2, "Maggie", "Halifax", "entrepreneur")
tellFortune(8, "Shaniqua", "Brooklyn", "drug dealer")
tellFortune(4, "Venus", "NYC", "ball boy")


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birth_year){
  var date = new Date();
  var current_year = date.getFullYear();
  var age = (current_year - birth_year);

  alert("You are either " + age + " or " + (age + 1) + ".");
}

calculateAge(1984);
calculateAge(1991);
calculateAge(1976)

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amount_per_day){
  var max_age = 75
  var total_supply = (max_age - age) * 365 * amount_per_day;
  var total_supply_rounded = Math.round(total_supply * 100) / 100
  alert("You will need " + total_supply_rounded + " to last you until the ripe old age of " + max_age + ".")
}

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumference:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius){
  var circumference = 3.14 * radius
  alert("The circumerence is " + circumference + ".")
}

function calcArea(radius){
  var area = 3.14 * radius * radius
  alert("The area is " + area + ".")
}

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celciusToFahrenheit(temp_in_c){
  alert(temp_in_c + "°C is " + Math.round(temp_in_c + 9 / 5 + 32) + "°F")
}

function fahrenheitToCelcius(temp_in_f){
  alert(temp_in_f + "°F is " + Math.round(((temp_in_f - 32) * 5 / 9)) + "°C.")
}