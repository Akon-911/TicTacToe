const winningcondition = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[1,4,7],[2,5,8],[3,5,6],[3,6,9]];
const board = new Array(9);
const XArray = [];
const OArray = [];
let currentTurn = "X";
let currentMode = "H";


function toCheck(checker) {
    console.log("click")
    if (checker.disabled === true) return;
    else if (checker.checked === true) {
        currentMode = 'C';
        console.log(1);
    } else {
        currentMode = 'H';
        console.log(2)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("switcher add on process")

    const status = document.getElementById('status');
});
    

