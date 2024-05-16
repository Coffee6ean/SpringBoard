# Choosing an Algorithm -

- Performance for your requirements
    - For small ***n***, simple sorts can be faster
- Runtime
- Likely Structure of your data:
    - Random?
    - Almost reversed?
    - Almost sorted?
    - Likely duplicates?

Space requirements — ie, does it need to make a copy of the list to run? Or create a receptacle for the result list to land?

Some properties your list’s data might have almost sorted or lots of duplicates. These conditions can affect runtime.

Insertion sort wins super hard at sorting almost sorted lists.

For example, quick sort is very fast at sorting almost random lists, but insertion sort is much much faster at sorting lists with a lot of duplicates.

To explore advantages and disadvantages of the algorithms, check out this page, which visualizes it for you and then click through to read the descriptions.

http://www.sorting-algorithms.com/

### Adaptive Sorting Algorithms
Adaptive sorts examine input data, and can:

- Choose underlying sorting algorithm to use
- Switch between algorithms during same sort
    - Example: starting sorting with merge sort, switch to insertion sort once subarrays get small (typically faster than merge sorting all)

### What Do Python and JavaScript Use?
- JavaScript:
    - Chrome & Node: “Timsort”, an adaptive Merge Sort/Insertion Sort
    - Firefox: Merge Sort
- Python:
    - “Timsort”

## Sorting Topics:

### Comparators
- JavaScript built-in ***sort*** method accepts optional *comparator function*
- Can provide this function to decide how two items compare
- Comparator takes pair of elements (***a*** & ***b***) and returns sort order
    - Returns negative number: ***a*** should come before ***b***
    - Returns positive number: ***a*** should come after ***b***
    - Returns 0: ***a*** and ***b*** sort equally

_numeric sort_
```jsx
let numbers = [100,60,1000,2000]

numbers.sort()                 // [100, 1000, 2000, 60]
numbers.sort((a,b) => a - b)   // [60, 100, 1000, 2000]
```

_sort by “name” property of objects_
```jsx
let instructors = [
  { name: "Elie",   favLang: "English" },
  { name: "Joel",   favLang: "Python" },
  { name: "Alissa", favLang: "JS" }
]

// sort the instructors by name alphabetically
instructors.sort() // not going to help!

instructors.sort((a,b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
})
```

### DSU Pattern
- Comparator functions may have to run O(n log n) times — a lot!
- Some sorting libraries don’t use comparators & use a “DSU pattern”
    - *Decorate:* wrap item with “key” for sorting it
    - *Sort:* using that key
    - *Undecorate:* remove that wrapper to reveal original item
- This can be faster than comparators, but often uses more memory

Python uses DSU, not comparators:

_sort by “name” key of dictionaries_
```jsx
instructors = [
      { "name": "Elie",   "fav_lang": "English" },
      { "name": "Joel",   "fav_lang": "Python" },
      { "name": "Alissa", "fav_laang": "JS" }
    ]

instructors.sort(key=lambda item: item['name'])
```

### Stable Sorts
Sometimes, you are sorting items that are different but would sort same:

For example, to sort these by ***priority***:

```jsx
tasks = [ { priority: 1, "Make logo" },
          { priority: 2, "Set up server" },
          { priority: 1, "Hire team" },
          { priority: 3, "Launch" } ];
```

A “stable sort” guarantees that *Make logo* sorts before *Hire team* — even though both have equal priorities, they started in that order

Python & modern JavaScripts all promise a stable sort

### Collations
How two strings compare in a language is controlled by their “collation”:

- Capitalization: does “a” sort before or after “Z”?
- Does “é” sort with “e”? After “e” and before “f”? At the end?
- Some languages/frameworks/databases let you choose a collation for a sort
- In others, you’d have to do this manually, in a complex comparator/DSU

### Natural Sort
Humans often expect things to sort “intelligently”, like these addresses:

_mixing intelligently numeric & lexicographic sorting_
```
24 Apple Street
100 Apple Street
100 Berry Street
500 Cherry Street Apt #34
500 Cherry Street Apt #100
```

Or these 80s band names:

_not considering unimportant words, like leading “The”_
```
The Clash
Cyndi Lauper
The Smiths
Talking Heads
U2
```

These are examples of “natural sorts”

### Comparative/Non-Comparative Sorts
Most sorting algorithms are “comparative”: Items need to be compared against each other to know how to sort them

Comparative sorting can never be better than O(n log n)

But not all sorting requires comparison!

_movie data_
```jsx
let movies = [
  {title: "ET", stars: 4},
  {title: "Star Wars", stars: 5},
  {title: "Star Trek", stars: 3},
  {title: "ET II", stars: 1},
  // 10,000 other films
]
```

To sort by just # of stars, we don’t need to compare!

- We only have 5 different buckets (for # of stars)
- We can scan list and just assign to buckets
- This is O(n), not O(n log n)

Learn more about [non-comparative sorts](http://pages.cs.wisc.edu/~paton/readings/Old/fall08/LINEAR-SORTS.html)

## Resources:

### What Do You Need To Know
Need to know:

- Best possible “comparative” sort is O(n log n)
- Sorting in JavaScript:
    - How to use ***.sort()*** method
    - Remember: JS sorting is lexicographic, not numeric, by default!
    - How to write a comparator function
- Important concepts: stable sorts, natural sorts

Perhaps useful to know:

- How to implement merge sort
- How to implement insertion sort
- How to implement quicksort

### Resources
[Sorting Out The Basics Behind Sorting Algorithms](https://medium.com/basecs/sorting-out-the-basics-behind-sorting-algorithms-b0a032873add)

[Timsort](https://en.wikipedia.org/wiki/Timsort)

[Visualizing Sorts](https://visualgo.net/en)
