// Preliminaries
// 1. Write a for loop that prints to the console the numbers 0 through 9.
for(let i = 0; i <= 9; i++) {
    console.log(i);
}
//2. Write a for loop that prints to the console 9 through 0.
for(let i = 9; i>=0; i--) {
    console.log(i);
}
//3. Write a for loop that prints these fruits to the console.`const fruit = ["banana", "orange", "apple", "kiwi"]`
const fruit = ["banana", "orange", "apple", "kiwi"];

for(let i = 0; i<= fruit.length - 1; i++) {
    console.log(fruit[i]);
} 
// Bronze Medal
// Write a for loop that will push the numbers 0 through 9 to an array.
let numbersArray = [];
for(let i = 0; i <= 9; i++) {
    numbersArray.push(i);
}
console.log(numbersArray);
// Write a for loop that prints to the console only even numbers 0 through 100
for(let i = 0; i <= 100; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
} 
// Write a for loop that will push every other fruit to an array.const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const fruit2 = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

let newFruit = [];

for(let i = 0; i <= fruit2.length - 1; i++) {
    if(i % 2 == 0) {
        newFruit.push(fruit2[i]);
    }
}
console.log(newFruit);
// Silver Medal
// Write a loop that will print out all the names of the people of the people array
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];

  for (let i = 0; i <= peopleArray.length; i++) {
   console.log(peopleArray[i].name);
  }
 
// Write a loop that pushes the names into a names array, and the occupations into an occupations array.
// let names = [];
// let occupations = [];
// for (let i = 0; i <= peopleArray.length; i++) {
//     for (let j = 0; j <= peopleArray[i]; j++) {
//         if(j == 0) {
//             names.push(peopleArray[i].name)
//         }else {
//             occupations.push(peopleArray[i][j])
//         }
//     }
// }
// console.log(names);
// console.log(occupations);
// Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".