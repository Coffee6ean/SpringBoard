# Self Balancing BSTs -

- Binary search trees can suffer from being imbalanced
- BSTs with internal algorithms for self-balancing:
    - AVL *(easier, faster)*
    - Red Black *(more complex, ends up more balanced)*
    - B-Tree *(more complex, offers other features for large data)*

For example, AVL Trees keep track in tree of current “balanced-ness”:

![Untitled](https://lessons.springboard.com/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1b691dc9-8bf8-44c7-81b4-16c48033c666%2FUntitled.png?table=block&id=eea82fca-d704-4f79-983b-ec74dc0a8970&spaceId=163f1722-85e9-4a3c-adba-457a91094f00&width=960&userId=&cache=v2)

- Each node is scored based on the height of its right subtree compared to the height of the left subtree
- In an AVL tree, this score must be -1, 0, or 1.
