var Benchmark = require('benchmark');
var joinable = require('../lib/index');

var suite = new Benchmark.Suite;

// add tests
suite.add('joinStrings', function() {
  joinable.joinStrings('a', null, 'b', undefined);
})
.add('joinStrings with if cond', function() {
  joinable.joinStrings('a', null, [true, 'b']);
})
.add('joinStrings with if else cond', function() {
  joinable.joinStrings('a', null, [false, 'b', 'c']);
})
.add('joinStrings with if else cond and new separator', function() {
  joinable.joinStrings('a', null, [false, 'b', 'c'], { separator: ',' });
})
.add('joinStrings using regex', function() {
  joinable.joinStrings('a', 'b', 'c', { regex: /a/ });
})
.add('joinStrings using joinIf explicit', function() {
  joinable.joinStrings('a', joinable.joinIf([false, 'b', 'c']));
})
.add('joinIf only', function() {
  joinable.joinIf([false, 'b', 'c']);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });