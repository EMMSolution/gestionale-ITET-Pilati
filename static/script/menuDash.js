var sezione;
var titoloSezione, homeTitolo, statTitolo, elabTitolo, caricElabTitolo, impTitolo;
var indicatoreMenu, menuHomeA, menuHomeImg, menuHomeSvgPath1, menuHomeSvgPath2, menuStatsA, menuStatsImg, menuStatsSvgPath1, menuStatsSvgPath2, menuFileA, menuFileImg, menuFileSvgPath1, menuFileSvgPath2, menuFileSvgPath3, menuAggFileA, menuAggFileImg, menuAggFileSvgPath1, menuAggFileSvgPath2, menuAggFileSvgPath3, menuAggFileSvgPath4;
var imp, impAperto, impAnnullaInput, passImpInput, inputImpNome, inputImpEmail;
var welcomePage;
var homeStatsWidgetDiv1, homeStatsWidgetDiv2, homeStatsWidgetDiv3, homeStatsWidgetColorBar1, homeStatsWidgetColorBar2, homeStatsWidgetColorBar3;

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
    menuHomeImg = document.querySelector('#iconaHomeMenu');
    menuHomeSvgPath1 = document.querySelector('#iconaHomeMenu .cls-1-1');
    menuHomeSvgPath2 = document.querySelector('#iconaHomeMenu .cls-1-2');
    menuStatsA = document.querySelector('#meuStatsA');
    menuStatsImg = document.querySelector('#iconaStatsMenu');
    menuStatsSvgPath1 = document.querySelector('#iconaStatsMenu .cls-1-1');
    menuStatsSvgPath2 = document.querySelector('#iconaStatsMenu .cls-1-2');
    menuFileA = document.querySelector('#meuFileA');
    menuFileImg = document.querySelector('#iconaFileMenu');
    menuFileSvgPath1 = document.querySelector('#iconaFileMenu .cls-1-1');
    menuFileSvgPath2 = document.querySelector('#iconaFileMenu .cls-1-2');
    menuFileSvgPath3 = document.querySelector('#iconaFileMenu .cls-1-3');
    menuAggFileA = document.querySelector('#meuAggFileA');
    menuAggFileImg = document.querySelector('#iconaAggFileMenu');
    menuAggFileSvgPath1 = document.querySelector('#iconaAggFileMenu .cls-1-1');
    menuAggFileSvgPath2 = document.querySelector('#iconaAggFileMenu .cls-1-2');
    menuAggFileSvgPath3 = document.querySelector('#iconaAggFileMenu .cls-1-3');
    menuAggFileSvgPath4 = document.querySelector('#iconaAggFileMenu .cls-2');
    // impostazioni
    imp = document.querySelector('.imp');
    passImpInput = document.querySelector('.inputImp3');
    inputImpNome = document.querySelector('.inputImp1');
    inputImpEmail = document.querySelector('.inputImp2');
    inputImpPass = document.querySelector('.inputImp3');
    welcomePage = document.querySelector('.welcomePage');
    // home
    homeStatsWidgetDiv1 = document.querySelector('.label1');
    homeStatsWidgetDiv2 = document.querySelector('.label2');
    homeStatsWidgetDiv3 = document.querySelector('.label3');
    homeStatsWidgetColorBar1 = document.querySelector('.label1 .sinistra .barra');
    homeStatsWidgetColorBar2 = document.querySelector('.label2 .sinistra .barra');
    homeStatsWidgetColorBar3 = document.querySelector('.label3 .sinistra .barra');

    // posizione default titolo sezione
    titoloSezione.style.transform = "translateY(-55px)";
    impTitolo.style.opacity = "0";

    // posizione default menu
    menuHomeA.style.opacity = "1";
    menuHomeImg.style.transform = "translateX(30px)";

    // colore default icone menu
    menuHomeSvgPath1.style.fill = "#303030";
    menuHomeSvgPath2.style.fill = "#303030";
    menuStatsSvgPath1.style.fill = "#ffffff";
    menuStatsSvgPath2.style.fill = "#ffffff";
    menuFileSvgPath1.style.fill = "#ffffff";
    menuFileSvgPath2.style.fill = "#ffffff";
    menuFileSvgPath3.style.fill = "#ffffff";
    menuAggFileSvgPath1.style.fill = "#ffffff";
    menuAggFileSvgPath2.style.fill = "#ffffff";
    menuAggFileSvgPath3.style.fill = "#ffffff";

    // posizione default impostazioni
    imp.style.opacity = "0";
    imp.style.zIndex = "0";

    // nuovo account intro page
    if(nuovoAcc == "si"){
        welcomePage.style.display = "block";
    } else {
        welcomePage.style.display = "none";
    }

    // dimensioni barra colorata home - stats widget
    homeStatsWidgetColorBar1.style.height = homeStatsWidgetDiv1.clientHeight + "px";
    homeStatsWidgetColorBar2.style.height = homeStatsWidgetDiv2.clientHeight + "px";
    homeStatsWidgetColorBar3.style.height = homeStatsWidgetDiv3.clientHeight + "px";
    homeStatsWidgetColorBar1.style.width = "2.5%";
    homeStatsWidgetColorBar2.style.width = "2.5%";
    homeStatsWidgetColorBar3.style.width = "2.5%";

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

// EVENT LISTENER
window.addEventListener('resize', () => {
    homeStatsWidgetColorBar1.style.height = homeStatsWidgetDiv1.clientHeight + "px";
    homeStatsWidgetColorBar2.style.height = homeStatsWidgetDiv2.clientHeight + "px";
    homeStatsWidgetColorBar3.style.height = homeStatsWidgetDiv3.clientHeight + "px";
});
// mouse over barre colorate home - stas widget
homeStatsWidgetColorBar1.addEventListener('mouseover', () => {
    homeStatsWidgetColorBar1.style.width = homeStatsWidgetDiv1.clientWidth + "px";
})
homeStatsWidgetColorBar1.addEventListener('mouseout', () => {
    homeStatsWidgetColorBar1.style.width = "2.5%";
})
homeStatsWidgetColorBar1.addEventListener('mouseover', () => {
    homeStatsWidgetColorBar2.style.width = homeStatsWidgetDiv1.clientWidth + "px";
})
homeStatsWidgetColorBar2.addEventListener('mouseout', () => {
    homeStatsWidgetColorBar2.style.width = "2.5%";
})
homeStatsWidgetColorBar3.addEventListener('mouseover', () => {
    homeStatsWidgetColorBar3.style.width = homeStatsWidgetDiv1.clientWidth + "px";
})
homeStatsWidgetColorBar3.addEventListener('mouseout', () => {
    homeStatsWidgetColorBar3.style.width = "2.5%";
})

// FUNCTIONS
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

                // colore icone menu
                menuHomeSvgPath1.style.fill = "#303030";
                menuHomeSvgPath2.style.fill = "#303030";

                menuStatsSvgPath1.style.fill = "#ffffff";
                menuStatsSvgPath2.style.fill = "#ffffff";

                menuFileSvgPath1.style.fill = "#ffffff";
                menuFileSvgPath2.style.fill = "#ffffff";
                menuFileSvgPath3.style.fill = "#ffffff";

                menuAggFileSvgPath1.style.fill = "#ffffff";
                menuAggFileSvgPath2.style.fill = "#ffffff";
                menuAggFileSvgPath3.style.fill = "#ffffff";
                menuAggFileSvgPath4. style.fill = "#303030";

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

                // colore icone menu
                menuHomeSvgPath1.style.fill = "#ffffff";
                menuHomeSvgPath2.style.fill = "#ffffff";

                menuStatsSvgPath1.style.fill = "#303030";
                menuStatsSvgPath2.style.fill = "#303030";

                menuFileSvgPath1.style.fill = "#ffffff";
                menuFileSvgPath2.style.fill = "#ffffff";
                menuFileSvgPath3.style.fill = "#ffffff";

                menuAggFileSvgPath1.style.fill = "#ffffff";
                menuAggFileSvgPath2.style.fill = "#ffffff";
                menuAggFileSvgPath3.style.fill = "#ffffff";
                menuAggFileSvgPath4. style.fill = "#303030";

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

                // colore icone menu
                menuHomeSvgPath1.style.fill = "#ffffff";
                menuHomeSvgPath2.style.fill = "#ffffff";

                menuStatsSvgPath1.style.fill = "#ffffff";
                menuStatsSvgPath2.style.fill = "#ffffff";

                menuFileSvgPath1.style.fill = "#303030";
                menuFileSvgPath2.style.fill = "#303030";
                menuFileSvgPath3.style.fill = "#303030";

                menuAggFileSvgPath1.style.fill = "#ffffff";
                menuAggFileSvgPath2.style.fill = "#ffffff";
                menuAggFileSvgPath3.style.fill = "#ffffff";
                menuAggFileSvgPath4. style.fill = "#303030";

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

                // colore icone menu
                menuHomeSvgPath1.style.fill = "#ffffff";
                menuHomeSvgPath2.style.fill = "#ffffff";

                menuStatsSvgPath1.style.fill = "#ffffff";
                menuStatsSvgPath2.style.fill = "#ffffff";

                menuFileSvgPath1.style.fill = "#ffffff";
                menuFileSvgPath2.style.fill = "#ffffff";
                menuFileSvgPath3.style.fill = "#ffffff";

                menuAggFileSvgPath1.style.fill = "#303030";
                menuAggFileSvgPath2.style.fill = "#303030";
                menuAggFileSvgPath3.style.fill = "#303030";
                menuAggFileSvgPath4. style.fill = "#ffffff";

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
