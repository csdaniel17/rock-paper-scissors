window.onload = function(){
//play a button, find out what computer played, compare
//find an event of what i played, event of what computer played, score

 var humanScore = 0
 var computerScore = 0

	//define variables rock, paper, and scissors buttons
	document.getElementById('rock').onclick = playRock
	document.getElementById('paper').onclick = playPaper
	document.getElementById('scissors').onclick = playScissors

//find what user played
//function human pick rock
function playRock(){
	var computerPlay = getComputerPlay();

	if (computerPlay == 'paper'){
		//then computer wins
		//set status to you lost sentence
		document.getElementById('status').innerHTML = 'you played rock, computer played paper, you lost :(';
		//add 1 to computer score
		var computerScore = document.getElementById('computerScore').innerHTML;
		computerScore = parseFloat(computerScore);
		computerScore += 1;
		document.getElementById('computerScore').innerHTML = computerScore
	}

	//function computer pick rock
	if (computerPlay == 'rock'){
		//then tie
		//set status to you tie sentence
		document.getElementById('status').innerHTML = 'you played rock, computer played rock, you tied :|';
	}

	if (computerPlay == 'scissors'){
		//then computer loses
		//set status to you win sentence
		document.getElementById('status').innerHTML = 'you played rock, computer played scissors, you won :)';
		//add 1 to computer score
		var humanScore = document.getElementById('humanScore').innerHTML;
		humanScore = parseFloat(humanScore);
		humanScore += 1;
		document.getElementById('humanScore').innerHTML = humanScore
	}
}

//function human pick paper
function playPaper(){
	var computerPlay = getComputerPlay();

	if (computerPlay == 'scissors'){
		//then computer wins
		//set status to you lost sentence
		document.getElementById('status').innerHTML = 'you played paper, computer played scissors, you lost :(';
		//add 1 to computer score
		var computerScore = document.getElementById('computerScore').innerHTML;
		computerScore = parseFloat(computerScore);
		computerScore += 1;
		document.getElementById('computerScore').innerHTML = computerScore
	}

	//function computer pick paper
	if (computerPlay == 'paper'){
		//then tie
		//set status to you tie sentence
		document.getElementById('status').innerHTML = 'you played paper, computer played paper, you tied :|';
	}

	if (computerPlay == 'rock'){
		//then computer loses
		//set status to you win sentence
		document.getElementById('status').innerHTML = 'you played paper, computer played rock, you won :)';
		//add 1 to computer score
		var humanScore = document.getElementById('humanScore').innerHTML;
		humanScore = parseFloat(humanScore);
		humanScore += 1;
		document.getElementById('humanScore').innerHTML = humanScore
	}
}

//function human pick scissors
function playScissors(){
	var computerPlay = getComputerPlay();

	if (computerPlay == 'rock'){
		//then computer wins
		//set status to you lost sentence
		document.getElementById('status').innerHTML = 'you played scissors, computer played rock, you lost :(';
		//add 1 to computer score
		var computerScore = document.getElementById('computerScore').innerHTML;
		computerScore = parseFloat(computerScore);
		computerScore += 1;
		document.getElementById('computerScore').innerHTML = computerScore
	}

	//function computer pick paper
	if (computerPlay == 'scissors'){
		//then tie
		//set status to you tie sentence
		document.getElementById('status').innerHTML = 'you played scissors, computer played scissors, you tied :|';
	}

	if (computerPlay == 'paper'){
		//then computer loses
		//set status to you win sentence
		document.getElementById('status').innerHTML = 'you played scissors, computer played paper, you won :)';
		//add 1 to computer score
		var humanScore = document.getElementById('humanScore').innerHTML;
		humanScore = parseFloat(humanScore);
		humanScore += 1;
		document.getElementById('humanScore').innerHTML = humanScore
	}
}


//this function generates the computers play
function getComputerPlay() {
  	var plays = ['rock', 'paper', 'scissors'];
  	var play = plays[Math.floor(Math.random() * plays.length)];
  	return play;
}


}
