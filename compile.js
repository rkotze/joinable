var fs = require('fs');
var del = require('del');
var exec = require('child_process').exec;

del.sync(['./lib/**']);
console.log('>> remove ./lib files');
fs.mkdirSync('./lib');
console.log('>> create ./lib directory.');

exec('rollup -f umd -n joinable -i src/index.js -o build/bundle.js', function (error, stdout, stderr) {
  if (error) {
    console.error(`npm run rollup error: ${error}`);
    return;
  }
  console.log(stdout);
  console.log(stderr);

  exec('babel build/bundle.js -o lib/index.js', function (error, stdout, stderr) {
	  if (error) {
	    console.error(`npm run babel error: ${error}`);
	    return;
	  }
	  console.log(stdout);
	  console.log(stderr);

		del.sync(['./build/**']);
		console.log('>> remove ./build files');
	});
});