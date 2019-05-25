// BEISPIEL das sind die event listener für die rätsel
document.getElementById('puzzle1-button').addEventListener('click', puzzle1, false);
document.getElementById('puzzle2-button').addEventListener('click', puzzle2, false);
document.getElementById('puzzle3-button').addEventListener('click', puzzle3, false);

firebase.auth().onAuthStateChanged(function(user) {
	if (user) {	
		var uid = firebase.auth().currentUser.uid;
		// Write the user data BEISPIEL
		var uid = firebase.auth().currentUser.uid;
		var email = firebase.auth().currentUser.email;
		console.log(uid + email);
		firebase.database().ref('users/' + uid).set({
			level: '1',
			part: '2'
		});
	} else {
		console.log('Not logged in.');
	}
});