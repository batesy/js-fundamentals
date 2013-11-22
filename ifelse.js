// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(x, y){
  if (x > y){
    alert(x + " is greater than " + y);
  }else{
    alert(x + " is less than " + y);
  }
}

greaterNum(2, 30)
graterNum(92, 3)
greaterNum(333, 123)

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang){
  if( lang == "fr" ){
    alert("Bonjour tout le monde!");
  }else if( lang == "es" ){
    alert("Hola Mundo!");
  }else if( lang == "ru"){
    alert("привет мир!");
  }else{
    alert("Hello World!");
  }
}


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score){
  if( score < 50 ){
    console.log("Grade: F");
  }else if( score < 66 ){
    console.log("Grade: D");
  }else if( score < 76 ){
    console.log("Grade: C");
  }else if( score < 86 ){
    console.log("Grade: B");
  }else{
    console.log("Grade: A");
  }
}


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number){
  if( number > 1 ){
    console.log(number + " " + noun + "s");
  }else{
    console.log(number + " " + noun);
  }
}


