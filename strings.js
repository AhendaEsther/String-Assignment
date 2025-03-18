// "anza"
let str = "extravaganza";
let lastFour = str.slice(-4);
console.log(lastFour); 

 // "The qeatuick fox jumped over the lazy dog"
let food = "The quick fox jumped over the lazy dog";
let newFood = food.slice(0, 4) + "eat" + food.slice(4);
console.log(newFood); 

let statement= "The quick brown fox jumps over the lazy dog";
function countOccurrences(text, word) {
    return text.toLowerCase().split(word.toLowerCase()).length - 1;
}
console.log(countOccurrences(statement, "the"));   // 2
console.log(countOccurrences(statement, "brown")); // 1

let string1 = "The pupils are reading in the library";
let string2 = "The child was sitting on the table before it fell";
let word1 = string1.includes("are") ? "are" : "not found";
let word2 = string2.includes("sitting") ? "sitting" : "not found";
console.log(word1); // "are"
console.log(word2); // "sitting"

 // "WONDERFUL"
let upperCase = "wonderful".toUpperCase();
console.log(upperCase);
 // "amazing"
let lowerCase = "amazing".toLowerCase();
console.log(lowerCase); 
// "A Wonderful World"
let titleCase = "A wonderful world";
console.log(titleCase);

