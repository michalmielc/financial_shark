
import {game} from './main_fun.js';
    
function round1() {

            game.increaseLaps();
            game.increaseRounds(1);
            //OPIS RUNDY
            const title = "RUNDA 1 - PODATKI";
            const roundDescription = `W tej rundzie nastąpi 
            naliczenie opłat/podatków za majątek. Taryfikator:
            fabryka zwykła: 1000$ / szt
            fabryka masowa: 1500$ / szt
            surowiec: 300$ /szt
            wyrób: 500$ /szt. `;
            const btnDescription =`do rundy drugiej`;
            game.setDescriptions(title,roundDescription,btnDescription);
            //PODPIĘCIE ZDARZENIA DO PRZYCISKU
            const btn = document.getElementById('button');
            btn.addEventListener("click",function() {
                location.href = "round2.html"; })
        }

        round1();
  