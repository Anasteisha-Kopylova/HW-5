let N;

do {
    N = prompt('Enter an integer:');
    
    if (N === null) break;

    if (isNaN(N) || N < 1) {
        alert('Please enter a valid integer grater than or equal to 1!');
        continue;
    }

    let result = 'All integers whose squares do not exceed the given number: \n';

    for (let i = 1; i <= 100; i++) {
        if (i * i <=N) {
            result += i + '\n';
        }
    }

    alert(result);

} while (true);

