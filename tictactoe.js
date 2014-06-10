$(document).ready(function(){

var board = {
  "A1": undefined, "A2": undefined, "A3": undefined,
  "B1": undefined, "B2": undefined, "B3": undefined,
  "C1": undefined, "C2": undefined, "C3": undefined
};

var turn = 0;
var player = "X";
var win = undefined;

$('td').click(function() {
var id = $(this).attr('id')
  if(board[id] === undefined) {
    board[id] = player;
    $(this).append(player)
    togglePlayer();
    winCheck();
    turn += 1;
    tie();
  }


  // board[id] = player
  // alert("clicked");
  // $('#ttt_board').delegate('td', 'click', function(e) {
  // var t = $(e.target).html();
  // console.log(e)
  // });
});
function togglePlayer() {
  if(player === "X") {
    player = "O";
  } else {
    player = "X"
  }
}

function tie() {
  if(turn === 9) {
    alert("Tie");
  }
};

function winCheck() {
  // X win conditions
  if((board["A1"] === "X") && (board["A2"] === "X") && (board["A3"] === "X")) {
        alert("X wins");
    } else if((board["B1"] === "X") && (board["B2"] === "X") && (board["B3"] === "X")) {
        alert("X wins");
    } else if((board["C1"] === "X") && (board["C2"] === "X") && (board["C3"] === "X")) {
        alert("X wins");
    } else if((board["A1"] === "X") && (board["B2"] === "X") && (board["C3"] === "X")) {
        alert("X wins");
    } else if((board["A3"] === "X") && (board["B2"] === "X") && (board["C1"] === "X")) {
        alert("X wins");
    } else if((board["A1"] === "X") && (board["B1"] === "X") && (board["C1"] === "X")) {
        alert("X wins");
    } else if((board["A2"] === "X") && (board["B2"] === "X") && (board["C2"] === "X")) {
        alert("X wins");
    } else if((board["A3"] === "X") && (board["B3"] === "X") && (board["C3"] === "X")) {
        alert("X wins");
    // O win conditions
    } else if((board["A1"] === "O") && (board["A2"] === "O") && (board["A3"] === "O")) {
        alert("O wins");
    } else if((board["B1"] === "O") && (board["B2"] === "O") && (board["B3"] === "O")) {
        alert("O wins");
    } else if((board["C1"] === "O") && (board["C2"] === "O") && (board["C3"] === "O")) {
        alert("O wins");
    } else if((board["A1"] === "O") && (board["B2"] === "O") && (board["C3"] === "O")) {
        alert("O wins");
    } else if((board["A3"] === "O") && (board["B2"] === "O") && (board["C1"] === "O")) {
        alert("O wins");
    } else if((board["A1"] === "O") && (board["B1"] === "O") && (board["C1"] === "O")) {
        alert("O wins");
    } else if((board["A2"] === "O") && (board["B2"] === "O") && (board["C2"] === "O")) {
        alert("O wins");
    } else if((board["A3"] === "O") && (board["B3"] === "O") && (board["C3"] === "O")) {
        alert("O wins");
      
    } else {
        console.log(player + "'s turn");
  }
  }



// $('#reset').onclick(function() {
//   $.scope('td')
//   });
});
