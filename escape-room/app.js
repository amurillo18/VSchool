const readline = require("readline-sync");
const name = readline.question("What is your name? ");

function escapeRoom (options) {
    let foundKey = false;
    let escaped = false;
    while(!escaped) {
        let options = readline.question(`${name} what would you like to do? put hand in hole, find the key, or open the door?`);
    if(options == "put hand in hole") {
        console.log(`I am sorry ${name} but you are now dead`);
    } else if(options == "find the key") {
        foundKey = true;
        console.log(`${name} you have found the key`);
    } else if(options == "open the door" && foundKey == true) {
        escaped = true;
        console.log(`Congratulations ${name} you have escaped the room.`);
    } else if(options == "open the door" && foundKey == false) {
        console.log("the door is locked");
    } } 
}

escapeRoom();