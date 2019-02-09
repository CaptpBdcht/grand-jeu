import { Values } from './values';
import { Kinds } from './kinds';
import { Orientations } from './orientations';

export class Card {
  constructor(
    private value: Values,
    private kind: Kinds,
    private orientation: Orientations
  ) {
  }

  getValue(): Values {
    return this.value;
  }

  getOrientation(): Orientations {
    return this.orientation;
  }
}
