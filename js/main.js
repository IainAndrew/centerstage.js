/*
var $container = $('#hovercont'),
    $items = $container.find('.hover-item');
 
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
*/

$(function() {
    $(".section-top").centerStage({
        duration : 'fast'
    });
    $(".section-bottom").centerStage({
        duration : 'slow'
    });
});