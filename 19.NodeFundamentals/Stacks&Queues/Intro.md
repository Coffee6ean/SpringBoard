# Lists ADT Revisited -

### Lists ADT
Remember: ***an abstract data type*** defines requirements.
ADT for list:
- Keep multiple items
- Can insert or delete items at any position
- Can contain duplicates
- Preserves order of items

### Where’s the Bug?
_movieTicketSales.js_
```js
// list, in order, of people who want tickets
ticketBuyers = ["Elie", "Alissa", "Matt", "Michael"];

// ... lots of code

// sell tickets, in order
while (ticketBuyers.length) {
  buyer = ticketBuyers.pop();
  purchase(buyer);
}
```

- Is it right to sell tickets out of order?
- Of course: it’s hard to see this bug 500 lines later

### What’s the Performance Problem?
_printJob.js_
```js
// list of print jobs
jobs = ["resume.doc", "budget.xls", "plan.pdf", "css.css"];

// process list of print jobs in order
while (jobs.length) {
  let job = jobs.shift();
  printJob(job);
}
```

​- It’s ***O(n)*** to remove from start of array
    - Given that we’re removing from end, a LL would be better
- Of course: it’s hard to know _how_ a general list will be used

### Constraints Are Useful
In both cases, we only need some of the capability of the List ADT
- add new item (ticket buyer or print job) to end
- remove first item (buyer or job) from start
Knowing this, we could pick better data structure!
If done well, we could prevent mis-use (like buying out of order)
Let’s meet two new _ADTs_ for collections