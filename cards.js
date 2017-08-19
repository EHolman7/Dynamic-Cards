console.log("linked to cards.js");

var inputField = document.getElementById('createText');//Text input
var getCreateButton = document.getElementById('createButton');// create button
var cardDiv = document.getElementById('cardDiv');//div to hold cards

//domstring for my cards
function domString(){
	var cardString = '';
		cardString += `<div class="cardBox" id="cardBox">`;
		cardString += `<div class="cardText">${inputField.value}</div>`;
		cardString += `<button class="dbtn" id="deleteCard" value="delete">Delete</button>`;
		cardString += `</div>`;
	//console.log(cardString);
	writeToDom(cardString);
}
//Function for my write to dom to send to html
function writeToDom(cardString){
	cardDiv.innerHTML += cardString;
}
// Create button event listener to run domsting
getCreateButton.addEventListener('click', domString);

// //have to put event listner on the cardholder since the delete button doesn't exist at first on the page. 
cardDiv.addEventListener('click', removeCard);

// //delete button function
function removeCard (e){
console.log(e);
  if(e.target.className === 'dbtn'){
    console.log("yaaaaaaaaa!");
    e.target.parentNode.remove();
  }

}



