let primes = [];

for (let i = 2; i <= 1000; i++) {

    let number = i;
    let isPrime = true;

    if (i == 2) {
        primes.push(i);
        continue;
    }

    for (let j = 2; j < number; j++) {

        if (number % j == 0) {

            isPrime = false;
            break;
        }
    }

    if (isPrime) {

        primes.push(number);
    }


}

console.log(primes);