// Loop through the following array and count how many "computers" there are. Log the final count
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]; 
let count = 0;
for(var i = 0; i<= officeItems.length;i++){
    if(officeItems[i] == "computer") {
        count++;
    }
}
console.log(count);

// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ];

  for(let i = 0; i <= peopleWhoWantToSeeMadMaxFuryRoad.length;i++) {
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is old enough. HE's good to see Mad Max Fury Road");
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is old enough. SHE's good to see Mad Max Fury Road");
    }
     else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male") {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is not old enough to see Mad Max. Don't let HIM in.");
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name +" is not old enough to see Mad Max. Don't let HER in.");
    }
  }

//   Optional Bonus Challenge

// let toggle = [2, 3, 2];

// let light = 0;

// for(let i = 0; i < toggle.length; i++) {
//     light += toggle[i];
// }
// console.log(light);

// if(light % 2 == 0) {
//     console.log("the light is off");
// } else {
//     console.log("the light is on");
// }