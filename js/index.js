$('.searchbar').css('opacity',1).hide();
$('.header .menuBtn').click(function() {
	$('.menubox').show().addClass('active');
})
$('.menubox .close,.menubox .mask').click(function(e) {
	e.stopPropagation();
	$('.menubox').removeClass('active');
	setTimeout(function() {
		$('.menubox').hide()
	}, 500)
});
$('.menubox .hassublist').click(function() {
	if ($(this).next('.sublist').is(':hidden')) {
		$('.menubox .hassublist.active').removeClass('active');
		$(this).addClass('active');
		$('.sublist').slideUp();
		$(this).next('.sublist').slideDown()
	} else {
		$(this).removeClass('active');
		$(this).next('.sublist').slideUp()
	}
})

$('.header .searchBtn').click(function(){
	$('.searchbar').slideToggle('fast');
})