
createGrid(grid_defense_player1, '#player1_grids'); 
createGrid(grid_offense_player1, '#player1_grids_offense');  


function fireAtPlayer2(row, col) {
    if(!grid_defense_player1[row]) {
        return;
    }
    if (playerturn) {
        if (grid_offense_player1[row][col] !== null) {
            alert('You have already fired at this location. Choose another target.');
            return;
        }
        if (grid_defense_player2[row][col] !== null) {
            alert('Hit!');
            grid_offense_player1[row][col] = 'hit';
            grid_defense_player2[row][col] = 'hit';
        } else {
            alert('Miss!');
            grid_offense_player1[row][col] = 'miss';
            grid_defense_player2[row][col] = 'miss';
        }
        createGrid(grid_offense_player1, '#player1_grids_offense');
        document.getElementById('player1_grids').style.display = 'none';
        document.getElementById('player1_grids_offense').style.display = 'none';
        document.getElementById('battle_intermission').style.display = 'block';
    }
    
}
function fireAtPlayer1(row, col) {
    if(!grid_defense_player2[row]) {
        return;
    }
    if (!playerturn) {
        if (grid_offense_player2[row][col] !== null) {
            alert('You have already fired at this location. Choose another target.');
            return;
        }
        if (grid_defense_player1[row][col] !== null) {
            alert('Hit!');
            grid_offense_player2[row][col] = 'hit';
            grid_defense_player1[row][col] = 'hit';
        } else {
            alert('Miss!');
            grid_offense_player2[row][col] = 'miss';
            grid_defense_player1[row][col] = 'miss';
        }
        createGrid(grid_offense_player2, '#player2_grids_offense');
        document.getElementById('player2_grids').style.display = 'none';
        document.getElementById('player2_grids_offense').style.display = 'none';
        document.getElementById('battle_intermission').style.display = 'block';
        
    }
    
}


