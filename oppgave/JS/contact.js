const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message')

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const nameValue = name.value;
	const emailValue = email.value;
	const subjectValue = subject.value;
	
	if(nameValue === '') {
		setErrorFor(name, 'Name cannot be blank');
	} else if (subjectValue.length < 5){
		setErrorFor(name, 'Name should be atleast 5 characters');
	} else {	
		setSuccessFor(name);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(subjectValue === '') {
		setErrorFor(subject, 'Subject cannot be blank');
    } else if (subjectValue.length < 15) {
		setErrorFor(subject, 'Subject minimum length is 10');
	} else {
		setSuccessFor(subject);
	}
	
	if(messageValue === '') {
		setErrorFor(message, 'Message cannot be blank');
    } else if (messageValue.length < 25) {
		setErrorFor(message, 'Messages minimum length is 10');
	} else {
		setSuccessFor(message);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

