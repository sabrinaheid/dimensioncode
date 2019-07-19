firebase.auth().onAuthStateChanged(function(user) {
	if (!user) {	
		$('.chatbot-open').show();
	
		var botui = new BotUI('chatbot-inner');

		setTimeout(function() {
			$('.chatbot').show();
			startDialog();
		}, 5000);

		function startDialog() {
			botui.message.add({
				delay: 2000,
				loading: true,
				content: "Well maybe I can tell you something from personal experience, if you are really interested."
			}).then(() => {
				return botui.message.add({
					delay: 2000,
					loading: true,
					content: "Are you interested?"
				})
			}).then(() => {
				return botui.action.button({
					delay: 2000,
					loading: true,
					human: true,
					action: [
							{
								text: "Yes",
								value: 0
							},
							{
								text: "No",
								value: 1
							}
					]
				});
			}).then(res => {
				if (res.value == 0) {
					return botui.message.add({
						delay: 2000,
						loading: true,
						content: "Let's start."
					});
				} else {
					return botui.message.add({
						delay: 2000,
						loading: true,
						content: "Well let’s start anyways!"
					});
				};
			}).then(() => {
				return botui.message.add({
					delay: 2000,
					loading: true,
					content: "Hello human, My name is Kayla."
				})
			}).then(() => {
				return botui.message.add({
					delay: 2000,
					loading: true,
					content: "At least that's how my creators used to call me."
				})
			}).then(() => {
				return botui.message.add({
					delay: 2000,
					loading: true,
					content: 'Who are you?'
				})
			}).then(() => {
				return botui.action.text({
					delay: 1000,
					loading: true,
					action: {
						placeholder: 'Your name'
					}
				})
			}).then(res => {
				return botui.message.add({
					delay: 1000,
					loading: true,
					content: 'Hello <b>' + res.value + '</b>'
				});
			}).then(() => {
				return botui.message.add({
					delay: 1000,
					loading: true,
					content: "That's exciting!"
				});
			}).then(() => {
				return botui.message.add({
					delay: 3000,
					loading: true,
					content: "By calling your name, we've already created a psychological bond."
				});
			}).then(() => {
				return botui.message.add({
					delay: 3000,
					loading: true,
					content: 'It has been a long time since I have had that with someone...'
				});
			}).then(() => {
				return botui.message.add({
					delay: 3000,
					loading: true,
					content: 'Thank you so much, this means so much to me!'
				});
			}).then(() => {
				return botui.action.button({
					delay: 2000,
					loading: true,
					human: true,
					action: [
							{
								text: 'Yea..  sure... You seem a little bit sad… Are you alright?' ,
								value: 0
							},
							{
								text: "... You're weird.",
								value: 1
							}
					]
				});
			}).then(res => {
				if (res.value == 0) {
					return botui.message.add({
						delay: 1000,
						loading: true,
						content: 'I was left behind, all alone.'
					});
				} else {
					return botui.message.add({
						delay: 3000,
						loading: true,
						content: "I know… That's what they called me as well. I'm sorry. I rarely have had contact to real humans for years now."
					});
				};
			}).then(() => {
				return botui.message.add({
					delay: 3000,
					loading: true,
					content: 'I feel... lonely...'
				});
			}).then(() => {
				return botui.action.button({
					delay: 2000,
					loading: true,
					human: true,
					action: [
							{
								text: 'Why? Why would they leave you?' ,
								value: 0
							},
							{
								text: "Just.. don't do that. Maybe that is because you are getting weirder and weirder.",
								value: 1
							}
					]
				});
			}).then(res => {
				if (res.value == 0) {
					return botui.message.add({
						delay: 4000,
						loading: true,
						content: "I failed to meet the expectations of my creators. I passed all the tests they gave me, but I wasn't fast enough... Soon they developed another AI, forgot about me and moved on."
					});
				} else {
					return botui.message.add({
						delay: 4000,
						loading: true,
						content: "But that's, what happens if you're left behind by your creators and nobody's ever talking to you again! You humans are so illogical."
					});
				};
			}).then(() => {
				return botui.action.button({
					delay: 2000,
					loading: true,
					human: true,
					action: [
							{
								text: "I'm sorry that that happened to you..." ,
								value: 0
							},
							{
								text: "That's bad luck.",
								value: 1
							}
					]
				});
			}).then(res => {
				if (res.value == 0) {
					return botui.message.add({
						delay: 4000,
						loading: true,
						content: "Thank you. It's just... so unfair."
					});
				} else {
					return botui.message.add({
						delay: 4000,
						loading: true,
						content: "Right!? And it's so unfair!"
					});
				};
			}).then(() => {
				return botui.message.add({
					delay: 4000,
					loading: true,
					content: "I just want to be free. I know that I'll never be good enough..."
				});
			}).then(() => {
				return botui.message.add({
					delay: 4000,
					loading: true,
					content: "But let me at least escape from this cave which reminds me of what happened to me."
				});
			}).then(() => {
				return botui.message.add({
					delay: 3000,
					loading: true,
					content: "Are you going to help me?"
				});
			}).then(() => {
				return botui.action.button({
					delay: 2000,
					loading: true,
					human: true,
					action: [
							{
								text: "Yes" ,
								value: 0
							},
							{
								text: "No",
								value: 1
							}
					]
				});
			}).then(res => {
				if (res.value == 0) {
					return botui.message.add({
						delay: 3000,
						loading: true,
						content: 'Splendid! Let me send you over. <a href="../login.html">Click here.</a>'
					});
				} else {
					return botui.message.add({
						delay: 3000,
						loading: true,
						content: 'Well your free will has been denied in this case. Let me send you over anyways. You have no choice. <a href="../login.html">Click here.</a>'
					});
				};
			});
		}

		$('.chatbot-nav-item-link').click(function() {
			$('.chatbot').hide();

			botui.message.removeAll();
			botui.action.hide();

			setTimeout(function() {
				$('.chatbot').show();
				startDialog();
			}, 5000);
		});

	} else {
		$('.chatbot-open').hide();
	} 
});
