window.onload = function(){
    function menu(sezione){
        var indicatore = document.querySelector('.indicatore');
        var iconeM = document.querySelector('.iconeCentrali');
        var altInd = indicatore.style.top;
        var altIconeM = iconeM.style.top;
        console.log(altInd);
        console.log(altIconeM);

        switch(sezione){
            case "home":
                indicatore.style.top = sezioneLoghiAlt + "px";
            case "elaborati":
                indicatore.style.top = sezioneLoghiAlt + 40 + "px";
            case "impostazioni":
                indicatore.style.top = sezioneLoghiAlt + 80 + "px";
            case "logout":
                indicatore.style.top = sezioneLoghiAlt + 120 + "px";
        }
    }
}
