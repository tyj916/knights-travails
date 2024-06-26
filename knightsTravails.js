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

function Move(coordinate, prev = null) {
  const possibleMoves = getPossibleMoves(coordinate);

  return {
    coordinate,
    prev,
    possibleMoves,
  }
}

function buildPath(start, end) {
  const queue = [Move(start)];

  while (queue.length > 0) {
    const currentMove = queue.shift();
    const currentCoordinate = currentMove.coordinate;

    if (currentCoordinate[0] == end[0] && currentCoordinate[1] == end[1]) {
      return currentMove;
    }

    const possibleMoves = currentMove.possibleMoves;

    possibleMoves.forEach((move) => {
      queue.push(Move(move, currentMove));
    });
  }

  return null;
}

function knightMoves(start, end) {
  let lastMove = buildPath(start, end);
  const path = [];

  while (lastMove) {
    path.unshift(lastMove.coordinate);
    lastMove = lastMove.prev;
  }

  return path;
}

// driver script
(function() {
  const moves = knightMoves([3,3],[7,7]);
  console.log(moves);
})();