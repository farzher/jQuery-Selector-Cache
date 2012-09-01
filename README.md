jQuery Selector Cache
=============

Cache your selectors, without messy code.

Installation
-------

1. Include the /src/jquery.sc.js file.

Usage
------------

### Overview
Instead of `$('div')` use `$.sc('div')`

### Get
`$.sc('div')`

The next time you call `$.sc('div')` it will be fetched from the cache.

### Clear
`$.sc('div', 'clear')`

Invalidates the cache. The next time you call `$.sc('div')` It will return fresh results.

### Fresh
`$.sc('div', 'fresh')`

Shortcut for doing `$.sc('div', 'clear')` `$.sc('div')`

Benchmarks
------------

	No cache: 444ms
	Selector Cache plugin: 3ms
	Storing results in variables: 2ms