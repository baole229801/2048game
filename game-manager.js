function GameManager(size, InputManager, Actuator) {
    this.size = size;   //size of grid
    this.inputManager = new InputManager;
    this.actuator = new Actuator;

    this.startTiles = 2;

    this.inputManager.on("move", this.move.bind(this));
    this.inputManager.on("restart", this.restart.bind(this));
    this.setup();
}  

// Restart the game
GameManager.prototype.restart = function () {
    this.actuator.restart();
    this.setup();
}

// Set up the game
GameManager.prototype.setup = function () {
    this.grid = new Grid(this.size);
}

module.exports = GameManager;