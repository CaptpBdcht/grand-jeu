import { GrandJeu } from './grand-jeu';

import { AssociationsBy } from './models/associations-by';
import { Directions } from './models/directions';
import { Values } from './models/values';

export class Associations {

  static of(game: GrandJeu): string[] {
    const allValues = Object.keys(Values);
    const allDirections = Object.keys(Directions);
    const cards = game.getCards();

    const foundAssociations = [];

    for (const value of allValues) {
      for (const direction of allDirections) {
        const foundCards = cards.filter(c => c.getValue() === Values[value] && c.getDirection() === Directions[direction]);
        if (foundCards.length >= 2) {
          foundAssociations.push(associationFor(foundCards.length, value, direction));
        }
      }
    }

    return foundAssociations;

    function associationFor(size: number, value: string, direction: string): string {
      return AssociationsBy[size.toString()][value][direction];
    }
  }
}
