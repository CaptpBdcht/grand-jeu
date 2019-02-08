import { Card } from './card';
import { Directions } from './directions';
import { Kinds } from './kinds';
import { Values } from './values';

export const sevenOfSpades = new Card(Values.Seven, Kinds.Spades, Directions.Up);
export const eightOfSpades = new Card(Values.Eight, Kinds.Spades, Directions.Up);
export const eightOfSpadesDown = new Card(Values.Eight, Kinds.Spades, Directions.Down);
export const nineOfSpades = new Card(Values.Nine, Kinds.Spades, Directions.Up);
export const tenOfSpadesDown = new Card(Values.Ten, Kinds.Spades, Directions.Down);
export const jackOfSpades = new Card(Values.Jack, Kinds.Spades, Directions.Up);
export const queenOfSpadesDown = new Card(Values.Queen, Kinds.Spades, Directions.Down);
export const kingOfSpades = new Card(Values.King, Kinds.Spades, Directions.Up);
export const aceOfSpades = new Card(Values.Ace, Kinds.Spades, Directions.Up);

export const sevenOfClubs = new Card(Values.Seven, Kinds.Clubs, Directions.Up);
export const eightOfClubsDown = new Card(Values.Eight, Kinds.Clubs, Directions.Down);
export const nineOfClubs = new Card(Values.Nine, Kinds.Clubs, Directions.Up);
export const tenOfClubsDown = new Card(Values.Ten, Kinds.Clubs, Directions.Down);
export const jackOfClubs = new Card(Values.Jack, Kinds.Clubs, Directions.Up);
export const queenOfClubsDown = new Card(Values.Queen, Kinds.Clubs, Directions.Down);
export const kingOfClubs = new Card(Values.King, Kinds.Clubs, Directions.Up);

export const sevenOfHearts = new Card(Values.Seven, Kinds.Hearts, Directions.Up);
export const eightOfHeartsDown = new Card(Values.Eight, Kinds.Hearts, Directions.Down);
export const nineOfHearts = new Card(Values.Nine, Kinds.Hearts, Directions.Up);
export const tenOfHeartsDown = new Card(Values.Ten, Kinds.Hearts, Directions.Down);

export const sevenOfDiamonds = new Card(Values.Seven, Kinds.Diamonds, Directions.Up);
export const eightOfDiamondsDown = new Card(Values.Eight, Kinds.Diamonds, Directions.Down);
