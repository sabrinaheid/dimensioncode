firebase.auth().onAuthStateChanged(function(user) {
	if (user) {	
		var uid = firebase.auth().currentUser.uid;
		var email = firebase.auth().currentUser.email;

		var db = database.ref('/users/' + uid);
		db.on('value', function(snapshot) {

			if(snapshot.val().level == 3 && snapshot.val().part == 3) {
				firebase.database().ref('users/' + uid).set({
					email: email,
					level: '1',
					part: '1'
				});
				window.location.href = 'end.html';
			}
		});
	}
});
