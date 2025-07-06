const randomNumber = parseInt((Math.random() * 100) + 1)
console.log(randomNumber);

function onGuess() {
    const input = document.getElementById("Guess").value
    const message = document.getElementById("msg")

    if (!input || input < 1 || input > 100) {
        // message.innerHTML = "please enter a valid number betwee 1 to 100"
        console.log( "please enter a valid number betwee 1 to 100");
        
    }
    else if (input == randomNumber) {
        message.innerHTML = "you guess the correct number"
    }
    else if (input > randomNumber) {
        message.innerHTML = "you number is too high"
    }
    else if (input < randomNumber) {
        message.innerHTML = "you number is too low"
    }
    

}
