//Modules


//Common Js  everyfile is module (by default)
//Modules encapsulated code(only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative_flavour');
require('./7-mind_grenade');

console.log(names);
console.log(data);
sayHi("Mudasir");
sayHi(names.ahmad);