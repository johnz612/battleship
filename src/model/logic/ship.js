export default class Ship {
  constructor(length) {
    this.length = length;
    this.hitCount = 0;
  }

  hit() {
    this.isSunk() || this.hitCount++;
  }

  isSunk() {
    return this.length === this.hitCount;
  }
}
