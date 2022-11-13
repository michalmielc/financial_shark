import {game} from './main_fun.js';


function start() {
    // INICJACJA ZMIENNYCH
    game.setLapAndRound();

    //OPIS RUNDY
    const title = "WPROWADZENIE";
    const roundDescription = `Witaj w grze REKIN INTERESU.
    Celem gry jest zdobycie jak największego majątku.
    Wpisz nazwę firmy i zaczynamy!`;
    const btnDescription =`do rundy pierwszej`;
    game.setDescriptions(title,roundDescription,btnDescription);
    //PODPIĘCIE ZDARZENIA DO PRZYCISKU
    const btn = document.getElementById('button');
    btn.addEventListener("click",function() {
        location.href = "round1.html"; })
}

start();
