const factorial = require('../');
const test = require('tape');

test('big-factorial', (t) => {
  t.plan(3);

  t.equal(factorial(0).toString(), '1');
  t.equal(factorial(10).toString(), '3628800');
  t.equal(factorial(21).toString(), '51090942171709440000');
});
