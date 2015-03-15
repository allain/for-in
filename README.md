# map-in

A helper module that implements an object mapper.

[![build status](https://secure.travis-ci.org/allain/map-in.png)](http://travis-ci.org/allain/map-in)

## Installation

This module is installed via npm:

``` bash
$ npm install map-in
```

## Example Usage

``` js
var mapIn = require('map-in');

var doubled;

// Object case
doubled = mapIn({a: 1, b: 2}, function(num, key) {
  return num * 2;
});

console.log(doubled); // {a 2, b: 4}

// Array case
var doubled = mapIn([1, 2], function(num, key) {
  return num * 2;
});

console.log(doubled); // [2, 4]

// Drops keys where the value maps to unefined
var evens = mapIn([0, 1, 2, 3, 4], function(num) {
  if (num % 2 === 0) return num;
});

console.log(evens); // [0, 2, 4]

```
