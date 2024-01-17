// Queues as Array => Not optimal, since removing takes O(n)
class Queue {
    constructor() {
        this.data = [];
    }

    // Methods
    enqueue(val) {
        this.data.push(val);
    }

    dequeue(val) {
        return this.data.shift();
    }
}

/*
// list of print jobs
jobs = ['resume.doc', 'budget.xls', 'plan.pdf', 'css.css'];

// process list of print jobs in order
while(jobs.length) {
    let job = job.shift();
    console.log(job);
}
*/

// Queues as Linked List / Doubly Linked List => Optimal, adding and removing O(1)
