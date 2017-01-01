(function() {

	smoothScroll.init({
		selector: 'a[href^="#"]',
	    selectorHeader: '.header',
	    speed: 800,
	    easing: 'easeInOutCubic',
	    offset: 0
	});

	// remove single letters from end of the lines
	var paragraphs = document.querySelectorAll('p');
	for ( var i = 0, max = paragraphs.length; i < max; i++ ) {
		paragraphs[ i ].innerHTML = paragraphs[ i ].innerHTML.replace( /(\s)([\S])[\s]+/g, '$1$2&nbsp;' );
	}

})();
