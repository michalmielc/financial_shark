const game = {
    
        lapCounter:0,       //AKTUALNY LICZNIK KOLEJEK
        roundCounter:0,       //AKTUALNY LICZNIK RUND

        setDescription(title, roundDescription, btnDescription) {
            const intro = document.getElementById('title');
            intro.innerText = title;
    
            const com = document.getElementById('description');
            com.innerText = roundDescription;

            const btn = document.getElementById('button');
            btn.innerText = btnDescription;

            // btn.addEventListener("click",function() {
            //     location.reload();
            //     })
        },

        start() {
            // PRZEŁĄCZNIK NA WŁAŚCIWY THIS
            const that = this; 
            that.lapCounter=that.lapCounter+1;

                that.round0();
            },
             //RUNDA 0
        round0() {
            // PRZEŁĄCZNIK NA WŁAŚCIWY THIS
            const that = this; 
            that.roundCounter++;
            //OPIS RUNDY
            const title = "WPROWADZENIE" + that.roundCounter;
            const roundDescription = `Witaj w grze REKIN INTERESU.
            Celem gry jest zdobycie jak największego majątku.
            Wpisz nazwę firmy i zaczynamy!`;
            const btnDescription =`do rundy pierwszej`;
            this.setDescription(title,roundDescription,btnDescription);
            //BUTTON KOLEJNA RUNDA
            const btn = document.getElementById('button');
            btn.addEventListener("click",function() {
            that.round1();
            })
        },

        //RUNDA 1
        round1() {
     
            // PRZEŁĄCZNIK NA WŁAŚCIWY THIS
            const that = this; 
            that.roundCounter++;
            //OPIS RUNDY
            const title = "RUNDA 1 - PODATKI" +that.roundCounter;
            const roundDescription = `W tej rundzie nastąpi 
            naliczenie opłat/podatków za majątek. Taryfikator:
            fabryka zwykła: 1000$ / szt
            fabryka masowa: 1500$ / szt
            surowiec: 300$ /szt
            wyrób: 500$ /szt. `;
            const btnDescription =`do rundy drugiej`;
            this.setDescription(title,roundDescription,btnDescription);
            //BUTTON KOLEJNA RUNDA
            const btn = document.getElementById('button');
            btn.addEventListener("click",function() {
            that.round2();
            })
        },

        //RUNDA 2
        round2()  {
        
            // PRZEŁĄCZNIK NA WŁAŚCIWY THIS
            const that = this; 
            that.roundCounter++;
            //OPIS RUNDY
            const title = "RUNDA 2 - PODAŻ" +that.roundCounter;
            const roundDescription = `Rynek ujawnił aktualną podaż. 
            Gracze deklarują ilość zakupu surowca wg podanych limitów
            oraz cenę.
            Wybór następuje wg zasady: największa cena, ilość.
            Kolejny przydział surowców trwa aż do wyczerpania zapasów.
            Tylko dobrze licytuj....`;
            const btnDescription =`do rundy TRZECIEJ`;
            this.setDescription(title,roundDescription,btnDescription);
            //BUTTON KOLEJNA RUNDA
            const btn = document.getElementById('button');
            btn.addEventListener("click",function() {
            that.round3();
            })
        },

        //RUNDA 3
        round3()  {
           
            // PRZEŁĄCZNIK NA WŁAŚCIWY THIS
            const that = this; 
            that.roundCounter=3;
            //OPIS RUNDY
            const title = "RUNDA 3 - PRODUKCJA"+that.roundCounter;
            const roundDescription = `Gracze produkują wyroby z surowców.
            Koszt produkcji w FZ: 2000$,  FM: 1500$.
            W FZ produkujemy tylko 1 szt, a w FM 2 szt.`;
            const btnDescription =`do rundy CZWARTEJ`;
            this.setDescription(title,roundDescription,btnDescription);
            //BUTTON KOLEJNA RUNDA
            const btn = document.getElementById('button');
            btn.addEventListener("click",function() {
            that.round4();
            })
        },

        //RUNDA 4
        round4()  {
          
            // PRZEŁĄCZNIK NA WŁAŚCIWY THIS
            const that = this; 
            that.roundCounter=4;
            //OPIS RUNDY
            const title = "RUNDA 4 - POPYT" +that.roundCounter;
            const roundDescription = `Rynek skupuje wyroby wg zapotrzebowania 
            ( karta podaży i popytu). Gracz/oponent deklaruje ilość 
            ( obowiązuje limit wg karty)oraz cenę.
            Skup odbywa się wg zasady naniższa cena, ilość, 
            aż do wyczerpania popytu`;
            const btnDescription =`do rundy piątej`;
            this.setDescription(title,roundDescription,btnDescription);
            //BUTTON KOLEJNA RUNDA
            const btn = document.getElementById('button');
            btn.addEventListener("click",function() {
            that.round5();
            })
        },

        //RUNDA 5
        round5()  {
           
            // PRZEŁĄCZNIK NA WŁAŚCIWY THIS
            const that = this; 
            that.roundCounter=5;
            //OPIS RUNDY
            const title = "RUNDA 5 - KREDYT"+that.roundCounter;
            const roundDescription = ` W tej rundzie gracze mogą zaciągnąć kredyt.
            Wartość kredytu nie może przekraczać wartości przedsiębiorstwa.
            Wartości: FZ: 4000$, Fm: 6000$, surowiec: 300$, a wyrób 500$.
            Oprocentowanie wynosi 10% na kolejkę. 
            Można płacić raty lub wszystko w ostatniej kolejce z odsetkami`;
            const btnDescription =`do rundy szóstej`;
            this.setDescription(title,roundDescription,btnDescription);
            //BUTTON KOLEJNA RUNDA
            const btn = document.getElementById('button');
            btn.addEventListener("click",function() {
            that.round6();
            })
        },

        //RUNDA 6
        round6()  {
         
            // PRZEŁĄCZNIK NA WŁAŚCIWY THIS
            const that = this;
            that.roundCounter=6; 
            //OPIS RUNDY
            const title = "RUNDA 6 - ROZBUDOWA"+that.roundCounter;
            const roundDescription = `W tej rundzie gracze mogą budować fabryki.
            Koszt 4000$ FZ, a 6000$ FM,
            przy czym budowa FZ trwa dwie rundy a masowej trzy rundy.
            W tej rundzie należy uiścić 2000$ za koszt fabryki i w każdej kolejce
            czyli np przy budowie FM trzeba uiścić w trzech kolejkach 2000$, ale fabryka\
            jest gotowa w następnej kolejce w rundzie 4.
            W przypdaku niezapłacenia raty, budowa jest przerwana i pieniądze przepadają`;
            const btnDescription =`do rundy pierwszej`;
            this.setDescription(title,roundDescription,btnDescription);
            const btn = document.getElementById('button');

            //********************** */ SPRAWDZIĆ CZY NIE KONIEC ///
            //************************IF.... TO KONIEC
            
            //BUTTON KOLEJNA RUNDA
            btn.addEventListener("click",function() {
            that.round1();
            })
        },
}


game.start();