while (true) {
    let input = prompt("Введіть ціле число:");

    if (input === null) {
        break;
    }

    let n = Number(input);
    let isPrime = true;

    if (!Number.isInteger(n) || n <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    alert(isPrime ? "Це число просте" : "Це не просте число");
}


