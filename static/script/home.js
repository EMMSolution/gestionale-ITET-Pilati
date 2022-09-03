var sfondoDiv1, sfondoDiv2, sfondoDiv3, sfondoDiv4;

window.onload = function(){
    // sfondo
    sfondoDiv1 = document.querySelector('.sfondo');
    sfondoDiv2 = document.querySelector('.sfondo .corpo3');
    sfondoDiv3 = document.querySelector('.sfondo .corpo2');
    sfondoDiv4 = document.querySelector('.sfondo .corpo1');

    if(localStorage.getItem("tema") === null){
        localStorage.setItem("tema", "scuro");
    }

    sfondo(localStorage.getItem("tema"));
}


// FUNCTIONS
function sfondo(tema){
    switch(tema){
        case "chiaro":
            sfondoDiv1.style.background = "#FFFFFF";
            sfondoDiv2.style.background = "#E3E3E3";
            sfondoDiv3.style.background = "#D3D3D3";
            sfondoDiv4.style.background = "#8F8F8F";
            localStorage.setItem("tema", "chiaro");

            break;
        case "scuro":
            sfondoDiv1.style.background = "#545454";
            sfondoDiv2.style.background = "#444444";
            sfondoDiv3.style.background = "#171717";
            sfondoDiv4.style.background = "#000000";
            localStorage.setItem("tema", "scuro");
            break;
        case "eggsolution":
            sfondoDiv1.style.background = "#3F3F3F";
            sfondoDiv2.style.background = "#E2BE40";
            sfondoDiv3.style.background = "#A36B00";
            sfondoDiv4.style.background = "#4E4E4E";
            localStorage.setItem("tema", "eggsolution");
            break;
        case "blu":
            sfondoDiv1.style.background = "#364CB6";
            sfondoDiv2.style.background = "#70C7EC";
            sfondoDiv3.style.background = "#4863E6";
            sfondoDiv4.style.background = "#34189C";
            localStorage.setItem("tema", "blu");
            break;

    }
}
