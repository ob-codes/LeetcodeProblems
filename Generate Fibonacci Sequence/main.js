/**
 * @return {Generator<number>}
 */
var fibGenerator = function() {
  function MakeSeries() {
      let temp = 0;
      this.prev = 0;
      this.curr = 0;
      this.value = 0;
      this.next = function() {
          this.value = this.prev + this.curr;
          
          this.value == 0 ? this.curr = 1 : 0;
          this.prev = this.curr ;
          this.curr = this.value;
          return this;
      }
  }
  return new MakeSeries();
};


const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
