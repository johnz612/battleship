import GameBoard from "./gameBoard";

export default class Player {
  constructor() {
    this.board = new GameBoard();
    this._turn = false;
  }

  getTurn() {
    return this._turn;
  }

  setTurn(turn) {
    this._turn = turn;
  }
}
