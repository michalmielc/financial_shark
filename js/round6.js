
import {game,Player} from './main_fun.js';
    
function round6() {

    game.increaseRounds(6);
    Player.showRankingPlayers();
    Player.showPlayerThings();
    
    //OPIS RUNDY
    const title = "RUNDA 6 - ROZBUDOWA";
    const roundDescription = `W tej rundzie gracze mogą budować fabryki.
    Koszt 4000$ FZ, a 6000$ FM,
    przy czym budowa FZ trwa dwie rundy a masowej trzy rundy.
    W tej rundzie należy uiścić 2000$ za koszt fabryki i w każdej kolejce
    czyli np przy budowie FM trzeba uiścić w trzech kolejkach 2000$, ale fabryka\
    jest gotowa w następnej kolejce w rundzie 4.
    W przypdaku niezapłacenia raty, budowa jest przerwana i pieniądze przepadają`;
    const btnDescription =`do rundy pierwszej`;
    game.setDescriptions(title,roundDescription,btnDescription);
    //PODPIĘCIE ZDARZENIA DO PRZYCISKU
    const btn = document.getElementById('button');
    btn.addEventListener("click",function() {
        location.href = "round1.html"; })
}

round6();
  