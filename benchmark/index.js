var Benchmark = require('benchmark');
var joinable = require('../lib/index');

var suite = new Benchmark.Suite;

// add tests
suite.add('joinable', function() {
  joinable.joinStrings('a', null, 'b', undefined);
})
.add('joinable with if cond', function() {
  joinable.joinStrings('a', null, [true, 'b']);
})
.add('joinable with if else cond', function() {
  joinable.joinStrings('a', null, [false, 'b', 'c']);
})
.add('joinable with if else cond and new separator', function() {
  joinable.joinStrings('a', null, [false, 'b', 'c'], { separator: ',' });
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