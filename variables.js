// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var num_kids = 2;
undefined
var wifes_name = "Maggie";
undefined
var city = "Halifax";
undefined
var job_title = "billionaire entrepreneur";
undefined
var fortune = "You will be a " + job_title + " in " + city + ", and married to " + wifes_name + " with " + num_kids + " children."
undefined
fortune
"You will be a billionaire entrepreneur in Halifax, and married to Maggie with 2 children."

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var current_year = 2013;
var birth_year = 1984;
var age1 = current_year - birth_year;
var age2 = age1 + 1
var find_age = "You are either " + age1 + " or " + age2

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var my_age = 29;
var max_age = 100;
var amount_per_day = 2;
var supply = (max_age - current_age) * 365 * 2;
var lifetime_supply = "You will need " + supply + " Subway subs to last you until the ripe old age of " max_age + "."


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 5;
var circumference = "The circumference is " + (radius * 3.14) + ".";
var area = "The area is " + (3.14 * radius * radius) + "."

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var temp_in_c = 26;
var convert_from_c = temp_in_c + "°C is " + (temp_in_c + 9 / 5 + 32) + "°F.";
var temp_in_f = 98;
var convert_from_f = temp_in_f + "°F is " + ((temp_in_f - 32) * 5 / 9) + "°C.";

