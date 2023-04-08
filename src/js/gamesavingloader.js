import GameSaving from './gamesaving';
import json from './parser';
import read from './reader';

class GameSavingLoader {
  constructor() {
    this.read = read();
  }

  async load() {
    const buffer = await this.read;
    const arr = await json(buffer);
    const result = JSON.parse(arr);
    return new GameSaving(result);
  }
}

export default GameSavingLoader;
