import { GrandJeu } from './grand-jeu';
import { Card } from './entities/card';
import { NotEnoughCardsException } from './exceptions/not-enough-cards';
import { EquivalenceGateway } from './gateways/equivalence-gateway';
import { TwoAssociationsGateway } from './gateways/two-associations-gateway';

interface ChronologyItem {
  card: Card,
  equivalence: string,
  associationRight: string,
  associationNext: string
}

interface ChronologyReport {
  items: ChronologyItem[];
}

export class Chronology {

  static for(game: GrandJeu): any {
    if (game.getSize() !== GrandJeu.FullGameSize) {
      throw new NotEnoughCardsException();
    }
    return this.buildChronologyFor(game);
  }

  private static buildChronologyFor(game: GrandJeu): ChronologyReport {
    const report: ChronologyReport = { items: [] };
    const timeline = getReportTimeline(game.getCards());
    makeChronologyItems();
    return report;

    function getReportTimeline(cards: Card[]): Card[] {
      const timeline: Card[] = [];
      let nextCardIndex = game.getConsultantPosition() || 0;
      while (timeline.length < 21) {
        timeline.push(cards[ nextCardIndex ]);
        nextCardIndex = (nextCardIndex + 4) % GrandJeu.FullGameSize;
      }
      return timeline;
    }

    function makeChronologyItems(): void {
      // Allows to skip the timeline.findIndex() in searchNext
      let currentIndex = 0;
      for (const card of timeline) {
        const equivalence = EquivalenceGateway.for(card);
        const associationRight = searchRightAssociation(card);
        const associationNext = searchNextAssociation(card, currentIndex);
        report.items.push({ card, equivalence, associationRight, associationNext });
        ++currentIndex;
      }

      function searchRightAssociation(card: Card): string {
        const cards = game.getCards();
        const cardIndex = cards.findIndex(c => c.equals(card));
        const nextCardInGame = cards[(cardIndex + 1) % GrandJeu.FullGameSize];
        return TwoAssociationsGateway.get(card, nextCardInGame);
      }

      function searchNextAssociation(card: Card, index: number): string {
        const nextCardInTimeline = timeline[(index + 1) % GrandJeu.FullGameSize];
        return TwoAssociationsGateway.get(card, nextCardInTimeline);
      }
    }
  }
}
