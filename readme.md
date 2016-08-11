# Joinable

[![Build Status](https://travis-ci.org/rkotze/joinable.svg?branch=master)](https://travis-ci.org/rkotze/joinable)

Join strings with built in control flow. Because we always need to join strings logically. :D

More information about [Joinable](http://www.richardkotze.com/projects/joinable)

Performance tested using benchmark. `npm run benchmark`

Follow [Semantic Versioning](http://semver.org/)

## Usage

`npm install joinable`

`import joinable, { joinStrings, joinIf } from 'joinable'`

## API

### joinStrings

- @params as many `strings`, `numbers` and `ifArray()` as you wish
- @lastParams Object options to pass in separator. _default is space_

`joinString([...params, {separator:' '}])`

`joinable` is the default export is an alias of `joinStrings`.

### Examples

Handle falsy `false, 0, "", undefined, null, NaN`

```JavaScript
joinStrings('potato', undefined, 'rice', null, 'carrot'); // => 'potato rice carrot'
```

Change **separator** an object with `separator` property can be passed in as **last** parameter.

```JavaScript
joinStrings('potato', 'rice', 'carrot', {separator: ','}); // => 'potato,rice,carrot'
```

### If array

```JavaScript
const condition = variableA === variableB; // assigns true
joinStrings('potato', [condition, 'spinach']); // => 'potato spinach'
joinStrings('potato', [1==2, 'spinach']); // => 'potato'
joinStrings('potato', [null, 'spinach']); // => 'potato'
```

### If else array

```JavaScript
const condition = variableA === variableB; // assigns true
joinStrings('potato', [condition, 'spinach', 'beetroot']); // => 'potato spinach'
joinStrings('potato', [1==2, 'spinach', 'beetroot']); // => 'potato beetroot'
joinStrings('potato', [null, 'spinach', 'beetroot']); // => 'potato beetroot'
```

### joinIf

@param1 array required

`joinIf([truthy|falsy, string])`

```JavaScript
const condition = variableA === variableB; // assigns true
joinIf([condition, 'spinach']); // => 'spinach'
joinIf([1==2, 'spinach']); // => null
joinIf([1==1, 'spinach', 'broccoli']); // => 'spinach'
joinIf([1==2, 'spinach', 'broccoli']); // => 'broccoli'
joinIf('lettuce'); // => null
```

Combine both `joinStrings` and `joinIf`.

```JavaScript
const condition = variableA === variableB; // assigns true
joinStrings('potato', joinIf([condition, 'spinach'])) # => 'potato spinach'
```

## Instructions:

Install: `npm i`

`npm test` - unit tests and eslint

`npm run benchmark` - run performance tests