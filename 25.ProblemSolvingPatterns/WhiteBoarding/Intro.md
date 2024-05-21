# Whiteboarding -

## Introduction:

### Goals
- Overview of whiteboard interviews
- Process for answering whiteboard challenges
- Live demo
- Practice

### Whiteboarding Interview
- An interview style that poses a coding challenge …
- Which you do, live, at a whiteboard
    - or, sometimes, on paper or a computer

### Why Do They Do This?
They want to assess

- Your understanding of algorithms
- Your problem-solving techniques
- How you communicate your thought process
- How you work under pressure

## Process:

### Listen Carefully
*“Write a function that is given a list of numbers.
Find all the even numbers in the list and return the average of them.”*

### Repeat it Back
*“Ok, so you want me to write a function that’s called with a list of numbers, and returns average of the even numbers?”*

### Ask Clarifying Questions
- Do I need to handle other kinds of things in list?
    - For example, if a string were in the list?
- Will these all be integers?
- Do I just skip over odd numbers?
- By “average,” do you mean the mean? Median? Mode?
- Do I print the result or return it?
- Am I allowed/not allowed to use certain built-in methods?

Why?

- To buy more time.
- To understand the challenge details
- So you write bug-free code

### Write Down the Requirements
- Make a short, bulleted list of requirements on whiteboard
    - So you can’t forget any details
    - Gives you a moment to think with less pressure
- For example:
    - function given integers
    - just skip odd numbers
    - get mean of even numbers
    - return mean

### Write Down a Test Case

```
[1, 2, 4, 5] => 6 / 2 => 3
```

Any other test case you’d want?

Perhaps one with non-integer average

```
[1, 2, 4, 8] = 14 / 3 => 4.6666
```

### Stop and Think
Don’t just start writing code!

Think about your strategy

“I’ll loop over the list, skipping odds and non-numbers. I’ll keep the sum of the evens, and the number of them. Once I finish looping, I can divide the sum by the count.”

### Pseudo-Code
This can keep you from getting lost in the weeds

```jsx
for number in list
    if not even, skip
    add number to sum
    increase count by 1
return sum divided by count
```

### Code
- Start at top-left of the board
    - You want space to fit code!
- Write neatly and evenly
    - In Python, you may find it helpful to show indentation with lines

```jsx
function avgEvens(nums) {
    let sum = 0;
    let count = 0;

    for (let num of nums) {
        if (num % 2 === 0)  continue;

        sum += num;
        count += 1;
    }

    return sum / sum;
}
```

### Test Your Code

```jsx
function avgEvens(nums) {
    let sum = 0;
    let count = 0;

    for (let num of nums) {
        if (num % 2 === 0)  continue;

        sum += num;
        count += 1;
    }

    return sum / sum;
}
```

- Go slowly. Be the computer.
- Keep track of vars (use a table)
- We’re skipping *even* numbers!
- Dividing ***sum*** by ***sum***, not ***count***

```jsx
function avgEvens(nums) {
    let sum = 0;
    let count = 0;

    for (let num of nums) {
        if (num % 2 !== 0)  continue;

        sum += num;
        count += 1;
    }

    return sum / count;
}
```

nums = [1, 2, 4, 8]

| number | sum | count |
| --- | --- | --- |
| 1 | 0 | 0 |
| 2 | 2 | 1 |
| 4 | 6 | 2 |
| 8 | 14 | 3 |

return 14 / 3
