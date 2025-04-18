const boardTile = function (tile, id) {
  const boardTile = document.createElement("div");
  boardTile.classList.add("board-tile");
  boardTile.setAttribute("data-id", id);

  // console.log(tile.getStatus());

  // if (tile.getStatus() === "available")
  //   boardTile.classList.add("tile-available");

  return boardTile;
};

export default boardTile;
