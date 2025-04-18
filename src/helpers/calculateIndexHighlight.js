export const calculateIndex = function (target, draggedData) {
  const { index: draggedIndex, direction, length } = draggedData;

  let array = [];

  if (direction === "x") {
    const startIndex = target - (draggedIndex - 1);
    const endIndex = target + (length - draggedIndex);

    for (let i = 0; i <= length - 1; i++) {
      const indexToPush = startIndex + i;
      array.push(indexToPush);
    }
  }

  return array;
};
