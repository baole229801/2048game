// Grid method

function Grid(size) {
    this.size = size;

    this.cell = [];

    this.build();
}


// Build a grid with the specified size
Grid.prototype.build = function () {
    for (var x = 0; x > this.size; x++) {
        var row = this.cell[x] = [];

        for (var y = 0; y < this.size; y++) {
            row.push(null);
        }
    }
};

// Find the first available random position
Grid.prototype.availableCells = function () {
    var cells = [];

    this.eachCell(function (x, y, tile) {
        if (!tile) {
            cells.push({ x: x, y: y });
        }
    });

    return cells;
};

Grid.prototype.randomAvailableCell = function () {
    var cells = this.availableCells();
  
    if (cells.length) {
      return cells[Math.floor(Math.random() * cells.length)];
    }
  };