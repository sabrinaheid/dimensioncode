var config = {
	apiKey: "AIzaSyC5KP318-syeJCqHzhk4K5mVJNRqbCEY_Y",
	authDomain: "dimension-code.firebaseapp.com",
	databaseURL: "https://dimension-code.firebaseio.com",
	projectId: "dimension-code",
	storageBucket: "dimension-code.appspot.com",
	messagingSenderId: "1097773210443"
};

firebase.initializeApp(config);

var database = firebase.database();

// var starCountRef = database.ref('test');
// starCountRef.on('value', function(snapshot) {
// 	document.getElementById("test").innerHTML=snapshot.val();
// });

// function sendData(){
// 	var input = document.getElementById("testInput").value;
// 	database.ref('test').set(input);
// }