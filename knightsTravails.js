import { LinkedList } from '../linked-lists/linkedLists.js';

export { knightMoves };

function getPossibleMoves(start) {
  const possibleX = [2, 2, 1, 1, -1, -1, -2, -2];
  const possibleY = [1, -1, 2, -2, 2, -2, 1, -1];

  const possibleMoves = [];

  for (let i = 0; i < 8; i++) {
    const move = [start[0] + possibleX[i], start[1] + possibleY[i]];
    if (move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8) {
      possibleMoves.push(move);
    }
  }

  return possibleMoves;
}

function getShorterMove(possibleMoves, target) {
  let shorterMove = possibleMoves[0];
  let shorterDistance = Math.abs(target[0] - shorterMove[0]) + Math.abs(target[1] - shorterMove[1]);

  for (let i = 1; i < possibleMoves.length; i++) {
    const move = possibleMoves[i];
    const distance = Math.abs(target[0] - move[0]) + Math.abs(target[1] - move[1]);

    if (distance < shorterDistance ) {
      shorterMove = move;
      shorterDistance = distance;
    }
  }

  return shorterMove;
}

function hasEnd(moves, end) {
  for (let move of moves) {
    if (move.toString() === end.toString()) {
      return true;
    }
  }

  return false;
}

function knightMoves(start, end) {
  const possibleMoves = getPossibleMoves(start);

  while (possibleMoves.length > 0) {
    const move = possibleMoves.shift();
    console.log(move);
  }

  // const shorterMove = getShorterMove(possibleMoves, end);
  // console.log(shorterMove);

  return [];
}

// driver script
(function() {
  const moves = knightMoves([3,3],[1,2]);
  console.log(moves);
})();