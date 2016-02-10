var turn = 'x';
var winner = $('h1');

function addtogame(location) {
  // don't add if box is taken
  here = $(location).html();
  if (here.length > 0) {
    return;
  }
  // check if x or o was placed last
  if (turn === 'x') {
    $(location).html('X');
    turn = 'o';
  } else {
    $(location).html('O');
    turn = 'x';
  }
  checkwinner();
}
// check all possible win situations
function checkwinner() {
  var one = $('#1').html();
  var two = $('#2').html();
  var three = $('#3').html();
  var four = $('#4').html();
  var five = $('#5').html();
  var six = $('#6').html();
  var seven = $('#7').html();
  var eight = $('#8').html();
  var nine = $('#9').html();

  if (one === 'X' && two === 'X' && three === 'X') {
    winner.html('X Won!');
    setTimeout(resetgame, 2000);
  } else if (one === 'O' && two === 'O' && three === 'O') {
    winner.html('O Won!');
    setTimeout(resetgame, 2000);
  } else if (one === 'X' && four === 'X' && seven === 'X') {
    winner.html('X Won!');
    setTimeout(resetgame, 2000);
  } else if (one === 'O' && four === 'O' && seven === 'O') {
    winner.html('X Won!');
    setTimeout(resetgame, 2000);
  } else if (one === 'X' && five === 'X' && nine === 'X') {
    winner.html('X Won!');
    setTimeout(resetgame, 2000);
  } else if (one === 'O' && five === 'O' && nine === 'O') {
    winner.html('O Won!');
    setTimeout(resetgame, 2000);
  } else if (two === 'X' && five === 'X' && eight === 'X') {
    winner.html('X Won!');
    setTimeout(resetgame, 2000);
  } else if (two === 'O' && five === 'O' && eight === 'O') {
    winner.html('O Won!');
    setTimeout(resetgame, 2000);
  } else if (three === 'X' && five === 'X' && seven === 'X') {
    winner.html('X Won!');
    setTimeout(resetgame, 2000);
  } else if (three === 'O' && five === 'O' && seven === 'O') {
    winner.html('O Won!');
    setTimeout(resetgame, 2000);
  } else if (three === 'X' && six === 'X' && nine === 'X') {
    winner.html('X Won!');
    setTimeout(resetgame, 2000);
  } else if (three === 'O' && six === 'O' && nine === 'O') {
    winner.html('O Won!');
    setTimeout(resetgame, 2000);
  } else if (four === 'X' && five === 'X' && six === 'X') {
    winner.html('X Won!');
    setTimeout(resetgame, 2000);
  } else if (four === 'O' && five === 'O' && six === 'O') {
    winner.html('O Won!');
    setTimeout(resetgame, 2000);
  } else if (seven === 'X' && eight === 'X' && nine === 'X') {
    winner.html('X Won!');
    setTimeout(resetgame, 2000);
  } else if (seven === 'O' && eight === 'O' && nine === 'O') {
    winner.html('O Won!');
    setTimeout(resetgame, 2000);    
  // if no wins game is a tie
  } else if (one.length > 0 && two.length > 0 && three.length > 0 && four.length > 0 && five.length > 0 && six.length > 0 && seven.length > 0 && eight.length > 0 && nine.length > 0) {
    winner.html('It was a tie!');
    setTimeout(resetgame, 2000);
  }
  
    function resetgame() {
      $('.button').html('');
      winner.html('Tic-Tac-Toe');
    }      
}

  

$('#9').click(function() {
  addtogame('#9');
});

$('#8').click(function() {
  addtogame('#8');
});

$('#7').click(function() {
  addtogame('#7');
});

$('#6').click(function() {
  addtogame('#6');
});

$('#5').click(function() {
  addtogame('#5');
});

$('#4').click(function() {
  addtogame('#4');
});

$('#3').click(function() {
  addtogame('#3');
});

$('#2').click(function() {
  addtogame('#2');
});

$('#1').click(function() {
  addtogame('#1');
});