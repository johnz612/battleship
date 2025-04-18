import Ship from "../model/logic/ship";

test("ship hit count should increase per hit", () => {
  const ship5 = new Ship(5);
  ship5.hit();
  expect(ship5.hitCount).toBe(1);
  ship5.hit();
  expect(ship5.hitCount).toBe(2);
  ship5.hit();
  expect(ship5.hitCount).toBe(3);
});

test("Ship automatically sunk if hitCount = length ", () => {
  const ship2 = new Ship(2);
  ship2.hit();
  ship2.hit();
  expect(ship2.isSunk()).toBe(true);
});

test("Ship hit count should stop once ship is sunk", () => {
  const ship2 = new Ship(2);
  ship2.hit();
  ship2.hit();
  ship2.hit();
  expect(ship2.hitCount).toBe(2);
});
