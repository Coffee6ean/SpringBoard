# What is sorting? - 

Rearranging items in a collection so that the items are in some kind of order.

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue

### Why Care?
- Long-term area of computer science study
    - Great place to understand runtime
    - Great place to learn algorithm design
- Common interview questions

### Why Are There Different Algorithms?
- Different runtimes: O(n$^2$), O(n log n)
- Some perform better with different input
    - eg, Some can sort almost-sorted much faster
- Some are easier/harder to write/understand

## Simple Algorithms:

### BubbleSort
A sorting algorithm where the largest values bubble up to the top!

```jsx
[ 5, 3, 4, 1, 2 ]
```

```jsx
[ 3, 5, 4, 1, 2 ]
```

```jsx
[ 3, 4, 5, 1, 2 ]
```

```jsx
[ 3, 4, 1, 5, 2 ]
```

```jsx
[ 3, 4, 1, 2, 5 ]
```

- We now know 5 is in right place, and repeat with start of array

### BubbleSort Pseudocode
- Loop with ***i*** from end of array towards beginning
    - Loop with ***j*** from the beginning until ***i - 1***
    - If ***arr[j]*** is greater than ***arr[j+1]***, swap those two values!
- Return the sorted array
- This technique is called Bubble Sort. Why?
    - Because the big numbers bubble to the top!

### Quadratic Sorts
- Bubble sort is O(n$^2$) (quadratic)
- Simple and fun to tinker with
- Other common O(n$^2$) sorts
    - Selection sort
    - Insertion sort
- Both are much faster than bubble sort!
- But all *scale* in quadratic time
