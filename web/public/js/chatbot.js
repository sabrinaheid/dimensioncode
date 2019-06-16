firebase.auth().onAuthStateChanged(function(user) {
	if (!user) {	
		$('.chatbot-open').show();
	} else {
		$('.chatbot-open').hide();
	} 
});

$('.chatbot-open').click(function() {
	$('.chatbot').show();

	var botui = new BotUI('chatbot-inner');

	botui.message.add({ // show first message
		delay: 200,
		content: 'Hello'
	}).then(() => {
		return botui.message.add({ // second one
			delay: 2000, // wait 1 sec.
			loading: true,
			content: 'How are you?'
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
			human: true,
			delay: 1000,
			content: 'Whats your name?'
		})
	}).then(() => { // wait till its shown
		return botui.action.text({ // show 'text' action
			delay: 1000,
			loading: true,
			action: {
				placeholder: 'Your name'
			}
		})
	}).then(res => { // get the result
		botui.message.add({
			delay: 2000,
			loading: true,
			content: 'Your name is <b>' + res.value + '</b>'
		});
	}).then(() => {
		return botui.message.add({
			delay: 1000,
			loading: true,
			content: `Have a look at that video please.`
		})
	}).then(() => { // get the result
		return botui.message.add({
			type: 'embed', // this is 'text' by default
			delay: 3000,
			loading: true,
			content: 'https://www.youtube.com/embed/fsxKUby4EEw'
		});
	}).then(() => { 
		botui.action.select({
			action: {
				placeholder : "Select Language", 
				value: 'TR', // Selected value or selected object. Example: {value: "TR", text : "Türkçe" }
				searchselect : true, // Default: true, false for standart dropdown
				label : 'text', // dropdown label variable
				options : [
								{value: "EN", text : "English" },
								{value: "ES", text : "Español" },
								{value: "TR", text : "Türkçe" },
								{value: "DE", text : "Deutsch" },
								{value: "FR", text : "Français" },
								{value: "IT", text : "Italiano" },
						],
				button: {
				icon: 'check',
				label: 'OK'
				}
			}
		})
	}).then(function (res) { // will be called when a button is clicked.
		console.log(res.value); // will print "one" from 'value'
	}).then(function (index) { // will be called when a button is clicked.
		console.log(index); // will print "one" from 'value'
	});
});

$('.chatbot-nav-item-link').click(function() {
	$('.chatbot').hide();
});
