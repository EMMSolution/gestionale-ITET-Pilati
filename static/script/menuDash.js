var ind;
var loghi;
var sez;
var loghiAlt;
var altezzaEff;
var impAperto;
var impAnnullaInput;

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

    impAperto = false;

    sez.style.transform = "translateY(-0%)";
    imp.style.opacity = "0";
    imp.style.zIndex = "0";

    loghiAlt = loghi.offsetTop;
    altezzaEff = loghiAlt - 63;
    ind.style.top = altezzaEff + "px";

    console.log(nuovoAcc)
    // nuovo account intro page
    if(nuovoAcc == "si"){
        welcomePage.style.display = "block"
    } else {
        welcomePage.style.display = "none"
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
            alert("errore nello scorrimento delle sezioni");
    }
}
//                    classe     arr      arr
function graficoBarre(container, sezioni, valori){
    graficoMain = document.createElement('div')
    container.appendElement(graficoMain)
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
