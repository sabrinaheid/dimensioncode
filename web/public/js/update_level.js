// BEISPIEL
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {	
		var uid = firebase.auth().currentUser.uid;
		// Get the user data
		return firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
			var data = snapshot.val();

			if (data.level === '1') {
				$('.main').addClass('level-1')
			}
			console.log(data);

		});

		// var uid = firebase.auth().currentUser.uid;
		// var email = firebase.auth().currentUser.email;
		// console.log(uid + ' ' + email);
		// $('.main').addClass('isLoggedIn');
	} else {
		console.log('Not logged in.');
	}
});