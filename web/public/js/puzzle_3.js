if (localStorage.level == '3') {
	$('.puzzle-3').show();

	$('.person-2').click(function() {
		$('.overlay-puzzle-3').show();
	});

	$('.overlay-puzzle-3').click(function() {
		$('.overlay-puzzle-3').hide();
	});
} else {
	$('.puzzle-3').hide();
} 
