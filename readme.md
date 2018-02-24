# Joinable

[![Version](http://img.shields.io/npm/v/joinable.svg)](https://www.npmjs.org/package/joinable)
[![Build Status](https://travis-ci.org/rkotze/joinable.svg?branch=master)](https://travis-ci.org/rkotze/joinable)

Join strings easily by removing the repetitive `falsy` checks. Construct strings like form validation, CSS classes, URLs and more.

Handle falsy `false, 0, "", undefined, null, NaN`

## Usage

`npm install joinable`

```javascript
import joinable from "joinable";
joinable("potato", undefined, "rice"); // => 'potato rice'
```

## About

**What is Joinable:** A library to join strings together without the need to check if a value is a falsy like `undefined`.

**Why use Joinable:** Keep your code base clean by removing the repetitive `falsy` checks and improve the readability.

**More information** about [**Joinable**](http://www.richardkotze.com/projects/joinable)

## API

`joinable` is the default export and an alias of `joinStrings`.

```
joinable(...joinables [, options]) : string
```

```JavaScript
import joinable from 'joinable';
joinable('potato', undefined, 'rice', null, 'carrot'); // => 'potato rice carrot'

// Change separator
joinable('potato', 'rice', 'carrot', {separator: ','}); // => 'potato,rice,carrot'
```

Join strings based on another value like a boolean.

```JavaScript
import joinable from 'joinable';
joinStrings('potato', [true, 'spinach']); // => 'potato spinach'
joinStrings('potato', [false, 'spinach']); // => 'potato'
joinStrings('potato', [null, 'spinach']); // => 'potato'
```

Have a default value if a falsy passed.

```JavaScript
import joinable from 'joinable';
joinStrings('potato', [true, 'spinach', 'beetroot']); // => 'potato spinach'
joinStrings('potato', [false, 'spinach', 'beetroot']); // => 'potato beetroot'
joinStrings('potato', [null, 'spinach', 'beetroot']); // => 'potato beetroot'
```

### prefixStrings

```
prefixStrings(prefix, ...joinables [, options]) : string
```

```JavaScript
import { prefixStrings } from 'joinable';
prefixStrings('pre-', undefined, 'rice', null, 'carrot'); // => 'pre-rice pre-carrot'
prefixStrings(falsy, undefined, 'rice', null, 'carrot'); // => 'rice carrot'
prefixStrings('pre-', undefined, 'rice', null, 'carrot', {separator: ','}); // => 'pre-rice,pre-carrot'
```

### joinExp

**Note:** no ifArrays can be used in joinables

```
joinExp(regexp, ...joinables [, options]) : string
```

```JavaScript
import { joinExp } from 'joinable';
joinExp(/m+/, 'cucumber'); // => 'cucumber'
joinExp(/(m|n)+/, 'cucumber', false, 'sandwich'); // => 'cucumber sandwich'
joinExp(/r+/, 'cucumber'); // => ''
joinExp('', 'cucumber'); // => throw Error 'First parameter should be of RegExp type'
```

### joinIf

```
joinIf(ifArray)
```

```JavaScript
import { joinIf } from 'joinable';
joinIf([true, 'spinach']); // => 'spinach'
joinIf([1==2, 'spinach']); // => null
joinIf([1==1, 'spinach', 'broccoli']); // => 'spinach'
joinIf([1==2, 'spinach', 'broccoli']); // => 'broccoli'
joinIf('lettuce'); // => null
```

Useful to make joining easier to read combine both `joinable` and `joinIf`.

```JavaScript
import joinable, { joinIf } from 'joinable';
joinable('potato', joinIf([true, 'spinach'])) # => 'potato spinach'
```

### joinObject

```
joinObject({object} [, separator, separator]) : string
```

```JavaScript
import { joinObject } from 'joinable';
joinObject({ chicken: 'burger', spare: 'ribs' }) // => 'chicken=burger&spare=ribs'
joinObject({ chicken: 'burger', spare: 'ribs' }, ',') // => 'chicken=burger,spare=ribs'
joinObject({ chicken: 'burger', spare: 'ribs' }, ';', ',') // => 'chicken,burger;spare,ribs'
joinObject({ salad: null, chicken: 'burger', spare: 'ribs' }, ';', ',') // => 'chicken,burger;spare,ribs'
```

## Contribute:

Install: `npm i`

`npm test` - unit tests and eslint

`npm run benchmark` - run performance tests

This project follows [Semantic Versioning](http://semver.org/)
