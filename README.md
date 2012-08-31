<p>Cache your selectors, without messy code.</p>

<h2>Installation</h2>
<pre>
Include the /src/jquery.sc.js file.
</pre>





<h2>Usage</h2>
<pre>
Instead of $('div'); use $.sc('div');
</pre>

<h3>Get</h3>
<pre>
$.sc('div');
//The next time you call $.sc('div'); it will be fetched from the cache.
</pre>

<h3>Clear</h3>
<pre>
$.sc('div', 'clear');
//Invalidates the cache.
//The next time you call $.sc('div'); It will return fresh results.
</pre>

<h3>Fresh</h3>
<pre>
$.sc('div', 'fresh');
//Shortcut for doing $.sc('div', 'clear'); $.sc('div');
</pre>










<h2>Benchmarks</h2>
<pre>
No cache: 444ms
Selector Cache plugin: 3ms
Storing results in variables: 2ms 
</pre>