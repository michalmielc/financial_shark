
import {game} from './main_fun.js';
    
function round5() {

    game.increaseRounds(5);
    //OPIS RUNDY
    const title = "RUNDA 5 - KREDYT";
    const roundDescription = ` W tej rundzie gracze mogą zaciągnąć kredyt.
    Wartość kredytu nie może przekraczać wartości przedsiębiorstwa.
    Wartości: FZ: 4000$, Fm: 6000$, surowiec: 300$, a wyrób 500$.
    Oprocentowanie wynosi 10% na kolejkę. 
    Można płacić raty lub wszystko w ostatniej kolejce z odsetkami`;
    const btnDescription =`do rundy szóstej`;
    game.setDescriptions(title,roundDescription,btnDescription);
    //PODPIĘCIE ZDARZENIA DO PRZYCISKU
    const btn = document.getElementById('button');
    btn.addEventListener("click",function() {
        location.href = "round6.html"; })
}

round5();
  