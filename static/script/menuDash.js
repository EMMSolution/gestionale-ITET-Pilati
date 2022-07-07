var sezioneAttuale;
var indicatoreMenu;
var menuHomeA;
var menuHomeImg;
var menuStatsA;
var menuStatsImg;
var menuFileA;
var menuFileImg;
var menuAggFileA;
var menuAggFileImg;
var impAperto;
var impAnnullaInput;

window.onload = function(){
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
    var imp = document.querySelector('.imp');
    var passImpInput = document.querySelector('.inputImp3');
    var inputImpNome = document.querySelector('.inputImp1');
    var inputImpEmail = document.querySelector('.inputImp2');
    var inputImpPass = document.querySelector('.inputImp3');
    var welcomePage = document.querySelector('.welcomePage');

    sezioneAttuale = 1;
    var impAperto = false;

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

    //cambio sezione con query (da url)
    switch (sezione){
        case "1":
            menu(1)
        case "2":
            menu(2)
        case "3":
            menu(3)
        case "4":
            menu(4)
    }
}

function menu(sezione){
    switch(sezione){
        case 1:
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
            // scorri sezione
            break;
        case 2:
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
            // scorri sezione
            break;
        case 3:
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
            // scorri sezione
            break;
        case 4:
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
            // scorri sezione
            break;
        case 5:
            if(impAperto == true){
                impAperto = false;
                imp.style.opacity = "0";
                imp.style.zIndex = "0";
            } else if(impAperto == false){
                impAperto = true;
                imp.style.opacity = "1";
                imp.style.zIndex = "5";
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
