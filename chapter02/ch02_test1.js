console.log('hello world!');
console.log('こんにちは');
console.log('%s', '안녕하세요');

console.log('%d + %d = %d', 1, 2, 3);

let person = {
    name: 'eubug',
    age: 26
};

console.log('JS object. %j', person);

console.log('\n\n');
console.dir(person);
console.log('\n\n');

console.time('duration_time_for');
let result = 0;
for (let i = 0; i < 10000; ++i) {
    result += i;
}
console.timeEnd('duration_time_for');
console.log("\n");

console.log("file name: %s", __filename);
console.log("path: %s", __dirname);