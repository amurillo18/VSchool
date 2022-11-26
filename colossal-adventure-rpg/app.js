const readline = require ("readline-sync");

let name = readline.question("Greetings player! You are embarking on a treacherous adventure to Whitegrave. What would you like your name to be?");
// defining player character and enemy characters
let player = {
    name: name,
    hp: 200,
    minDamage: 11,
    maxDamage: 30,
    inventory: []
 }

let enemies = [{
    name: "Alex",
    hp: 40,
    minDamage: 1,
    maxDamage: 15
}, {
name: "Mike",
hp: 50,
minDamage: 5,
maxDamage: 20
}, {
    name: "Steve",
    hp: 60,
    minDamage: 50,
    maxDamage: 100
}] 
// what can drop after player kills an enemy
let loot = [{
    name: "hpPotion"
},{
    name: "pistol"
}]
// is called to start the game with walking, also allows player to access inventory and quit the game. 
function menu () {
    let startQuestion = readline.question(`${name} what you like to do? Please enter the key that corresponds with your choice. w - walk, p or print - view inventory, q - quit game: `);
    if(startQuestion == 'w' || startQuestion == 'W' || startQuestion == 'walk' || startQuestion == 'Walk' || startQuestion == 'WALK') {
        walk()
    } else if(startQuestion == 'p' || startQuestion == 'print' || startQuestion == 'P' || startQuestion == 'Print' || startQuestion == 'PRINT' || startQuestion == 'i' || startQuestion == 'I' || startQuestion == 'inventory' || startQuestion == 'INVENTORY') {
        displayPlayerInfo();
    } else if(startQuestion == 'q'|| startQuestion == 'Q' || startQuestion == 'quit' || startQuestion == 'QUIT') {
        console.log("You have chosen to quit your journey. Good-Bye!")
        
    }
}
// main action of the game, goes until players hp reaches 300, allows player to decided whether to run or fight
function walk() {
    let steps = 0;
    while(player.hp < 300 && player.hp  > 0) {
 if (Math.floor(Math.random() * 4 < 1)) {
    let attackOrRun = readline.question("An enemy has appeared and attacked you. Would you like to run or fight? r - run, f -fight: " );
    if(attackOrRun == 'r' || attackOrRun == 'run' || attackOrRun == 'R' || attackOrRun == 'RUN') {
        run();
    } else {
        attack();
    }
    
 } else {
    steps = Math.floor(Math.random() * 16);
    console.log(`You have taken ${steps} step(s).`);
    menu();
 } }
//  if players hp is above 300, then they have completed their mission and beat the game
if(player.hp >= 300) {
 console.log("Congratulations you have defeated your enemies and have arrived at Whitegrave.") }
}
// when player decided to run, 50/50 shot they escape or must fight
function run() {
 let escape = Math.floor(Math.random() * 2);
 if (escape < 1) {
    console.log("Congratulations! You have managed to escape your enemy.");
    menu();
 } else {
    console.log("I'm sorry the enemy has managed to catch up to you. Now you must fight to the death.");
    attack();
 }
}
// defines what enemy is chosen and the enemies attack strength and what damage they have taken from player
let enemyDmgDelt = 0;
let enemyDmgTaken = 0;
let pickEnemy = [];
// defines what damage the player has taken from the enemy, and the players new hp level after hit
function attacked () {
    enemyDmgDelt = Math.floor(Math.random() * (pickEnemy.maxDamage - pickEnemy.minDamage));
    player.hp = Math.floor(player.hp - enemyDmgDelt);
    console.log(`${pickEnemy.name} has attacked you. You have taken ${enemyDmgDelt} damage. You now have ${player.hp}hp left.`)
}
// defines what damage the enemy has taken from the player, and the enemies new hp level after hit
function attacks () {
    enemyDmgTaken = Math.floor(Math.random() * (player.maxDamage - player.minDamage));
    pickEnemy.hp = Math.floor(pickEnemy.hp - enemyDmgTaken);
    console.log(`You have attacked ${pickEnemy.name} and have delt ${enemyDmgTaken} damage. They now have ${pickEnemy.hp}hp left. `)
}
// if player decides to fight the enemy this function will pick the enemy and will go between player and enemy allowing each a hit until one of them loses all hp
function attack() {
    pickEnemy = enemies[Math.floor(Math.random() * 3)];
while(player.hp > 0 && pickEnemy.hp > 0 ) {
    attacked();
    if(player.hp > 0) {
    attacks(); 
    }
}
if (player.hp <= 0 && pickEnemy.hp > 0 || player.hp <= 0 && pickEnemy.hp <= 0) {
    console.log(`${name}, you have been murdered and have failed to complete your mission. GAME OVER!!!!!`)
} else if(player.hp > 0 && pickEnemy.hp < 0){
    // drops loot from the fallen enemy and puts into the players inventory, the player continues to try and walk
    let lootItem =loot[Math.floor(Math.random() * 2)];
    player.inventory.push(lootItem);
    player.hp = Math.floor(Math.random() * 50) + player.hp;
    console.log(`Congratulations you have defeated the enemy and have recieved ${lootItem.name} in your inventory. You now have ${player.hp}hp. You continue walking and..`)
    walk();
}}

function displayPlayerInfo() {

        console.log(`Name: ${player.name} hp: ${player.hp} inventory: ${player.inventory}`);
        menu();
}    
// calls the menu function to start the game
menu();