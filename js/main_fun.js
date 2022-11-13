// WSPÓLNA BIBLIOTEKA FUNKCJI ORAZ ZMIENNYCH

// OBIEKT GAME
const game = {

    // ZMIENNE ZAPISYWANE W PAMIĘCI 
    //LICZNIK KOLEJEK I RUND
    setLapAndRound() {
        localStorage.clear();
        localStorage.setItem("lapCounter",0);
        localStorage.setItem("roundCounter",0);
    },

    //OPISY DO RUNDY
    setDescriptions(title, roundDescription, btnDescription){
        const intro = document.getElementById('title');
        intro.innerText = title;

        const com = document.getElementById('description');
        com.innerText = roundDescription;

        const btn = document.getElementById('button');
        btn.innerText = btnDescription;  

        const gamebox = document.getElementById('game_box');
        gamebox.innerText = "ilość kolejek:" + localStorage.getItem("lapCounter") + " /12 " + "runda:"  + localStorage.getItem("roundCounter")+" /6";
    },
    //NOWA KOLEJKA
    increaseLaps () {
        let lap = localStorage.getItem("lapCounter");
        lap++;
        localStorage.setItem("lapCounter",lap);
    },
    //NOWA RUNDA
    increaseRounds (x) {
        localStorage.setItem("roundCounter",x);
    }

}
//EKSPORT
export {game};