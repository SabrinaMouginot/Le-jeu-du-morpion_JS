addEventListener("DOMContentLoaded",  () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const joueurDisplay =document.querySelector('.display-joueur');
    const redemarrerButton = document.querySelector('.redemarrer')
    redemarrerButton.addEventListener('click', redemarrerBoard);
});

//addEventListener gère des évènements.
//Ici, l'événement DOMContentLoaded se déclenche lorsque tous les scripts ont été executés (il n'attend pas que le reste finisse de se charger).
