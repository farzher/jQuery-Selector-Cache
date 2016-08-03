/*
 * $$ Selector Cache
 * Cache your selectors, without messy code.
 * @author Stephen Kamenar
 */
(function ($, undefined) {
  // '#a': $('#a')
  var cache = {}

  // $element: (a cache object for the element)
  var cacheByContext = {}

  // Here for performance/minification
  var tmp

  $$ = function(selector, context) {
    if(context) {
      var $context = $$(context)
      var contextCache = cacheByContext[$context]
      if(contextCache === undefined) {
        contextCache = cacheByContext[$context] = {}
      }

      tmp = contextCache[selector]
      if(tmp !== undefined) return tmp

      return contextCache[selector] = $(selector, $context)
    }

    tmp = cache[selector]
    if(tmp !== undefined) return tmp

    return cache[selector] = $(selector)
  }

  $$.clear = function(selector, context) {
    if(context) {
      if(selector) {
        var contextCache = cacheByContext[$$(context)]
        if(contextCache) {
          contextCache[selector] = undefined
        }
      } else {
        cacheByContext[$$(context)] = undefined
      }
    } else {
      if(selector) {
        cache[selector] = undefined
      } else {
        cache = {}
        cacheByContext = {}
      }
    }
  }

  $$.fresh = function(selector, context) {
    $$.clear(selector, context)
    return $$(selector, context)
  }

  $.fn.$$find = function(selector) {
    return $$(selector, this)
  }
}(jQuery))
