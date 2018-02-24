# Joinable

[![Version](http://img.shields.io/npm/v/joinable.svg)](https://www.npmjs.org/package/joinable)
[![Build Status](https://travis-ci.org/rkotze/joinable.svg?branch=master)](https://travis-ci.org/rkotze/joinable)

Join strings easily by removing the repetitive `falsy` checks. Construct strings like form validation, CSS classes, URLs and more.

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

Handle falsy `false, 0, "", undefined, null, NaN`

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
joinable('potato', [true, 'spinach']); // => 'potato spinach'
joinable('potato', [false, 'spinach']); // => 'potato'
joinable('potato', [null, 'spinach']); // => 'potato'
```

Have a default value if a falsy passed.

```JavaScript
import joinable from 'joinable';
joinable('potato', [true, 'spinach', 'beetroot']); // => 'potato spinach'
joinable('potato', [false, 'spinach', 'beetroot']); // => 'potato beetroot'
joinable('potato', [null, 'spinach', 'beetroot']); // => 'potato beetroot'
```

### Joining classNames in ReactJS

### Problem

Example of typical logic string concatenation in _ReactJS component_ with if statements. General issues: verbose, unnecessary repetitive complexity and mutation:

```javascript
import React from "react";

const MyComponent = props => {
  let myClass = "panel ";
  if (props.hide) myClass += "invisible ";

  if (props.hasBoarder) myClass += "sparkleBoarder ";

  if (props.className) myClass += props.className;

  return <div className={myClass}>{props.children}</div>;
};
```

While this works fine you will probably need to repeat that similar flow for a lot of components and some will have additional complexity round it.

### Solution

Same component as above but lets keep it clean with `joinable`.

```javascript
import React from "react";
import joinable from "joinable";

const MyComponent = props => {
  const myClass = joinable(
    "potato",
    props.className,
    [props.hide, "invisible"],
    [props.hasBoarder, "sparkleBoarder"]
  );
  return <div className={myClass}>{props.children}</div>;
};
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
