/*
 * $$ Selector Cache
 * Cache your selectors, without messy code.
 * @author Stephen Kamenar
 */
(function ($, undefined) {
  // '#a': $('#a')
  var cache = {}

  // '#context': (a cache object for the element)
  var cacheByContext = {}

  // Here for performance/minification
  var tmp, tmp2

  $$ = function(selector, context) {
    if(context) {
      if(tmp=context.selector) context = tmp

      // tmp2 is contextCache
      tmp2 = cacheByContext[context]
      if(tmp2 === undefined) {
        tmp2 = cacheByContext[context] = {}
      }

      tmp = tmp2[selector]
      if(tmp !== undefined) return tmp

      return tmp2[selector] = $(selector, $$(context))
    }

    tmp = cache[selector]
    if(tmp !== undefined) return tmp

    return cache[selector] = $(selector)
  }

  $$clear = function(selector, context) {
    if(context) {
      if(tmp=context.selector) context = tmp

      if(selector) {
        if(tmp = cacheByContext[context]) tmp[selector] = undefined
      }
      cacheByContext[context] = undefined
    } else {
      if(selector) {
        cache[selector] = undefined
        cacheByContext[selector] = undefined
      } else {
        cache = {}
        cacheByContext = {}
      }
    }
  }

  $$fresh = function(selector, context) {
    $$clear(selector, context)
    return $$(selector, context)
  }

  $.fn.$$ = function(selector) {
    return $$(selector, this)
  }
  $.fn.$$clear = function(selector) {
    $$clear(selector, this)
  }
  $.fn.$$fresh = function(selector) {
    return $$fresh(selector, this)
  }
})(jQuery)
