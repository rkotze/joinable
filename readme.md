# Joinable

Join strings with built in control flow.

## Usage

`npm install joinable`

`import { joinStrings, joinIf } from 'joinable'`

## API

### joinStrings

`joinString([...params])`

```JavaScript
joinStrings('potato', 'rice', 'carrot'); // => 'potato rice carrot'
```

Handle falsy `false, 0, "", undefined, null, NaN`

```JavaScript
joinStrings('carrot', undefined, 'rice', null); // => 'carrot rice'
```

Pass array with [truthy|falsy] to decide if it should be included.

```JavaScript
joinStrings('potato', [1==1, 'spinach']); // => 'potato spinach'
joinStrings('potato', [1==2, 'spinach']); // => 'potato'
joinStrings('potato', [null, 'spinach']); // => 'potato'
```

### joinIf

@param1 array required

`joinIf([truthy|falsy, string])`

```JavaScript
joinIf([1==1, 'spinach']); // => 'spinach'
joinIf([1==2, 'spinach']); // => null
joinIf('lettuce'); // => 'lettuce'
```

Combine both `joinStrings` and `joinIf`.

```JavaScript
joinStrings('potato', joinIf([1==1, 'spinach'])) # => 'potato spinach'
```

## Instructions:

Install: `npm i`

`npm test`
