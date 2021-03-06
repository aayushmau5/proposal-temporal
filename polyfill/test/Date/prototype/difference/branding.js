// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.date.prototype.difference
---*/

const difference = Temporal.Date.prototype.difference;

assert.sameValue(typeof difference, "function");

assert.throws(TypeError, () => difference.call(undefined), "undefined");
assert.throws(TypeError, () => difference.call(null), "null");
assert.throws(TypeError, () => difference.call(true), "true");
assert.throws(TypeError, () => difference.call(""), "empty string");
assert.throws(TypeError, () => difference.call(Symbol()), "symbol");
assert.throws(TypeError, () => difference.call(1), "1");
assert.throws(TypeError, () => difference.call({}), "plain object");
assert.throws(TypeError, () => difference.call(Temporal.Date), "Temporal.Date");
assert.throws(TypeError, () => difference.call(Temporal.Date.prototype), "Temporal.Date.prototype");
