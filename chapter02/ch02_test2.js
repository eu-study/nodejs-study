console.log('\nnumber of argv params: %d\n', process.argv.length)
console.dir(process.argv);

process.argv.forEach((item, index) => {
	console.log(index + ' ' + item);
});