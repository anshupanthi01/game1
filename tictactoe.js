let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn")
let newGamebtn = document.querySelector("#newbtn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;   // playerX, playerO 

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) { //playerO
            box.innerText = "O";
            turnO = false;
        }
        else {  //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})
const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disablebox();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 == pos2 && pos2 == pos3) {
                showwinner(pos1);
            }
        }
    };
};

const resetGame = () => {
    turnO = true;
    enablebox();
    msgcontainer.classList.add("hide")
}

newGamebtn.addEventListener("click", resetGame)
resetbtn.addEventListener("click", resetGame)
