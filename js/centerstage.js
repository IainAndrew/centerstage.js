(function($) {
	$.fn.centerStage = function(options) {
		var defaults = {
            duration : 'medium',
            grayscale : false
        }, 
        options = $.extend(defaults, options),
		$container = $(this),
	    $items = $container.find('.cs-item');
	 	
	    $(function() {
	    	$container.addClass('centerstage');
	    	if ($items.length == 0) {
		 		$container.children().addClass('.cs-item');
		 	}
	    });
	 	$(function() {
	 		if (options.duration == 'medium') {
	 			$items.addClass('medium');
	 		} else if (options.duration == 'fast') {
	 			$items.addClass('fast');
	 		} else if (options.duration == 'slow') {
	 			$items.addClass('slow');
	 		}
	 	});
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
