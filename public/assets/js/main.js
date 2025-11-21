const grid_offense_player1 = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
];
const grid_defense_player1 = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
];
const grid_defense_player1_hover = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
];
const grid_offense_player2 = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
];
const grid_defense_player2 = [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
];
let currentBoat = 0;
let rotated = false;
let cooldown = false;
let playerturn = true //true for player 1, false for player 2
const shipSizes = [2, 3, 3, 4, 5];

// Minesweeper, Destroyer, Submarine, Battleship, Carrier

function setup() {
    document.addEventListener('keydown', (event) => {
        if (cooldown) {
            return;
        }
        if (event.key === 'r' || event.key === 'R') {
            rotated = !rotated;
            console.log('Rotated:', rotated);
            cooldown = true;
        }

    });
    document.addEventListener('keyup', (event) => {
        if (event.key === 'r' || event.key === 'R') {
            cooldown = false;
        }
    });
    document.getElementById('reset').onclick = function() {
                resetPlacement(grid_defense_player1);
                // Reset the placement of ships
            }
    resetPlacement(grid_defense_player1);
    createGrid(grid_defense_player1);
}


function createGrid(grid) {
    const gridElement = document.querySelector('.grid');
    gridElement.innerHTML = '';
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => click(row, col, grid));
            cell.addEventListener('mouseenter', () => hover(row, col));
            cell.addEventListener('mouseleave', clearHover);
            gridElement.appendChild(cell);

            // Add placed ship classes
            if (grid[row][col] === 'Minesweeper') {
                cell.classList.add('Minesweeper-placed');
            }
            if (grid[row][col] === 'destroyer') {
                cell.classList.add('destroyer-placed');
            }
            if (grid[row][col] === 'submarine') {
                cell.classList.add('submarine-placed');
            }
            if (grid[row][col] === 'battleship') {
                cell.classList.add('battleship-placed');
            }
            if (grid[row][col] === 'carrier') {
                cell.classList.add('carrier-placed');
            }
        }
    }
}




setup();
