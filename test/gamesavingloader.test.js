import GameSavingLoader from "../src/js/gamesavingloader";

const gamer = new GameSavingLoader();

test("test for method load of class GameSavingLoader", async () => {
  const result = await gamer.load();
  expect(result).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  });
});

test("test for constructor of class GameSavingLoader", (done) => {
  gamer.read.then((result) => {
    const test = new Uint16Array(result);
    expect(test.length).toBe(90);
    done();
  });
});
