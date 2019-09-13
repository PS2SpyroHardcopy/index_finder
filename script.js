var name = prompt("What is your name?");
var lowercaseName;
var fLetter;
var resultsDiv = document.body.querySelector(".results");
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var keepGoing = true;

function firstLetter(){
lowercaseName = name.toLowerCase();// make the name lowercase
fLetter = lowercaseName.charAt(0); // from the lowercase name get the first letter
//resultsDiv.innerHTML =  fLetter;// print first letter
	
	for(var i= -1 ; fLetter != alphabet[i]; i++){
		resultsDiv.innerHTML = i + 2;
	}
	
}

 firstLetter()