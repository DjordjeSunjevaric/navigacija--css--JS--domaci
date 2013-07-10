$(document).ready(function(){

	var $link = $('a');
	$link.hover(function(){

		$(this).animate({
			width:'100px',
		})


	},function(){

		$(this).animate({
			width:'55px'
		})

	})



})