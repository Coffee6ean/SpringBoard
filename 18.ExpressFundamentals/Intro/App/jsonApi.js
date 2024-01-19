const express = require('express');

const app = express();

app.use(express.json());

const CANDIES = [
    {name:'snickers', qty:43, price:1.50},
    {name:'skittles', qty:26, price:0.99}
];

app.get('/candies', (req, res) => {
    res.json(CANDIES);
});

app.post('/candies', (req, res) => {
    if(req.body.name.toLowerCase() === "circus peanuts") {
        res.status(400).json({msg: "Forbidden Request"})
    }
    CANDIES.push(req.body);
    res.status(201).json(CANDIES);
})

app.listen(3000, function() {
    console.log('Server running on port 3000');
});
