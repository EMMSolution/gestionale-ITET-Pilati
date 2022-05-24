var ind;
var loghi;
var sez;
var loghiAlt;
var altezzaEff;
var impAperto;
var impAnnullaInput;
var sezL;

window.onload = function(){
    ind = document.querySelector('.indicatore');
    loghi = document.querySelector('.iconeCentrali');
    sez = document.querySelector('.sezioni');
    imp = document.querySelector('.imp');
    passImpInput = document.querySelector('.inputImp3');
    inputImpNome = document.querySelector('.inputImp1');
    inputImpEmail = document.querySelector('.inputImp2');
    inputImpPass = document.querySelector('.inputImp3');
    welcomePage = document.querySelector('.welcomePage');
    sezL = document.querySelector('.sezioneLaterali')

    impAperto = false;

    sez.style.transform = "translateY(-0%)";
    imp.style.opacity = "0";
    imp.style.zIndex = "0";

    loghiAlt = loghi.offsetTop;
    altezzaEff = loghiAlt - 63;
    ind.style.top = altezzaEff + "px";

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

    // cambio sezione laterale
    switch (sezioneLaterali){
        case "1":
            bottone(1)
        case "2":
            bottone(2)
        case "3":
            bottone(3)
    }
}

function bottone(sezioneLaterali){
    switch(sezioneLaterali){
        case 1:
            sezL.style.transform = "translateX(-0%)";
            break;
        case 2:
            sezL.style.transform = "translateX(-40%)";
            break;

    }
}

function menu(sezione){
    switch(sezione){
        case 1:
            ind.style.top = altezzaEff + "px";
            sez.style.transform = "translateY(-0%)";
            imp.style.opacity = "0";
            imp.style.zIndex = "0";
            break;
        case 2:
            ind.style.top = altezzaEff + 54 + "px";
            sez.style.transform = "translateY(-25%)";
            imp.style.opacity = "0";
            imp.style.zIndex = "0";
            break;
        case 3:
            ind.style.top = altezzaEff + 54 * 2 + "px";
            sez.style.transform = "translateY(-50%)";
            imp.style.opacity = "0";
            imp.style.zIndex = "0";
            break;
        case 4:
            ind.style.top = altezzaEff + 54 * 3 + "px";
            sez.style.transform = "translateY(-75%)";
            imp.style.opacity = "0";
            imp.style.zIndex = "0";
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



//                    classe     arr      arr
function graficoBarre(container, sezioni, valori){
    console.log("da fare")
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
    console.log("coming soon")
}

function fineTutorial(){
    welcomePage.style.display = "none"
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
