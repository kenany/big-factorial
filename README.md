# big-factorial

Like [factorial](https://github.com/wearefractal/factorial) but for big numbers.
Inspired by
[a blog post](http://raganwald.com/2013/03/28/trampolines-in-javascript.html) by
Reginald Braithwaite ([@raganwald](https://github.com/raganwald)).

## Example

If you want to find the factorial of an integer less than 171, then you don't
need this module. Otherwise, you do need it:

``` javascript
var factorial = require('factorial');

factorial(170);
// => 7.257415615307994e+306

factorial(171);
// => Infinity

factorial(32768);
// => RangeError: Maximum call stack size exceeded
```

The `Infinity` problem is a result of JavaScript's limit on how big numbers can
be. This module solves this problem by using
[big-integer](https://github.com/peterolson/BigInteger.js).

The `RangeError` is a problem with how the factorial is calculated. The
recursion used goes so deep that it exceeds the limit that Node.js has. As
described in Reginald's blog post, this problem is solved by using trampolines.

## Installation

``` bash
$ npm install big-factorial
```

## API

``` javascript
var bigFactorial = require('big-factorial');
```

### bigFactorial(value)

Returns the factorial of `value` as a _bigInt_, where `value` is either a
_Number_ or a _String_.
