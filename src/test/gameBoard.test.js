import GameBoard from "../model/logic/gameBoard";

test("ships are inserted in the gameboard based on an array of index", () => {
  const board = new GameBoard();
  board.shipPosition([3, 13, 23]);

  expect(board.boardTiles[3].getStatus()).toBe("ship");
  expect(board.boardTiles[13].getStatus()).toBe("ship");
  expect(board.boardTiles[23].getStatus()).toBe("ship");
});

test("a tile is marked missed if a tileAttack status is equal to avaialable", () => {
  const board = new GameBoard();
  board.shipPosition([1, 2, 3]);

  board.receiveAttack(4);

  expect(board.boardTiles[1].getStatus()).toBe("ship");
  expect(board.boardTiles[2].getStatus()).toBe("ship");
  expect(board.boardTiles[3].getStatus()).toBe("ship");
  expect(board.boardTiles[4].getStatus()).toBe("missed");
});

test("a tile is marked hit if a tileAttack status is equal to ship", () => {
  const board = new GameBoard();
  board.shipPosition([1, 2, 3]);

  board.receiveAttack(2);

  expect(board.boardTiles[1].getStatus()).toBe("ship");
  expect(board.boardTiles[2].getStatus()).toBe("hit");
  expect(board.boardTiles[3].getStatus()).toBe("ship");
  expect(board.boardTiles[4].getStatus()).toBe("available");
});

test("Test if all ship sunk", () => {
  const board = new GameBoard();
  board.shipPosition([1, 2, 3]);

  board.receiveAttack(1);
  board.receiveAttack(2);
  board.receiveAttack(3);

  expect(board.isAllShipSunk()).toBe(true);
});

test("Cancel insertion of ship position if cooridnates already have a ship positioned ", () => {
  const board = new GameBoard();
  board.shipPosition([1, 2, 3]);

  board.shipPosition([3, 13, 23]);

  expect(board.boardTiles[3].getStatus()).toBe("ship");
  expect(board.boardTiles[13].getStatus()).toBe("available");
  expect(board.boardTiles[23].getStatus()).toBe("available");
});

test("Check if move is invalid after positioning a ship with a coordinates that already have a ship", () => {
  const board = new GameBoard();
  board.shipPosition([1, 2, 3]);

  board.shipPosition([3, 13, 23]);

  expect(board.getIsPrevMoveValid()).toBe(false);
});

test("Check if move is valid after positioning a ship with available coordinates", () => {
  const board = new GameBoard();
  board.shipPosition([1, 2, 3]);

  board.shipPosition([4, 14, 24]);

  expect(board.getIsPrevMoveValid()).toBe(true);
});
