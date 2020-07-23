var button = document.getElementById('enter');
var button2 = document.getElementById('Done');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = '';
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneList() {
	var li = document.getElementsById('list');
	if (li.className === 'done2') {
		li.className = 'done';
	} else {
		li.className = 'done2';
	}
}

button2.addEventListener('click', doneList);

button.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);
