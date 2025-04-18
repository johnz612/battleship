"use strict";

import Player from "./model/logic/player";
import "./style.css";
import startBoard from "./view/StartBoard";

// Controllers
const initializedPlayerBoard = function () {
  const player = new Player();
  startBoard.renderGameBoard(player);
};

const controlCoordinates = function (e) {};

//
const init = function () {
  initializedPlayerBoard();
  startBoard.addHandlerCheckCoordinates(controlCoordinates);
};

init();
