import { OrientedAssociations } from '../data/oriented-associations';

export class OrientedAssociationGateway {

  static get(size: number, value: string, orientation: string): string {
    return OrientedAssociations[size][value][orientation];
  }
}
