# [jQuery Selector Cache](https://raw.github.com/farzher/jQuery-Selector-Cache/master/jquery.$$.min.js)

Cache your selectors, without messy code.






## Installation

This library is so tiny, just copy paste its whole source after your copy of jQuery (its faster than the browser downloading another file).

```html
  <!-- $$ https://github.com/farzher/jQuery-Selector-Cache -->
  <script>!function($,n){var r,e,t={},c={};$$=function(f,u){return u?((r=u.selector)&&(u=r),e=c[u],e===n&&(e=c[u]={}),r=e[f],r!==n?r:e[f]=$(f,$$(u))):(r=t[f],r!==n?r:t[f]=$(f))},$$clear=function($,e){e?((r=e.selector)&&(e=r),$&&(r=c[e])&&(r[$]=n),c[e]=n):$?(t[$]=n,c[$]=n):(t={},c={})},$$fresh=function($,n){return $$clear($,n),$$($,n)},$.fn.$$=function($){return $$($,this)},$.fn.$$clear=function($){$$clear($,this)},$.fn.$$fresh=function($){return $$fresh($,this)}}(jQuery)</script>
```






## Usage

```js
  // Instead of
  $('div')

  // Use
  $$('div')
```

The next time you call `$$('div')` it will be instantly fetched from the cache.







## Caching? Why should I care

jQuery itself does no caching. The DOM is slow. You shouldn't look for something that you've found before. Using this code might give you free performance.

```js
  $('.thing') // Slow
  $('.thing') // Just as slow

  $$('.thing') // Slow
  $$('.thing') // Instant
```



## Benchmarks https://jsperf.com/jquery-selector-cache-benchmark/1

Over 100% faster than jQuery with no cache.






## Documentation

 - `$$('div')` The next time you call `$$('div')` it will be fetched from the cache.
 - `$$clear('div')` Invalidates the cache. The next time you call `$$('div')` It will return fresh results.
 - `$$fresh('div')` Shortcut for `$$clear('div')` `$$('div')`

### Advanced usage
 - `$$('div', '#context')` Find within a context
 - `$$clear('div', '#context')` Invalidates query on the context
 - `$$clear('#context')` Invalidates the cache, and all queries on the context
 - `$$clear()` Invalidates all of the cache
 - `$$fresh('div', '#context')` Shortcut for `$$clear('div', '#context')` `$$('div', '#context')`
 - OOP syntax `$$('p').$$('a')` `$$('p').$$clear('a')` `$$('p').$$fresh('a')`






## Alternatives

[jQache](https://github.com/danwit/jQache) is more popular, and does more. Although, if this works for you and you're hardcore about performance, this plugin is less heavy (because it's more simple).

Or just don't use a library: `let $mybutton = $('#mybutton'); $mybutton.click(); $mybutton.hide()`
