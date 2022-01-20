function animazione(direzione){
    const slide = document.querySelector('.slide');
    switch(direzione){
        case "avanti":
            slide.style.transform = "translateX(-444px)";
            break;
        case "indietro":
            slide.style.transform = "translateX(0px)"
            break;
        default:
            alert("slide error");
    }
}
