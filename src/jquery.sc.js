/*
 * Selector Cache sc
 * Cache your selectors, without messy code.
 * @author Stephen Kamenar
 */
(function ($) {
	$.sc = function(selector, action) {
		//if this is the first time being called...
		//set the cache to empty object
		if(this.initialized === undefined) {
			this.initialized = true;
			
			this.c = {};
		}
		//make 'get' the default action
		if(action === undefined) {
			action = 'get';
		}
		var that = this;
		
		//entry point
		switch(action) {
			case 'get': return selector_get(selector); break;
			case 'clear': return selector_clear(selector); break;
			case 'fresh': return selector_fresh(selector); break;
			default: alert('Invalid action passed to sc.');
		}
		
		function selector_get(selector) {
			//check if the selector is in the cache
			if(that.c[selector] !== undefined) {
				return that.c[selector];
			} else {
				return that.c[selector] = $(selector);
			}
		}
		function selector_clear(selector) {
			//providing * selector clears everything
			if(selector === '*') {
				that.c = {};
			} else {
				delete that.c[selector];
			}
			return;
		}
		function selector_fresh(selector) {
			selector_clear(selector);
			return selector_get(selector);
		}
	}
}(jQuery));