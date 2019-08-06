$('.download-button').click(function() {
	

	if (firebase.auth().currentUser) {
		var uid = firebase.auth().currentUser.uid;
		var email = firebase.auth().currentUser.email;
		console.log(uid + email);
		firebase.database().ref('users/' + uid).set({
			email: email,
			level: '1',
			part: '1'
		});

		location.reload();
	}
});