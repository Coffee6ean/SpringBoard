const order2 = {
    variety: "green",
    teaName: "silver needle",
    origin: "Taiwan",
    price: 12.99,
    hasCaffeine: true
    //quantity: 4
}

function getTotal(tea) {
    const{quantity, price} = tea;
    return quantity * price
}

function getTotalDes({quantity:qty = 1, price}) {
    return qty * price
}

const longJumpResults = ["Tammy", "Jessica", "Violet"];
const swimMeetResults = ["Japan", "France", "Chile"];

function awardMedals([gold, silver, bronze]) {
    return {
        gold,
        silver,
        bronze
    };
}