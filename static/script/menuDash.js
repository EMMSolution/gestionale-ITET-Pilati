// CARICAMENTO
window.addEventListener('load', () => {
    document.querySelector('.caricamento').classList.add('caricamentoScomparsa');
})

// PAGINA
var contenitoreIframe;
var PDFpreview;
var sfondoDiv1;
var sezione;
var elaboratiPersonali, elaboratiClasse;
var userNameInfo, titoloSezione, homeTitolo, statTitolo, elabTitolo, caricElabTitolo;
var menuDiv, menuButton1, menuButton2, menuButton4, menuButton5, indicatoreMenu, indicatoreMenuBefore, indicatoreMenuAfter, menuHomeA, menuHomeImg, menuHomeSvgPath1, menuHomeSvgPath2, menuStatsA, menuStatsImg, menuStatsSvgPath1, menuStatsSvgPath2, menuFileA, menuFileImg, menuFileSvgPath1, menuFileSvgPath2, menuFileSvgPath3, fileMenuType, menuAggFileA, menuAggFileImg, menuAggFileSvgPath1, menuAggFileSvgPath2, menuAggFileSvgPath3, menuAggFileSvgPath4;
var menuFileSottomenu, posizioneFileMenuSvg, fileMenuDiv, menuFileDivSopra, menuFileDivSotto, menuFileDivIcona11, menuFileDivIcona12, menuFileDivIcona13, menuFileDivIcona14, menuFileDivIcona21, menuFileDivIcona22, menuFileDivIcona23, menuFileDivIcona24, menuFileDivIcona25, menuFileDivIcona26;
var imp, impAperto;
var welcomePage;
var homeStatsWidgetDiv1, homeStatsWidgetDiv2, homeStatsWidgetDiv3, homeStatsWidgetColorBar1, homeStatsWidgetColorBar2, homeStatsWidgetColorBar3;

var sezioneAttuale = 1;
var impAperto = false;
var iframeAperto = false;

window.onload = function(){
    contenitoreIframe = document.querySelector('.contenitoreIframe');
    PDFpreview = document.querySelector('.PDFpreview');
    // welcome page
    welcomePage = document.querySelector('.welcomePage');
    // sfondo
    sfondoDiv1 = document.querySelector('.sfondo');
    // titolo sezione
    titoloSezione = document.querySelector('.movingContainerTitoloSezione');
    homeTitolo = document.querySelector('.homeTitolo');
    statTitolo = document.querySelector('.statTitolo');
    elabTitolo = document.querySelector('.elabTitolo');
    caricElabTitolo = document.querySelector('.caricElabTitolo');
    // info nome utente
    userNameInfo = document.querySelector('.containerUserInfo a');
    // sezione
    sezione = document.querySelector('.movingContainerSezioni');
    elaboratiPersonali = document.querySelector(".elaboratiPersonali");
    elaboratiClasse = document.querySelector(".elaboratiClasse");
    // menu
    menuDiv = document.querySelector(".pagina .menu");
    menuButton1 = document.querySelector(".menuButton1");
    menuButton2 = document.querySelector(".menuButton2");
    menuButton3 = document.querySelector(".menuButton3");
    menuButton5 = document.querySelector(".menuButton5");
    indicatoreMenu = document.querySelector('.indicatore');
    indicatoreMenuBefore = document.querySelector('.indicatore .before');
    indicatoreMenuAfter = document.querySelector('.indicatore .after');
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
    menuFileSottomenu = document.querySelector('.subtitleSlide');
    menuFileDiv = document.querySelector('.fileMenuType');
    menuFileDivSopra = document.querySelector('.fileMenuType .sopra');
    menuFileDivSotto = document.querySelector('.fileMenuType .sotto');
    menuFileDivIcona11 = document.querySelector('.fileMenuType .sopra .svgElement1');
    menuFileDivIcona12 = document.querySelector('.fileMenuType .sopra .svgElement2');
    menuFileDivIcona13 = document.querySelector('.fileMenuType .sopra .svgElement3');
    menuFileDivIcona14 = document.querySelector('.fileMenuType .sopra .svgElement4');
    menuFileDivIcona21 = document.querySelector('.fileMenuType .sotto .svgElement1');
    menuFileDivIcona22 = document.querySelector('.fileMenuType .sotto .svgElement2');
    menuFileDivIcona23 = document.querySelector('.fileMenuType .sotto .svgElement3');
    menuFileDivIcona24 = document.querySelector('.fileMenuType .sotto .svgElement4');
    menuFileDivIcona25 = document.querySelector('.fileMenuType .sotto .svgElement5');
    menuFileDivIcona26 = document.querySelector('.fileMenuType .sotto .svgElement6');
    menuAggFileA = document.querySelector('#meuAggFileA');
    menuAggFileImg = document.querySelector('#iconaAggFileMenu');
    menuAggFileSvgPath1 = document.querySelector('#iconaAggFileMenu .cls-1-1');
    menuAggFileSvgPath2 = document.querySelector('#iconaAggFileMenu .cls-1-2');
    menuAggFileSvgPath3 = document.querySelector('#iconaAggFileMenu .cls-1-3');
    menuAggFileSvgPath4 = document.querySelector('#iconaAggFileMenu .cls-2');
    // impostazioni
    imp = document.querySelector('.imp');
    // home
    homeStatsWidgetDiv1 = document.querySelector('.label1');
    homeStatsWidgetDiv2 = document.querySelector('.label2');
    homeStatsWidgetDiv3 = document.querySelector('.label3');
    homeStatsWidgetColorBar1 = document.querySelector('.label1 .sinistra .barra');
    homeStatsWidgetColorBar2 = document.querySelector('.label2 .sinistra .barra');
    homeStatsWidgetColorBar3 = document.querySelector('.label3 .sinistra .barra');

    //controllo quale tema è attualmente continua in fondo
    if(localStorage.getItem("tema") === ""){
        localStorage.setItem("tema", "scuro");
    }
    let temaAttuale = localStorage.getItem("tema");
    console.log(temaAttuale)
    //setto il tema
    sfondo(localStorage.getItem("tema"));

    // default sezioni
    elaboratiClasse.style.display = "none";
    sezione.style.height = "calc(100% * 4 - 75px * 4)";

    // posizione default titolo sezione
    titoloSezione.style.transform = "translateY(-10%)";

    // colore/posizioni default menu
    menuHomeA.style.opacity = "1";
    menuHomeImg.style.transform = "translateX(30px)";
    menuHomeSvgPath1.style.fill = "#303030";
    menuHomeSvgPath2.style.fill = "#303030";
    menuStatsSvgPath1.style.fill = "#ffffff";
    menuStatsSvgPath2.style.fill = "#ffffff";
    menuFileSvgPath1.style.fill = "#ffffff";
    menuFileSvgPath2.style.fill = "#ffffff";
    menuFileSvgPath3.style.fill = "#ffffff";
    menuFileDiv.style.height = "0";
    menuFileDivIcona11.style.fill = "#ffffff";
    menuFileDivIcona12.style.fill = "#ffffff";
    menuFileDivIcona13.style.fill = "#ffffff";
    menuFileDivIcona14.style.fill = "#ffffff";
    menuFileDivIcona21.style.fill = "#ffffff";
    menuFileDivIcona22.style.fill = "#ffffff";
    menuFileDivIcona23.style.fill = "#ffffff";
    menuFileDivIcona24.style.fill = "#ffffff";
    menuFileDivIcona25.style.fill = "#ffffff";
    menuFileDivIcona26.style.fill = "#ffffff";
    menuAggFileSvgPath1.style.fill = "#ffffff";
    menuAggFileSvgPath2.style.fill = "#ffffff";
    menuAggFileSvgPath3.style.fill = "#ffffff";

    posizioneFileMenuSvg = 0

    // posizione default impostazioni
    imp.style.opacity = "0";
    imp.style.zIndex = "-1";

    // nuovo account intro page
    if(nuovoAcc == "si"){
        welcomePage.style.display = "block";
        tema("scuro");
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

    // EVENT LISTENER
    window.addEventListener('resize', () => {
        homeStatsWidgetColorBar1.style.height = homeStatsWidgetDiv1.clientHeight + "px";
        homeStatsWidgetColorBar2.style.height = homeStatsWidgetDiv2.clientHeight + "px";
        homeStatsWidgetColorBar3.style.height = homeStatsWidgetDiv3.clientHeight + "px";
    });
    // mouse over barre colorate home - stas widget
    homeStatsWidgetDiv1.addEventListener('mouseover', () => {
        homeStatsWidgetColorBar1.style.width = homeStatsWidgetDiv1.clientWidth + "px";
    })
    homeStatsWidgetDiv1.addEventListener('mouseout', () => {
        homeStatsWidgetColorBar1.style.width = "2.5%";
    })
    homeStatsWidgetDiv2.addEventListener('mouseover', () => {
        homeStatsWidgetColorBar2.style.width = homeStatsWidgetDiv2.clientWidth + "px";
    })
    homeStatsWidgetDiv2.addEventListener('mouseout', () => {
        homeStatsWidgetColorBar2.style.width = "2.5%";
    })
    homeStatsWidgetDiv3.addEventListener('mouseover', () => {
        homeStatsWidgetColorBar3.style.width = homeStatsWidgetDiv3.clientWidth + "px";
    })
    homeStatsWidgetDiv3.addEventListener('mouseout', () => {
        homeStatsWidgetColorBar3.style.width = "2.5%";
    })
    // sottomenu elaborati (se fatto fa html non va)
    menuFileDivSopra.addEventListener('click', () => {
        menu(3)
    })
    menuFileDivSotto.addEventListener('click', () => {
        menu(4)
    })

    // logout account google
    const bottoneLogout = document.getElementById("g_id_signout");
    bottoneLogout.onclick = () => {
        google.accounts.id.disableAutoSelect();
        window.location = "http://localhost/";
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
        case "5":
            menu(5)
            break;
    }
}
// FUNCTIONS
function sfondo(tema){
    switch(tema){
        case "chiaro":
            titoloSezione.style.color = "#303030"
            menuFileSottomenu.style.color = "#303030";
            userNameInfo.style.color = "#303030";
            indicatoreMenu.style.borderColor = "white"
            indicatoreMenuBefore.style.borderRight = "5px white solid";
            indicatoreMenuBefore.style.borderBottom = "5px white solid";
            indicatoreMenuAfter.style.borderRight = "5px white solid";
            indicatoreMenuAfter.style.borderTop = "5px white solid";
            sfondoDiv1.style.background = "white";
            localStorage.setItem("tema", "chiaro");
            break;
        case "scuro":
            titoloSezione.style.color = "#ffffff"
            menuFileSottomenu.style.color = "#ffffff";
            userNameInfo.style.color = "#ffffff";
            indicatoreMenu.style.borderColor = "black"
            indicatoreMenuBefore.style.borderRight = "5px black solid";
            indicatoreMenuBefore.style.borderBottom = "5px black solid";
            indicatoreMenuAfter.style.borderRight = "5px black solid";
            indicatoreMenuAfter.style.borderTop = "5px black solid";
            sfondoDiv1.style.background = "black";
            localStorage.setItem("tema", "scuro");
            break;
        case "eggsolution":
            titoloSezione.style.color = "#303030"
            menuFileSottomenu.style.color = "#303030";
            userNameInfo.style.color = "#ffffff";
            indicatoreMenu.style.borderColor = "#A36B00"
            indicatoreMenuBefore.style.borderRight = "5px yellow solid";
            indicatoreMenuBefore.style.borderBottom = "5px yellow solid";
            indicatoreMenuAfter.style.borderRight = "5px yellow solid";
            indicatoreMenuAfter.style.borderTop = "5px yellow solid";
            sfondoDiv1.style.background = "yellow";
            localStorage.setItem("tema", "eggsolution");
            break;
        case "blu":
            titoloSezione.style.color = "#ffffff"
            menuFileSottomenu.style.color = "#ffffff";
            userNameInfo.style.color = "#ffffff";
            menuDiv.style.background = "#06001D";
            menuButton1.style.background = "#06001D";
            menuButton2.style.background = "#06001D";
            menuButton3.style.background = "#06001D";
            menuButton5.style.background = "#06001D";
            indicatoreMenu.style.borderColor = "#243481"
            indicatoreMenuBefore.style.borderRight = "5px #243481 solid";
            indicatoreMenuBefore.style.borderBottom = "5px #243481 solid";
            indicatoreMenuAfter.style.borderRight = "5px #243481 solid";
            indicatoreMenuAfter.style.borderTop = "5px #243481 solid";
            menuFileDiv.style.background = "linear-gradient(180deg, #3B22DA 0%, #8B00FF 100%)";
            sfondoDiv1.style.background = "linear-gradient(250.99deg, #050B25 0%, #0E155B 34.9%, #152364 78.12%, #33459C 100%)";
            localStorage.setItem("tema", "blu");
            break;

    }
}
function menu(sezioneFunc){
    switch(sezioneFunc){
        case 1:
            if(impAperto == true){
                imp.style.opacity = "0";
                imp.style.zIndex = "0";
                impAperto = false;
            }
            // scorri menu
            if(sezioneAttuale != 1){
                sezione.style.height = "calc(100% * 4 - 75px * 4)";
                elaboratiClasse.style.display = "none";

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
                menuHomeSvgPath1.style.fill = "black";
                menuHomeSvgPath2.style.fill = "black";

                menuStatsSvgPath1.style.fill = "#ffffff";
                menuStatsSvgPath2.style.fill = "#ffffff";

                menuFileSvgPath1.style.fill = "#ffffff";
                menuFileSvgPath2.style.fill = "#ffffff";
                menuFileSvgPath3.style.fill = "#ffffff";
                menuFileDiv.style.height = "0";

                menuAggFileSvgPath1.style.fill = "#ffffff";
                menuAggFileSvgPath2.style.fill = "#ffffff";
                menuAggFileSvgPath3.style.fill = "#ffffff";
                menuAggFileSvgPath4. style.fill = "#303030";

                sezioneAttuale = 1;
            }
            // scorri titolo
            titoloSezione.style.transform = "translateY(-10%)";
            // scorri sezione
            sezione.style.transform = "translateY(0)";

            break;
        case 2:
            if(impAperto == true){
                imp.style.opacity = "0";
                imp.style.zIndex = "0";
                impAperto = false;
            }
            // scorri menu
            if(sezioneAttuale != 2){
                sezione.style.height = "calc(100% * 4 - 75px * 4)";
                elaboratiClasse.style.display = "none";

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

                menuStatsSvgPath1.style.fill = "black";
                menuStatsSvgPath2.style.fill = "black";

                menuFileSvgPath1.style.fill = "#ffffff";
                menuFileSvgPath2.style.fill = "#ffffff";
                menuFileSvgPath3.style.fill = "#ffffff";
                menuFileDiv.style.height = "0";

                menuAggFileSvgPath1.style.fill = "#ffffff";
                menuAggFileSvgPath2.style.fill = "#ffffff";
                menuAggFileSvgPath3.style.fill = "#ffffff";
                menuAggFileSvgPath4. style.fill = "#303030";

                sezioneAttuale = 2;
            }
            // scorri titolo
            titoloSezione.style.transform = "translateY(-35%)";
            // scorri sezione
            sezione.style.transform = "translateY(-25%)";

            break;
        case 3:
            if(impAperto == true){
                imp.style.opacity = "0";
                imp.style.zIndex = "0";
                impAperto = false;
            }
            if(posizioneFileMenuSvg == 1){
                menu(4)
                posizioneFileMenuSvg = 0;
                break;
            }
            // scorri menu
            if(sezioneAttuale != 3){
                sezione.style.height = "calc(100% * 5 - 75px * 5)";
                elaboratiClasse.style.display = "block";

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

                menuFileSvgPath1.style.fill = "black";
                menuFileSvgPath2.style.fill = "black";
                menuFileSvgPath3.style.fill = "black";
                menuFileDiv.style.height = "90px";

                menuFileDivIcona11.style.fill = "#ADADAD";
                menuFileDivIcona12.style.fill = "#ADADAD";
                menuFileDivIcona13.style.fill = "#ADADAD";
                menuFileDivIcona14.style.fill = "#ADADAD";
                menuFileDivIcona21.style.fill = "#ffffff";
                menuFileDivIcona22.style.fill = "#ffffff";
                menuFileDivIcona23.style.fill = "#ffffff";
                menuFileDivIcona24.style.fill = "#ffffff";
                menuFileDivIcona25.style.fill = "#ffffff";
                menuFileDivIcona26.style.fill = "#ffffff";

                menuAggFileSvgPath1.style.fill = "#ffffff";
                menuAggFileSvgPath2.style.fill = "#ffffff";
                menuAggFileSvgPath3.style.fill = "#ffffff";
                menuAggFileSvgPath4. style.fill = "#ADADAD";

                sezioneAttuale = 3;
                posizioneFileMenuSvg = 0;
            }
            // scorri titolo e sottotitolo
            titoloSezione.style.transform = "translateY(-60%)";
            menuFileSottomenu.style.transform = "translateY(8%)";
            // scorri sezione
            sezione.style.transform = "translateY(-40%)";

            break;
        case 4:
            if(impAperto == true){
                imp.style.opacity = "0";
                imp.style.zIndex = "0";
                impAperto = false;
            }
            // scorri menu
            if(sezioneAttuale != 4){
                sezione.style.height = "calc(100% * 5 - 75px * 5)";
                elaboratiClasse.style.display = "block";

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

                menuFileSvgPath1.style.fill = "black";
                menuFileSvgPath2.style.fill = "black";
                menuFileSvgPath3.style.fill = "black";
                menuFileDiv.style.height = "90px";

                menuFileDivIcona11.style.fill = "#ffffff";
                menuFileDivIcona12.style.fill = "#ffffff";
                menuFileDivIcona13.style.fill = "#ffffff";
                menuFileDivIcona14.style.fill = "#ffffff";
                menuFileDivIcona21.style.fill = "#ADADAD";
                menuFileDivIcona22.style.fill = "#ADADAD";
                menuFileDivIcona23.style.fill = "#ADADAD";
                menuFileDivIcona24.style.fill = "#ADADAD";
                menuFileDivIcona25.style.fill = "#ADADAD";
                menuFileDivIcona26.style.fill = "#ADADAD";

                menuAggFileSvgPath1.style.fill = "#ffffff";
                menuAggFileSvgPath2.style.fill = "#ffffff";
                menuAggFileSvgPath3.style.fill = "#ffffff";
                menuAggFileSvgPath4.style.fill = "#ADADAD";

                sezioneAttuale = 4;
                posizioneFileMenuSvg = 1;
            }
            // scorri titolo e sottotitolo
            titoloSezione.style.transform = "translateY(-60%)";
            menuFileSottomenu.style.transform = "translateY(-84%)";
            // scorri sezione
            sezione.style.transform = "translateY(-60%)";

            break;
        case 5:
            if(impAperto == true){
                imp.style.opacity = "0";
                imp.style.zIndex = "0";
                impAperto = false;
            }
            // scorri menu
            if(sezioneAttuale != 5){
                sezione.style.height = "calc(100% * 4 - 75px * 4)";
                elaboratiClasse.style.display = "none";

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
                menuFileDiv.style.height = "0";

                menuAggFileSvgPath1.style.fill = "black";
                menuAggFileSvgPath2.style.fill = "black";
                menuAggFileSvgPath3.style.fill = "black";
                menuAggFileSvgPath4. style.fill = "#ffffff";

                sezioneAttuale = 5;
            }
            // scorri titolo
            titoloSezione.style.transform = "translateY(-85%)";
            // scorri sezione
            sezione.style.transform = "translateY(-75%)";

            break;
        case 6:
            if(impAperto == true){
                imp.style.opacity = "0";
                imp.style.zIndex = "-1";
                impAperto = false;
            } else if(impAperto == false){
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


// PDF preview
function previewLayer(filePath){
    PDFpreview.src = (filePath)

    if (iframeAperto == false){
        contenitoreIframe.style.display = "block"
        console.log("aperto")
        iframeAperto = true
    } else if (iframeAperto == true) {
        contenitoreIframe.style.display = "none"
        iframeAperto = false
    }
}
