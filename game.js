//raplace all space and put into new array but get the words displayed out of the original array
//Check a game State to see if completed or not. Check letters in there and ignore the space.
//Array storing user guesses

//Hangman Dictionary
var memeDictionary = [
	'Andersonville', 
	'Uptown', 
	'Downtown',
	'Edgewater', 
	'Lakeview', 
	'Pilsen',
	'Bucktown'
	];
//Get Random Word

var currentWord = memeDictionary[Math.floor(Math.random() * (memeDictionary.length ))].toLowerCase();
var gameWord = currentWord.split('');
var userGuesses = [];
var correctGuesses = [];

console.log(currentWord);
console.log(gameWord);

document.onkeyup = function(event){
	var currentKey = event.key.toLowerCase();
	var isAlreadyThere = userGuesses.includes(currentKey);
	var correctGuess = gameWord.includes(currentKey)
	if (isAlreadyThere) {
		console.log('Please guess a different letter');
		console.log('Letters already in the array:');
		console.log(userGuesses);
		hasWon();
	}
	else if (correctGuess) {
		for (var i=gameWord.length-1; i>=0; i--) {
		    if (gameWord[i] === currentKey) {
		        gameWord.splice(i, 1);
		    }
		    else if(gameWord.length === 0){
				console.log('You WIN!');	
			} 
		}
		console.log('updated array after correct '+gameWord);
		console.log('length '+gameWord.length);
		hasWon();
	}
	else if (userGuesses.length >= 10) {
		console.log('You Lost!');
		hasWon();
	}
	else if(gameWord.length === 0){
		console.log('You WIN!');
		hasWon();	
	} 
	else {
		userGuesses.push(currentKey);
		console.log(currentKey);
		console.log('Your new guess array:');
		console.log(userGuesses);
		hasWon();
	}
}

function hasWon() {
	if (gameWord.length === 0) {
		console.log('You WIN!');
	}
}

hasWon();



