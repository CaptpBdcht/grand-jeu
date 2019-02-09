import { GrandJeu } from './grand-jeu';

import { Orientations } from './entities/orientations';
import { Values } from './entities/values';

import { OrientedAssociationGateway } from './gateways/oriented-association-gateway';
import { Card } from './entities/card';

export class Associations {

  static of(game: GrandJeu): string[] {
    const allValues = Object.keys(Values);
    const allOrientations = Object.keys(Orientations);
    const cards = game.getCards();
    return this.getAssociationsFor(cards, allValues, allOrientations);
  }

  private static getAssociationsFor(cards: Card[], values: string[], orientations: string[]): string[] {
    const foundAssociations = [];
    for (const value of values) {
      for (const orientation of orientations) {
        const foundCards = cards.filter(c => c.getValue() === Values[ value ] && c.getOrientation() === Orientations[ orientation ]);
        maybeAddOrientedAssociation(foundCards, value, orientation);
      }
    }
    return foundAssociations;

    function maybeAddOrientedAssociation(foundCards, value, orientation) {
      if (foundCards.length >= 2) {
        foundAssociations.push(
          OrientedAssociationGateway.get(foundCards.length, value, orientation)
        );
      }
    }
  }
}
