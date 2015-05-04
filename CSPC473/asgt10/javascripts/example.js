var main = function () { 
	"use strict";
    // create and hide our content as a div
	var $content = $("<div>Hello World!</div>").hide();
	var $moreContent = $("<div>Goodbye World!</div>").hide();
    // append the content to the body element
    $("footer").append($content);
    // slide the content down for 2 seconds
	$content.slideDown(2000, function () {
		// append the second content to the footer
		$("footer").append($moreContent);
		// fade in the second content
    	$moreContent.fadeIn();

	});

	$("footer div").fadeOut(1000, function () { // this will happen when the p element // is finished fading out
		$("footer div").remove();
		}); 

};
$(document).ready(main);