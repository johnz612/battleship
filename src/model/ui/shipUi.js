import { setDraggedElement } from "./draggedElement";

const shipUi = function (length, direction = "x") {
  let boxIndex;
  const baseContainer = document.createElement("div");
  baseContainer.style.display = "grid";
  baseContainer.setAttribute("drag-id", length);
  baseContainer.setAttribute("draggable", "true");

  // Create boxes based on the length passed
  for (let i = 1; i <= length; i++) {
    const base = document.createElement("div");
    base.style.height = "5rem";
    base.style.width = "5rem";
    base.style.border = "1px solid black";
    base.setAttribute("data-index", i);

    base.addEventListener("mousedown", (e) => {
      const index = Number(e.target.getAttribute("data-index"));
      boxIndex = index;
      setDraggedElement(boxIndex, direction, length);
    });

    baseContainer.appendChild(base);
  }

  if (direction === "x") {
    baseContainer.style.gridTemplateColumns = `repeat(${length}, 1fr)`;
  }

  if (direction === "y") {
    baseContainer.style.gridTemplateRows = `repeat(${length}, 1fr)`;
  }

  baseContainer.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        boxIndex,
        length,
        direction,
      })
    );

    const clone = baseContainer.cloneNode();
    console.log(clone);

    const empty = new Image();
    empty.src = "";
    e.dataTransfer.setDragImage(clone, 0, 0);
  });

  return baseContainer;
};

export default shipUi;
