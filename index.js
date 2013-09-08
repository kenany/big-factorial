var bilby = require('bilby');
var bigInt = require('big-integer');

function _factorial(acc, n) {
  return n.greater(0)
    ? bilby.cont(function() { return _factorial(acc.times(n), n.minus(1)); })
    : bilby.done(acc);
}

function factorial(value) {
  return bilby.trampoline(_factorial(bigInt.one, bigInt(value)));
}

module.exports = factorial;