console.log("Hello World!");

const readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Entrer un premier nombre ", (input1) => {
    let number1 = parseInt(input1);
    rl.question("Entrer un deuxiemme nombre ", (input2) => {
        let number2 = parseInt(input2);
        let sum = number1 + number2;
        let produit = number1 * number2;
        let sous = number1 - number2;
        let division = parseFloat(number1 / number2);
        console.log(`La somme de ${number1} et ${number2} est ${sum}`);
        console.log(`Le produit de ${number1} et ${number2} est ${produit}`);
        console.log(`La soustraction de ${number1} et ${number2} est ${sous}`);
        console.log(`La division de ${number1} et ${number2} est ${division}`);
        rl.close();
    });
});
