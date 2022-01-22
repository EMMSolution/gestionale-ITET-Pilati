const indicatore = document.querySelector(".indicatore");
console.log(indicatore.top);

function move(dove) {
    switch(dove){
        case "login":
            window.location.href = '/login'
            break;
        case "register":
            window.location.href = '/register'
            break;
        case "home":
            window.location.href = '/'
            break;
        default:
            alert('redirect error')
    }
}
