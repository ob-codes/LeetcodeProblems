/**
 * @return {Generator<number>}
 */
var fibGenerator = function() {
};


const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
