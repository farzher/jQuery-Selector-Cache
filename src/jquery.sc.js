/*
 * Selector Cache $$
 * Cache your selectors, without messy code.
 * @author Stephen Kamenar
 */
!(function ($) {
	var cache = {};

	function getContextCache(context) {
		if(cache[context] === undefined) cache[context] = {};
		return cache[context];
	}

	$$ = function(selector, context) {
		var c = getContextCache(context);
		if(c[selector] !== undefined) {
			return c[selector];
		} else {
			return c[selector] = $(selector, context);
		}
	}

	$$.clear = function(selector, context) {
		var c = getContextCache(context);
		var temp = c[selector];
		delete c[selector];
		return temp;
	}

	$$.fresh = function(selector, context) {
		$$.clear(selector, context);
		return $$(selector, context);
	}
}(jQuery));
