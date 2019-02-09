import { Card } from '../entities/card';
import { Kinds } from '../entities/kinds';
import { Orientations } from '../entities/orientations';
import { Values } from '../entities/values';

export const sevenOfSpades = new Card(Values.Seven, Kinds.Spades, Orientations.Up);
export const eightOfSpades = new Card(Values.Eight, Kinds.Spades, Orientations.Up);
export const eightOfSpadesDown = new Card(Values.Eight, Kinds.Spades, Orientations.Down);
export const nineOfSpades = new Card(Values.Nine, Kinds.Spades, Orientations.Up);
export const tenOfSpadesDown = new Card(Values.Ten, Kinds.Spades, Orientations.Down);
export const jackOfSpades = new Card(Values.Jack, Kinds.Spades, Orientations.Up);
export const queenOfSpadesDown = new Card(Values.Queen, Kinds.Spades, Orientations.Down);
export const kingOfSpades = new Card(Values.King, Kinds.Spades, Orientations.Up);
export const aceOfSpades = new Card(Values.Ace, Kinds.Spades, Orientations.Up);

export const sevenOfClubs = new Card(Values.Seven, Kinds.Clubs, Orientations.Up);
export const eightOfClubsDown = new Card(Values.Eight, Kinds.Clubs, Orientations.Down);
export const nineOfClubs = new Card(Values.Nine, Kinds.Clubs, Orientations.Up);
export const tenOfClubsDown = new Card(Values.Ten, Kinds.Clubs, Orientations.Down);
export const jackOfClubs = new Card(Values.Jack, Kinds.Clubs, Orientations.Up);
export const queenOfClubsDown = new Card(Values.Queen, Kinds.Clubs, Orientations.Down);
export const kingOfClubs = new Card(Values.King, Kinds.Clubs, Orientations.Up);
export const aceOfClubs = new Card(Values.Ace, Kinds.Clubs, Orientations.Up);

export const sevenOfHearts = new Card(Values.Seven, Kinds.Hearts, Orientations.Up);
export const eightOfHeartsDown = new Card(Values.Eight, Kinds.Hearts, Orientations.Down);
export const nineOfHearts = new Card(Values.Nine, Kinds.Hearts, Orientations.Up);
export const tenOfHeartsDown = new Card(Values.Ten, Kinds.Hearts, Orientations.Down);
export const aceOfHearts = new Card(Values.Ace, Kinds.Hearts, Orientations.Up);

export const sevenOfDiamonds = new Card(Values.Seven, Kinds.Diamonds, Orientations.Up);
export const eightOfDiamondsDown = new Card(Values.Eight, Kinds.Diamonds, Orientations.Down);
