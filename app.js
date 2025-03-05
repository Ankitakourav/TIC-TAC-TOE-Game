// let boxes = Array.from(document.querySelectorAll(".box"));
// let resetbtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#newgame-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");
// let turnO = true;
// const winPatterns = [
//   [0, 1, 2],
//   [0, 3, 6],
//   [0, 4, 8],
//   [1, 4, 7],
//   [2, 5, 8],
//   [2, 4, 6],
//   [3, 4, 5],
//   [6, 7, 8],
// ];
// let count = 0;
// const resetGame = () => {
//   turnO = true;
//   count = 0;
//   enableBoxes();
//   msgContainer.classList.add("hide");
// };

// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO) {
//       box.innerText = "O";
//       count++;
//       turnO = false;
//     } else {
//       box.innerText = "X";
//       count++;
//       turnO = true;
//     }
//     box.disabled = true;
//     checkWinner();
//   });
// });
// const enableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = false;
//     box.innerText = "";
//   }
// };
// const disableBoxes = () => {
//   for (let box of boxes) {
//     box.disabled = true;
//   }
// };
// const showWinner = (winner) => {
//   if (winner) {
//     msg.innerText = `Congratulations, winner is ${winner}`;
//   } else {
//     msg.innerText = "It's a DRAW!";
//   }
//   msgContainer.classList.remove("hide");
//   disableBoxes();
// };
// const checkWinner = () => {
//   let winnerFound = false;
//   for (let pattern of winPatterns) {
//     let pos1val = boxes[pattern[0]].innerText;
//     let pos2val = boxes[pattern[1]].innerText;
//     let pos3val = boxes[pattern[2]].innerText;

//     if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
//       showWinner(pos1val);
//       winnerFound = true;
//       return;
//     }
//   }
//   if (!winnerFound && count === 9) {
//     showWinner(null);
//   }
// };
// newGameBtn.addEventListener("click", resetGame);
// resetbtn.addEventListener("click", resetGame);



// ============================================================================



let boxes = Array.from(document.querySelectorAll(".box"));
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
let count = 0;

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {  // To prevent overwriting an already marked box
      if (turnO) {
        box.classList.add("colorofO");
        box.innerText = "O";
        turnO = false;
        
      } else {
        box.classList.add("colorofX");
        box.innerText = "X";
        turnO = true;
       
      }
      
      count++;
      box.disabled = true;
      checkWinner();
    }
  });
});

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("colorofO", "colorofX");
  });
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const showWinner = (winner) => {
  msg.innerText = winner ? `Congratulations, winner is ${winner}` : "It's a DRAW!";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  let winnerFound = false;
  winPatterns.forEach((pattern) => {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val && pos1val === pos2val && pos2val === pos3val) {
      showWinner(pos1val);
      winnerFound = true;
    }
  });

  if (!winnerFound && count === 9) {
    showWinner(null);
  }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
