let favNumb = parseInt(prompt("Enter your favorite number:"));
let guess;

while(true){
    guess = prompt("Guess my favorite number: ");
    guess = parseInt(guess);
    
    if (guess === favNumb){
        console.log("Congratulations You guessed it!");
        break;
    } else if (guess< favNumb){
        console.log("Too low. Try again");
    } else {
        console.log("Too high. Try again");
    }
}