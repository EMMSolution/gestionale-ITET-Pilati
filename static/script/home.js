var sezioneScroll
var sezioneAttuale
var sezioneLogin
var sezioneRegister

window.onload = function(){
    sezioneScroll = document.querySelector('.scrollSezioni');
    sezioneAttuale = 'home'

    sezioneLogin = document.querySelector('.login')
    sezioneRegister = document.querySelector('.register')
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
