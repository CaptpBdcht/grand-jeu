import { Associations } from './associations';
import { GrandJeu } from './grand-jeu';

import { OrientedAssociations } from './data/oriented-associations';
import * as Cards from './items/cards-collection';
import { By3Associations } from './data/three-associations';

describe('Associations should', () => {
  let game: GrandJeu;

  beforeEach(() => {
    game = new GrandJeu();
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
      OrientedAssociations['4']['7']['H'],
      OrientedAssociations['4']['8']['B'],
      OrientedAssociations['3']['9']['H'],
      By3Associations['9P/9T/9C'],
      OrientedAssociations['3']['10']['B'],
      By3Associations['10P/10T/10C'],
      OrientedAssociations['2']['V']['H'],
      OrientedAssociations['2']['D']['B'],
      OrientedAssociations['2']['R']['H']
    ]);
  });
});
