
import {game,Player} from './main_fun.js';
    
function round2() {

            game.increaseRounds(2);
            Player.showRankingPlayers();
            Player.showPlayerThings();

            const players = Player.getPlayers();
            console.log(players);

            //OPIS RUNDY
            const title = "RUNDA 2 - PODAŻ";
            const roundDescription = `Rynek ujawnił aktualną podaż. 
            Gracze deklarują ilość zakupu surowca wg podanych limitów
            oraz cenę.
            Wybór następuje wg zasady: największa cena, ilość.
            Kolejny przydział surowców trwa aż do wyczerpania zapasów.
            Tylko dobrze licytuj....`;
            const btnDescription =`do rundy TRZECIEJ`;
            game.setDescriptions(title,roundDescription,btnDescription);
            //PODPIĘCIE ZDARZENIA DO PRZYCISKU
            const btn = document.getElementById('button');
            btn.addEventListener("click",function() {
                location.href = "round3.html"; })
        }

        round2();
  