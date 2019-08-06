if (localStorage.level == '3') {
	$('.puzzle-3').show();

	$('.person-2').click(function() {
		$('.overlay-puzzle-3').show();

		// if (firebase.auth().currentUser) {
		// 	var uid = firebase.auth().currentUser.uid;
		// 	var email = firebase.auth().currentUser.email;
	
		// 	firebase.database().ref('users/' + uid).set({
		// 		email: email,
		// 		level: '3',
		// 		part: '2'
		// 	});
		// }
	});

	$('.overlay-puzzle-3').click(function() {
		$('.overlay-puzzle-3').hide();
	});
} else {
	$('.puzzle-3').hide();
} 
