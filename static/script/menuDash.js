var sezione;
var titoloSezione, homeTitolo, statTitolo, elabTitolo, caricElabTitolo, impTitolo;
var indicatoreMenu, menuHomeA, menuHomeImg, menuStatsA, menuStatsImg, menuFileA, menuFileImg, menuAggFileA, menuAggFileImg;
var imp, impAperto, impAnnullaInput, passImpInput, inputImpNome, inputImpEmail;
var welcomePage;

var sezioneAttuale = 1;
var impAperto = false;

window.onload = function(){
    // titolo sezione
    titoloSezione = document.querySelector('.movingContainerTitoloSezione');
    impTitolo = document.querySelector('.impTitolo');
    homeTitolo = document.querySelector('.homeTitolo');
    statTitolo = document.querySelector('.statTitolo');
    elabTitolo = document.querySelector('.elabTitolo');
    caricElabTitolo = document.querySelector('.caricElabTitolo');
    // sezione
    sezione = document.querySelector('.movingContainerSezioni');
    // menu
    indicatoreMenu = document.querySelector('.indicatore');
    menuHomeA = document.querySelector('#meuHomeA');
    menuHomeImg = document.querySelector('#menuHomeImg');
    menuStatsA = document.querySelector('#meuStatsA');
    menuStatsImg = document.querySelector('#menuStatsImg');
    menuFileA = document.querySelector('#meuFileA');
    menuFileImg = document.querySelector('#menuFileImg');
    menuAggFileA = document.querySelector('#meuAggFileA');
    menuAggFileImg = document.querySelector('#menuAggFileImg');
    // impostazioni
    imp = document.querySelector('.imp');
    passImpInput = document.querySelector('.inputImp3');
    inputImpNome = document.querySelector('.inputImp1');
    inputImpEmail = document.querySelector('.inputImp2');
    inputImpPass = document.querySelector('.inputImp3');
    welcomePage = document.querySelector('.welcomePage');

    // posizione default titolo sezione
    titoloSezione.style.transform = "translateY(-55px)";
    impTitolo.style.opacity = "0";

    // posizione default menu
    menuHomeA.style.opacity = "1";
    menuHomeImg.style.transform = "translateX(30px)";

    // posizione default impostazioni
    imp.style.opacity = "0";
    imp.style.zIndex = "0";

    // nuovo account intro page
    if(nuovoAcc == "si"){
        welcomePage.style.display = "block"
    } else {
        welcomePage.style.display = "none"
    }

    // cambio sezione con query (da url)
    switch (sezioneQuery){
        case "1":
            menu(1)
            break;
        case "2":
            menu(2)
            break;
        case "3":
            menu(3)
            break;
        case "4":
            menu(4)
            break;
    }
}

function menu(sezioneFunc){
    switch(sezioneFunc){
        case 1:
            if(impAperto == true){
                impTitolo.style.opacity = "0";
                // mostro altri titoli
                homeTitolo.style.opacity = "1";
                statTitolo.style.opacity = "1";
                elabTitolo.style.opacity = "1";
                caricElabTitolo.style.opacity = "1";

                imp.style.opacity = "0";
                imp.style.zIndex = "0";
                impAperto = false;
            }
            // scorri menu
            if(sezioneAttuale != 1){
                menuHomeA.style.opacity = "1";
                menuHomeImg.style.transform = "translateX(30px)";
                indicatoreMenu.style.transform = "translateY(0px)";

                menuStatsA.style.opacity = "0";
                menuStatsImg.style.transform = "translateX(0px)";
                menuFileA.style.opacity = "0";
                menuFileImg.style.transform = "translateX(0px)";
                menuAggFileA.style.opacity = "0";
                menuAggFileImg.style.transform = "translateX(0px)";

                sezioneAttuale = 1;
            }
            // scorri titolo
            titoloSezione.style.transform = "translateY(-55px)";
            // scorri sezione
            sezione.style.transform = "translateY(0)";

            break;
        case 2:
            if(impAperto == true){
               impTitolo.style.opacity = "0";
                // mostro altri titoli
                homeTitolo.style.opacity = "1";
                statTitolo.style.opacity = "1";
                elabTitolo.style.opacity = "1";
                caricElabTitolo.style.opacity = "1";

                imp.style.opacity = "0";
                imp.style.zIndex = "0";
                impAperto = false;
            }
            // scorri menu
            if(sezioneAttuale != 2){
                menuStatsA.style.opacity = "1";
                menuStatsImg.style.transform = "translateX(30px)";
                indicatoreMenu.style.transform = "translateY(64px)";

                menuHomeA.style.opacity = "0";
                menuHomeImg.style.transform = "translateX(0px)";
                menuFileA.style.opacity = "0";
                menuFileImg.style.transform = "translateX(0px)";
                menuAggFileA.style.opacity = "0";
                menuAggFileImg.style.transform = "translateX(0px)";

                sezioneAttuale = 2;
            }
            // scorri titolo
            titoloSezione.style.transform = "translateY(-110px)";
            // scorri sezione
            sezione.style.transform = "translateY(-25%)";

            break;
        case 3:
            if(impAperto == true){
               impTitolo.style.opacity = "0";
                // mostro altri titoli
                homeTitolo.style.opacity = "1";
                statTitolo.style.opacity = "1";
                elabTitolo.style.opacity = "1";
                caricElabTitolo.style.opacity = "1";

                imp.style.opacity = "0";
                imp.style.zIndex = "0";
                impAperto = false;
            }
            // scorri menu
            if(sezioneAttuale != 3){
                menuFileA.style.opacity = "1";
                menuFileImg.style.transform = "translateX(30px)";
                indicatoreMenu.style.transform = "translateY(128px)";

                menuHomeA.style.opacity = "0";
                menuHomeImg.style.transform = "translateX(0px)";
                menuStatsA.style.opacity = "0";
                menuStatsImg.style.transform = "translateX(0px)";
                menuAggFileA.style.opacity = "0";
                menuAggFileImg.style.transform = "translateX(0px)";

                sezioneAttuale = 3;
            }
            // scorri titolo
            titoloSezione.style.transform = "translateY(-165px)";
            // scorri sezione
            sezione.style.transform = "translateY(-50%)";

            break;
        case 4:
            if(impAperto == true){
               impTitolo.style.opacity = "0";
                // mostro altri titoli
                homeTitolo.style.opacity = "1";
                statTitolo.style.opacity = "1";
                elabTitolo.style.opacity = "1";
                caricElabTitolo.style.opacity = "1";

                imp.style.opacity = "0";
                imp.style.zIndex = "0";
                impAperto = false;
            }
            // scorri menu
            if(sezioneAttuale != 4){
                menuAggFileA.style.opacity = "1";
                menuAggFileImg.style.transform = "translateX(30px)";
                indicatoreMenu.style.transform = "translateY(194px)";

                menuHomeA.style.opacity = "0";
                menuHomeImg.style.transform = "translateX(0px)";
                menuStatsA.style.opacity = "0";
                menuStatsImg.style.transform = "translateX(0px)";
                menuFileA.style.opacity = "0";
                menuFileImg.style.transform = "translateX(0px)";

                sezioneAttuale = 4;
            }
            // scorri titolo
            titoloSezione.style.transform = "translateY(-220px)";
            // scorri sezione
            sezione.style.transform = "translateY(-75%)";

            break;
        case 5:
            if(impAperto == true){
               impTitolo.style.opacity = "0";
                // mostro altri titoli
                homeTitolo.style.opacity = "1";
                statTitolo.style.opacity = "1";
                elabTitolo.style.opacity = "1";
                caricElabTitolo.style.opacity = "1";

                imp.style.opacity = "0";
                imp.style.zIndex = "0";
                impAperto = false;
            } else if(impAperto == false){
                // nascondo altri titoli
                homeTitolo.style.opacity = "0";
                statTitolo.style.opacity = "0";
                elabTitolo.style.opacity = "0";
                caricElabTitolo.style.opacity = "0";

                impTitolo.style.opacity = "1";
                imp.style.opacity = "1";
                imp.style.zIndex = "5";
                impAperto = true;
            }
            break;
        default:
            alert("valore sbagliato nello scorrimento sezioni");
    }
}

function resetImpInput(){
    inputImpNome.value = nomeUtenteJS
    inputImpEmail.value = emailUtenteJS
    inputImpPass.value = passUtenteJS
}

function mostraPass(){
    if(passImpInput.type === 'password'){
        passImpInput.type = 'text'
    } else if(passImpInput.type === 'text'){
        passImpInput.type = 'password'
    }
}

function iniziaTutorial(){
    // DA FARE
    alert("coming soon")
}

function fineTutorial(){
    welcomePage.style.display = "none"
}
