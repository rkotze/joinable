# Joinable

[![Build Status](https://travis-ci.org/rkotze/joinable.svg?branch=master)](https://travis-ci.org/rkotze/joinable)

Join strings with built in control flow. Because we always need to join strings logically. :D

## Problem

Removing the need for _if_ and _else_ code blocks:

Example of typical logic string concat in ReactJS component with if else. General issues: verbose, unnecessary repetitive complexity and mutation:

```jsx
const MyComponent = ({ children, className, hide }) => {
	let myClass = 'potato ';
	if(hide)
		myClass += 'invisible';

	if(className)
		myClass += className;

	return (
			<div className={myClass}>{children}</div>
		);
}

render(<MyComponent className="cucumber">Hello world</MyComponent>); 
// => <div class="potato cucumber">Hello world</div>
render(<MyComponent className="cucumber" hide>Hello world</MyComponent>); 
// => <div class="potato invisible cucumber">Hello world</div>
render(<MyComponent>Hello world</MyComponent>); 
// => <div class="potato undefined">Hello world</div>
```

While this works fine you will probably need to repeat that similar flow for a lot of components and some will have additional complexity round it.

## Joinable solution

Lets hide that logic away and keep it clean with a one line function `joinStrings`.

```jsx
const MyComponent = ({ children, className, hide }) => {
	const myClass = joinStrings('potato', className, [hide, 'invisible']);
	return (
			<div className={myClass}>
			{children}
			</div>
		);
}

render(<MyComponent className="cucumber">Hello world</MyComponent>); 
// => <div class="potato cucumber">Hello world</div>
render(<MyComponent className="cucumber" hide>Hello world</MyComponent>); 
// => <div class="potato invisible cucumber">Hello world</div>
render(<MyComponent>Hello world</MyComponent>); 
// => <div class="potato">Hello world</div>
```

## Usage

`npm install joinable`

`import { joinStrings, joinIf } from 'joinable'`

## API

### joinStrings

- @params as many `strings`, `numbers` and `ifArray` as you wish
- @lastParams Object options to pass in separator. _default is space_

`joinString([...params, {separator:' '}])`

### Examples

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

### If array

```JavaScript
joinStrings('potato', [1==1, 'spinach']); // => 'potato spinach'
joinStrings('potato', [1==2, 'spinach']); // => 'potato'
joinStrings('potato', [null, 'spinach']); // => 'potato'
```

### If else array

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
joinIf('lettuce'); // => null
```

Combine both `joinStrings` and `joinIf`.

```JavaScript
joinStrings('potato', joinIf([1==1, 'spinach'])) # => 'potato spinach'
```

## Instructions:

Install: `npm i`

`npm test` - unit tests and eslint

`npm run benchmark` - run performance tests