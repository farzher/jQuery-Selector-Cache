#[jQuery Selector Cache](https://raw.github.com/farzher/jQuery-Selector-Cache/master/src/jquery.sc.js)

Cache your selectors, without messy code.






##Installation

1. Include the [/src/jquery.sc.js](https://raw.github.com/farzher/jQuery-Selector-Cache/master/src/jquery.sc.js) file after your copy of jQuery.






##Basic Usage

Instead of `$('div')` use `$$('div')`

The next time you call `$$('div')` it will be fetched from the cache.






##Full Documentation (it's not much)

 - `$$('div')` The next time you call `$$('div')` it will be fetched from the cache.
 - `$$.clear('div')` Invalidates the cache. The next time you call `$$('div')` It will return fresh results.
 - `$$.fresh('div')` Shortcut for doing `$$('div', 'clear')` `$$('div')`

 In all cases, context is an optional 2nd argument, just like in jQuery.





##Caching? Why should I care

jQuery itself does no caching. The DOM is slow. You shouldn't look for something that you've found before. Using this plugin might give you free performance.





##Benchmarks

	jQuery with no cache: 110ms
	Selector Cache plugin: 0ms
	Optimized caching with no plugin: 0ms
