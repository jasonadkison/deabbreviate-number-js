# deabbreviate-number

Deabbreviates a number string and remove unit letters e.g. '3.5m' => 3500000

[![build status](https://secure.travis-ci.org/jasonadkison/deabbreviate-number-js.png)](http://travis-ci.org/jasonadkison/deabbreviate-number-js)

Code inspired by [js-number-abbreviate](https://github.com/domharrington/js-number-abbreviate)

## Example

```js
var deabbreviate = require('deabbreviate-number')
deabbreviate('1k') // => 1000
deabbreviate('1.25K') // => 1250
deabbreviate('1 M') // => 1000000
deabbreviate('1b') // => 1000000000
```

## Installation
```
npm install deabbreviate-number --save
```
