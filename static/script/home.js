var sezioneScroll
var sezioneAttuale
var sezioneLogin
var sezioneRegister
var erroreLogin
var erroreRegister

window.onload = function(){
    sezioneScroll = document.querySelector('.scrollSezioni');
    sezioneAttuale = 'home'

    sezioneLogin = document.querySelector('.login')
    sezioneRegister = document.querySelector('.register')

    erroreLogin = document.querySelector('.erroreLogin')
    erroreRegister = document.querySelector('.erroreRegister')
}


function cambioSezione(sezione){
    switch(sezione){
       case 'home':
           if(sezioneAttuale == 'home'){
                return
           }
           sezioneScroll.style.transform = 'translateX(0px)';
           sezioneAttuale = 'home';
           break;
        case 'login':
            if(sezioneAttuale == 'login'){
                return
            }
            sezioneLogin.style.display = 'block';
            sezioneRegister.style.display = 'none';
            sezioneScroll.style.transform = 'translateX(-600px)';
            sezioneAttuale = 'login';
            break;
        case 'register':
            if(sezioneAttuale == 'register'){
                return
            }
            sezioneRegister.style.display = 'block';
            sezioneLogin.style.display = 'none';
            sezioneScroll.style.transform = 'translateX(-600px)';
            sezioneAttuale = 'register';
            break;
    }
}

function segliSezioneStart(sezione){
    switch(sezione){
        case "0":
            cambioSezione("home")
            break
        case "1":
            cambioSezione("login")
            break
        case "2":
            cambioSezione("register")
            break
     }
}
function mostraErrori(errore) {
    switch(errore){
        case "1":
            erroreLogin.innerHTML = "email o password sbagliate"
            console.log("ciao")
            break
        case "2":
            erroreRegister.innerHTML = "nome o email già utilizzate"
            console.log("ciao")
            break
    }
}
