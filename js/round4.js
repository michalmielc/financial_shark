
import {game} from './main_fun.js';
    
function round4() {

    game.increaseRounds(4);
    //OPIS RUNDY
    const title = "RUNDA 4 - POPYT";
    const roundDescription = `Rynek skupuje wyroby wg zapotrzebowania 
    ( karta podaży i popytu). Gracz/oponent deklaruje ilość 
    ( obowiązuje limit wg karty)oraz cenę.
    Skup odbywa się wg zasay naniższa cena, ilość, 
    aż do wyczerpania popytu`;
    const btnDescription =`do rundy PIĄTEJ`;
    game.setDescriptions(title,roundDescription,btnDescription);
    //PODPIĘCIE ZDARZENIA DO PRZYCISKU
    const btn = document.getElementById('button');
    btn.addEventListener("click",function() {
        location.href = "round5.html"; })
}

round4();
  