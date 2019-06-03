// BEISPIEL
firebase.auth().onAuthStateChanged(function(user) {
	if (user) {	
		var uid = firebase.auth().currentUser.uid;

		var update = database.ref('/users/' + uid);
		update.on('value', function(snapshot) {
			var data = snapshot.val();
			
			if (data.level === '1') {
				$('.main').addClass('level-1');
				$('.main').removeClass('level-2');
				$('.main').removeClass('level-3');
			}

			if (data.level === '2') {
				$('.main').addClass('level-2');
				$('.main').removeClass('level-1');
				$('.main').removeClass('level-3');
			}

			if (data.level === '3') {
				$('.main').addClass('level-3');
				$('.main').removeClass('level-1');
				$('.main').removeClass('level-2');
			} 
			console.log(data);
		});
	} else {
		console.log('Not logged in.');
	}
});
