const userAge = parseInt(prompt("Enter your age:"));
if (userAge < 5) {
    console.log("Toddler (under 5 years)");
} else if (userAge <= 12) {
    console.log("Child (5-12 years)");
} else if (userAge <= 19) {
    console.log("Teenager (13-19 years)");
} else if (userAge <= 20) {
    console.log("Young Adult (20-35 years)");
} else if (userAge <= 36) {
    console.log("Middled-Aged (36-60 years)");
} else {
    console.log("Senior (Over 60 years)");
}