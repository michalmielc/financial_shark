// WSPÓLNA BIBLIOTEKA FUNKCJI ORAZ ZMIENNYCH

// OBIEKT GAME
const game = {

    // ZMIENNE ZAPISYWANE W PAMIĘCI 
    //LICZNIK KOLEJEK I RUND
    
    setLapAndRound() {
        localStorage.clear();
        localStorage.setItem("lapCounter",0);
        localStorage.setItem("roundCounter",0);
        localStorage.setItem("playerName","TEST");
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

};

// USTAWIENIE PARATMETRÓW  DLA GRACZY  

const Player = {

    //AKTYWACJA GRACZY
    setPlayers()
    {
        const players = [ 
            {      
                name:"USER",
                level:1,
                money:15000,
                smallFactory:1,
                massFactory:0,
                material:1,
                product:0,
                isPlayer:1,
                hasCredit:0,
                creditRate:0,
                creditLeft:0,
            },
            {
                name:"Jean Coutu Group",
                level:1,
                money:15000,
                smallFactory:1,
                massFactory:0,
                material:1,
                product:0,
                isPlayer:0,
                hasCredit:0,
                creditRate:0,
                creditLeft:0,
            },
            {
                name:"Enbridge Inc.",
                level:1,
                money:15000,
                smallFactory:1,
                massFactory:0,
                material:1,
                product:0,
                isPlayer:0,
                hasCredit:0,
                creditRate:0,
                creditLeft:0,
            },
            {
                name:"Suncor Energy",
                level:1,
                money:15000,
                smallFactory:1,
                massFactory:0,
                material:1,
                product:0,
                isPlayer:0,
                hasCredit:0,
                creditRate:0,
                creditLeft:0,
            },
            {
                name:"Imperial Oil",
                level:1,
                money:15000,
                smallFactory:1,
                massFactory:0,
                material:1,
                product:0,
                isPlayer:0,
                hasCredit:0,
                creditRate:0,
                creditLeft:0,
            },
            {
                name:"Rogers Communications",
                level:1,
                money:15000,
                smallFactory:1,
                massFactory:0,
                material:1,
                product:0,
                isPlayer:0,
                hasCredit:0,
                creditRate:0,
                creditLeft:0,
            },
            {
                name:"Rio Tinto PLC",
                level:1,
                money:15000,
                smallFactory:1,
                massFactory:0,
                material:1,
                product:0,
                isPlayer:0,
                hasCredit:0,
                creditRate:0,
                creditLeft:0,
            },
            {
                name:"GERDAU S.A.",
                level:1,
                money:15000,
                smallFactory:1,
                massFactory:0,
                material:1,
                product:0,
                isPlayer:0,
                hasCredit:0,
                creditRate:0,
                creditLeft:0,
            },
            {
                name:"Novolipetsk Co.",
                level:1,
                money:15000,
                smallFactory:1,
                massFactory:0,
                material:1,
                product:0,
                isPlayer:0,
                hasCredit:0,
                creditRate:0,
                creditLeft:0,
            },
            {
                name:"Nippon Steel Corporation",
                level:1,
                money:15000,
                smallFactory:1,
                massFactory:0,
                material:1,
                product:0,
                isPlayer:0,
                hasCredit:0,
                creditRate:0,
                creditLeft:0,
            }
    ];

        localStorage.setItem("players",JSON.stringify(players));
    },
    //WARTOŚCI OBIEKTÓW I SUROWCÓW
    setGoodwillValues () {
        localStorage.setItem("valueSmallFatory",4000);
        localStorage.setItem("valueMassFatory",6000);
        localStorage.setItem("valueMaterial",300);
        localStorage.setItem("valueProduct",500);
    },

    // OBLICZENIE WARTOŚCI PRZEDSIĘBIORSTWA
    getGoodwillTotal(smallFactory,massFactory,material,product,money) {
        const vSF = localStorage.getItem("valueSmallFatory");
        const vMF = localStorage.getItem("valueMassFatory");
        const vM = localStorage.getItem("valueMaterial");
        const vP =  localStorage.getItem("valueProduct");
        const goodwill = smallFactory*vSF + massFactory*vMF  + 
                        material*vM + product*vP + money;
        return goodwill;
    },

    //WYŚWIETLENIE GRACZY
    getPlayers(){
        const players = JSON.parse(localStorage.getItem("players"));
        return players;
    },
    //ZAPIS GRACZA
    addPlayerToPlayers(input)
    {
        const players = JSON.parse(localStorage.getItem("players"));
        players[0].name = input;
        localStorage.setItem("players",JSON.stringify(players));
    },
    //RANKING GRACZY
    showRankingPlayers(){
        const summary_ul = document.querySelector("#summary_box");
        //USUNIĘCIE POPRZEDNICH STATYSTYK
        summary_ul.querySelectorAll('*').forEach(n => n.remove());
        
        //TABLICA TYMCZASOWA
        const players = this.getPlayers();
        const playersRank = [];
        players.forEach (el=> {
            playersRank.push({
                 name:el.name,
                 total: this.getGoodwillTotal(el.smallFactory,
                                         el.massFactory,
                                         el.material,
                                         el.product,
                                         el.money)
                                    })});
        
    //SORTOWANIE WYNIKÓW
    playersRank.sort(function(a,b) { return b.total - a.total;});
  
    playersRank.forEach(el=> {
        const li_item = document.createElement("li");
        li_item.innerText = el.name + ": " +el.total;
        summary_ul.appendChild(li_item)})
     },

    //POKAŻ DANE GRACZA 
    showPlayerThings(){
        const playerInfo = document.querySelector("#player_box");
         //USUNIĘCIE POPRZEDNICH STATYSTYK
        playerInfo.querySelectorAll('*').forEach(n => n.remove());
        const players = this.getPlayers();
        let player;
        
        players.forEach(el=>{
            if(el.isPlayer==1)
            {
                player=el;
            }
        })

        playerInfo.innerText = 
            'money:' +  player.money + ' ' +
            'smallFactories:' +   player.smallFactory + ' ' +
            'massFactories:' +  player.massFactory + ' ' +
            'products:' +  player.product + ' ' +
            'materials:' +  player.material + ' ' +
            'creditLeft:' +  player.creditLeft;  

    },

    //POBIERZ DANE GRACZA
    getPlayerThings(){
        const players = this.getPlayers();
        let player;
        
        players.forEach(el=>{
            if(el.isPlayer==1)
            {
                player=el;
            }
        })
        
        return player;
    }
}


//EKSPORT
export {game, Player};


    //PROTOTYP///////////////////
    // setPlayerField(index,value) {
    //     const players = JSON.parse(localStorage.getItem("players"));
    //     players[index].name=value;
    //     localStorage.setItem("players",JSON.stringify(players));
    // },
    ////////////////////////////
