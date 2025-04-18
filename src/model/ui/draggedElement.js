let draggedElementIndexDirection = null;
let indexArray = null;

export function setDraggedElement(index, direction, length) {
  draggedElementIndexDirection = { index, direction, length };
}

export function getDraggedElement() {
  return draggedElementIndexDirection;
}

export function clearDraggedElementIndex() {
  draggedElementIndexDirection = null;
}

export function setIndexArray(array) {
  indexArray = array;
}

export function getIndexArray() {
  return indexArray;
}

export function clearIndexArray() {
  indexArray = null;
}
