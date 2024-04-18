import { LinkedList } from '../linked-lists/linkedLists.js';

export { knightMoves };

function getPossibleMoves(start) {
  function rightTwoUp(start) {
    let tmp = start.slice();

    tmp[0] += 2;
    tmp[1] += 1;

    return tmp;
  }

  function rightTwoDown(start) {
    let tmp = start.slice();

    tmp[0] += 2;
    tmp[1] -= 1;

    return tmp;
  }

  function leftTwoUp(start) {
    let tmp = start.slice();

    tmp[0] -= 2;
    tmp[1] += 1;
    
    return tmp;
  }
  
  function leftTwoDown(start) {
    let tmp = start.slice();

    tmp[0] -= 2;
    tmp[1] -= 1;

    return tmp;
  }

  function upTwoRight(start) {
    let tmp = start.slice();

    tmp[1] += 2;
    tmp[0] += 1;

    return tmp;
  }

  function upTwoLeft(start) {
    let tmp = start.slice();

    tmp[1] += 2;
    tmp[0] -= 1;

    return tmp;
  }

  function downTwoRight(start) {
    let tmp = start.slice();

    tmp[1] -= 2;
    tmp[0] += 1;

    return tmp;
  }

  function downTwoLeft(start) {
    let tmp = start.slice();

    tmp[1] -= 2;
    tmp[0] -= 1;

    return tmp;
  }

  const allMoves = [
    rightTwoUp,
    rightTwoDown,
    leftTwoUp,
    leftTwoDown,
    upTwoRight,
    upTwoLeft,
    downTwoRight,
    downTwoLeft,
  ];

  const possibleMoves = [];

  allMoves.forEach((move) => {
    const end = move(start);
    if (end[0] >= 0 && end[0] < 8 && end[1] >= 0 && end[1] < 8) {
      possibleMoves.push(end);
    }
  });

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

function knightMoves(start, end) {
  
}

// driver script
(function() {
  const possibleMoves = getPossibleMoves([3,3]);
  console.log(possibleMoves);
  const shorterMove = getShorterMove(possibleMoves, [2,7]);
  console.log(shorterMove);

  // const moves = knightMoves([3,3],[0,0]);
  // console.log(moves);
})();