var sfondoDiv1;

window.onload = function(){
    // sfondo
    sfondoDiv1 = document.querySelector('.sfondo');

    if(localStorage.getItem("tema") === null){
        localStorage.setItem("tema", "scuro");
    }

    sfondo(localStorage.getItem("tema"));
}


// FUNCTIONS
function sfondo(tema){
    switch(tema){
        case "chiaro":
            sfondoDiv1.style.background = "white";
            localStorage.setItem("tema", "chiaro");

            break;
        case "scuro":
            sfondoDiv1.style.background = "black";
            localStorage.setItem("tema", "scuro");
            break;
        case "eggsolution":
            sfondoDiv1.style.background = "yellow";
            localStorage.setItem("tema", "eggsolution");
            break;
        case "blu":
            sfondoDiv1.style.background = "linear-gradient(250.99deg, #050B25 0%, #0E155B 34.9%, #152364 78.12%, #33459C 100%)";
            localStorage.setItem("tema", "blu");
            break;

    }
}
