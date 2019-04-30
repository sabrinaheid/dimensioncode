
/**
 * Set up UI event listeners and registering Firebase auth listeners.
 */
window.onload = function() {

	// Listening for auth state changes.
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			// User is signed in.
			var uid = user.uid;
			var email = user.email;
			var photoURL = user.photoURL;
			var phoneNumber = user.phoneNumber;
			var isAnonymous = user.isAnonymous;
			var displayName = user.displayName;
			var providerData = user.providerData;
			var emailVerified = user.emailVerified;
		}

		updateSignInButtonUI();
		updateSignOutButtonUI();
		writeUserData();
		readUserData();
	});
	
	// Event bindings.
	document.getElementById('sign-in-button').addEventListener('click', onSignInClick);
	document.getElementById('sign-out-button').addEventListener('click', onSignOutClick);
};

/**
 * Function called when clicking the Login/Logout button.
 */
function onSignInClick() {
	window.open('/phone-simple-popup.html', '_blank', 'height=600px,width=450px,top=100px,left=100px');
}

/**
 * Signs out the user when the sign-out button is clicked.
 */
function onSignOutClick() {
	firebase.auth().signOut();
}

/**
 * Updates the state of the Sign-in form.
 */
function updateSignInButtonUI() {
	if (firebase.auth().currentUser) {
		document.getElementById('sign-in-button').style.display = 'none';
	} else {
		document.getElementById('sign-in-button').style.display = 'block';
	}
}

/**
 * Updates the state of the Sign out button.
 */
function updateSignOutButtonUI() {
	if (firebase.auth().currentUser) {
		document.getElementById('sign-out-button').style.display = 'block';
	} else {
		document.getElementById('sign-out-button').style.display = 'none';
	}
}

function writeUserData() {
	if (firebase.auth().currentUser) {
		var uid = firebase.auth().currentUser.uid;
		var phoneNumber = firebase.auth().currentUser.phoneNumber;
		console.log(uid + phoneNumber);
		firebase.database().ref('users/' + uid).set({
			phoneNumber: phoneNumber
		});
	}
}

function readUserData() {
	if (firebase.auth().currentUser) {
		// Get the current userID
		var uid = firebase.auth().currentUser.uid;
		// Get the user data
		return firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
			//Do something with your user data located in snapshot
			console.log(snapshot.val());
		});
	}
}