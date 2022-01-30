import { Injectable } from '@nestjs/common';
import { Game } from './game';

@Injectable()
export class ShowNewReleasesService {
  readonly games: Game[] = [
    new Game(1, 'The Legend of Zelda - Link Awakening', 'A simple description'),
    new Game(2, 'Need For Speed - Most Wanted', 'A simple description'),
    new Game(3, 'Left 4 Dead', 'A simple description'),
  ];

  public async execute(): Promise<Game[]> {
    return this.games;
  }
}
