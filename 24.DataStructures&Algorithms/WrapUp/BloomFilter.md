# Bloom Filter -

- A data structure that uses a hash function to store values
- Quickly answer questions like “Is particular item in a collection?”
    - Very rarely, it will say *Yes* when the answer is actually *No*
    - It will never say *No*, when the answer is actually *Yes*
- The more space, the fewer false positives
- Useful when you have tolerance for false negatives but not false positives
    - Caching
    - Recommendation Engines (has this person seen a particular article?)
    - Test if a URL has been visited for privacy / security concerns
