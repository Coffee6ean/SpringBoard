# Demo Time -

### Deadly Doubles
A casino of different dice table games.

Try it out: http://temp.joelburton.com/casino

## Our Components:

```txt
App
  Casino
    Tables
      Table [game=DeadlyDouble]
        DeadlyDouble
          DiceSet
            Die  (3x)
      Table [game=DeadlyDouble, numDice=4, numSides=12]
        DeadlyDouble
          DiceSet
            Die  (4x)
      Table [game=PsychicDice]
        PsychicDice
          DiceSet
            Die  (3x)
      Table [game=RollEm]
        RollEm
          DiceSet
            Die  (3x)
```

### React Features
- A generic component, ***Table***, which can render different games.
- Another example of polymorphism: you could substitute ***AltDie*** for a different looking die in ***DiceSet***, and everything works
- React’s context manager: ***Casino*** lets you choose a favorite color, and the Die (several layers down) can access the color you chose.

### Guidelines for When To Make a Component
- If I didn’t, and inlined this in the parent component, would that make the parent state more complex?
    - Mixing together the state in the games [what are values of the dice] with the state in ***Table*** (how many wins/losses) would make things more complex
- Can I “not repeat myself”
    - Having ***Table*** lets us reduce repetition in the different game components.
- Might this component be usable elsewhere?
    - The ***DiceSet*** is useful in all of the games
- Might I want to swap it out?
    - Having the ***Die*** be a separate component makes it easier to replace it for ***DieAlt***

### Guidelines for When To Use Context
- Is this something created high-up, but needed far down, and the things in-between don’t care about it?
    - The player choose a color once, in the ***Casino***, but only the ***Die***, far down, cares about it
