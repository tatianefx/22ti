$(document).ready(function(){
	
	$('.search input').css('width','0px');
	$('.search input').css('fontSize','0px');

	var status = 0;
	
	$('.search span i').click(function() {
		if ( status === 0) {
			$('.search input').animate({
				width: "250px",
				fontSize: "21.5px"
			},900);
			status = 1;
		}
		else{
			$('.search input').animate({
				width: "0px",
				fontSize: "0px"
			},900);
			status = 0;
		}
	});

	$('.sobre-box').hide();
	$('.contato-box').hide();

	$('.menu .sobre').click(function() {
		
		$('.sobre-box').show('slow/400/fast');
		$('.contato-box').hide();
		$('.slide .buttons button').hide();
		
		$('.menu .sobre').mouseout(function() {
			$('.sobre-box').hide('slow/400/fast');
			$('.slide .buttons button').show();
		});
		
	});

	$('.menu .contato').click(function() {
		
		$('.contato-box').show('slow/400/fast');
		$('.sobre-box').hide();
		$('.slide .buttons button').hide();

		$('.menu .contato').mouseout(function() {
			$('.contato-box').hide('slow/400/fast');
			$('.slide .buttons button').show();
		});
		
	});

	$('.image-2').hide();
	$('.image-3').hide();

	$('.buttons .button-1').click(function(event) {
		$('.image-1').show();
		$('.image-2').hide();
		$('.image-3').hide();
	});

	$('.buttons .button-2').click(function(event) {
		$('.image-1').hide();;
		$('.image-2').show();
		$('.image-3').hide();
	});

	$('.buttons .button-3').click(function(event) {
		$('.image-1').hide();
		$('.image-2').hide();
		$('.image-3').show();
	});
});