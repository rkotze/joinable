# Joinable

[![Version](http://img.shields.io/npm/v/joinable.svg)](https://www.npmjs.org/package/joinable) 
[![Build Status](https://travis-ci.org/rkotze/joinable.svg?branch=master)](https://travis-ci.org/rkotze/joinable)

Join strings easily by removing the repetitive `falsy` checks. Construct strings like form validation, CSS classes, URLs and more.

Handle falsy `false, 0, "", undefined, null, NaN`

**What is Joinable:** A library to join strings together without the need to check if a value is a falsy like `undefined`.

**Why use Joinable:** Keep your code base clean by removing the repetitive `falsy` checks and improve the readability.

**More information** about [Joinable](http://www.richardkotze.com/projects/joinable)

Unit tests: `npm test`

Performance tested using benchmark. `npm run benchmark`

Follow [Semantic Versioning](http://semver.org/)

## Usage

`npm install joinable`

`import joinable, { joinStrings, prefixStrings, joinIf, joinExp } from 'joinable'`

## API

### joinable

`joinable` is the default export and an alias of `joinStrings`.

### joinStrings

```
@param  {string|number}  joinables  As many `strings`, `numbers` and `ifArray()`
@param  {Object}         options    { separator: ' ' }. default is space
@return {string}

joinStrings(...joinables [, options])
```

**Examples:**

```JavaScript
joinStrings('potato', undefined, 'rice', null, 'carrot'); // => 'potato rice carrot'
```

Change **separator** an object with `separator` property can be passed in as **last** parameter.

```JavaScript
joinStrings('potato', 'rice', 'carrot', {separator: ','}); // => 'potato,rice,carrot'
```

**If example**

```JavaScript
const predicate = variableA === variableB; // assigns true
joinStrings('potato', [predicate, 'spinach']); // => 'potato spinach'
joinStrings('potato', [1==2, 'spinach']); // => 'potato'
joinStrings('potato', [null, 'spinach']); // => 'potato'
```

**If else example**

```JavaScript
const predicate = variableA === variableB; // assigns true
joinStrings('potato', [predicate, 'spinach', 'beetroot']); // => 'potato spinach'
joinStrings('potato', [1==2, 'spinach', 'beetroot']); // => 'potato beetroot'
joinStrings('potato', [null, 'spinach', 'beetroot']); // => 'potato beetroot'
```

### prefixStrings

```
@param  {string}         prefix     value to prefix onto joinables
@param  {string|number}  joinables  as many `strings`, `numbers` and `ifArray()`
@param  {Object}         options    { separator: ' ' }. default is space
@return {string}

prefixStrings(prefix, ...joinables [, options])
```

**Examples:**

```JavaScript
prefixStrings('pre-', undefined, 'rice', null, 'carrot'); // => 'pre-rice pre-carrot'
prefixStrings(falsy, undefined, 'rice', null, 'carrot'); // => 'rice carrot'
prefixStrings('pre-', undefined, 'rice', null, 'carrot', {separator: ','}); // => 'pre-rice,pre-carrot'
```

### joinExp

**Note:** no ifArrays can be used in joinables

```
@param  {RegExp}         regexp     must be a regular expression
@param  {string|number}  joinables  as many `strings` and `numbers`
@param  {Object}         options    { separator: ' ' }. default is space
@return {string}

joinExp(regexp, ...joinables [, options])
```

**Examples:**

```
joinExp(/m+/, 'cucumber'); // => 'cucumber'
joinExp(/(m|n)+/, 'cucumber', false, 'sandwich'); // => 'cucumber sandwich'
joinExp(/r+/, 'cucumber'); // => ''
joinExp('', 'cucumber'); // => throw Error 'First parameter should be of RegExp type'
```

### joinIf

```
@param   {array}  ifArray  three value array with first being the predicate
@return  {string|null}

joinIf(ifArray)
```

**Examples:**

```JavaScript
const predicate = variableA === variableB; // assigns true
joinIf([predicate, 'spinach']); // => 'spinach'
joinIf([1==2, 'spinach']); // => null
joinIf([1==1, 'spinach', 'broccoli']); // => 'spinach'
joinIf([1==2, 'spinach', 'broccoli']); // => 'broccoli'
joinIf('lettuce'); // => null
```

Combine both `joinStrings` and `joinIf`.

```JavaScript
const predicate = variableA === variableB; // assigns true
joinStrings('potato', joinIf([predicate, 'spinach'])) # => 'potato spinach'
```

### joinObject

```
@param  {Object}         joinable   Object literal prop and values to be joined
@param  {string}         separator  separator for the prop and value pairs
@param  {string}         separator  separator between prop and values
@return {string}

joinObject({object} [, separator, separator])
```

**Examples:**

```JavaScript
joinObject({ chicken: 'burger', spare: 'ribs' }) // => ('chicken=burger&spare=ribs'
joinObject({ chicken: 'burger', spare: 'ribs' }, ',') // => 'chicken=burger,spare=ribs'
joinObject({ chicken: 'burger', spare: 'ribs' }, ';', ',') // => 'chicken,burger;spare,ribs'
joinObject({ salad: null, chicken: 'burger', spare: 'ribs' }, ';', ',') // => 'chicken,burger;spare,ribs'
```

## Instructions:

Install: `npm i`

`npm test` - unit tests and eslint

`npm run benchmark` - run performance tests