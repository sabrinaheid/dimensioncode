firebase.auth().onAuthStateChanged(function(user) {
	if (user) {	
			var uid = firebase.auth().currentUser.uid;
			var email = firebase.auth().currentUser.email;
			console.log(uid + ' ' + email);
			$('.main').addClass('isLoggedIn');

			$('.navbar-nav').append('<li class="nav-item nav-item-download"><a class="nav-link" href="download.html">Download</a></li>');
	} else {
		$('.main').removeClass('isLoggedIn');

		if ($('.nav-item-download').length) {
			$('.nav-item-download').remove();
		}
	}

	$('#sign-out-button').click(function() {
		firebase.auth().signOut();
		
		$('.main').removeClass('level-1');
		$('.main').removeClass('level-2');
		$('.main').removeClass('level-3');
	});
});