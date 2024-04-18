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

function knightMoves(start, end) {
  
}

// driver script
(function() {
  const possibleMoves = getPossibleMoves([3,3]);
  console.log(possibleMoves);
  // const moves = knightMoves([3,3],[0,0]);
  // console.log(moves);
})();