import { Directions } from './directions';
import { Kinds } from './kinds';
import { Values } from './values';

export class Card {
  constructor(
    private value: Values,
    private kind: Kinds,
    private direction: Directions
  ) {
  }

  getValue(): Values {
    return this.value;
  }

  getDirection(): Directions {
    return this.direction;
  }
}
