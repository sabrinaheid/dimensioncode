firebase.auth().onAuthStateChanged(function(user) {
	if (user) {	
			var uid = firebase.auth().currentUser.uid;
			var email = firebase.auth().currentUser.email;
			console.log(uid + ' ' + email);
			$('.main').addClass('isLoggedIn');
			$('.nav-item-download').show();
	} else {
		$('.main').removeClass('isLoggedIn');
		$('.nav-item-download').hide();
	}

	$('#sign-out-button').click(function() {
		firebase.auth().signOut();
		$('.main').removeClass('level-1');
		$('.main').removeClass('level-2');
		$('.main').removeClass('level-3');

		$('.nav-item-download').hide();
	});
});