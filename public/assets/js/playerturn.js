
createGrid(grid_defense_player1, '#player1_grids'); 
createGrid(grid_offense_player1, '#player1_grids_offense');  


function fireAtPlayer2(row, col) {
    // Safety guard
    if (!grid_defense_player2[row] || grid_offense_player1[row][col] !== null) {
        if (grid_offense_player1[row] && grid_offense_player1[row][col] !== null) {
            alert('Already fired here.');
        }
        return;
    }

    if (playerturn) {
        if (grid_defense_player2[row][col] !== null) {
            // Ship present -> record hit only in offense grid, keep ship value on defense
            grid_offense_player1[row][col] = 'hit';
            alert('Hit!');
            totalHits1++;
        } else {
            // Water -> record miss only in offense grid (defense stays null)
            grid_offense_player1[row][col] = 'miss';
            alert('Miss!');
        }

        // Refresh both related grids for Player 1's perspective
        createGrid(grid_offense_player1, '#player1_grids_offense');
        createGrid(grid_defense_player2, '#player2_grids');

        // Intermission UI
        document.getElementById('player1_grids').style.display = 'none';
        document.getElementById('player1_grids_offense').style.display = 'none';
        document.getElementById('battle_intermission').style.display = 'block';
    }
    if (totalHits1 >= 17) {
        alert('Player 1 wins!');
        document.getElementById('battle_intermission').style.display = 'none';
        document.getElementById('game_over_screen').style.display = 'block';
        document.getElementById('winner_announcement').textContent = 'Player 1 wins!';
    }
}

function fireAtPlayer1(row, col) {
    if (!grid_defense_player1[row] || grid_offense_player2[row][col] !== null) {
        if (grid_offense_player2[row] && grid_offense_player2[row][col] !== null) {
            alert('Already fired here.');
        }
        return;
    }

    if (!playerturn) {
        if (grid_defense_player1[row][col] !== null) {
            grid_offense_player2[row][col] = 'hit';
            alert('Hit!');
            totalHits2++;
        } else {
            grid_offense_player2[row][col] = 'miss';
            alert('Miss!');
        }

        createGrid(grid_offense_player2, '#player2_grids_offense');
        createGrid(grid_defense_player1, '#player1_grids');

        document.getElementById('player2_grids').style.display = 'none';
        document.getElementById('player2_grids_offense').style.display = 'none';
        document.getElementById('battle_intermission').style.display = 'block';
    }
    if (totalHits2 >= 17) {
        alert('Player 2 wins!');
        document.getElementById('battle_intermission').style.display = 'none';
        document.getElementById('game_over_screen').style.display = 'block';
        document.getElementById('winner_announcement').textContent = 'Player 2 wins!';
    }

}


