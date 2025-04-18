import GameBoardTile from "./gameBoardTile";

export default class GameBoard {
  constructor() {
    this.boardTiles = Array.from({ length: 100 }, () => new GameBoardTile());
    this._isPrevMoveValid = false;
  }

  getIsPrevMoveValid() {
    return this._isPrevMoveValid;
  }

  setIsPrevMoveValid(status) {
    this._isPrevMoveValid = status;
  }

  // Update a tile if it missed, or hit
  receiveAttack(index) {
    // If tile chosen is ship meaning, a ship is located in that coordinate then change the tile to hit
    if (this.boardTiles[index].getStatus() === "ship") {
      this.boardTiles[index].setStatus("hit");
    } else {
      // else change the tile status to missed
      this.boardTiles[index].setStatus("missed");
    }
  }

  // Position a ship based on an array
  shipPosition(array) {
    // Check if coordinates already have a ship, return or cancel the insertion if true
    console.log(array.map((index) => this.boardTiles[index]));
    if (
      array
        .map((index) => this.boardTiles[index].getStatus())
        .some((element) => element === "ship")
    ) {
      this.setIsPrevMoveValid(false);
      return;
    }

    array.forEach((index) => this.boardTiles[index].setStatus("ship"));
    this.setIsPrevMoveValid(true);
  }

  isAllShipSunk() {
    return !this.boardTiles.some((element) => element.getStatus() === "ship");
  }
}
