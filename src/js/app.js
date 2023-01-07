import Game, { GameSavingData, readGameSaving as readGameSaving, writeGameSaving as writeGameSaving } from "./game";


const game = new Game();
game.start();

readGameSaving();
writeGameSaving();

