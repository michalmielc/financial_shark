import {game,Player} from './main_fun.js';


function start() {
    // INICJACJA ZMIENNYCH
    game.setLapAndRound();
    Player.setPlayers();
    Player.setGoodwillValues();

    //OPIS RUNDY
    const title = "WPROWADZENIE";
    const roundDescription = `Witaj w grze REKIN INTERESU.
    Celem gry jest zdobycie jak największego majątku.
    Wpisz nazwę firmy i zaczynamy!`;
    const btnDescription =`do rundy pierwszej`;
    game.setDescriptions(title,roundDescription,btnDescription);
    //PODPIĘCIE ZDARZENIA DO PRZYCISKU
    const btn = document.getElementById('button');
    // PRZEŁĄCZNIK NA WŁAŚCIWY THIS
    const that = this; 
    //PRZYCISK POCZĄTEK GRY
    btn.addEventListener("click",function() {
        const input = document.getElementById('companyName');
        Player.addPlayerToPlayers(input.value);
        localStorage.setItem("playerName",input.value);
        location.href = "round1.html"; })
}

start();
