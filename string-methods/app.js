// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
function capAndLowercase(string) {
    let upper = string.toUpperCase();
    let lower = string.toLowerCase();
    return upper + lower;
}
console.log(capAndLowercase("helLO"));

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
function halfLength(string) {
    let half = Math.floor(string.length / 2);
    return half;
}
console.log(halfLength("Luke I am your Father"));

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.
function firstHalf(string) {
    let half = halfLength(string);
    let first = string.slice(0, half);
    return first;
}
console.log(firstHalf("Hello"));

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
function firstCapSecondLower(string) {
    let half = halfLength(string);
    let first = string.slice(0, half);
    let upper = first.toUpperCase();
    let second = string.slice(half);
    let lower = second.toLowerCase();
    let lowerUpper = upper + lower;
    return lowerUpper
}
console.log(firstCapSecondLower("Hello"));

// Optional Code Challenge
// Write a function that takes a string as a parameter and capitalizes any character that follows a space.
function capAfterSpace(string) {
    // split string into words at space
    let words = string.split(" ");
    // iterate over each word
     for (let i = 0; i < words.length; i++) {
        // capitilize first letter the concatenate capped first letter with the rest of the string
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
     }
    //  join words to form sentence
     let newString = words.join(" ");
     return newString;
}
console.log(capAfterSpace("hey friends! practice practice practice!"));