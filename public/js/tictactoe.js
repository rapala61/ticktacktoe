var player1 = [[null,null,null],[null,null,null],[null,null,null]];
var player2 = [[null,null,null],[null,null,null],[null,null,null]];

var getWinner = function() {
  var result = null;
  if ( checkMove( player1 ) ) {
    result = {
      winner: 'player1'
    }
  }else if ( checkMove( player2 ) ) {
    result = {
      winner: 'player2'
    }
  }
  return result;
}

// Not the best, more verbose way to do this
var checkMove = function( player ) {
  var win = false;

  // vertical check
  $.each( player, function( i, column ) {
    if ( !win && column[0] && column[1] && column[2] ) {
      win = true;
    };
  });

  // Horizontal check
  if ( !win ) {
    if ( player[0][0] &&  player[1][0] && player[2][0] ||
        player[0][1] &&  player[1][1] && player[2][1] ||
        player[0][2] &&  player[1][2] && player[2][2] ) {
          win = true;
    }
  }

  // Diagonal check
  if ( !win ) {
    if ( player[0][0] && player[1][1] && player[2][2] ||
        player[0][2] && player[1][1] && player[2][0]) {
          win = true;
        }
  }
  return win;
}

//   var won = false;
var selectNode = function( square, computer ) {
  var player = player1;
  var classToAdd = 'selected';
  var color = 'red';
  var column = square.attr('data-c');
  var row = square.attr('data-r');
  var winner = null;

  if ( computer ) {
    player = player2;
    color = 'green';
  }
  // select move in grid
  player[column][row] = true;

  square.css({
    'background' : color
  }).addClass( classToAdd );

  winner = getWinner();
  if ( winner ) {
    alert( winner.winner + ' won!' );
  }
}

var randomPick = function() {
  var selections = $('.ttt-td').not('.selected');

  if ( selections.length ) {

    var node = Math.floor( Math.random() * selections.length );
    var square = selections.eq(node);

    selectNode( square, true );
  }
}

var setUpListeners = function() {

  // Switch state of square to selected
  $('.ttt-td').on('click', function(e) {
    var square = $(e.target);

    if ( !getWinner() ) {
      selectNode( square );
    }

    if ( !getWinner() ) {
      randomPick();
    }
  });
}
