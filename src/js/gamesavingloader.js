import GameSaving from './gamesaving';
import json from './parser';
import read from './reader';

class GameSavingLoader {
  static async load() {
    const buffer = await read();
    const arr = await json(buffer);
    return new GameSaving(JSON.parse(arr));
  }
}

export default GameSavingLoader;
