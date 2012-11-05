//Run tests in order
QUnit.config.reorder = false;

$(function() {
	//Set up a div for us to mess around with
	$('body').append('<div id="testContext"></div>');
	var $dom = $('#testContext');

	test('get', function() {
		deepEqual($.sc('#testContext div').length, 0, 'There should be 0 divs');
		$dom.append('<div></div>');
		deepEqual($.sc('#testContext div').length, 0, 'After adding a div, there should still be 0, because we are loading from cache');
	});

	test('clear', function() {
		deepEqual($.sc('#testContext div').length, 0, 'There should still be 0 divs in cache');
		deepEqual($.sc('#testContext div', 'clear').length, 0, 'The return value from clear should be what was in the cache');
		deepEqual($.sc('#testContext div').length, 1, 'After clearing the cache, we should have found the new div.');
	});

	test('fresh', function() {
		deepEqual($.sc('#testContext div').length, 1, 'There should still be 1 div in cache');
		$.sc('#testContext div').remove();
		deepEqual($.sc('#testContext div').length, 1, 'div has been removed, but it should still be in cache');
		deepEqual($.sc('#testContext div', 'fresh').length, 0, 'Doing a fresh call should find nothing');
	});
});