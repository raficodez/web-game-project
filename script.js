let userscore = 0;
let copmuterscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const usersscore=document.querySelector("#you")
const copmuter=document.querySelector("#comp")

const computerchoice = () => {
    const option = ["rock", "paper", "scissors"]
    let indx = Math.floor(Math.random() * 3)
    return option[indx]
};

const showwinner = (userwin, userchoice, compchoice) => {
    
    if (userwin) {
        userscore++;
        usersscore.innerText= userscore;
        msg.innerText = "You Win!";
        msg.style.backgroundColor="#418a25"

    }
    else {
        copmuterscore++;
        copmuter.innerText= copmuterscore;
        msg.innerText = "You Lose.";
        msg.style.backgroundColor = "red"
    }
};

const playgame = (userchoice) => {
    let compchoice = computerchoice();


    if (userchoice == compchoice) {
        msg.innerText = "Draw game, play again";
        msg.style.backgroundColor = "grey"
    } else {
        let userwin = true;
        if (userchoice == "rock") {
            //paper,secissors
            userwin = compchoice == "paper" ? false : true;
        } else if (userchoice == "paper") {
            //secissor,rock
            userwin = compchoice == "scissors" ? false : true;
        }
        else {
            //paper,rock
            userwin = compchoice == "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
});