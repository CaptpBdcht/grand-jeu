import { Associations } from './associations';
import { GrandJeu } from './grand-jeu';

import { AssociationsBy } from './models/associations-by';
import * as Cards from './models/cards-collection';

describe('Associations should', () => {
  let game: GrandJeu;

  beforeEach(() => {
    game = new GrandJeu();
  });

  it('return an array with a 2-association when there is one', () => {
    game.addCard(Cards.sevenOfSpades);
    game.addCard(Cards.sevenOfClubs);
    expect(Associations.of(game)).toEqual([ AssociationsBy['2']['Seven']['Up'] ]);
  });

  it('return an array with a 3-association when there is one', () => {
    game.addCard(Cards.sevenOfSpades);
    game.addCard(Cards.sevenOfClubs);
    game.addCard(Cards.sevenOfHearts);
    expect(Associations.of(game)).toEqual([ AssociationsBy['3']['Seven']['Up'] ]);
  });

  it('return an array with a 4-association when there is one', () => {
    game.addCard(Cards.sevenOfSpades);
    game.addCard(Cards.sevenOfClubs);
    game.addCard(Cards.sevenOfHearts);
    game.addCard(Cards.sevenOfDiamonds);
    expect(Associations.of(game)).toEqual([ AssociationsBy['4']['Seven']['Up'] ]);
  });

  it('find all associations in a given game', () => {
    // 4 seven up
    game.addCard(Cards.sevenOfSpades);
    game.addCard(Cards.sevenOfClubs);
    game.addCard(Cards.sevenOfHearts);
    game.addCard(Cards.sevenOfDiamonds);
    // 4 eight down
    game.addCard(Cards.eightOfSpadesDown);
    game.addCard(Cards.eightOfClubsDown);
    game.addCard(Cards.eightOfHeartsDown);
    game.addCard(Cards.eightOfDiamondsDown);
    // 3 nine up
    game.addCard(Cards.nineOfSpades);
    game.addCard(Cards.nineOfClubs);
    game.addCard(Cards.nineOfHearts);
    // 3 ten down
    game.addCard(Cards.tenOfSpadesDown);
    game.addCard(Cards.tenOfClubsDown);
    game.addCard(Cards.tenOfHeartsDown);
    // 2 jacks up
    game.addCard(Cards.jackOfSpades);
    game.addCard(Cards.jackOfClubs);
    // 2 queens down
    game.addCard(Cards.queenOfSpadesDown);
    game.addCard(Cards.queenOfClubsDown);
    // 2 kings up
    game.addCard(Cards.kingOfSpades);
    game.addCard(Cards.kingOfClubs);
    // 1 ace
    game.addCard(Cards.aceOfSpades);

    expect(Associations.of(game)).toEqual([
      AssociationsBy['4']['Seven']['Up'],
      AssociationsBy['4']['Eight']['Down'],
      AssociationsBy['3']['Nine']['Up'],
      AssociationsBy['3']['Ten']['Down'],
      AssociationsBy['2']['Jack']['Up'],
      AssociationsBy['2']['Queen']['Down'],
      AssociationsBy['2']['King']['Up']
    ]);
  });
});
