import { Card } from '../entities/card';

import { Equivalences } from '../data/equivalence';

export class EquivalenceGateway {

  static for(c: Card): string {
    return Equivalences[c.orientedToString()];
  }
}
