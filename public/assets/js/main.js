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

    createGrid();
}


function createGrid() {
    const gridElement = document.querySelector('.grid');
    gridElement.innerHTML = '';
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => click(row, col));
            gridElement.appendChild(cell);
            // Add placed ship classes
            if (grid_defense_player1[row][col] === 'Minesweeper') {
                cell.classList.add('Minesweeper-placed');
            }
            if (grid_defense_player1[row][col] === 'destroyer') {
                cell.classList.add('destroyer-placed');
            }
            if (grid_defense_player1[row][col] === 'submarine') {
                cell.classList.add('submarine-placed');
            }
            if (grid_defense_player1[row][col] === 'battleship') {
                cell.classList.add('battleship-placed');
            }
            if (grid_defense_player1[row][col] === 'carrier') {
                cell.classList.add('carrier-placed');
            }
        }
    }
}



    function click(row, col) {
        console.log('Clicked row:', row, 'col:', col);
        if (rotated) {
            if (currentBoat == 0) {
                if (row > grid_defense_player1[col].length - 2) {
                    return;
                }
                grid_defense_player1[row][col] = 'Minesweeper';
                grid_defense_player1[row + 1][col] = 'Minesweeper';

            }
            if (currentBoat == 1) {
                if (row > grid_defense_player1[col].length - 3) {
                    return;
                }
                grid_defense_player1[row][col] = 'destroyer';
                grid_defense_player1[row + 1][col] = 'destroyer';
                grid_defense_player1[row + 2][col] = 'destroyer';
            }
            if (currentBoat == 2) {
                if (row > grid_defense_player1[col].length - 3) {
                    return;
                }
                grid_defense_player1[row][col] = 'submarine';
                grid_defense_player1[row + 1][col] = 'submarine';
                grid_defense_player1[row + 2][col] = 'submarine';
            }
            if (currentBoat == 3) {
                if (row > grid_defense_player1[col].length - 4) {
                    return;
                }
                grid_defense_player1[row][col] = 'battleship';
                grid_defense_player1[row + 1][col] = 'battleship';
                grid_defense_player1[row + 2][col] = 'battleship';
                grid_defense_player1[row + 3][col] = 'battleship';
            }
            if (currentBoat == 4) {
                if (row > grid_defense_player1[col].length - 5) {
                    return;
                }
                grid_defense_player1[row][col] = 'carrier';
                grid_defense_player1[row + 1][col] = 'carrier';
                grid_defense_player1[row + 2][col] = 'carrier';
                grid_defense_player1[row + 3][col] = 'carrier';
                grid_defense_player1[row + 4][col] = 'carrier';
            }
            currentBoat++;
            createGrid();
        } //Rotated true for ships placed vertically
        else {
            if (currentBoat == 0) {
                if (col > grid_defense_player1[row].length - 2) {
                    return;
                }
                grid_defense_player1[row][col] = 'Minesweeper';
                grid_defense_player1[row][col + 1] = 'Minesweeper';
            }
            if (currentBoat == 1) {
                if (col > grid_defense_player1[row].length - 3) {
                    return;
                }
                grid_defense_player1[row][col] = 'destroyer';
                grid_defense_player1[row][col + 1] = 'destroyer';
                grid_defense_player1[row][col + 2] = 'destroyer';
            }
            if (currentBoat == 2) {
                if (col > grid_defense_player1[row].length - 3) {
                    return;
                }
                grid_defense_player1[row][col] = 'submarine';
                grid_defense_player1[row][col + 1] = 'submarine';
                grid_defense_player1[row][col + 2] = 'submarine';
            }
            if (currentBoat == 3) {
                if (col > grid_defense_player1[row].length - 4) {
                    return;
                }
                grid_defense_player1[row][col] = 'battleship';
                grid_defense_player1[row][col + 1] = 'battleship';
                grid_defense_player1[row][col + 2] = 'battleship';
                grid_defense_player1[row][col + 3] = 'battleship';
            }
            if (currentBoat == 4) {
                if (col > grid_defense_player1[row].length - 5) {
                    return;
                }
                grid_defense_player1[row][col] = 'carrier';
                grid_defense_player1[row][col + 1] = 'carrier';
                grid_defense_player1[row][col + 2] = 'carrier';
                grid_defense_player1[row][col + 3] = 'carrier';
                grid_defense_player1[row][col + 4] = 'carrier';
            }
            currentBoat++;
            createGrid();
        } //Rotated false for ships placed horizontally
    }

    setup();
