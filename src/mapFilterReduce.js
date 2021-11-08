let cart = [
    { id: 1, productName: "Telefon", quantity: 23, unitPrice: 8000 },
    { id: 2, productName: "Bardak", quantity: 20, unitPrice: 30 },
    { id: 3, productName: "Kalem", quantity: 11, unitPrice: 10 },
    { id: 4, productName: "Şarj Cihazı", quantity: 3, unitPrice: 85 },
    { id: 5, productName: "Kitap", quantity: 3, unitPrice: 40 },
    { id: 6, productName: "Pot", quantity: 5, unitPrice: 150 },
];

cart.map(product => {
    console.log(product.productName + " : " + product.unitPrice * product.quantity);
});



let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0);

console.log("TOTAL :", total);




let quantityOver10 = cart.filter(product => product.quantity > 10);

console.log("QUANTITY OVER 10 :", quantityOver10);






















//*******************************************************************************


function addToCart(sepet) {

    sepet.push({ id: 7, productName: "Ruhsat", quantity: 1, unitPrice: 20 });

}

addToCart(cart);

console.log(cart);

//*******************************************************************************

let sayi = 10;

function sayiTopla(number) {

    return number += 1;

}

sayiTopla(sayi);
console.log(sayi);