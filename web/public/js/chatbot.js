const data = {
	"button": [
		{
			"id": "1",
			"buttonName": "marmik",
			"value": "marmik desai",
			"link": "https://www.google.com/"
		},
		{
			"id": "2",
			"buttonName": "desai",
			"value": "JS",
			"link": "https://www.google.com/"
		},
		{
			"id": "3",
			"buttonName": "front",
			"value": "SVG",
			"link": "https://www.google.com/"
		},
		{
			"id": "4",
			"buttonName": "end",
			"value": "animation",
			"link": "https://www.google.com/"
		},
		{
			"id": "5",
			"buttonName": "developer",
			"value": "es6",
			"link": "https://www.google.com/"
		}
	]
};

class Messenger {
	constructor() {
		this.messageList = [];
		this.me = 1; // completely arbitrary id
		this.them = 5; // and another one
		this.onRecieve = (message) => console.log('Recieved: ' + message.text);
		this.onSend = (message) => console.log('Sent: ' + message.text);
		this.onButtonOption = (message) => console.log('ButtonOption: ' + message.text);
	}

	buttonOption(text = '') {
		let buttonOpt = document.createElement("div")
		buttonOpt.classList = "fadeIn buttons";
		text.forEach((item,index) => {
			buttonOpt.innerHTML += item;
		})

// I dont know how to covert object into string (i userd toString but doesn't work)
// therefor i am not using chatMain() method here

		if (this.validate(text)) {
			let message = {
				user: this.them,
				text: buttonOpt,
				time: new Date().getTime()
			};

			this.messageList.push(message); 
			this.onButtonOption(message);
		}
	}

	send(text = '') {
		let onSend = this.onSend;
		this.chatMain(text, "me", onSend)
	}

	recieve(text = '') {
		let onReceive = this.onRecieve
		this.chatMain(text, "them", onReceive)
	}

	chatMain(text, meThem, sendReceive) {
		if (this.validate(text)) {
			let message = {
				user: this.meThem,
				text: text,
				time: new Date().getTime()
			};

			this.messageList.push(message);
			sendReceive(message);
		}
	}

	validate(input) {
		return !!input.length; // an amazing example of validation I swear.
	}
}
	
function safeText(text) {
	$content.find('.message-wrapper').last().find('.text-wrapper').text(text);
}
	
function animateText() {
	setTimeout(() => {
		$content.find('.message-wrapper').last().find('.text-wrapper').addClass('animated fadeIn');
	}, 350)
}
	
function scrollBottom() {
	$($inner).animate({
		scrollTop: $($content).offset().top + $($content).outerHeight(true)
	}, {
		queue: false,
		duration: 'ease'
	});
}
	
function buildSent(message) {
	$content.append(buildHTML.me(message.text));
	safeText(message.text);
	animateText();
	scrollBottom();
}
	
function buildRecieved(message) {
	$content.append(buildHTML.them(message.text));
	safeText(message.text);
	animateText();
	scrollBottom();
}

function buidButton(message) {
	$content.append(buildHTML.me(message.text));
	$content.find('.message-wrapper').last().find('.text-wrapper').addClass("noBg").html(message.text);
	animateText();
	scrollBottom();
}

function addMessage(message, buttonVal) {
	buttonOption.forEach((item,index) => {
		if(item.buttonName === buttonVal){
			$content.append(buildHTML.me(item.value));
			safeText(item.value);
			animateText();
			scrollBottom();
		}
	})
}
	
class BuildHTML {
	constructor() {
		this.messageWrapper = 'message-wrapper';
		this.circleWrapper = 'circle-wrapper';
		this.textWrapper = 'text-wrapper';
		this.meClass = 'me';
		this.themClass = 'them';
	}
	
	build(text, who) {
		return `<div class="${this.messageWrapper} ${this[who + 'Class']}">
							<div class="${this.circleWrapper} animated bounceIn"></div>
							<div class="${this.textWrapper}">...</div>
						</div>`;
	}
	
	me(text) {
		return this.build(text, 'me');
	}
	
	them(text) {
		return this.build(text, 'them');
	}
}

let messenger = new Messenger(),
		buildHTML = new BuildHTML(),
		$input = $('.chatbot-textarea'),
		$send = $('.chatbot-send'),
		$content = $('.chatbot-content'),
		$inner = $('.chatbot-inner'),
		buttonOption = data.button;

class Button {
	buttonClick() {
		let $buttons = $(".buttons a"),
				buttonVal = this.text;
		
		event.preventDefault();
		buttonOption.forEach((item,index) => {
			switch (buttonVal) {
				case item.buttonName:
					addMessage(item.buttonName, buttonVal);
					break;
				/*
				case "marmik":
					addMessage("marmik", buttonVal)
					break;
				case "desai":
					addMessage("desai", buttonVal)
					break;
				case "front":
					addMessage("front", buttonVal)
					break;
				case "end":
					addMessage("end", buttonVal)
					break;
				case "developer":
					addMessage("developer", buttonVal)
					break;
				*/
			}
		});
		for (var i = 0; i < $buttons.length; i++) {
			$buttons[i].text != buttonVal ? $buttons[i].remove() : $buttons[i].classList = "active";
		}
	}
}

function sendMessage() {
	let text = $input.val();
	messenger.send(text);
	$input.val('');
	$input.focus();

	setTimeout(() => {
		messenger.recieve('This is not live chat so stop messing up here, if you want to develop this contact me on marmikdesai@live.com');
	}, 1500);
	setTimeout(() => {
		buttonMain()
	}, 4000);
}

function buttonMain() {
	let tempArray = [];
	buttonOption.forEach(function(item, index){
		tempArray.push(`<a href=${item.link} class=${item.buttonName} target="_blank">${item.buttonName}</a>`);
	})

	messenger.buttonOption(tempArray)
	let button = new Button(),
			$buttons = $(".buttons a");

	for (var i = 0; i < $buttons.length; i++) {
		$buttons[i].addEventListener("click", button.buttonClick);
	}
}

messenger.onSend = buildSent;
messenger.onRecieve = buildRecieved;
messenger.onButtonOption = buidButton;

$('.chatbot-open').click(function() {
	$('.chatbot').show();

	setTimeout(() => {
		messenger.recieve('Hello! Welcome to live chatbot.');
	}, 1500);
	
	setTimeout(() => {
		messenger.recieve('What would you like to learn more about?');
	}, 5000);

	setTimeout(() => {
		buttonMain();
	}, 7500);
});

$('.chatbot-nav-item-link').click(function() {
	$('.chatbot').hide();
	$('.message-wrapper').remove();
});


$input.focus();
send.addEventListener("click", sendMessage);

input.addEventListener('keydown', (e) => {
	let key = e.which || e.keyCode;
	
	if (key === 13) {
		e.preventDefault();
		sendMessage();
	}
});