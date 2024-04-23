class PersonNode {
    constructor(name, adjacent = new Set()) {
        this.name = name;
        this.adjacent = adjacent;
    }
}

const homer = new PersonNode('homer simpson');
const marge = new PersonNode('marge simpson');
const maggie = new PersonNode('maggie simpson');

homer.adjacent.add(marge);
marge.adjacent.add(homer);
maggie.adjacent.add(homer);
maggie.adjacent.add(marge);
homer.adjacent.add(maggie);
marge.adjacent.add(maggie);

//Graph - Bilateral Connection Method
class FriendGraph {
    constructor() {
        this.node = new Set();
    }

    //Static Method - Adding Vertex
    addPerson(node) {
        this.node.add(node); 
    }

    //Add Multiple Nodes
    addPeople(peopleList) {
        for(let node of peopleList) {
            this.addPerson(node);
        }
    }

    //Set Relationship
    setFriends(person1, person2) {
        person1.adjacent.add(person2);
        person2.adjacent.add(person1);
    }
}

const lisa = new PersonNode('lisa simpson');
const grampa = new PersonNode('grampa simpson');

const friends = new FriendGraph();
friends.addPeople([homer, marge, maggie, lisa, grampa]);
friends.setFriends(homer, marge);
friends.setFriends(homer, lisa);
friends.setFriends(homer, maggie);
friends.setFriends(marge, maggie);
friends.setFriends(maggie, lisa);
friends.setFriends(maggie, grampa);
