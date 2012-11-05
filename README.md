#[jQuery Selector Cache](https://raw.github.com/farzher/jQuery-Selector-Cache/master/src/jquery.sc.js)

Cache your selectors, without messy code.

##Installation

1. Include the [/src/jquery.sc.js](https://raw.github.com/farzher/jQuery-Selector-Cache/master/src/jquery.sc.js) file after your copy of jQuery.

##Basic Usage

	//Instead of
	$('div')

	//use
	$.sc('div')

The next time you call `$.sc('div')` it will be fetched from the cache.

##Options

 - `$.sc('div')`
	The next time you call `$.sc('div')` it will be fetched from the cache.
 - `$.sc('div', 'clear')`
 	Invalidates the cache. The next time you call `$.sc('div')` It will return fresh results.
 - `$.sc('div', 'fresh')`
 	Shortcut for doing `$.sc('div', 'clear')` `$.sc('div')`

##Benchmarks

	No cache: 444ms
	Selector Cache plugin: 3ms
	Storing results in variables: 2ms