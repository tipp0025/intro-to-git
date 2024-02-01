// 1. Declare a variable name and assign it as your name. Print the variable to the console.

let myName = "Jordan";
console.log(myName);

// 2. Add a new fruit to the fruits array using the push method.

let fruits = ["Apple", "Orange", "Banana"];
fruits.push("Kiwi");

// 3. Write a function getDaysUntilAdeshBirthday that calculates and returns the number of days remaining until his birthday. Print the result to the console. Adesh's birthday is on March 25.

function getDaysUntilAdeshBirthday() {
  bday = new Date("2024, 3, 25");
  today = new Date("2024, 2, 1");
  console.log(bday - today);
  console.log("It should say 53");
}

getDaysUntilAdeshBirthday();
