import { Card } from './models/card';

import { GameAlreadyFullException } from './exceptions/game-already-full';
import { InvalidRemoveIndexException } from './exceptions/unused-index-remove';

export class GrandJeu {
  private readonly FullGameSize = 21;
  private cards: Card[] = [];

  getSize() {
    return this.cards.length;
  }

  getCards() {
    return [ ...this.cards ];
  }

  addCard(card: Card) {
    if (this.getSize() === this.FullGameSize) {
      throw new GameAlreadyFullException();
    }
    this.cards.push(card);
  }

  removeAt(index: number) {
    if (index < 0 || index >= this.getSize()) {
      throw new InvalidRemoveIndexException();
    }
    this.cards.splice(index, 1);
  }
}
