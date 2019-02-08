import { GrandJeu } from './grand-jeu';

import { Card } from './card';
import { Kinds } from './kinds';
import { Values } from './values';

import { GameAlreadyFullException } from './exceptions/game-already-full';
import { InvalidRemoveIndexException } from './exceptions/unused-index-remove';

describe('Grand Jeu', () => {
  const sevenOfSpades = new Card(Values.Seven, Kinds.Spades);
  const eightOfSpades = new Card(Values.Eight, Kinds.Spades);

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
    sut.addCard(sevenOfSpades);
    expect(sut.getSize()).toEqual(1);
  });

  it('should throw a GameAlreadyFull exception if trying to push a 22nd card', () => {
    for (let step = 0; step < 21; step++) {
      sut.addCard(sevenOfSpades);
    }
    expect(() => sut.addCard(sevenOfSpades)).toThrow(new GameAlreadyFullException());
  });

  it('can be removed cards by index', () => {
    sut.addCard(sevenOfSpades);
    sut.addCard(eightOfSpades);
    expect(sut.getSize()).toEqual(2);

    sut.removeAt(0);
    expect(sut.getSize()).toEqual(1);
    expect(sut.getCards()).toEqual([ eightOfSpades ]);
  });

  it('should throw UnusedIndexRemove exception if trying to remove not existing index', () => {
    expect(() => sut.removeAt(-1)).toThrow(new InvalidRemoveIndexException());
    expect(() => sut.removeAt(0)).toThrow(new InvalidRemoveIndexException());
  });
});
