import { Card } from '../entities/card';

import { Equivalences } from '../data/equivalence';

export class EquivalenceGateway {
  static forCard(c: Card): string {
    return Equivalences[c.orientedToString()];
  }
}
