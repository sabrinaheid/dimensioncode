firebase.auth().onAuthStateChanged(function(user) {
	if (user) {	
			var uid = firebase.auth().currentUser.uid;
			var email = firebase.auth().currentUser.email;
			console.log(uid + ' ' + email);
			$('.main').addClass('isLoggedIn');
	} else {
		$('.main').removeClass('isLoggedIn');
	}

	$('#sign-out-button').click(function() {
		firebase.auth().signOut();
	});
});