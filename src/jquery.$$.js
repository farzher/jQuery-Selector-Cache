/*
 * Selector Cache $$
 * Cache your selectors, without messy code.
 * @author Stephen Kamenar
 */

;(function(name, root, factory) {
	'use strict';
	if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory(require('jquery'));
	} else if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals
		root[name] = factory(root.jQuery);
	}
})('$$', this, function($, undefined) {
	'use strict';

	var cache = {};

	function $$(selector) {
		var temp = cache[selector];
		if (temp !== undefined) {
			return temp;
		} else {
			return cache[selector] = $(selector);
		}
	}

	$$.clear = function(selector) {
		cache[selector] = undefined;
	};

	$$.fresh = function(selector) {
		cache[selector] = undefined;
		return $$(selector);
	};

	return $$;
});