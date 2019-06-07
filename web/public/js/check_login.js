firebase.auth().onAuthStateChanged(function(user) {
	if (user) {	
			// var uid = firebase.auth().currentUser.uid;
			// var email = firebase.auth().currentUser.email;
			// console.log(uid + ' ' + email);
		$('.main').addClass('isLoggedIn');
		$('.navbar-nav').append('<li class="nav-item nav-item-download"><a class="nav-link" href="download.html">Download</a></li>');

		var uid = firebase.auth().currentUser.uid;

		var update = database.ref('/users/' + uid);
		update.on('value', function(snapshot) {
			var data = snapshot.val();
			
			if (data.level === '1') {
				localStorage.level = '1';
				// $('.main').addClass('level-1');
				// $('.main').removeClass('level-2');
				// $('.main').removeClass('level-3');
			}

			if (data.level === '2') {
				localStorage.level = '2';
				// $('.main').addClass('level-2');
				// $('.main').removeClass('level-1');
				// $('.main').removeClass('level-3');
			}

			if (data.level === '3') {
				localStorage.level = '3';
				// $('.main').addClass('level-3');
				// $('.main').removeClass('level-1');
				// $('.main').removeClass('level-2');
			} 
		});
	} else {
		$('.main').removeClass('isLoggedIn');
		localStorage.removeItem('level');

		if ($('.nav-item-download').length) {
			$('.nav-item-download').remove();
		}
	}

	$('#sign-out-button').click(function() {
		firebase.auth().signOut();
		localStorage.removeItem('level');
		location.reload();
		// $('.main').removeClass('level-1');
		// $('.main').removeClass('level-2');
		// $('.main').removeClass('level-3');
	});
});