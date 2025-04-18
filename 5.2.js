const rate = 26;
let dollars = 10;

do {
    console.log(`${dollars} USD = ${dollars * rate} UAH`);
    dollars +=10;
} while (dollars <= 100);