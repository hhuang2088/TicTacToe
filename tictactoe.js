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
    turn += 1;
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

  if(turn === 9) {
    console.log("tie")
  }


$('#reset').onclick(function() {
  $.scope('td').
})
});
