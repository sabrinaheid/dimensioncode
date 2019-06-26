firebase.auth().onAuthStateChanged(function(user) {
	if (user) {	
		

		$('.main').addClass('isLoggedIn');
		if (localStorage.level !== undefined && window.location.pathname !== '/download.html') {
			$('#sign-out-button').after('<a href="download.html" class="btn btn-main download-btn"><i class="fas fa-download"></i></a>');
		}
		

		var uid = firebase.auth().currentUser.uid;

		var update = database.ref('/users/' + uid);
		update.on('value', function(snapshot) {
			var data = snapshot.val();

			if (data !== null) {
				if (data.level === '1') {
					localStorage.level = '1';
					// location.reload();
					// $('.main').addClass('level-1');
					// $('.main').removeClass('level-2');
					// $('.main').removeClass('level-3');
				}

				if (data.level === '2') {
					localStorage.level = '2';
					// location.reload();
					// $('.main').addClass('level-2');
					// $('.main').removeClass('level-1');
					// $('.main').removeClass('level-3');
				}

				if (data.level === '3') {
					localStorage.level = '3';
					// location.reload();
					// $('.main').addClass('level-3');
					// $('.main').removeClass('level-1');
					// $('.main').removeClass('level-2');
				}
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
		window.location = '/index.html'; 
		// $('.main').removeClass('level-1');
		// $('.main').removeClass('level-2');
		// $('.main').removeClass('level-3');
	});
});