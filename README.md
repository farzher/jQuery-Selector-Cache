#[jQuery Selector Cache](https://raw.github.com/farzher/jQuery-Selector-Cache/master/jquery.$$.min.js)

Cache your selectors, without messy code.






##Installation

This library is so tiny, just copy paste its whole source after your copy of jQuery (its faster than the browser downloading another file).

    <!-- $$ https://github.com/farzher/jQuery-Selector-Cache -->
    <script>function($,n){var r,e={},f={};$$=function(i,t){if(t){var u=$$(t),c=f[u];return c===n&&(c=f[u]={}),r=c[i],r!==n?r:c[i]=$(i,u)}return r=e[i],r!==n?r:e[i]=$(i)},$$.clear=function($,r){if(r)if($){var i=f[$$(r)];i&&(i[$]=n)}else f[$$(r)]=n;else $?e[$]=n:(e={},f={})},$$.fresh=function($,n){return $$.clear($,n),$$($,n)},$.fn.$$find=function($){return $$($,this)}}(jQuery)</script>






##Usage

    // Instead of
    $('div')

    // Use
    $$('div')

The next time you call `$$('div')` it will be instantly fetched from the cache.






##Full Documentation (it's not much)

 - `$$('div')` The next time you call `$$('div')` it will be fetched from the cache.
 - `$$.clear('div')` Invalidates the cache. The next time you call `$$('div')` It will return fresh results.
 - `$$.fresh('div')` Shortcut for `$$.clear('div')` `$$('div')`

####Advanced usage
 - `$$('div', '#context')` Find within a context
 - `$$('#context').$$find('div')` Find within a context (alternative syntax)
 - `$$.clear('div', '#context')` Invalidates query on the context
 - `$$.clear(null, '#context')` Invalidates all queries on the context
 - `$$.clear()` Invalidates all of the cache
 - `$$.fresh('div', '#context')` Shortcut for `$$.clear('div', '#context')` `$$('div', '#context')`





##Caching? Why should I care

jQuery itself does no caching. The DOM is slow. You shouldn't look for something that you've found before. Using this code might give you free performance.





##Benchmarks http://jsperf.com/selector-cache/4

Over 100% faster than jQuery with no cache.





##Alternatives

[jQache](https://github.com/danwit/jQache) is more popular, and does more. Although, if this works for you and you're hardcore about performance, this plugin is less heavy (because it's more simple).
