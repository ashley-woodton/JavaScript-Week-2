function bmi(mass, height) {
    return mass / (height * height);
}

var heightT = 9;
var heightJ = 10;
var massT = 8;
var massJ = 45;

var tBMI = bmi(massT, heightT);
var jBMI = bmi(massJ, heightJ);

let higherBMI = tBMI > jBMI;

console.log(`Is Tom's BMI higer than Jerry's? ${higherBMI}`);
