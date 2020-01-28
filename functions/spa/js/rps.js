function rps(choice){
    pageContent.innerHTML = `<h1>Rock, Paper, Scissors</br></h1>`;
    
    if(choice === 0){
        pageContent.innerHTML += `
        <p>Choose one!</p>
        <a class="btn btn-secondary" href="/rps1" role="button">Rock</a>
        <a class="btn btn-success" href="/rps2" role="button">Paper</a>
        <a class="btn btn-primary" href="/rps3" role="button">Scissors</a>
        <br>
        `;
    }
    else if(choice > 0 && choice < 4){
        let outcome = ""
        let n = Math.random();
        n = Math.floor(n*1000);
        n = (n%3)+1;
        console.log(n);
        outcome = decide(choice, n);

 
        switch(outcome){
            case "won":
                pageContent.innerHTML += "<h2 class='text-success'> You Won!</h2><br>"
                break;
            case "lost":
                pageContent.innerHTML += "<h2 class='text-danger'>You lost!</h2><br>"
                break;
            case "tie":
                pageContent.innerHTML += "<h2 class='text-primary'>It's A Tie!</h2><br>"
                break;
            default:
                pageContent.innerHTML += "lkadsfjhlafhawliuh<br>"
                break;
        }
        let compChoice = displayChoice(n);
        let humChoice = displayChoice(choice);
    
        pageContent.innerHTML += `
        <p class='text-dark'>
        You chose ${humChoice}!<br>
        I chose ${compChoice}!<br>
        <p><br>
        <a class="btn btn-primary" href="/rps" role="button">Try Again?</a>
        `
    }
}

function decide(choice, n){

    if(n === 1){
        if(choice === 1){
            return "tie";
        }
        else if(choice === 2){
            return "won";
        }
        else if(choice == 3){
            return "lost";
        }
    }
    else if(n === 2){
        if(choice === 1){
            return "lost";
        }
        else if(choice === 2){
            return "tie";
        }
        else if(choice == 3){
            return "won";
        }
    }
    else if(n === 3){
        if(choice === 1){
            return "won";
        }
        else if(choice === 2){
            return "lost";
        }
        else if(choice == 3){
            return "tie";
        }
    }
}

function displayChoice(choice){
    if(choice === 1) return "Rock";
    if(choice === 2) return "Paper";
    if(choice === 3) return "Scissors";
}