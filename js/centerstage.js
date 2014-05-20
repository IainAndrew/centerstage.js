(function($) {
	$.fn.centerStage = function() {
		var $container = $(this),
	    $items = $container.find('.cs-item');
	 	
	 	$container.addClass('centerstage');
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