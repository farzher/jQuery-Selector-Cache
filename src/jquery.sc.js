/*
 * Selector Cache $$
 * Cache your selectors, without messy code.
 * @author Stephen Kamenar
 */
!(function ($) {
	var cache = {};

	$$ = function(selector, action) {
		// Make 'get' the default action
		if(action === undefined) {
			action = 'get';
		}

		// Entry point
		switch(action) {
			case 'get': return selector_get(); break;
			case 'clear': return selector_clear(); break;
			case 'fresh': return selector_fresh(); break;
			default: throw new Error('Invalid action passed to jQuery Selector Cache');
		}

		function selector_get() {
			// Check if the selector is in the cache
			if(cache[selector] !== undefined) {
				return cache[selector];
			} else {
				return cache[selector] = $(selector);
			}
		}

		function selector_clear() {
			var temp = cache[selector];
			delete cache[selector];
			return temp;
		}

		function selector_fresh() {
			selector_clear();
			return selector_get();
		}
	}
}(jQuery));
