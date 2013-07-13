$(document).ready(function(){

	var $link = $('a');
	$link.hover(function(){

		$(this).stop().animate({
			width:'100px',
		})


	},function(){

		$(this).stop().animate({
			width:'55px',
		})

	})



})