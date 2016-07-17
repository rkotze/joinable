# Joinable

Join strings with built in control flow.

```JavaScript
joinStrings('a', 'b', 'c'); // => 'a b c'
```

Handle falsy `false, 0, "", undefined, null, NaN`

```JavaScript
joinStrings('a', undefined, 'b', null); // => 'a b'
```

## Instructions:

Install: `npm i`

`npm test`
