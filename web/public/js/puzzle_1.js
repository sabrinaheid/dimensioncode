if (localStorage.level == '1') {
	$('.puzzle-1').click(function() {
		$('.overlay-puzzle-1').show();
		
		if (firebase.auth().currentUser) {
			var uid = firebase.auth().currentUser.uid;
			var email = firebase.auth().currentUser.email;
			console.log(uid + email);
			firebase.database().ref('users/' + uid).set({
				email: email,
				level: '2',
				part: '1'
			});
		}
	});

	$('.overlay-puzzle-1').click(function() {
		$('.overlay-puzzle-1').hide();
	});
}
