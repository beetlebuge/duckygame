function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function processGuess() {
    const min= 1;
    const max = 5;

    //get random number of ducks
    const duckNumber = getRandomNumber(min, max);

    //get the player's guess
    const numberGuessed = parseInt(document.getElementById("playerGuess").value);

    //start the message we'll send back to the player
    let message = `You guessed ${numberGuessed} and there were  ${duckNumber} ducks. `;
    
    if (isNaN(numberGuessed) || numberGuessed <2 || numberGuessed > 10)
    {
        document.getElementById("result").textContent = "Please enter a whole number between 1 and 5.";
        return;
    }
    
    if (duckNumber===numberGuessed)
    {
        //player wins!
        document.getElementById("result").textContent = message + "Congratulations, you guessed the correct number!";
    }
    else
    {
        //player guessed incorrectly
        document.getElementById("result").textContent = message + "Sorry, you didn't guess the right number.";
    }
     //show ducks
     const container = document.getElementById('duckContainer');
      container.innerHTML = '';

     for (let i = 0; i < duckNumber; i++) {
       const img = document.createElement('img');
       img.src = "duck.png";
       container.appendChild(img);

     }
   
}

document.getElementById("submitGuess").addEventListener("click", processGuess);

