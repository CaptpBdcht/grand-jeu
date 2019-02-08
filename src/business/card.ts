import { Kinds } from './kinds';
import { Values } from './values';

export class Card {
  constructor(private value: Values, private kind: Kinds) {
  }
}
