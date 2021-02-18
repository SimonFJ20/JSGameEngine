let myGame = new Game('myGame');
let player1 = new Player(new Position(0, 0), ID.player);
let player2 = new Player(new Position(200, 0), ID.player);
let player3 = new Player(new Position(200, 200), ID.player);
myGame.handler.addObject(player1);
myGame.handler.addObject(player2);
myGame.handler.addObject(player3);
myGame.start();
//# sourceMappingURL=game.js.map