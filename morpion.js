addEventListener("DOMContentLoaded",  () => {
    //addEventListener gère des évènements.
    //Ici, l'événement DOMContentLoaded se déclenche lorsque tous les scripts ont été executés (il n'attend pas que le reste finisse de se charger).
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const joueurAffiche =document.querySelector('.display-joueur');
    const redemarrerButton = document.querySelector('.redemarrer');

    let board = ['', '', '', '', '', '', '', '', ''];
    let joueurActuel = 'X';
    let isGameActive = true;

    const JOUEURX_GAGNE = 'JOUEURX_GAGNE';
    const JOUEURO_GAGNE = 'JOUEURO_GAGNE';
    const TIE = 'TIE';

    /*
         Indexation dans le tableau
         [0] [1] [2]
         [3] [4] [5]
         [6] [7] [8]
    */

    const conditionsGagnantes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const changeJoueur = () => {
        joueurDisplay.classList.remove(`player${joueurActuel}`);
        joueurActuel = joueurActuel === 'X' ? 'O' :'X';
        joueurDisplay.innerText = joueurActuel;
        joueurDisplay.classList.add(`joueur${joueurActuel}`);
    }

    const ActionUtilisateur = (tile, index) => {
        if(isValidAction(tile)&& isGameActive) {
            tile.innerText = joueurActuel,
            tile.classList.add(`joueur${joueuractuel}`);
            updateBoard(index);
            handleResultValidation();
            changeJoueur();
        }
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => ActionUtilisateur ( tile, index ));
    
    });
         
    redemarrerButton.addEventListener('click', redemarrerBoard);
});

