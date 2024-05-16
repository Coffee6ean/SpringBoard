# Tries - 

![9.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6dbe1f1-e329-413c-8ec2-4f661271de58/9.jpg)

(stores *at*, *cat*, *cats*, *cap*, *cape*, *car*, *care*)

- Often called “prefix trees” *(pronounced like “trees” or “tries”)*
- Often used for searching for words, autocorrect, or autocomplete

### Typical Methods
Method names vary across implementations, but one set:

- ***addWord(str)***: Add a word to the trie
- ***removeWord(str)***: Remove a word from the trie
- ***hasWord(str)***: See if a Trie has a word
- ***autoComplete(str)***: Given a string, return a list of all words
