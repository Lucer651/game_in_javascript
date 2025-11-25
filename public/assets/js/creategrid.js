function createGrid(grid, element) {
    const gridElement = document.querySelector(element || '.grid');
    if (!gridElement) {
        console.warn('Grid element not found for selector:', element);
        return;
    }

    const isPlayer1Offense = element === '#player1_grids_offense';
    const isPlayer2Offense = element === '#player2_grids_offense';
    const isPlayer1Defense = element === '#player1_grids';
    const isPlayer2Defense = element === '#player2_grids';
    const isOffenseGrid = isPlayer1Offense || isPlayer2Offense;

    gridElement.innerHTML = '';

    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');

            // Only allow clicks for placement phase OR for offense grids during battle phase
            cell.addEventListener('click', () => {
                if (gamestate === 'placement') {
                    click(row, col, grid);
                } else if (gamestate === 'battle' && isOffenseGrid) {
                    click(row, col, grid);
                }
            });
            cell.addEventListener('mouseenter', () => {
                if (gamestate === 'placement') hover(row, col);
            });
            cell.addEventListener('mouseleave', () => {
                if (gamestate === 'placement') clearHover();
            });

            // Defensive ship placement visuals ONLY on defense grids
            if (!isOffenseGrid) {
                const v = grid[row][col];
                switch (v) {
                    case 'Minesweeper': cell.classList.add('Minesweeper-placed'); break;
                    case 'destroyer': cell.classList.add('destroyer-placed'); break;
                    case 'submarine': cell.classList.add('submarine-placed'); break;
                    case 'battleship': cell.classList.add('battleship-placed'); break;
                    case 'carrier': cell.classList.add('carrier-placed'); break;
                }
            }

            // Offense result (hit/miss) visuals ONLY on offense grids
            if (isOffenseGrid) {
                if (isPlayer1Offense && grid_offense_player1[row][col] === 'hit') {
                    cell.classList.add('hit');
                } else if (isPlayer1Offense && grid_offense_player1[row][col] === 'miss') {
                    cell.classList.add('miss');
                }
                if (isPlayer2Offense && grid_offense_player2[row][col] === 'hit') {
                    cell.classList.add('hit');
                } else if (isPlayer2Offense && grid_offense_player2[row][col] === 'miss') {
                    cell.classList.add('miss');
                }
            }

            // Show incoming fire results on defense grids based on opponent's offense grid
            if (isPlayer1Defense) {
                if (grid_offense_player2[row][col] === 'hit') {
                    cell.classList.add('hit');
                } else if (grid_offense_player2[row][col] === 'miss') {
                    cell.classList.add('miss');
                }
            }
            if (isPlayer2Defense) {
                if (grid_offense_player1[row][col] === 'hit') {
                    cell.classList.add('hit');
                } else if (grid_offense_player1[row][col] === 'miss') {
                    cell.classList.add('miss');
                }
            }

            gridElement.appendChild(cell);
        }
    }
}