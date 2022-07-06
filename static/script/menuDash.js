var impAperto;
var impAnnullaInput;

window.onload = function(){
    // menu
    var menuHomeA = document.querySelector('#meuHomeA');
    var menuHomeImg = document.querySelector('#menuHomeImg');
    var meuStatsA = document.querySelector('#meuStatsA');
    var menuStatsImg = document.querySelector('#menuStatsImg');
    var meuFileA = document.querySelector('#meuFileA');
    var menuFileImg = document.querySelector('#menuFileImg');
    var meuAggFileA = document.querySelector('#meuAggFileA');
    var menuAggFileImg = document.querySelector('#menuAggFileImg');
    // impostazioni
    var imp = document.querySelector('.imp');
    var passImpInput = document.querySelector('.inputImp3');
    var inputImpNome = document.querySelector('.inputImp1');
    var inputImpEmail = document.querySelector('.inputImp2');
    var inputImpPass = document.querySelector('.inputImp3');
    var welcomePage = document.querySelector('.welcomePage');

    var impAperto = false;

    imp.style.opacity = "0";
    imp.style.zIndex = "0";

    // default set per menu
    menuHomeA.style.opacity = "0";
    meuStatsA.style.opacity = "0";
    meuFileA.style.opacity = "0";
    meuAggFileA.style.opacity = "0";

    // nuovo account intro page
    if(nuovoAcc == "si"){
        welcomePage.style.display = "block"
    } else {
        welcomePage.style.display = "none"
    }

    //cambio sezione con query
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

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

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
