import GameSavingLoader from '../src/js/gamesavingloader';

test('test for method load of class GameSavingLoader', async () => {
  expect(await GameSavingLoader.load()).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});
