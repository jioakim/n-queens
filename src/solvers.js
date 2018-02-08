/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution;

  // given a board and a row index
  var findSolution = function(board, rowIndex) {
    // for each column index
    for (var i = 0; i < n; i++) {
      // put a rook on that row/column index
      board.togglePiece(rowIndex, i);
      // if updated board does contain conflict
      if (board.hasAnyRooksConflicts()) {
        // remove the rook and go to next column index
        board.togglePiece(rowIndex, i);
      // if updated board doesn't contain conflict
      } else {
        // if row index the current rook is n-1
        if (rowIndex === (n-1)) {
          // set solution to be updated board
          solution = board.rows();
          // exit
          return;
        // otherwise
        } else {
          // re-call recursive function by passing in updated board and next row index
          findSolution(board, rowIndex+1);
        }
      }
    }
  };

  // initiate recursive function call by passing in a new board and first row index of 0
  var boardObj = new Board({n: n});
  findSolution(boardObj, 0);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

window.countNRooksSolutions = function(n) {
  var solutionCount;
  var recursive = function(n) {
    if (n === 0) {
      return 1;
    } else if (n === 1) {
      return 1;
    } else {
      return n * recursive(n-1);
    }
  };
  solutionCount = recursive(n);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

  // pattern: recursive(n) = n * recursive(n-1)
  // base case: recursive(2) = 2. Given recursive(2) = 2 * recurisve(1), implied that recurisve(1) = 1
  // base case: recursive(1) = 1. Given recursive(1) = 1 * recurisve(0), implied that recurisve(0) = 1

 };

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution;
  var keep = 0;

  // given a board and a row index
  var findSolution = function(board, rowIndex) {
    // for each column index

    for (var i = 0; i < n - keep; i++) {
      // put a rook on that row/column index
      board.togglePiece(rowIndex, keep + i);
      console.log(board.rows());
      // if updated board does contain conflict
      if (board.hasAnyQueensConflicts()) {
        // remove the rook and go to next column index
        board.togglePiece(rowIndex, keep + i);
      // if updated board doesn't contain conflict
      } else {
        // if row index the current rook is n-1
        if (rowIndex === (n-1)) {
          // set solution to be updated board
          solution = board.rows();
          // exit
          return;
        // otherwise
        } else {
          // re-call recursive function by passing in updated board and next row index
          findSolution(board, rowIndex+1);
        }
      }
    }
  };

  // initiate recursive function call by passing in a new board and first row index of 0
  var boardObj = new Board({n: n});
  findSolution(boardObj, 0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
