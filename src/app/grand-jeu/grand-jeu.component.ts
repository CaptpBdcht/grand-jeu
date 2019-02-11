import { Component, OnInit } from '@angular/core';

import { GrandJeu } from '../../business/grand-jeu';
import { Card } from '../../business/entities/card';
import { Orientations } from '../../business/entities/orientations';
import { Associations } from '../../business/associations';
import { Chronology } from '../../business/chronology';

@Component({
  selector: 'app-grand-jeu',
  templateUrl: './grand-jeu.component.html',
  styleUrls: ['./grand-jeu.component.scss']
})
export class GrandJeuComponent implements OnInit {

  private grandJeu: GrandJeu;

  public cardsList = [
    // Trèfle
    { value: 'A T', display: 'A♣' },
    { value: 'R T', display: 'R♣' },
    { value: 'D T', display: 'D♣' },
    { value: 'V T', display: 'V♣' },
    { value: '10 T', display: '10♣' },
    { value: '9 T', display: '9♣' },
    { value: '8 T', display: '8♣' },
    { value: '7 T', display: '7♣' },
    // Carreau
    { value: 'A Ca', display: 'A♦' },
    { value: 'R Ca', display: 'R♦' },
    { value: 'D Ca', display: 'D♦' },
    { value: 'V Ca', display: 'V♦' },
    { value: '10 Ca', display: '10♦' },
    { value: '9 Ca', display: '9♦' },
    { value: '8 Ca', display: '8♦' },
    { value: '7 Ca', display: '7♦' },
    // Coeur
    { value: 'A C', display: 'A♥' },
    { value: 'R C', display: 'R♥' },
    { value: 'D C', display: 'D♥' },
    { value: 'V C', display: 'V♥' },
    { value: '10 C', display: '10♥' },
    { value: '9 C', display: '9♥' },
    { value: '8 C', display: '8♥' },
    { value: '7 C', display: '7♥' },
    // Pique
    { value: 'A P', display: 'A♠' },
    { value: 'R P', display: 'R♠' },
    { value: 'D P', display: 'D♠' },
    { value: 'V P', display: 'V♠' },
    { value: '10 P', display: '10♠' },
    { value: '9 P', display: '9♠' },
    { value: '8 P', display: '8♠' },
    { value: '7 P', display: '7♠' },
  ];
  public cards = Array(GrandJeu.FullGameSize).fill('');
  public reversed = Array(GrandJeu.FullGameSize).fill(false);

  public consultantPosition = 0;
  public missingCards = false;

  constructor() {
  }

  ngOnInit() {
    this.grandJeu = new GrandJeu();
  }

  getFullGrandJeu(): void {
    if (this.cards.filter(c => c === '').length) {
      this.missingCards = true;
      return;
    }
    this.missingCards = false;

    for (let index = 0; index < GrandJeu.FullGameSize; index++) {
      const reversed = this.reversed[index] ? Orientations.Down : Orientations.Up;
      const cardParts = this.cards[index].split(' ');
      this.grandJeu.addCard(new Card(cardParts[0], cardParts[1], reversed));
    }

    this.grandJeu.setConsultantPosition(this.consultantPosition);
    this.generateGrandJeuParts();
  }

  private generateGrandJeuParts() {
    console.warn(this.grandJeu.getCards());

    const associations = Associations.of(this.grandJeu);
    const chronology = Chronology.for(this.grandJeu);

    console.warn(associations);
    console.warn(chronology);
  }
}
