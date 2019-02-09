import { Card } from '../entities/card';
import { TwoAssociations } from '../data/two-associations';

export class TwoAssociationsGateway {

  static get(first: Card, second: Card) {
    return TwoAssociations[first.collectionToString()][second.collectionToString()];
  }
}
