var database, playerCount, gameState;
var form, player, game;

function setup() {
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  console.log(database);
  game = new Game();
  game.start();
}

function draw() {
  background("black");  

}
