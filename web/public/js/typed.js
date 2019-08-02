// Can also be included with a regular script tag


var typed1 = new Typed('#typed1', {
	stringsElement: '#typed-strings1',
	typeSpeed: 40,
	onComplete: function(self) { 
		console.log('onCmplete ' + self);
		var typed2 = new Typed('#typed2', {
			stringsElement: '#typed-strings2',
			typeSpeed: 40,
			onComplete: function(self) { 
				var typed3 = new Typed('#typed3', {
					stringsElement: '#typed-strings3',
					typeSpeed: 40,
					onComplete: function(self) { 
						var typed4 = new Typed('#typed4', {
							stringsElement: '#typed-strings4',
							typeSpeed: 40,
							onComplete: function(self) { 
								var typed5 = new Typed('#typed5', {
									stringsElement: '#typed-strings5',
									typeSpeed: 40,
									onComplete: function(self) { 
										var typed6 = new Typed('#typed6', {
											stringsElement: '#typed-strings6',
											typeSpeed: 40
										});
									}
								});
							}
						});
					}
				});
			}
		});
	},
});




