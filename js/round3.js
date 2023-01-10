
import {game,Player} from './main_fun.js';
    
function round3() {

    game.increaseRounds(3);
    Player.showRankingPlayers();
    Player.showPlayerThings();
    
    //OPIS RUNDY
    const title = "RUNDA 3 - PRODUKCJA";
    const roundDescription = `Gracze produkują wyroby z surowców.
    Koszt produkcji w FZ: 2000$,  FM: 1500$.
    W danej rundzie produkujemy: FZ produkujemy tylko 1 szt, a w FM 2 szt.`;
    const btnDescription =`do rundy CZWARTEJ`;
    game.setDescriptions(title,roundDescription,btnDescription);
    
    //PODPIĘCIE ZDARZENIA DO PRZYCISKU
    const btn = document.getElementById('button');
    btn.addEventListener("click",function() {
        location.href = "round4.html"; }) 
    btn.style.visibility="hidden";

    // ----------------- OBSZAR ROBOCZY -------------//
    //AKCJA PRODUKCJA
    const player = Player.getPlayerThings()
    //ILE JEST W STANIE  GRACZ WYPRODUKOWAĆ 
    const playerPotential = getPotentialProduction(player.massFactory, player.smallFactory,player.material);
    const p = document.createElement('p');
    p.innerText = `Poniżej Twoje zdolności produkcyjne.
    ilość fabryk zwykłych: ${player.smallFactory} oraz
    fabryk produkcji masowej:  ${player.massFactory}  
    potencjał produkcyjny: ${playerPotential}
    ilość surowca: ${player.material}`;

    const newLine = document.createElement('span');
    const btnDiv = document.getElementById('action');
    const div = document.createElement('div');
    btnDiv.appendChild(div);
   
    const inputQty = document.createElement("input");
    inputQty.defaultValue = playerPotential;
    inputQty.setAttribute('id','inputQty');
    
    const labelQty = document.createElement("label");
    labelQty.setAttribute('for','inputQty')
    labelQty.innerText='chcę wyprodukować sztuk:'
    
    const totalProductionCost = document.createElement("p");
    totalProductionCost.innerText = "koszt produkcji:" + getCostProduction(player.massFactory, player.smallFactory, inputQty.value);
    totalProductionCost.setAttribute('id','totalProductionCost');

    const errorText= document.createElement("span");

    //BUTTON
    const btnReset = document.createElement('button');
    btnReset.innerText="RESETUJ";
    const btnConfirm = document.createElement('button');
    btnConfirm.innerText="POTWIERDŹ";

    //BUDOWANIE PRZYCISKÓW
    btnDiv.appendChild(p);
    btnDiv.appendChild(labelQty);
    btnDiv.appendChild(inputQty);
    btnDiv.appendChild(newLine);    
    btnDiv.appendChild(totalProductionCost);
    btnDiv.appendChild(errorText);  
    btnDiv.appendChild(btnReset);
    btnDiv.appendChild(newLine);  
    btnDiv.appendChild(btnConfirm);
    
    //WYZEROWANIE INPUTÓW
    btnReset.addEventListener("click", function() {
    inputQty.value = inputQty.defaultValue;
    errorText.innerText="";
    btnConfirm.style.visibility='visible';
    totalProductionCost.innerText = "koszt produkcji:" + getCostProduction(player.massFactory, player.smallFactory, inputQty.value);
    })

    //ZMIANA WARTOŚCI WZGLĘDEM WPROWADZANYCH WARTOŚCI

    inputQty.addEventListener("input", function(){
        totalProductionCost.innerText = "koszt produkcji:" + getCostProduction(4, 3, inputQty.value);     
    })
    //PRZYCISK POTWIERDZENIE
    btnConfirm.addEventListener("click", function () {
    const reg = new RegExp('^[0-9]*$');
    console.log(playerPotential);

        if(reg.test(inputQty.value )==false || inputQty.value <0 || inputQty.value > playerPotential)
        {
            errorText.innerText="NIEPRAWIDŁOWA ILOŚĆ";
            btnConfirm.style.visibility='hidden';
            return;
        }

        else{
            inputQty.value = Number(inputQty.value);
            errorText.innerText="";
            btnReset.style.visibility='hidden';
            btnConfirm.style.visibility='hidden';
            inputQty.readOnly=true;

            //TO JEST DO ZMIANY FUNCKJA 
            // auctionMaterialToBuy(); 
            
            //ODŚWIEŻENIE PODSUMOWAŃ  
            Player.showRankingPlayers();
            Player.showPlayerThings();
            btn.style.visibility="visible"; 

        }
    })
 
};

// ZWRACA MAKSYMALNĄ ILOŚĆ SURTOWCÓW PRZEZNACZONYCH DO PRODUKCJI WYROBÓW
function getPotentialProduction(massFactories,smallFactories,material){
    let potential = massFactories*2 + smallFactories;
    if (material > potential){
        return potential;
    }
    else{
        return material;
    }
};

// ZWRACA KOSZT PRODUKCJI PRZY DANEJ ILOŚCI SUROWCÓW
function getCostProduction(massFactories,smallFactories,material){
    
    //KONWERSJA KONIECZNA, BO TO WARTOŚĆ Z INPUTA
    let materialTemp = Number(material);
    // ILOŚĆ PRODUKOWANYCH SZT W FABRYCE  FM
    let massQty = 0;
    // ILOŚĆ PRODUKOWANYCH SZT W FABRYCE  FZ
    let smallQty = 0;

    if (materialTemp==0 || (massFactories==0 && smallFactories==0) )
    {    
        return 0;
    }

    if (massFactories==0){
        massQty = 0;
    }

    if (massFactories>0 && massFactories*2>=materialTemp ){ 
        massQty = materialTemp;
        materialTemp = 0;
    }

    if (massFactories>0 && massFactories*2<materialTemp ){ 
        massQty = massFactories*2;
        materialTemp = materialTemp-massFactories*2;   
    }

    if (smallFactories==0 ){ 
        smallQty=0;
    }

    if (smallFactories>0 && ( smallFactories>=materialTemp) ){ 
       
        smallQty = materialTemp;
        materialTemp = 0;  
    }

    if (smallFactories>0 && smallFactories<materialTemp ){ 
        
        smallQty = smallFactories;
        materialTemp = 0;
    }

        const cost = massQty*1500 + smallQty*2000;
        return cost;
};



round3();
  