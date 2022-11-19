
import {game,Player} from './main_fun.js';
    
function round2() {

            game.increaseRounds(2);
            Player.showRankingPlayers();
            Player.showPlayerThings();

            const players = Player.getPlayers();

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
            btn.style.visibility="hidden";

            //AKCJA
            //LOSOWANIE PODAŻY
            const supplies = setAndGetSupplies();
            const p = document.createElement('p');
            p.innerText = `Aktualna podaż: ${currentSupply.qty}
            minimalna cena: ${currentSupply.minPrice}`
        
            const newLine = document.createElement('span');
            const btnDiv = document.getElementById('action');
            const div = document.createElement('div');
            btnDiv.appendChild(div);
           
            const inputQty = document.createElement("input");
            inputQty.defaultValue = currentSupply.qty;
            inputQty.setAttribute('id','inputQty');
            
            const labelQty = document.createElement("label");
            labelQty.setAttribute('for','inputQty')
            labelQty.innerText='chcę kupić maksymalnie sztuk:'
            
            const inputMinPrice = document.createElement("input");
            inputMinPrice.defaultValue = currentSupply.minPrice;
            inputMinPrice.setAttribute('id','inputMinPrice');
    
            const labelMinPrice = document.createElement("label");
            labelMinPrice.setAttribute('for','inputMinPrice')
            labelMinPrice.innerText='chcę kupić za cenę:'

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
            btnDiv.appendChild(labelMinPrice);
            btnDiv.appendChild(inputMinPrice);
            btnDiv.appendChild(errorText);  
            btnDiv.appendChild(btnReset);
            btnDiv.appendChild(newLine);  
            btnDiv.appendChild(btnConfirm);
            
            //WYZEROWANIE INPUTÓW
            btnReset.addEventListener("click", function() {
            inputQty.value = inputQty.defaultValue;
            inputMinPrice.value = inputMinPrice.defaultValue;
            errorText.innerText="";
            btnConfirm.style.visibility='visible';
         });

            //PRZYCISK POTWIERDZENIE
            btnConfirm.addEventListener("click", function () {
                const reg = new RegExp('^[0-9]*$');
                if(reg.test(inputQty.value )==false || inputQty.value <0 || inputQty.value > currentSupply.qty)
                {
                    errorText.innerText="NIEPRAWIDŁOWA ILOŚĆ";
                    btnConfirm.style.visibility='hidden';
                    return;
                }

                if(reg.test(inputMinPrice.value )==false || inputMinPrice.value <0 || inputMinPrice.value < currentSupply.minPrice)
                {
                    errorText.innerText="NIEPRAWIDŁOWA ILOŚĆ";
                    btnConfirm.style.visibility='hidden';
                    return;
                }
    
            else{
                    inputQty.value = Number(inputQty.value);
                    inputMinPrice.value = Number(inputMinPrice.value);
                    errorText.innerText="";
                    btnReset.style.visibility='hidden';
                    btnConfirm.style.visibility='hidden';
                    inputQty.readOnly=true;
                    inputMinPrice.readOnly=true;
                    auctionMaterialToBuy(); 
                }
            })

            //ODŚWIEŻENIE PODSUMOWAŃ  
            btn.style.visibility="visible"; 
            Player.showRankingPlayers();
            Player.showPlayerThings();
        }

// KLASA PODAŻY SUROWCÓW
class Supply {
    constructor(supplyQty,minPrice)
    {
        this.supplyQty = supplyQty;
        this.minPrice = minPrice;
    }
}
//AKTUALNA PODAŻ
let currentSupply =  {
    qty:0,
    minPrice:0
};

// KARTY PODAŻY SUROWCÓW
function setAndGetSupplies () {
    const supplies = [
    new Supply(4,750),
    new Supply(8,550),
    new Supply(6,650),
    new Supply(12,350),
    new Supply(10,450)];

    //LOSOWANIE PODAŻY
    const index = Math.floor(Math.random()*supplies.length);
    //ZAPIS DO ZMIENNEJ GLOBALNEJ W RUNDZIE AKTUALNA PODAŻ
    currentSupply = {qty: supplies[index].supplyQty,minPrice: supplies[index].minPrice  };  

}
// AUKCJA WYNIKI
function auctionMaterialToBuy() {
    const players = Player.getPlayers();

    players.forEach(el=> {
        if (el.index==0)
        {
            el['declareQty'] = inputQty.value;
            el['wonQty'] = 0;
            el['maxPrice'] = inputMinPrice;
        }

        else {

            const rndQtyPrice = randomQtyAndMaxPrice ();
            el['declareQty'] = rndQtyPrice.rndQty
            el['wonQty'] = 0;
            el['maxPrice'] = rndQtyPrice.rndPrice;
        }
    })
        console.log(players);

        
    };
function randomQtyAndMaxPrice () {
    
    const rndQtyPrice = {
        rndQty: 1+ Math.floor(Math.random()*currentSupply.qty),
        rndPrice: parseInt(currentSupply.minPrice+(0.2)*Math.floor(Math.random()*currentSupply.minPrice))
    }

    return rndQtyPrice;

}

round2();
  