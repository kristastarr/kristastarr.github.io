
$(document).ready(function() {
 
	$('#nav a').on('click', function(event) {

	    var target = $(this.getAttribute('href'));

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').stop().animate({
	            scrollTop: target.offset().top
	        }, 1000);
	    }
	});
	

	$("#projects a").on('click', function(){
		console.log("hello")
	})
});

