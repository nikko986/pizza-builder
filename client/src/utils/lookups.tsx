const baconSrc = require('../assets/images/bacon.png'); 
const cheeseSrc = require('../assets/images/cheese.png'); 
const greenPepperSrc = require('../assets/images/greenpepper.png'); 
const mushroomSrc = require('../assets/images/mushroom.png'); 
const olivesSrc = require('../assets/images/olives.png'); 
const onionSrc = require('../assets/images/onion.png'); 
const pepperoniSrc = require('../assets/images/pepperoni.png'); 
const pineappleSrc = require('../assets/images/pineapple.png'); 
const sausageSrc = require('../assets/images/sausage.png'); 
const spinachSrc = require('../assets/images/spinach.png');

const smallSrc = require('../assets/images/small.png');
const mediumSrc = require('../assets/images/medium.png');
const largeSrc = require('../assets/images/large.png');

const thickSrc = require('../assets/images/thick.png');
const thinSrc = require('../assets/images/thin.png');

export const maxToppingsLookup: { [index: string]: number } = {
    'Small': 5,
    'Medium': 7,
    'Large': 9
}

export const toppingsLookup: { [index: string]: string } = {
    'Pepperoni': pepperoniSrc,
    'Mushrooms': mushroomSrc,
    'Onions': onionSrc,
    'Sausage': sausageSrc,
    'Bacon': baconSrc,
    'Extra Cheese': cheeseSrc,
    'Black Olives': olivesSrc,
    'Green Peppers': greenPepperSrc,
    'Pineapple': pineappleSrc,
    'Spinach': spinachSrc
}

export const sizesLookup: { [index: string]: string } = {
    'Small': smallSrc,
    'Medium': mediumSrc,
    'Large': largeSrc
}

export const crustsLookup: { [index: string]: string } = {
    'Thick': thickSrc,
    'Thin': thinSrc
}
