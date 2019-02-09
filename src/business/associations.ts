import { GrandJeu } from './grand-jeu';

import { OrientedAssociations } from './data/oriented-associations';
import { Orientations } from './entities/orientations';
import { Values } from './entities/values';

export class Associations {

  static of(game: GrandJeu): string[] {
    const allValues = Object.keys(Values);
    const allDirections = Object.keys(Orientations);
    const cards = game.getCards();

    const foundAssociations = [];

    for (const value of allValues) {
      for (const direction of allDirections) {
        const foundCards = cards.filter(c => c.getValue() === Values[value] && c.getOrientation() === Orientations[direction]);
        if (foundCards.length >= 2) {
          foundAssociations.push(associationFor(foundCards.length, value, direction));
        }
      }
    }

    return foundAssociations;

    function associationFor(size: number, value: string, direction: string): string {
      return OrientedAssociations[size.toString()][value][direction];
    }
  }
}
