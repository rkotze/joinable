# Joinable

[![Build Status](https://travis-ci.org/rkotze/joinable.svg?branch=master)](https://travis-ci.org/rkotze/joinable)

Join strings with built in control flow. Because we always need to join strings logically. :D

## Problem

Removing the need for _if_ and _else_ code blocks:

Example of typical string concat with if else. General issues: verbose, unnecessary repetitive complexity and mutation:

```JavaScript
let myString = 'cucumber ';
if(1==1)
	myString += 'potato';
else
	myString += 'beetroot';

// myString => 'cucumber potato'
```

## Solution

```JavaScript
const myString = joinStrings('cucumber', [1==1, 'potato', 'beetroot']);

// myString => 'cucumber potato'
```

## Usage

`npm install joinable`

`import { joinStrings, joinIf } from 'joinable'`

## API

### joinStrings

- @params as many `strings` and `joinIf` as you wish
- @lastParams Object options to pass in separator. _default is space_

`joinString([...params, {separator:' '}])`

```JavaScript
joinStrings('potato', 'rice', 'carrot'); // => 'potato rice carrot'
```

To provide a separator an object with `separator` property can be passed in as **last** parameter.

```JavaScript
joinStrings('potato', 'rice', 'carrot', {separator: ','}); // => 'potato,rice,carrot'
```

Handle falsy `false, 0, "", undefined, null, NaN`

```JavaScript
joinStrings('carrot', undefined, 'rice', null); // => 'carrot rice'
```

### If

```JavaScript
joinStrings('potato', [1==1, 'spinach']); // => 'potato spinach'
joinStrings('potato', [1==2, 'spinach']); // => 'potato'
joinStrings('potato', [null, 'spinach']); // => 'potato'
```

### If else

```JavaScript
joinStrings('potato', [1==1, 'spinach', 'beetroot']); // => 'potato spinach'
joinStrings('potato', [1==2, 'spinach', 'beetroot']); // => 'potato beetroot'
joinStrings('potato', [null, 'spinach', 'beetroot']); // => 'potato beetroot'
```

### joinIf

@param1 array required

`joinIf([truthy|falsy, string])`

```JavaScript
joinIf([1==1, 'spinach']); // => 'spinach'
joinIf([1==2, 'spinach']); // => null
joinIf([1==1, 'spinach', 'broccoli']); // => 'spinach'
joinIf([1==2, 'spinach', 'broccoli']); // => 'broccoli'
joinIf('lettuce'); // => 'lettuce'
```

Combine both `joinStrings` and `joinIf`.

```JavaScript
joinStrings('potato', joinIf([1==1, 'spinach'])) # => 'potato spinach'
```

## Instructions:

Install: `npm i`

`npm test`
