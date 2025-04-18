export default class GameBoardTile {
  constructor() {
    this._status = "available"; // available, missed, ship, hit
  }

  // Status will determine the UI of the gameboard
  // If avaialalable and ship then the tile can be clicked
  // If Missed and hit, cannot be clicked

  getStatus() {
    return this._status;
  }

  setStatus(status) {
    this._status = status;
  }
}
