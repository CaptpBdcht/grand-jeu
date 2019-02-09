import { Card } from '../entities/card';
import { By3Associations } from '../data/three-associations';

export class ThreeAssociationsGateway {

  static get(first: Card, second: Card, third: Card): string {
    const key = this.getCardsKey(first, second, third);
    return By3Associations[key];
  }

  private static getCardsKey(first: Card, second: Card, third: Card): string {
    return `${first.collectionToString()}/${second.collectionToString()}/${third.collectionToString()}`;
  }
}
