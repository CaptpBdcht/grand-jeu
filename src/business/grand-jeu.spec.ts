import { GrandJeu } from './grand-jeu';

import * as Cards from './items/cards-collection';

import { GameAlreadyFullException } from './exceptions/game-already-full';
import { InvalidRemoveIndexException } from './exceptions/unused-index-remove';

describe('Grand Jeu', () => {
  let sut: GrandJeu;

  beforeEach(() => {
    sut = new GrandJeu();
  });

  it('has a current size', () => {
    expect(sut.getSize()).toEqual(0);
  });

  it('should have empty card list after creation', () => {
    expect(sut.getCards()).toEqual([]);
  });

  it('can be pushed cards upon', () => {
    sut.addCard(Cards.sevenOfSpades);
    expect(sut.getSize()).toEqual(1);
  });

  it('should throw a GameAlreadyFull exception if trying to push a 22nd card', () => {
    for (let step = 0; step < 21; step++) {
      sut.addCard(Cards.sevenOfSpades);
    }
    expect(() => sut.addCard(Cards.sevenOfSpades)).toThrow(new GameAlreadyFullException());
  });

  it('can be removed cards by index', () => {
    sut.addCard(Cards.sevenOfSpades);
    sut.addCard(Cards.eightOfSpades);
    expect(sut.getSize()).toEqual(2);

    sut.removeAt(0);
    expect(sut.getSize()).toEqual(1);
    expect(sut.getCards()).toEqual([ Cards.eightOfSpades ]);
  });

  it('should throw UnusedIndexRemove exception if trying to remove not existing index', () => {
    expect(() => sut.removeAt(-1)).toThrow(new InvalidRemoveIndexException());
    expect(() => sut.removeAt(0)).toThrow(new InvalidRemoveIndexException());
  });
});
