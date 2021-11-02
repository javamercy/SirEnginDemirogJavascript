function isBuddyNumbers(number1, number2) {

    let total1 = 0;
    let total2 = 0;

    for (let i = 1; i < number1; i++) {

        if (number1 % i == 0) {

            total1 += i;
        }
    }

    for (let j = 1; j < number2; j++) {

        if (number2 % j == 0) {

            total2 += j;
        }
    }

    if (total1 == number2 && total2 == number1) {

        console.log(number1, number2, "arkadaş sayılardır");
    }
}

isBuddyNumbers(220, 284);