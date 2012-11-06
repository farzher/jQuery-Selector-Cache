#[jQuery Selector Cache](https://raw.github.com/farzher/jQuery-Selector-Cache/master/src/jquery.sc.js)

Cache your selectors, without messy code.

##Installation

1. Include the [/src/jquery.sc.js](https://raw.github.com/farzher/jQuery-Selector-Cache/master/src/jquery.sc.js) file after your copy of jQuery.

##Basic Usage

	//Instead of
	$('div')

	//use
	$$('div')

The next time you call `$$('div')` it will be fetched from the cache.

##Options

 - `$$('div')`
	The next time you call `$$('div')` it will be fetched from the cache.
 - `$$('div', 'clear')`
 	Invalidates the cache. The next time you call `$$('div')` It will return fresh results.
 - `$$('div', 'fresh')`
 	Shortcut for doing `$$('div', 'clear')` `$$('div')`

##Benchmarks

	No cache: 444ms
	Selector Cache plugin: 3ms
	Storing results in variables: 2ms