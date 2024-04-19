/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  let prev = 0, current = 0, next=0;

  yield 0;
  
  prev = 1;
  yield 1;

  current = 1;
  yield 1;

  while (true) {
    next = current + prev;  
    prev = current;
    current = next;
    yield next;
  }
};


const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
