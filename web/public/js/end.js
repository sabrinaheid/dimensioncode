firebase.auth().onAuthStateChanged(function(user) {
	if (user) {	
		var uid = firebase.auth().currentUser.uid;

		var starCountRef = database.ref('/users/' + uid);
		starCountRef.on('value', function(snapshot) {

			if(snapshot.val().level == 3 && snapshot.val().part == 3) {
				window.location.href = 'end.html';
			}
		});
	}
});
