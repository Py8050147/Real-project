const boxs = document.querySelectorAll(".box");
let currentPlayer = "x";
let xWins = 0;
let oWins = 0;


const winnerPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], //across the top
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //down the side
    [0, 4, 8],
    [2, 4, 6] //diagonals
]

function resetGame() {
    boxs.forEach((box) => {
        box.innerHTML = '';
        box.disabled = false;
    });
    document.getElementById('winner').innerText = '';
}

function updateScore() {
       document.getElementById('xWins').innerText = xWins;
       document.getElementById('oWins').innerText = oWins;
    }


boxs.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("button")
        if (box.innerHTML === "") {
            box.innerHTML = currentPlayer
            box.disabled = true;
            if (checkwinner()) {
                document.getElementById("winner").innerHTML = `${currentPlayer}`;
                currentPlayer === 'x' ? xWins++ : oWins++;
                updateScore()
               boxs.forEach((box) => {
                 box.disabled = true;
               })
            }
            else {
                currentPlayer = currentPlayer === "x" ? "o" : "x"
            }
        }

    })
})

const checkwinner = () => {
    for(let pattern of winnerPatterns){
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;
    
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner")
               return true
            }
            }
    }
    return false
   
}









