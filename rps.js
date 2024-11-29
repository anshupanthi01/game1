let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userscorepara = document.querySelector("#user-score")
const compscorepara = document.querySelector("#comp-score")

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rindx = Math.floor(Math.random() * 3)
    return options[rindx];
}

const drawgame = () => {
    msg.innerText = `Game was draw. Play again.`;
    msg.style.color = "Black"
    msg.style.backgroundColor = "white"
}

const showwinner = (userWin, userchoice, compchoice) => {
    if(userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win!!!!. Your ${userchoice} beats ${compchoice} `;
        msg.style.backgroundColor = "green"
    } else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You Lose.${compchoice} beats Your ${userchoice} `;
        msg.style.backgroundColor = "red"
    }
}

const playgame = (userchoice) => {
    //Generate computer choice -> modular
    const compchoice = gencompchoice();

    if(userchoice == compchoice) {
        drawgame();
    }
    else{
        let userWin = true;
        if(userchoice == "rock"){
            userWin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            userWin = compchoice === "scissor" ? false : true;
        } else{
            userWin = compchoice === "rock" ? false : true;
        }
        showwinner(userWin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});