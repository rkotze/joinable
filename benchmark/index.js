var Benchmark = require('benchmark');
var joinable = require('../lib/index');

var suite = new Benchmark.Suite;

// add tests
suite.add('joinable', function() {
  joinable.joinStrings('a', null, 'b', undefined);
})
.add('joinable with logic', function() {
  joinable.joinStrings('a', null, [true, 'a']);
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