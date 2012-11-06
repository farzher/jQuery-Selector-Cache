/*
 * Selector Cache $$
 * Cache your selectors, without messy code.
 * @author Stephen Kamenar
 */
(function ($) {
	$$ = function(selector, action) {
		var that = this;
		//Set the cache to empty object right away
		if(that.init === undefined) {
			that.init = true;
			that.c = {};
		}

		//make 'get' the default action
		if(action === undefined) {
			action = 'get';
		}
		
		
		//entry point
		switch(action) {
			case 'get': return selector_get(); break;
			case 'clear': return selector_clear(); break;
			case 'fresh': return selector_fresh(); break;
			default: throw new Error('Invalid action passed to jQuery Selector Cache');
		}

		function selector_get() {
			//check if the selector is in the cache
			if(that.c[selector] !== undefined) {
				return that.c[selector];
			} else {
				return that.c[selector] = $(selector);
			}
		}
		function selector_clear() {
			var temp = that.c[selector];
			delete that.c[selector];
			return temp;
		}
		function selector_fresh() {
			selector_clear();
			return selector_get();
		}
	}
}(jQuery));