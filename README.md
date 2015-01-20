#[jQuery Selector Cache](https://raw.github.com/farzher/jQuery-Selector-Cache/master/jquery.$$.min.js)

Cache your selectors, without messy code.






##Installation

This library is so tiny, just copy paste its whole source after your copy of jQuery (its faster than the browser downloading another file).

    <script>!function(n,r){var $={};$$=function(u){var t=$[u];return t!==r?t:$[u]=n(u)},$$.clear=function(n){$[n]=r},$$.fresh=function(n){return $[n]=r,$$(n)}}(jQuery)</script>






##Basic Usage

    // Instead of
    $('div')

    // Use
    $$('div')

The next time you call `$$('div')` it will be fetched from the cache.






##Full Documentation (it's not much)

 - `$$('div')` The next time you call `$$('div')` it will be fetched from the cache.
 - `$$.clear('div')` Invalidates the cache. The next time you call `$$('div')` It will return fresh results.
 - `$$.fresh('div')` Shortcut for doing `$$.clear('div')` `$$('div')`





##Caching? Why should I care

jQuery itself does no caching. The DOM is slow. You shouldn't look for something that you've found before. Using this plugin might give you free performance.





##Benchmarks http://jsperf.com/selector-cache/2

Over 100% faster than jQuery with no cache.





##Alternatives

I'm not sure why you wouldn't use [jQache](https://github.com/danwit/jQache) instead. It's more popular, and does more. Although, if this works for you and you're hardcore about performance, my plugin is less heavy, only ~150 bytes, (because it's more simple).
