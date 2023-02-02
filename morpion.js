addEventListener("DOMContentLoaded",  () => {
    //addEventListener gère des évènements.
    //Ici, l'événement DOMContentLoaded se déclenche lorsque tous les scripts ont été executés (il n'attend pas que le reste finisse de se charger).
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const joueurAffiche =document.querySelector('.display joueur');
    const resetButton = document.querySelector('.reset');

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

    function handleResultValidation() {
        let partieGagnee = false;
        for (let i = 0; i <=7; i++) {
            const conditionsGagnees =conditionsGagnantes [i];
            const a = board[conditionsGagnees[0]];
            const b = board[conditionsGagnees[1]];
            const c = board[conditionsGagnees[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                partieGagnee = true;
                break;
            }
        }

    if (partieGagnee) {
        annonce(joueurActuel === 'X' ? JOUEURX_GAGNE : JOUEURO_GAGNE);
        isGameActive = false;
        return;
    }

    if (!board.includes(''))
        annonce(TIE);

    }

    const annonce = (type) => {
        switch(type){
            case JOUEURO_GAGNE:
                annonceur.innerHTML = 'joueur <span class="joueurO"> O </span> gagne';
                break;
            case JOUEURX_GAGNE:
                annonceur.innerHTML = 'joueur <span class="joueurX"> X </span> gagne';
                break;
            case TIE:
                annonceur.innerText = 'Tie'
        }
        annonceur.classList.remove('cache');
    };
    
const isValidAction = (tile) => {
    if (tile.innerText === 'X' || tile.innerText === 'O') {
        return false;
    }
    return true;
};

    const updateBoard = (index) => {
        board[index] = joueurActuel;
    }

    const changeJoueur = () => {
        joueurDisplay.classList.remove(`joueur${joueurActuel}`);
        joueurActuel = joueurActuel === 'X' ? 'O' :'X';
        joueurDisplay.innerText = joueurActuel;
        joueurDisplay.classList.add(`joueur${joueurActuel}`);
    }

    const ActionUtilisateur = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = joueurActuel,
            tile.classList.add(`joueur${joueuractuel}`);
            updateBoard(index);
            handleResultValidation();
            changeJoueur();
        }
    }

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', '']
        isGameActive = true;
        annonce.classList.add('cache');

        if (joueurActuel === 'O') {
            changeJoueur();
        }
        tiles.forEach(tile => {
            tile. innerText = '';
            tile.classList.remove('joueurX');
            tile.classList.remove('joueurO');
        });
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => ActionUtilisateur ( tile, index ));
    
    });
         
    resetButton.addEventListener('click', resetBoard);
});

