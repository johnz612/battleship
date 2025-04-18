import boardUi from "../model/ui/boardUi";
import shipUi from "../model/ui/shipUi";
import shipContainer from "./ShipsContainer";

class StartBoard {
  boardContainer = document.querySelector(".start-screen");
  board = null;

  renderGameBoard = function (player) {
    this.boardContainer.appendChild(boardUi(player.board.boardTiles));
    this.board = document.querySelector(".board-container");
    this.boardContainer.appendChild(shipContainer());
  };

  addHandlerCheckCoordinates(handler) {
    this.board.addEventListener("mousedown", (e) => {
      const id = e.target.getAttribute("data-id");
      handler(id);
    });
  }
}

export default new StartBoard();
