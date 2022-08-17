// Variable that lets the user select
const getUserChoice = userInput => {
    userInput =>{
        userInput = userInput.toLowerCase()
        // If / else statement for user input
        if(userInput === 'bomb' || userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
            return userInput
        } else {
            console.error
        }
    }
}
// Variable that lets the computer select
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
        case 0: 
            return 'rock';
        case 1: 
            return 'paper'
        case 2:
            return 'scissors'
    }
}
// Variable that determines the winner
const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === 'bomb'){
        return 'You win!'
    }
    if(userChoice === computerChoice){
        return 'This game is tied'
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'Computer won'
        } else{
            return 'You win!'
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'Computer won.'
        } else{
            return 'You win!'
        }
    }
    if(userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'Computer won'
        } else {
            return 'You win!'
        }
    }
}
// Variable that plays the game
const playGame = () => {
    const getUserChoice = getUserChoice();
    const getComputerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
}

playGame()