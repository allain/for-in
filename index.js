module.exports = function (obj, iterator, dropUnmapped) {
	if (iterator === void 0)
		throw new Error('iterator not given');

	if (typeof iterator !== 'function')
		throw new Error('iterator must be a callback');

	if (typeof(obj) !== 'object')
		return {};

	var result = Array.isArray(obj) ? [] : {};

	Object.keys(obj).forEach(function(key) {
		var mapped = iterator(obj[key], key);
		if (mapped !== void 0 || !dropUnmapped) {
			result[key] = iterator(obj[key], key);
		}
	});

	return result;
};
