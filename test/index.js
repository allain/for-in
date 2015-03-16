var assert = require('chai').assert;
var mapIn = require('..');

describe('map-in', function() {
	function echo(x) {
		return x;
	}

  it('should return empty object for non-objects', function() {
    assert.deepEqual(mapIn(true, echo), {});
  });

	it('should pass values through the iterator', function() {
		var obj = {a: 10, b: 20};
		var mapped = mapIn(obj, function(val, key) { return 'here'; });
		assert.deepEqual(mapped, {a: 'here', b: 'here'});
	});

	it('should support simple arrays', function() {
		var obj = [2, 4];
		var mapped = mapIn(obj, function(val, key) { return 'here'; });
		assert.deepEqual(mapped, ['here', 'here']);
	});

	it('should keep keys that mapped to undefined', function() {
		var obj = {a: 10, b: 20};
		var mapped = mapIn(obj, function(val, key) {
			if ('b' === key) return undefined;

		  return val;
		});
		assert.deepEqual(mapped, {a: 10, b: undefined});
	});

	it('should support dropping unmapped with a flag', function() {
		var obj = {a: 10, b: 20};

		var mapped = mapIn(obj, function(val, key) {
			if ('b' === key) return undefined;

		  return val;
		}, true);

		assert.deepEqual(mapped, {a: 10});
	});

	it('should leave original untouched', function() {
		var obj = {a: 10, b: 20};
		var mapped = mapIn(obj, function(val, key) { return 'here'; });

		assert.notEqual(obj, mapped);
	  assert.equal('{"a":10,"b":20}', JSON.stringify(obj));
	});
});
