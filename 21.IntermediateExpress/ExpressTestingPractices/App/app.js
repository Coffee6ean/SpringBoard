function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

module.exports = rollDice;
