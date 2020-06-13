var express = require('express');
var router = express.Router();

router.get('/pizza-size', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify([
        { name: 'Small', price: 8 },
        { name: 'Medium', price: 10 },
        { name: 'Large', price: 12 },
    ]));
});

router.get('/crust', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify([
        { type: 'Thin', price: 2 },
        { type: 'Thick', price: 4 }
    ]));
});

router.get('/toppings', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify([
        { name: 'Pepperoni'},
        { name: 'Mushrooms'},
        { name: 'Onions'},
        { name: 'Sausage'},
        { name: 'Bacon'},
        { name: 'Extra Cheese'},
        { name: 'Black Olives'},
        { name: 'Green Peppers'},
        { name: 'Pineapple'},
        { name: 'Spinach'}
    ]));
});

module.exports = router;