
import {game, Player} from './main_fun.js';
    
function round1() {

            game.increaseLaps();
            game.increaseRounds(1);
            Player.showRankingPlayers();
            Player.showPlayerThings();
            
            //OPIS RUNDY
            const title = "RUNDA 1 - PODATKI";
            const roundDescription = `W tej rundzie nastąpi 
            naliczenie opłat oraz podatków za majątek. Taryfikator opłat:
            fabryka zwykła: 1000$/szt
            fabryka masowa: 1500$/szt
            surowiec: 300$/szt
            wyrób: 500$/szt. `;
            const btnDescription =`do rundy drugiej`;
            game.setDescriptions(title,roundDescription,btnDescription);
            //PODPIĘCIE ZDARZENIA DO PRZYCISKU
            const btn = document.getElementById('button');
            btn.addEventListener("click",function() {
            location.href = "round2.html"; })
            btn.style.visibility="hidden";
             
            //AKTYWACJA PRZYCISKU
            const btnDiv = document.getElementById('action');
            const div = document.createElement('div');
            const player = taxAndChargingPlayerCalc();
            console.log(player);
            div.innerText = 
            `Twój majątek łącznie: ${player[0].goodwillTotal}
            Portfel: ${player[0].money}
            Twój majątek podlegający opodatkowaniu: ${player[0].goodwillForTax}
            Należny podatek:${player[0].taxTotal}
            Twój majątek po odliczeniu:${player[0].afterCharging}
            Portfel po odliczeniu: ${player[0].moneyAfterCharging}
            `
            btnDiv.appendChild(div);
            const btnTax = document.createElement('button');
            btnTax.innerText="OBLICZ KOSZTY";
            btnDiv.appendChild(btnTax);
            btnTax.addEventListener("click",function () {
           
            //OBLICZENIE PODATKU
            taxAndChargingPlayers();
           
            //ODŚWIEŻENIE PODSUMOWAŃ    
            Player.showRankingPlayers();
            Player.showPlayerThings();
           //UKRYCIE PRZYCISKÓW I KOMUNIKATÓW
            btn.style.visibility="visible";            
            btnTax.remove();
            div.remove();
            })
          
        };

// OBLICZENIE KOSZTÓW I ICH ODJĘCIE
function taxAndChargingPlayers(){
    const players = Player.getPlayers();
            players.forEach (el=> {
                console.log(el.money);
                el.money= el.money - (el.smallFactory*1000 + el.massFactory*1500 +
                 el.material*300 + el.product*500);
             } );
    localStorage.setItem("players",JSON.stringify(players));
};


// OBLICZENIE KOSZTÓW GRACZA
function taxAndChargingPlayerCalc(){
    let playerTaxCalc1 = [];
    let playerTaxCalc2 = [];
    const players = Player.getPlayers();

    players.forEach (el=> {
        playerTaxCalc1.push({
            goodwillTotal: Player.getGoodwillTotal(
                el.smallFactory,el.massFactory,el.material, el.product,el.money),
            money: el.money,
            moneyAfterCharging: el.money - (  
                el.smallFactory*1000 + el.massFactory*1500 +
                 el.material*300 + el.product*500),
            goodwillForTax: Player.getGoodwillTotal(
                el.smallFactory,el.massFactory,el.material, el.product,0),
            taxTotal:el.smallFactory*1000 + el.massFactory*1500 +
                 el.material*300 + el.product*500,
            afterCharging: Player.getGoodwillTotal(
                el.smallFactory,el.massFactory,el.material, el.product,el.money) -(  
                el.smallFactory*1000 + el.massFactory*1500 +
                 el.material*300 + el.product*500) })

     } );

     playerTaxCalc2 = playerTaxCalc1.slice(0,1);
     return playerTaxCalc2;
}

round1();
  