import { calculateIndex } from "../../helpers/calculateIndexHighlight";
import boardTile from "./boardTile";
import {
  clearDraggedElementIndex,
  clearIndexArray,
  getDraggedElement,
  getIndexArray,
  setIndexArray,
} from "./draggedElement";

const boardUi = function (board) {
  const boardContainer = document.createElement("div");

  boardContainer.classList.add("board-container");

  // board index will be 1 to 10
  board.forEach((tile, index) =>
    boardContainer.appendChild(boardTile(tile, index + 1))
  );

  boardContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  boardContainer.addEventListener("dragenter", (e) => {
    e.preventDefault();

    const el5 = document.querySelector('[drag-id="5"]');

    const clone = el5.cloneNode();

    const empty = new Image();
    empty.src = "";
    e.dataTransfer.setDragImage(empty, 0, 0);

    el5.classList.add("dragging");

    const previousIndex = getIndexArray();
    const targetIndex = Number(e.target.getAttribute("data-id"));

    const draggedElementIndex = getDraggedElement();

    const index = calculateIndex(targetIndex, draggedElementIndex);
    setIndexArray(index);

    if (!previousIndex) {
      index.forEach((i) => {
        boardContainer.children[i - 1].classList.add("board-tile-hovered");
      });

      return;
    }

    previousIndex.forEach((i) => {
      boardContainer.children[i - 1].classList.remove("board-tile-hovered");
    });

    index.forEach((i) => {
      boardContainer.children[i - 1].classList.add("board-tile-hovered");
    });
  });

  boardContainer.addEventListener("drop", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("data-id");

    const data = JSON.parse(e.dataTransfer.getData("text/plain"));

    clearDraggedElementIndex();
  });

  boardContainer.addEventListener("dragleave", (e) => {
    e.preventDefault();
  });

  return boardContainer;
};

export default boardUi;
