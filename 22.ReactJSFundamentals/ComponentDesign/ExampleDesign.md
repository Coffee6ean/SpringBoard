# Example Design: Dice Game

### Let’s Design an App!
![MainGame-1](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb0761714-242d-4761-8d0a-03d7fc55dd0b%2FUntitled.png?table=block&id=c7764ea7-7bfd-45cc-929f-e669a81aafc5&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

_in App.js_
```html
<Dice />
```

Should show 6 dice

Value 1-20 generated when button clicked

### Should Be Reusable, Flexible
![MainGame-2](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6221ef78-bcbe-4ae1-9168-0e076634c03b%2FUntitled.png?table=block&id=fc8dbe18-0bda-47fb-bbc7-eebcb9548401&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

![MainGame-3](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6221ef78-bcbe-4ae1-9168-0e076634c03b%2FUntitled.png?table=block&id=fc8dbe18-0bda-47fb-bbc7-eebcb9548401&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=2000&userId=&cache=v2)

_in App.js_
```jsx
function App() {
  return (
    <div className="App">
      <Dice />
```

Should be able to control title, num dice to show, and max value

### Design
- What components will we need?
- What props will they need?
- What state will we need?

### Dice Component
- Props
    - ***title***: title of the game
    - ***numDice***: num of dice to display
    - ***maxVal***: max value of the die
- State
    - ***values***: array of `[val, val, val, ...]` for dice
- Events
    - ***onClick***: re-roll dice and regenerate values in state

### Die Component
- Props
    - ***val***: value for this die
- State
    - none!
- Events
    - none!
