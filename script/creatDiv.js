let numberID = 1;
var input;
var button = document.getElementById('addBox');
var set = document.getElementById('toSetting');
var form;

var wheel = document.getElementById('boxWheel');
var square = document.getElementById('boxSquare');
var triangle = document.getElementById('boxTriangle');


triangle.onclick = function(){
	alert("Wkrótce dostepne");
}
wheel.onclick = function(){
	form = "50%";
}
square.onclick = function(){
	form = "0%";
}



/*set.onclick = function(){
	document.getElementById('blackAll').style.display="block";
}
*/
addBox.onclick = function () {
	errors = false;
	var width = document.querySelector('#width');
	var height = document.querySelector('#height');
	var color = document.querySelector('#color');
	if (document.form.width.value.length < 1) {
		errors = "Wypełnij wszystkie pola";
	} else {
		if (document.form.height.value.length < 1) {
			errors = "Wypełnij wszystkie pola";
		} else {
			if (document.form.color.value.length < 1) {
				errors = "Wypełnij wszystkie pola";
			} else {
				widthV = width.value.trim();
				heightV = height.value.trim();
				colorV = color.value.trim();
			}
		}
	}
	if (errors) {
		alert(errors);
		return false;
	}
}
function createDiv() {
	var div = document.createElement("div");
	div.style.width = widthV + "px";
	div.style.height = heightV + "px";
	div.style.cursor = "pointer";
	div.style.background = colorV;
	div.style.position = "absolute";
	div.style.top = "20px";
	div.style.left = "40px";
	div.style.borderRadius = form;
	div.setAttribute("id", `a${numberID}`);
	div.addEventListener("mousedown", () => {
		startMoveWindow(event)
	});
	div.addEventListener("doubleclick", () => {
	});
	document.getElementById("main").appendChild(div);
	numberID++;
}




document.getElementById('addBox').addEventListener('click', () => {
	createDiv();
});