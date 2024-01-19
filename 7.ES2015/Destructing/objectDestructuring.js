const teaOrder = {
    variety: "oolong",
    teaName: "winter sprout",
    origin: "Taiwan",
    price: 12.99,
    hasCaffeine: true,
    quantity: 3
}
/*
const price = teaOrder.price;
const quantity = teaOrder.quantity;
const teaName = teaOrder.teaName;
*/
//Unpacking properties into variables
//const {price, quantity, teaName, ...rest} = teaOrder;
const {origin} = teaOrder;
//const {country} = teaOrder;  => undefined

//Assigning a default value to property (only when undefined)
const {brewTemp = 175} = teaOrder;
//Rename property
const {teaName: tea} = teaOrder;

function checkout(tea) {
    const {quantity = 1, price} = tea;
    return quantity * price;
}

const order1 = {
    variety: "green",
    teaName: "silver needle",
    origin: "Taiwan",
    price: 12.99,
    hasCaffeine: true,
}

checkout(order1);
