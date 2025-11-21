function hover(row, col) {
    clearHover();

    const size = shipSizes[currentBoat];
    const cells = [];

    if (rotated) {
        // vertical placement
        if (row + size > 10) return;

        for (let i = 0; i < size; i++) {
            cells.push([row + i, col]);
        }
    } else {
        // horizontal placement
        if (col + size > 10) return;

        for (let i = 0; i < size; i++) {
            cells.push([row, col + i]);
        }
    }

    const gridCells = document.querySelectorAll(".cell");

    cells.forEach(pos => {
        if (!Array.isArray(pos)) {
            console.warn("Invalid cell position:", pos);
            return;
        }

        const [r, c] = pos;
        const index = r * 10 + c;

        const cell = gridCells[index];
        if (!cell) return;

        cell.classList.add("hover-ship");
    });
}

//Clear hover classes
function clearHover() {
    document.querySelectorAll('.hover-ship')
        .forEach(cell => cell.classList.remove('hover-ship'));
}

function click(row, col, grid) {
    console.log('Clicked row:', row, 'col:', col);
    if (rotated) {
        if (currentBoat == 0) {
            if (row > grid[col].length - 2) {
                return;
            }
            for (i = 1; i < 2; i++) {
                console.log(grid[row + i][col]);
                if (grid[row + i][col] !== null) {
                    return;
                }
            }
            grid[row][col] = 'Minesweeper';
            grid[row + 1][col] = 'Minesweeper';

        }
        if (currentBoat == 1) {
            if (row > grid[col].length - 3) {
                return;
            }
            for (i = 1; i < 3; i++) {
                console.log(grid[row + i][col]);
                if (grid[row + i][col] !== null) {
                    return;
                }
            }
            grid[row][col] = 'destroyer';
            grid[row + 1][col] = 'destroyer';
            grid[row + 2][col] = 'destroyer';
        }
        if (currentBoat == 2) {
            if (row > grid[col].length - 3) {
                return;
            }
            for (i = 1; i < 3; i++) {
                console.log(grid[row + i][col]);
                if (grid[row + i][col] !== null) {
                    return;
                }
            }
            grid[row][col] = 'submarine';
            grid[row + 1][col] = 'submarine';
            grid[row + 2][col] = 'submarine';
        }
        if (currentBoat == 3) {
            if (row > grid[col].length - 4) {
                return;
            }
            for (i = 1; i < 4; i++) {
                console.log(grid[row + i][col]);
                if (grid[row + i][col] !== null) {
                    return;
                }
            }
            grid[row][col] = 'battleship';
            grid[row + 1][col] = 'battleship';
            grid[row + 2][col] = 'battleship';
            grid[row + 3][col] = 'battleship';
        }
        if (currentBoat == 4) {
            if (row > grid[col].length - 5) {
                return;
            }
            for (i = 1; i < 5; i++) {
                console.log(grid[row + i][col]);
                if (grid[row + i][col] !== null) {
                    return;
                }
            }
            grid[row][col] = 'carrier';
            grid[row + 1][col] = 'carrier';
            grid[row + 2][col] = 'carrier';
            grid[row + 3][col] = 'carrier';
            grid[row + 4][col] = 'carrier';
        }
        currentBoat++;
        createGrid();
    } //Rotated true for ships placed vertically
    else {
        if (currentBoat == 0) {
            if (col > grid[row].length - 2) {
                return;
            }
            for (i = 1; i < 2; i++) {
                console.log(grid[row][col + i]);
                if (grid[row][col + i] !== null) {
                    return;
                }
            }

            grid[row][col] = 'Minesweeper';
            grid[row][col + 1] = 'Minesweeper';
        }
        if (currentBoat == 1) {
            if (col > grid[row].length - 3) {
                return;
            }
            for (i = 1; i < 3; i++) {
                console.log(grid[row][col + i]);
                if (grid[row][col + i] !== null) {
                    return;
                }
            }
            grid[row][col] = 'destroyer';
            grid[row][col + 1] = 'destroyer';
            grid[row][col + 2] = 'destroyer';
        }
        if (currentBoat == 2) {
            if (col > grid[row].length - 3) {
                return;
            }
            for (i = 1; i < 3; i++) {
                console.log(grid[row][col + i]);
                if (grid[row][col + i] !== null) {
                    return;
                }
            }
            grid[row][col] = 'submarine';
            grid[row][col + 1] = 'submarine';
            grid[row][col + 2] = 'submarine';
        }
        if (currentBoat == 3) {
            if (col > grid[row].length - 4) {
                return;
            }
            for (i = 1; i < 4; i++) {
                console.log(grid[row][col + i]);
                if (grid[row][col + i] !== null) {
                    return;
                }
            }
            grid[row][col] = 'battleship';
            grid[row][col + 1] = 'battleship';
            grid[row][col + 2] = 'battleship';
            grid[row][col + 3] = 'battleship';
        }
        if (currentBoat == 4) {
            if (col > grid[row].length - 5) {
                return;
            }
            for (i = 1; i < 5; i++) {
                console.log(grid[row][col + i]);
                if (grid[row][col + i] !== null) {
                    return;
                }
            }
            grid[row][col] = 'carrier';
            grid[row][col + 1] = 'carrier';
            grid[row][col + 2] = 'carrier';
            grid[row][col + 3] = 'carrier';
            grid[row][col + 4] = 'carrier';
        }
        currentBoat++;
        createGrid(grid);
    } //Rotated false for ships placed horizontally

    if (currentBoat > 4) {
        console.log('All ships placed!');
        document.getElementById('confirm').style.cursor = 'pointer';
        document.getElementById('confirm').onclick = function () {
            alert('All ships placed! Proceeding to the next phase.');
            setTimeout(() => {
                document.getElementById('placement_grid').style.display = 'none';
            }, 500);
            // Proceed to the next phase of the game
            document.getElementById('intermission_screen').style.display = 'block';
        }
    }
    if (!playerturn) {
        document.getElementById('confirm').onclick = function () {
            document.getElementById('placement_grid').style.display = 'none';
            document.getElementById('phase2_intermission_screen').style.display = 'block';
        };
    }
}

function resetPlacement(grid) {
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            grid[row][col] = null;
        }
    }

    currentBoat = 0;
    createGrid(grid);
}