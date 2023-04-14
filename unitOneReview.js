// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE

let string = "This is a string.";
let number = 37;
let boolean = true;

const name = "Blake";

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguage' that include 4 coding language of your choice. 
*/

//CODE HERE

const codingLanguage = [ "Java", "JavaScript", "Bootstrap", "Python" ];

/* 
    Access the 3rd element of the 'codingLanguage' array.
*/

//CODE HERE

let index = 2
console.log(codingLanguage[index]);

console.log(codingLanguage[2]);

let spicey = codingLanguage.splice(2, 1)[0];
console.log(spicey)

/*
    Copy the array using one of the array methods, and call it 'codingLanguage2.'
*/

//CODE HERE

let codingLanguage2 = codingLanguage.slice(0);
console.log(codingLanguage2);

/* 
    Add another coding language to the codingLanguage2 array.
*/

//CODE HERE

codingLanguage2.push("MongoDB");
console.log(codingLanguage2);

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE

instruments.pop();
console.log(instruments);

/* 
    Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE

instruments.shift();
console.log(instruments);

/* 
    Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE

instruments.unshift("guitar");
console.log(instruments);


/* 
    Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE

instruments.splice(2, 1, "glockenspiel");
console.log(instruments);

// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// if (condition){executeCode} else (){}

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE

if (num % 2 === 0){
    console.log(num)
} else {
    console.log(`${num} is not an even number.`)
}

// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE

if (score > 70){
    console.log("The grade is 'A'");
} else if (score > 40){
    console.log("The grade is 'B'");
} else if (score > 10){
    console.log("The grade is 'C'");
} else {
    console.log("Failed");
} 

// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE

let totalPrice = 0;
for (let i=0; i<price.length; i++){
    totalPrice += price[i];
}

console.log(`Sum is ${totalPrice}`);


/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

let avg = totalPrice / price.length;
console.log(avg)

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE

for (let i=0; i<colors.length; i++){
    if (colors[i] === "red") {
        console.log("apple")
    } else if (colors[i] === "green"){
        console.log("melon")
    } else if (colors[i] === "yellow"){
        console.log("banana")
    }
}

// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning: Aesthetic, effective language, function and purpose for software
    -- Analysis of Requirements: Planning problems to be solved with programming
    -- Design: wireframing, color scheme, brand image
    -- Implementation: minimum viable software/product
    -- Testing & Integration: iterates and improves minimum viable software
    -- Maintain: rover to monitor activies and interactions on software
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git: local copy of code repositories, version control software
        -- github: same as git, but in the cloud
        -- git init: initializes a git repository
        -- git clone: download someone else's git repository from github
        -- git status: shows status 
        -- git add: saves/stages git code ready for next commit
        -- git commit: saves code repository
        -- git push: pushes local copy to the cloud
    - How to push git to github
*/

console.log('hello')
