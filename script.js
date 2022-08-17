// Variable that lets the user select
const getUserChoice = userInput => {
    userInput =>{
        userInput = userInput.toLowerCase()
        // If / else statement for user input
        if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
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
// Variable that plays the game