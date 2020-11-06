var num = prompt("Enter a number 1 - 12.");

while (parseInt(num) < 1 || parseInt(num) > 12) {
    alert("Invalid number");
    num = prompt("Enter a number 1 - 12.");
}

switch (num) {
    case "1":
        console.log(`${num} January`);
        break;
    case "2":
        console.log(`${num} February`);
        break;
    case "3":
        console.log(`${num} March`);
        break;
    case "4":
        console.log(`${num} April`);
        break;
    case "5":
        console.log(`${num} May`);
        break;
    case "6":
        console.log(`${num} June`);
        break;
    case "7":
        console.log(`${num} July`);
        break;
    case "8":
        console.log(`${num} August`);
        break;
    case "9":
        console.log(`${num} September`);
        break;
    case "10":
        console.log(`${num} October`);
        break;
    case "11":
        console.log(`${num} November`);
        break;
    case "12":
        console.log(`${num} December`);
}