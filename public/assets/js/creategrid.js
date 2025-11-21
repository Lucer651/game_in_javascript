function createGrid(grid, element) {
    const gridElement = document.querySelector(element || '.grid');
    gridElement.innerHTML = '';
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('click', () => click(row, col, grid));
            cell.addEventListener('mouseenter', () => hover(row, col));
            cell.addEventListener('mouseleave', clearHover);
            gridElement.appendChild(cell);
            fireAtPlayer1();
            fireAtPlayer2();

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