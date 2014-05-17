/*
 * Selector Cache $$
 * Cache your selectors, without messy code.
 * @author Stephen Kamenar
 */
!(function ($) {
	var c = {};

	$$ = function(selector) {
		var temp = c[selector];
		if(temp !== undefined) {
			return temp;
		} else {
			return c[selector] = $(selector);
		}
	}

	$$.clear = function(selector) {
		c[selector] = undefined;
	}

	$$.fresh = function(selector) {
		c[selector] = undefined;
		return $$(selector);
	}
}(jQuery));
