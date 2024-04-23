class PersonNode {
    constructor(name, adjacent = new Set()) {
        this.name = name;
        this.adjacent = adjacent;
    }
}

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

    //Verify Association
    areConnected(person1, person2) {
        let toVisitStack = [person1];
        let seen = new Set(toVisitStack);
        while(toVisitStack.length) {
            let currentPerson = toVisitStack.pop();
            console.log("DFS Visiting:", currentPerson.name);

            if(currentPerson === person2) return true;

            for(let neighbor of currentPerson.adjacent) {
                if(!seen.has(neighbor)){
                    toVisitStack.push(neighbor);
                    seen.add(neighbor);
                }
            }
        }

        return false;
    }

    areConnectedRecuresive(person1, person2, seen=new Set([person1])) {
        if(person1 === person2) return true;
        for(let neighbor of person1.adjacent) {
            if(!seen.has(neighbor)) {
                seen.add(neighbor);
                if(this.areConnectedRecuresive(neighbor, person2, seen)) {
                    return true;
                }
            }
        }
        
        return false;
    }
}

const homer = new PersonNode('homer simpson');
const marge = new PersonNode('marge simpson');
const maggie = new PersonNode('maggie simpson');
const lisa = new PersonNode('lisa simpson');
const grampa = new PersonNode('grampa simpson');
const moe = new PersonNode('moe');
const barney = new PersonNode('barney');
const lenny = new PersonNode('lenny');

const friends = new FriendGraph();
friends.addPeople([homer, marge, maggie, lisa, grampa]);
friends.setFriends(homer, marge);
friends.setFriends(homer, lisa);
friends.setFriends(homer, maggie);
friends.setFriends(marge, maggie);
friends.setFriends(maggie, lisa);
friends.setFriends(maggie, grampa);

friends.addPeople([moe, barney, lenny]);
friends.setFriends(moe, barney);
friends.setFriends(barney, lenny);

friends.areConnected(moe, lisa);
