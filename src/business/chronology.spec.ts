// @ts-ignore
import { Chronology } from './chronology';
import { GrandJeu } from './grand-jeu';

import { NotEnoughCardsException } from './exceptions/not-enough-cards';
import { Card } from './entities/card';
import * as Cards from './items/cards-collection';

describe('ChronologyMaker should', () => {
  let game: GrandJeu;

  beforeEach(() => {
    game = new GrandJeu();
  });

  it('throw a NotEnoughCards exception when game is not full (21 cards)', () => {
    expect(() => Chronology.for(game)).toThrow(new NotEnoughCardsException());
  });

  it('make the chronology for the given game', () => {
    addList(game, Cards.SimplerGame);

    expect(Chronology.for(game)).toEqual([

    ]);
  });

  function addList(game: GrandJeu, cards: Card[]): void {
    for (const card of cards) {
      game.addCard(card);
    }
  }
});
