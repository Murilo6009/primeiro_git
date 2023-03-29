var player = "X";
var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function drawBoard() {
    var table = document.createElement("table");
    for (var i = 0; i < 3; i++) {
      var row = document.createElement("tr");
      for (var j = 0; j < 3; j++) {
        var cell = document.createElement("td");
        cell.textContent = board[i][j];
        cell.addEventListener("click", function() {
          if (this.textContent == "") {
            this.textContent = "X";
            board [i][j] = "X";
            checkWinner();
            changePlayer();
          }
        });
        row.appendChild(cell);
      }
      table.appendChild(row);
    }
    document.querySelector("main").appendChild(table);
    var playerElement = document.createElement("div");
    playerElement.id = "player";
    playerElement.textContent = "Jogador atual: " + player;
    document.querySelector("main").appendChild(playerElement);
  }

  function checkWinner() {
    for (var i = 0; i < 3; i++) {
      if (board[i][0] == player && board[i][1] == player && board[i][2] == player) {
        alert(player + " ganhou!");
        resetGame();
      }
      if (board[0][i] == player && board[1][i] == player && board[2][i] == player) {
        alert(player + " ganhou!");
        resetGame();
      }
    }
    if (board[0][0] == player && board[1][1] == player && board[2][2] == player) {
      alert(player + " ganhou!");
      resetGame();
    }
    if (board[0][2] == player && board[1][1] == player && board[2][0] == player) {
      alert(player + " ganhou!");
      resetGame();
    }
  }

  function changePlayer() {
    player = player == "X" ? "O" : "X";
    document.querySelector("#player").textContent = "Jogador atual: " + player;
  }

  function resetGame() {
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        board[i][j] = "";
        document.querySelector("table").rows[i].cells[j].textContent = "";
      }
    }
    player = "X";
    document.querySelector("#player").textContent = "Jogador atual: " + player;
  }

  drawBoard();