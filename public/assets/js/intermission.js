document.getElementById('start_game').onclick = function() {
    document.getElementById('intermission_screen').style.display = 'none';
    document.getElementById('placement_grid').style.display = 'block';
    startGame();
}



function startGame() {
    console.log('Game started!');
    document.getElementById('reset').onclick = function() {
                resetPlacement(grid_defense_player2);
                // Reset the placement of ships
            }
    resetPlacement(grid_defense_player2);
    createGrid(grid_defense_player2);
}    

document.getElementById('ready_button').onclick = function() {
    document.getElementById('phase2_intermission_screen').style.display = 'none';
    document.getElementById('player1_grids').style.display = 'grid';
    createGrid(grid_defense_player1, '#player1_grids');
} 