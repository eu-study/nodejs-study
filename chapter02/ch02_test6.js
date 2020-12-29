let calc2 = require('./calc2');

console.log('module.exports = calc.add : ' + calc2.add(15, 15));

let nconf = require('nconf');
let osValue = nconf.get('OS');
console.log("os env value: " + osValue);
console.dir(nconf.env().argv());