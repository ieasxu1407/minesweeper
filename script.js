const boardSize = 10;
const mineCount = 10;
const board = document.getElementById("board");

let cells = [];
let mines = new Set();

// 지뢰 위치 생성
while (mines.size < mineCount) {
  mines.add(Math.floor(Math.random() * boardSize * boardSize));
}

// 보드 생성
for (let i = 0; i < boardSize * boardSize; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  cell.addEventListener("click", () => {
    if (mines.has(i)) {
      cell.classList.add("mine");
      alert("💥 게임 오버!");
    } else {
      cell.classList.add("revealed");
      cell.textContent = "✔";
    }
  });

  board.appendChild(cell);
  cells.push(cell);
}
