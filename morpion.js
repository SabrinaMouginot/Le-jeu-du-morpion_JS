addEventListener("DOMContentLoaded",  () => {
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

         
    redemarrerButton.addEventListener('click', redemarrerBoard);
});

//addEventListener gère des évènements.
//Ici, l'événement DOMContentLoaded se déclenche lorsque tous les scripts ont été executés (il n'attend pas que le reste finisse de se charger).
