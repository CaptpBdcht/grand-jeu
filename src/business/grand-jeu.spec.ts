import { GrandJeu } from './grand-jeu';

import { Associations } from './models/associations';
import { Card } from './models/card';
import { Directions } from './models/directions';
import { Kinds } from './models/kinds';
import { Values } from './models/values';

import { GameAlreadyFullException } from './exceptions/game-already-full';
import { InvalidRemoveIndexException } from './exceptions/unused-index-remove';

describe('Grand Jeu', () => {
  const sevenOfSpades = new Card(Values.Seven, Kinds.Spades, Directions.Up);
  const eightOfSpades = new Card(Values.Eight, Kinds.Spades, Directions.Up);
  const eightOfSpadesDown = new Card(Values.Eight, Kinds.Spades, Directions.Down);
  const nineOfSpades = new Card(Values.Nine, Kinds.Spades, Directions.Up);
  const tenOfSpadesDown = new Card(Values.Ten, Kinds.Spades, Directions.Down);
  const jackOfSpades = new Card(Values.Jack, Kinds.Spades, Directions.Up);
  const queenOfSpadesDown = new Card(Values.Queen, Kinds.Spades, Directions.Down);
  const kingOfSpades = new Card(Values.King, Kinds.Spades, Directions.Up);
  const aceOfSpades = new Card(Values.Ace, Kinds.Spades, Directions.Up);

  const sevenOfClubs = new Card(Values.Seven, Kinds.Clubs, Directions.Up);
  const eightOfClubsDown = new Card(Values.Eight, Kinds.Clubs, Directions.Down);
  const nineOfClubs = new Card(Values.Nine, Kinds.Clubs, Directions.Up);
  const tenOfClubsDown = new Card(Values.Ten, Kinds.Clubs, Directions.Down);
  const jackOfClubs = new Card(Values.Jack, Kinds.Clubs, Directions.Up);
  const queenOfClubsDown = new Card(Values.Queen, Kinds.Clubs, Directions.Down);
  const kingOfClubs = new Card(Values.King, Kinds.Clubs, Directions.Up);

  const sevenOfHearts = new Card(Values.Seven, Kinds.Hearts, Directions.Up);
  const eightOfHeartsDown = new Card(Values.Eight, Kinds.Hearts, Directions.Down);
  const nineOfHearts = new Card(Values.Nine, Kinds.Hearts, Directions.Up);
  const tenOfHeartsDown = new Card(Values.Ten, Kinds.Hearts, Directions.Down);

  const sevenOfDiamonds = new Card(Values.Seven, Kinds.Diamonds, Directions.Up);
  const eightOfDiamonsDown = new Card(Values.Eight, Kinds.Diamonds, Directions.Down);

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

  describe('<< Associations >>', () => {

    it('should return an array with a 2-association when there is one', () => {
      sut.addCard(sevenOfSpades);
      sut.addCard(sevenOfClubs);
      expect(sut.getAssociations()).toEqual([ Associations.By2['Seven']['Up'] ]);
    });

    it('should return an array with a 3-association when there is one', () => {
      sut.addCard(sevenOfSpades);
      sut.addCard(sevenOfClubs);
      sut.addCard(sevenOfHearts);
      expect(sut.getAssociations()).toEqual([ Associations.By3['Seven']['Up'] ]);
    });

    it('should return an array with a 4-association when there is one', () => {
      sut.addCard(sevenOfSpades);
      sut.addCard(sevenOfClubs);
      sut.addCard(sevenOfHearts);
      sut.addCard(sevenOfDiamonds);
      expect(sut.getAssociations()).toEqual([ Associations.By4['Seven']['Up'] ]);
    });

    it('should find all associations in a given game', () => {
      // 4 seven up
      sut.addCard(sevenOfSpades); sut.addCard(sevenOfClubs); sut.addCard(sevenOfHearts); sut.addCard(sevenOfDiamonds);
      // 4 eight down
      sut.addCard(eightOfSpadesDown); sut.addCard(eightOfClubsDown); sut.addCard(eightOfHeartsDown); sut.addCard(eightOfDiamonsDown);
      // 3 nine up
      sut.addCard(nineOfSpades); sut.addCard(nineOfClubs); sut.addCard(nineOfHearts);
      // 3 ten down
      sut.addCard(tenOfSpadesDown); sut.addCard(tenOfClubsDown); sut.addCard(tenOfHeartsDown);
      // 2 jacks up
      sut.addCard(jackOfSpades); sut.addCard(jackOfClubs);
      // 2 queens down
      sut.addCard(queenOfSpadesDown); sut.addCard(queenOfClubsDown);
      // 2 kings up
      sut.addCard(kingOfSpades); sut.addCard(kingOfClubs);
      // 1 ace
      sut.addCard(aceOfSpades);

      expect(sut.getAssociations()).toEqual([
        Associations.By4['Seven']['Up'],
        Associations.By4['Eight']['Down'],
        Associations.By3['Nine']['Up'],
        Associations.By3['Ten']['Down'],
        Associations.By2['Jack']['Up'],
        Associations.By2['Queen']['Down'],
        Associations.By2['King']['Up']
      ]);
    });
  });
});
