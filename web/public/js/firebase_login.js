// var email = "saaa@email.com";
// var password = "mypassword";

// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//    console.log(error.code);
//    console.log(error.message);
// });


// var email = "myemail@email.com";
// var password = "mypassword";

// firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//    console.log(error.code);
//    console.log(error.message);
// });

// firebase.auth().signOut().then(function() {
// 	console.log("Logged out!")
//  }, function(error) {
// 	console.log(error.code);
// 	console.log(error.message);
//  });

// ui.start('#firebaseui-auth-container', {
// 	signInOptions: [
// 		firebase.auth.EmailAuthProvider.PROVIDER_ID
// 	],
// 	// Other config options...
// });

// ui.start('#firebaseui-auth-container', {
// 	signInOptions: [
// 		{
// 		provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
// 		signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
// 		}
// 	],
// 	// Other config options...
// });

// // Is there an email link sign-in?
// if (ui.isPendingRedirect()) {
// ui.start('#firebaseui-auth-container', uiConfig);
// }

// // This can also be done via:
// if ((firebase.auth().isSignInWithEmailLink(window.location.href))) {
// 	ui.start('#firebaseui-auth-container', uiConfig);
// }