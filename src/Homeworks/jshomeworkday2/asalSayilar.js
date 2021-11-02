function findPrime(...numbers) {

    numbers.forEach((number) => {

        let isPrime = true;

        for (let i = 2; i < number; i++) {


            if (number % i == 0) {

                isPrime = false;
                break;
            }
        }

        if (isPrime) {

            console.log(number, "asal sayıdır.");
        } else {

            console.log(number, "asal sayı değildir.");
        }
    });




}

findPrime(2, 3, 4, 5, 6, 7, 8, 101);