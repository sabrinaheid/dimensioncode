// nach 11 Versuchen, gibt es einen Hint für den User und anschliessend kann er noch 5 mal probieren und ansonsten wird die Lösung gesagt.

if (localStorage.level == '2') {
	$('.chatbot-open-level').show();
} else {
	$('.chatbot-open-level').hide();
} 

$('.chatbot-open').click(function() {
	$('.chatbot').show();

	var botui = new BotUI('chatbot-inner');

	botui.message.add({ // show first message
		delay: 200,
		content: 'Hello Player, you are now in the second level of our game!'
	}).then(() => {
		return botui.message.add({ // second one
			delay: 2000, // wait 1 sec.
			loading: true,
			content: 'How do you feel?'
		})
		}).then(() => {
		return botui.action.button({ // let user do something
			delay: 2000,
			loading: true,
			action: [
					{
						text: 'Good',
						value: 'good'
					},
					{
						text: 'Really Good',
						value: 'really_good'
					},
					{
						text: 'Bad',
						value: 'bad'
					}
			]
		})
	}).then(res => {
		return botui.message.add({
			delay: 1000,
			loading: true,
			content: `Mhh, you are feeling ${res.text}!`
		})
	}).then(() => {
		return botui.message.add({ // show a message
			delay: 1000,
			content: 'Enter the code here and you will get one step further in the game.'
		})
	}).then(() => { // wait till its shown
		return botui.action.text({ // show 'text' action
			delay: 1000,
			human: true,
			loading: true,
			action: {
				placeholder: 'Enter code'
			}
		})
	}).then(res => { // get the result
		if (res.value === '1942') {
			botui.message.add({
				delay: 2000,
				loading: true,
				content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
			});

			if (firebase.auth().currentUser) {
				var uid = firebase.auth().currentUser.uid;
				var email = firebase.auth().currentUser.email;
				console.log(uid + email);
				firebase.database().ref('users/' + uid).set({
					email: email,
					level: '3',
					part: '1'
				});
			}
		} else {
			botui.message.add({
				delay: 2000,
				loading: true,
				content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. Try again please!'
			}).then(() => { // wait till its shown
				return botui.action.text({ // show 'text' action
					delay: 1000,
					human: true,
					loading: true,
					action: {
						placeholder: 'Enter code'
					}
				})
			}).then(res => { // get the result
				if (res.value === '1942') {
					botui.message.add({
						delay: 2000,
						loading: true,
						content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
					});

					if (firebase.auth().currentUser) {
						var uid = firebase.auth().currentUser.uid;
						var email = firebase.auth().currentUser.email;
						console.log(uid + email);
						firebase.database().ref('users/' + uid).set({
							email: email,
							level: '3',
							part: '1'
						});
					}
				} else {
					botui.message.add({
						delay: 2000,
						loading: true,
						content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. Try again please!'
					}).then(() => { // wait till its shown
						return botui.action.text({ // show 'text' action
							delay: 1000,
							human: true,
							loading: true,
							action: {
								placeholder: 'Enter code'
							}
						})
					}).then(res => { // get the result
						if (res.value === '1942') {
							botui.message.add({
								delay: 2000,
								loading: true,
								content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
							});

							if (firebase.auth().currentUser) {
								var uid = firebase.auth().currentUser.uid;
								var email = firebase.auth().currentUser.email;
								console.log(uid + email);
								firebase.database().ref('users/' + uid).set({
									email: email,
									level: '3',
									part: '1'
								});
							}
						} else {
							botui.message.add({
								delay: 2000,
								loading: true,
								content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. Try again please!'
							}).then(() => { // wait till its shown
								return botui.action.text({ // show 'text' action
									delay: 1000,
									human: true,
									loading: true,
									action: {
										placeholder: 'Enter code'
									}
								})
							}).then(res => { // get the result
								if (res.value === '1942') {
									botui.message.add({
										delay: 2000,
										loading: true,
										content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
									});

									if (firebase.auth().currentUser) {
										var uid = firebase.auth().currentUser.uid;
										var email = firebase.auth().currentUser.email;
										console.log(uid + email);
										firebase.database().ref('users/' + uid).set({
											email: email,
											level: '3',
											part: '1'
										});
									}
								} else {
									botui.message.add({
										delay: 2000,
										loading: true,
										content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. Try again please!'
									}).then(() => { // wait till its shown
										return botui.action.text({ // show 'text' action
											delay: 1000,
											human: true,
											loading: true,
											action: {
												placeholder: 'Enter code'
											}
										})
									}).then(res => { // get the result
										if (res.value === '1942') {
											botui.message.add({
												delay: 2000,
												loading: true,
												content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
											});

											if (firebase.auth().currentUser) {
												var uid = firebase.auth().currentUser.uid;
												var email = firebase.auth().currentUser.email;
												console.log(uid + email);
												firebase.database().ref('users/' + uid).set({
													email: email,
													level: '3',
													part: '1'
												});
											}
										} else {
											botui.message.add({
												delay: 2000,
												loading: true,
												content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. Try again please!'
											}).then(() => { // wait till its shown
												return botui.action.text({ // show 'text' action
													delay: 1000,
													human: true,
													loading: true,
													action: {
														placeholder: 'Enter code'
													}
												})
											}).then(res => { // get the result
												if (res.value === '1942') {
													botui.message.add({
														delay: 2000,
														loading: true,
														content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
													});

													if (firebase.auth().currentUser) {
														var uid = firebase.auth().currentUser.uid;
														var email = firebase.auth().currentUser.email;
														console.log(uid + email);
														firebase.database().ref('users/' + uid).set({
															email: email,
															level: '3',
															part: '1'
														});
													}
												} else {
													botui.message.add({
														delay: 2000,
														loading: true,
														content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. Try again please!'
													}).then(() => { // wait till its shown
														return botui.action.text({ // show 'text' action
															delay: 1000,
															human: true,
															loading: true,
															action: {
																placeholder: 'Enter code'
															}
														})
													}).then(res => { // get the result
														if (res.value === '1942') {
															botui.message.add({
																delay: 2000,
																loading: true,
																content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
															});

															if (firebase.auth().currentUser) {
																var uid = firebase.auth().currentUser.uid;
																var email = firebase.auth().currentUser.email;
																console.log(uid + email);
																firebase.database().ref('users/' + uid).set({
																	email: email,
																	level: '3',
																	part: '1'
																});
															}
														} else {
															botui.message.add({
																delay: 2000,
																loading: true,
																content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. Try again please!'
															}).then(() => { // wait till its shown
																return botui.action.text({ // show 'text' action
																	delay: 1000,
																	human: true,
																	loading: true,
																	action: {
																		placeholder: 'Enter code'
																	}
																})
															}).then(res => { // get the result
																if (res.value === '1942') {
																	botui.message.add({
																		delay: 2000,
																		loading: true,
																		content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
																	});

																	if (firebase.auth().currentUser) {
																		var uid = firebase.auth().currentUser.uid;
																		var email = firebase.auth().currentUser.email;
																		console.log(uid + email);
																		firebase.database().ref('users/' + uid).set({
																			email: email,
																			level: '3',
																			part: '1'
																		});
																	}
																} else {
																	botui.message.add({
																		delay: 2000,
																		loading: true,
																		content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. Try again please!'
																	}).then(() => { // wait till its shown
																		return botui.action.text({ // show 'text' action
																			delay: 1000,
																			human: true,
																			loading: true,
																			action: {
																				placeholder: 'Enter code'
																			}
																		})
																	}).then(res => { // get the result
																		if (res.value === '1942') {
																			botui.message.add({
																				delay: 2000,
																				loading: true,
																				content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
																			});

																			if (firebase.auth().currentUser) {
																				var uid = firebase.auth().currentUser.uid;
																				var email = firebase.auth().currentUser.email;
																				console.log(uid + email);
																				firebase.database().ref('users/' + uid).set({
																					email: email,
																					level: '3',
																					part: '1'
																				});
																			}
																		} else {
																			botui.message.add({
																				delay: 2000,
																				loading: true,
																				content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. Try again please!'
																			}).then(() => { // wait till its shown
																				return botui.action.text({ // show 'text' action
																					delay: 1000,
																					human: true,
																					loading: true,
																					action: {
																						placeholder: 'Enter code'
																					}
																				})
																			}).then(res => { // get the result
																				if (res.value === '1942') {
																					botui.message.add({
																						delay: 2000,
																						loading: true,
																						content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
																					});

																					if (firebase.auth().currentUser) {
																						var uid = firebase.auth().currentUser.uid;
																						var email = firebase.auth().currentUser.email;
																						console.log(uid + email);
																						firebase.database().ref('users/' + uid).set({
																							email: email,
																							level: '3',
																							part: '1'
																						});
																					}
																				} else {
																					botui.message.add({
																						delay: 2000,
																						loading: true,
																						content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. Try again please!'
																					}).then(() => { // wait till its shown
																						return botui.action.text({ // show 'text' action
																							delay: 1000,
																							human: true,
																							loading: true,
																							action: {
																								placeholder: 'Enter code'
																							}
																						})
																					}).then(res => { // get the result
																						if (res.value === '1942') {
																							botui.message.add({
																								delay: 2000,
																								loading: true,
																								content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
																							});

																							if (firebase.auth().currentUser) {
																								var uid = firebase.auth().currentUser.uid;
																								var email = firebase.auth().currentUser.email;
																								console.log(uid + email);
																								firebase.database().ref('users/' + uid).set({
																									email: email,
																									level: '3',
																									part: '1'
																								});
																							}
																						} else {
																							botui.message.add({
																								delay: 2000,
																								loading: true,
																								content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. but I will give you a hint. Study what you did earlier in the game and the enter this word here.'
																							}).then(() => { // wait till its shown
																								return botui.action.text({ // show 'text' action
																									delay: 1000,
																									human: true,
																									loading: true,
																									action: {
																										placeholder: 'Enter code'
																									}
																								})
																							}).then(res => { // get the result
																								if (res.value === '1942') {
																									botui.message.add({
																										delay: 2000,
																										loading: true,
																										content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
																									});

																									if (firebase.auth().currentUser) {
																										var uid = firebase.auth().currentUser.uid;
																										var email = firebase.auth().currentUser.email;
																										console.log(uid + email);
																										firebase.database().ref('users/' + uid).set({
																											email: email,
																											level: '3',
																											part: '1'
																										});
																									}
																								} else {
																									botui.message.add({
																										delay: 2000,
																										loading: true,
																										content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. but I will give you a hint. Study what you did earlier in the game and the enter this word here.'
																									}).then(() => { // wait till its shown
																										return botui.action.text({ // show 'text' action
																											delay: 1000,
																											human: true,
																											loading: true,
																											action: {
																												placeholder: 'Enter code'
																											}
																										})
																									}).then(res => { // get the result
																										if (res.value === '1942') {
																											botui.message.add({
																												delay: 2000,
																												loading: true,
																												content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
																											});

																											if (firebase.auth().currentUser) {
																												var uid = firebase.auth().currentUser.uid;
																												var email = firebase.auth().currentUser.email;
																												console.log(uid + email);
																												firebase.database().ref('users/' + uid).set({
																													email: email,
																													level: '3',
																													part: '1'
																												});
																											}
																										} else {
																											botui.message.add({
																												delay: 2000,
																												loading: true,
																												content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. but I will give you a hint. Study what you did earlier in the game and the enter this word here.'
																											}).then(() => { // wait till its shown
																												return botui.action.text({ // show 'text' action
																													delay: 1000,
																													human: true,
																													loading: true,
																													action: {
																														placeholder: 'Enter code'
																													}
																												})
																											}).then(res => { // get the result
																												if (res.value === '1942') {
																													botui.message.add({
																														delay: 2000,
																														loading: true,
																														content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
																													});

																													if (firebase.auth().currentUser) {
																														var uid = firebase.auth().currentUser.uid;
																														var email = firebase.auth().currentUser.email;
																														console.log(uid + email);
																														firebase.database().ref('users/' + uid).set({
																															email: email,
																															level: '3',
																															part: '1'
																														});
																													}
																												} else {
																													botui.message.add({
																														delay: 2000,
																														loading: true,
																														content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. but I will give you a hint. Study what you did earlier in the game and the enter this word here.'
																													}).then(() => { // wait till its shown
																														return botui.action.text({ // show 'text' action
																															delay: 1000,
																															human: true,
																															loading: true,
																															action: {
																																placeholder: 'Enter code'
																															}
																														})
																													}).then(res => { // get the result
																														if (res.value === '1942') {
																															botui.message.add({
																																delay: 2000,
																																loading: true,
																																content: 'You have entered the code <b>' + res.value + '</b>. You are so good. Now go back into the game and continue playing the game.'
																															});

																															if (firebase.auth().currentUser) {
																																var uid = firebase.auth().currentUser.uid;
																																var email = firebase.auth().currentUser.email;
																																console.log(uid + email);
																																firebase.database().ref('users/' + uid).set({
																																	email: email,
																																	level: '3',
																																	part: '1'
																																});
																															}
																														} else {
																															botui.message.add({
																																delay: 2000,
																																loading: true,
																																content: 'You have entered the code <b>' + res.value + '</b>. That is wrong. YOU ARE SO BAD. The correct word is <b>dimensioncode</b>. Now you go back to the game in the room and search a ball.'
																															});
																														}
																														
																													});
																												}
																												
																											});
																										}
																										
																									});
																								}
																								
																							});
																						}
																						
																					});
																				}
																				
																			});
																		}
																		
																	});
																}
																
															});
														}
														
													});;
												}
												
											});
										}
										
									});
								}
								
							});
						}
						
					});
				}
				
			});
		}
		
	});
});

$('.chatbot-nav-item-link').click(function() {
	$('.chatbot').hide();
});
