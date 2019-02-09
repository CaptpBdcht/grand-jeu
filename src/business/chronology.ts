import { GrandJeu } from './grand-jeu';
import { Card } from './entities/card';
import { NotEnoughCardsException } from './exceptions/not-enough-cards';

interface ChronologyItem {
  card: Card,
  equivalence: string,
  associationRight: string,
  associationNext: string
}

interface ChronologyReport {
  items: ChronologyItem[];
  timeline: Card[];
}

export class Chronology {

  static for(game: GrandJeu): any {
    if (game.getSize() !== GrandJeu.FullGameSize) {
      throw new NotEnoughCardsException();
    }
    return this.buildChronologyFor(game);
  }

  private static buildChronologyFor(game: GrandJeu): ChronologyReport {
    const report: ChronologyReport = {};
    report.timeline = makeReportTimeline();
    report.items = makeChronologyItems();
    return report;

    function makeReportTimeline(): Card[] {
      const cards = game.getCards();
      const timeline: Card[] = [];
      let nextCardIndex = game.getConsultantPosition() || 0;
      while (timeline.length < 21) {
        timeline.push({ ...cards[nextCardIndex] });
        nextCardIndex = (nextCardIndex + 4) % GrandJeu.FullGameSize;
      }
      return timeline;
    }

    function makeChronologyItems(): void {
      for (const card of report.timeline) {
        console.warn(card);
      }
    }
  }
}
