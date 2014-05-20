/*
 * Selector Cache $$
 * Cache your selectors, without messy code.
 * @author Stephen Kamenar
 */
(function ($, undefined) {
	var cache = {};

	$$ = function(selector) {
		var temp = cache[selector];
		if(temp !== undefined) {
			return temp;
		} else {
			return cache[selector] = $(selector);
		}
	}

	$$.clear = function(selector) {
		cache[selector] = undefined;
	}

	$$.fresh = function(selector) {
		cache[selector] = undefined;
		return $$(selector);
	}
}(jQuery));
