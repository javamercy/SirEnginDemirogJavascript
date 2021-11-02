for (let i = 1; i <= 1000; i++) {
    let perfectNumbers = [];
    let sum = 0;
    let number = i;

    for (let j = 1; j <= number; j++) {

        if (number % j == 0) {
            sum += j;
        }
    }

    if (sum == number * 2) {

        console.log(number, "mükemmel bir sayıdır.");
    }


}