var button = document.getElementById("enter");
var deleteBtns = document.getElementsByClassName("delete");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//add event listener to first 6 notes
for (i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", remove);
}

function inputLength() {
	return input.value.length;
}
function remove(e) {
	// e.target.removeEventListener("click", remove, false);
	e.target.parentNode.remove();
}
function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = remove;
	
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);
	ul.appendChild(li);
	input.value = "";
}

ul.onclick = function(e) {
	e.target.classList.toggle('done')
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);