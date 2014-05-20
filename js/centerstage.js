var medium = 'medium';
var fast = 'fast';
var slow = 'slow';

(function($) {
	$.fn.centerStage = function(duration) {
		var $container = $(this),
	    $items = $container.find('.cs-item');
	 	
	 	$container.addClass('centerstage');
	 	$items.addClass(duration);
	 	if ($items.length == 0) {
	 		$container.children().addClass('.cs-item');
	 	}
		$items.on( 'mouseenter', function(e) {  
		    var $item = $(this);
		    $(function() { 
		        if( $item.hasClass('active') ) return false;
		        $items.not($item).removeClass('active').addClass('inactive');
		        $item.removeClass('inactive').addClass('active');
		    });
		});
		 
		$container.on( 'mouseleave', function(e) {
		    $items.removeClass('active inactive');
		});
	}
}) (jQuery);

// best solution is probably for user to call 2 images
// try absolute positioning on .active, and center it over thumbnail with JS (to fix z-index)
// also try centering active img in the viewport without losing its position on the page
