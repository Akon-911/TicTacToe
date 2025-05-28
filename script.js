const winningCondition = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [3, 5, 7]];
const XArray = [];
const OArray = [];
let currentTurn = "X";
let currentMode = "H";
let gameStart = false;

function toCheck(checker) {
    if (checker.disabled === true) return;
    currentMode = checker.checked ? 'C' : 'H';
}


document.addEventListener('DOMContentLoaded', () => {
    const status = document.getElementById('status');
    const ListOfCell = document.getElementsByClassName('cell');
    
    for (let i = 0; i < ListOfCell.length; i++) {
        ListOfCell[i].addEventListener('click', () => {

            if (!gameStart) return;
            let CurrentCell = ListOfCell[i];
            if (CurrentCell.innerHTML === " ") {
                CurrentCell.innerHTML = currentTurn;


                if (currentMode === "C" && currentTurn === "X") {
                    XArray.push(i+1);
                    checkWin()
                    setTimeout(() => {
                        computerMove();
                        checkWin();
                    }, 500);
                } else {
                    if (currentTurn === "X") {
                        XArray.push(i+1);
                        checkWin();
                        currentTurn = "O";
                    } else {
                        OArray.push(i+1);
                        checkWin();
                        currentTurn = "X";
                    }
                    
                    
                }
            }
            
        });
    }

    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        gameStart = !gameStart;
        currentTurn = "X";
        XArray.length = 0;
        OArray.length = 0;
        status.innerHTML = gameStart ? "Game Started" : "To Start";
        document.getElementById("switcher").disabled = gameStart;
        btn.innerText = gameStart ? "Reset Game" : "Start Game";
        if (gameStart === true) {
            for (let i = 0; i <ListOfCell.length; i++) {
                ListOfCell[i].innerHTML = " ";
            }
        }
    });

    function checkWin() {

        let hasWon = false;

        for (let i = 0; i<winningCondition.length; i++) {
            let el = winningCondition[i];
            const ArrayToCheck = (currentTurn === "X") ? XArray : OArray;
            if ((ArrayToCheck.includes(el[0]) && ArrayToCheck.includes(el[1])) && ArrayToCheck.includes(el[2])) {
                hasWon = true;
                break;
            }
        }

        if (hasWon) {
            status.innerHTML = `${currentTurn} Wins!`;
            gameStart = false;
        } else if (XArray.length + OArray.length === 9) {
            status.innerHTML = "It's a Draw!";
            gameStart = false;
        }
        document.getElementById("switcher").disabled = gameStart;
        btn.innerText = gameStart ? "Reset Game" : "Start Game";
    }

    function computerMove() {
        let availableCells = Array.from(ListOfCell).filter(cell => cell.innerHTML === " ");
        if (availableCells.length > 0) {
            let randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
            randomCell.innerHTML = "O";
            OArray.push(Array.from(ListOfCell).indexOf(randomCell) + 1);
            currentTurn = "X";
        }
    }
});
