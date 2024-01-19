const instructor = {
  id: 44,
  name: 'Colt',
  isHilarious: true,
  funFacts: {
    favoriteFood: 'Burrito',
    favoriteDrink: 'Old Fashioned',
  }
};
const {funFacts: {favoriteFood, favoriteDrink}} = instructor;
console.log(favoriteFood); // 'Burrito'