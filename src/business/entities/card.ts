import { Kinds } from './kinds';
import { Orientations } from './orientations';
import { Values } from './values';

export class Card {
  constructor(
    private value: Values,
    private kind: Kinds,
    private orientation: Orientations
  ) {
  }

  equals(other: Card): boolean {
    return this.value === other.value
      && this.kind === other.kind
      && this.orientation === other.orientation;
  }

  getValue(): Values {
    return this.value;
  }

  getOrientation(): Orientations {
    return this.orientation;
  }

  collectionToString(): string {
    return `${this.value}${this.kind}`;
  }

  orientedToString(): string {
    return `${this.value}${this.kind}${this.orientation}`;
  }
}
