var GameManager = require('./game-manager');

// Wait till the browser is ready to render the game (avoid glitches)
document.addEventListener("DOMContentLoaded", function () {
    window.requestAnimationFrame(function () {
        var manager = new GameManager(4, KeyboardInputManager, HTMLActuator);
    });
});



