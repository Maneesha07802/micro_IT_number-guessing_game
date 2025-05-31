let secretNumber = Math.floor(Math.random() * 100) +1;
let attemptCount = 0;

function checkGuess(){
    const guess = parseInt(document.getElementById("guess").value);
    const feedback = document.getElementById("feedback");
    const attempts = document.getElementById("attempts");

    if(!guess || guess<1 || guess>100){
        feedback.textContent = "Please enter a valid number between 1 and 100";
        return;
    }
    attemptCount++;
    
    if(guess< secretNumber){
        feedback.textContent = "Too low! Try again";
    } else if(guess> secretNumber){
        feedback.textContent = "Too high! Try again";
    } else{
        feedback.textContent = `Congratulations! You guessed it in ${attemptCount} attempts`;
    }
    attempts.textContent = `Attempts: ${attemptCount}`;
}

function restartGame(){
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attemptCount = 0;
    document.getElementById("guess").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("attempts").textContent = "";
}