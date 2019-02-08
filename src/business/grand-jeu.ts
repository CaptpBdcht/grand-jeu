import { Associations } from './models/associations';
import { Card } from './models/card';
import { Directions } from './models/directions';
import { Values } from './models/values';

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

  getAssociations() {
    const allValues = Object.keys(Values);
    const allDirections = Object.keys(Directions);

    const foundAssociations = [];

    for (const value of allValues) {
      for (const direction of allDirections) {
        const foundCards = this.cards.filter(c => c.getValue() === Values[value] && c.getDirection() === Directions[direction]);
        if (foundCards.length >= 2) {
          foundAssociations.push(associationFor(foundCards.length, value, direction));
        }
      }
    }

    return foundAssociations;

    function associationFor(size: number, value: string, direction: string): string {
      return Associations['By' + size][value][direction];
    }
  }
}
