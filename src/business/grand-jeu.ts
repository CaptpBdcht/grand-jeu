import { Card } from './entities/card';

import { GameAlreadyFullException } from './exceptions/game-already-full';
import { InvalidRemoveIndexException } from './exceptions/unused-index-remove';

export class GrandJeu {
  private cards: Card[] = [];
  private consultantPosition: number;

  public static readonly FullGameSize = 21;

  setConsultantPosition(index: number): void {
    this.consultantPosition = index;
  }

  getConsultantPosition(): number {
    return this.consultantPosition;
  }

  getSize() {
    return this.cards.length;
  }

  getCards() {
    return [ ...this.cards ];
  }

  addCard(card: Card) {
    if (this.getSize() === GrandJeu.FullGameSize) {
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
