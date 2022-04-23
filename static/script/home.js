var sezioneScroll
var sezioneAttuale

window.onload = function(){
    sezioneScroll = document.querySelector('.scrollSezioni');
    sezioneAttuale = 'home'
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
            sezioneScroll.style.transform = 'translateX(-600px)';
            sezioneAttuale = 'login';
            break;
    }
}
