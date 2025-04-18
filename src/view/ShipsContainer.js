import shipUi from "../model/ui/shipUi";

const shipContainer = function () {
  const container = document.createElement("div");
  container.classList.add("ship-container");

  const shipUiContainer = shipUi(5);

  container.appendChild(shipUiContainer);

  return container;
};

export default shipContainer;
