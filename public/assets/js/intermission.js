document.getElementById('start_game').onclick = function () {
    document.getElementById('intermission_screen').style.display = 'none';
    document.getElementById('placement_grid').style.display = 'block';
    startGame();
}



function startGame() {
    console.log('Game started!');
    document.getElementById('reset').onclick = function () {
        resetPlacement(grid_defense_player2);
        // Reset the placement of ships
    }
    resetPlacement(grid_defense_player2);
    createGrid(grid_defense_player2);


    document.getElementById('ready_button').onclick = function () {
        document.getElementById('phase2_intermission_screen').style.display = 'none';
        document.getElementById('player1_grids').style.display = 'grid';
        document.getElementById('player1_grids_offense').style.display = 'grid';
        createGrid(grid_defense_player1, '#player1_grids');
        if (!playerturn) {
            playerturn = true;
        }
        gamestate = 'battle';
    }



    document.getElementById('start_turn_button').onclick = function () {
        if (playerturn) {
            document.getElementById('battle_intermission').style.display = 'none';
            document.getElementById('player1_grids').style.display = 'grid';
            document.getElementById('player1_grids_offense').style.display = 'grid';
            document.getElementById('current_player').innerText = "2";
            createGrid(grid_defense_player1, '#player1_grids');
            createGrid(grid_offense_player1, '#player1_grids_offense');
        } if (!playerturn) {
            document.getElementById('battle_intermission').style.display = 'none';
            document.getElementById('player2_grids').style.display = 'grid';
            document.getElementById('player2_grids_offense').style.display = 'grid';
            document.getElementById('current_player').innerText = "1";
            createGrid(grid_defense_player2, '#player2_grids');
            createGrid(grid_offense_player2, '#player2_grids_offense');
        }


    }
}