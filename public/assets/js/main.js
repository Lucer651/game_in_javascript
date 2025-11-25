

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
    document.getElementById('reset').onclick = function () {
        resetPlacement(grid_defense_player1);
        // Reset the placement of ships
    }
    resetPlacement(grid_defense_player1);
    createGrid(grid_defense_player1);
    document.getElementById('restart_button').addEventListener('click', () => {
        console.log('Restarting game...');
        window.location.reload(); //temporary fix, later will implement proper reset function 
    });
}
function click(row, col, grid) {
    if (gamestate === 'placement') {
        place(row, col, grid);

    }
    if (gamestate === 'battle') {
        if (playerturn) {
            fireAtPlayer2(row, col);
            playerturn = false;
        } else {
            fireAtPlayer1(row, col);
            playerturn = true;
        }
    }
}






setup();
