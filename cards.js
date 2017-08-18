console.log("linked to cards.js")

var inputField = document.getElementById('createText');
var getCreateButton = document.getElementById('createbutton');
var txt = "";
var cardArray = "";

function add(card) {

//Dynamically create and input type
var element = document.createElement("input");
}



document.body.addEventListener('keypress', function (event){
  //console.log("event", event.key);
  if(event.key === "Enter"){
    txt = inputField.value;

    //domString
    domString(txt);
    //console.log("yay", results);
  writeToDom(cardArray);
}})







function domString(cardz){
	var cardString = '';
	for (var i=0; i<cardArray.length; i++){
		var newCard = '';
		newCard += `<div class="cardBox" id="cardBox-${i}">`;
		newCard += `<div class="cardText"></div>`;
		newCard += `<button id="deleteCard" value="delete">Delete</button>`;
		newCard += `</div>`;
		cardString += newCard;
	}
	console.log(cardString)
	writeToDom(cardString);










