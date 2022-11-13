
import {game} from './main_fun.js';
    
function round3() {

    game.increaseRounds(3);
    //OPIS RUNDY
    const title = "RUNDA 3 - PRODUKCJA";
    const roundDescription = `Gracze produkują wyroby z surowców.
    Koszt produkcji w FZ: 2000$,  FM: 1500$.
    W FZ produkujemy tylko 1 szt, a w FM 2 szt.`;
    const btnDescription =`do rundy CZWARTEJ`;
    game.setDescriptions(title,roundDescription,btnDescription);
    //PODPIĘCIE ZDARZENIA DO PRZYCISKU
    const btn = document.getElementById('button');
    btn.addEventListener("click",function() {
        location.href = "round4.html"; })
}

round3();
  