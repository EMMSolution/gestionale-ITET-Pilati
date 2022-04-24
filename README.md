# gestionale per elaborati
#
## Template da aggiungere all imp/settings.go
```
package impostazioni

// WEBSERVER
// Port
var WsPort string = "80"

// DATABASE
// User
var DbUser string = "userName"
// Enabe default password
var DbDefPass bool = true
// Password (if default password is enabled)
var DbPass string = "password"
// Host
var DbHost string = "ip"
// Port
var DbPort string = "port"
// Database elaborati
var Database string = "gestionalePilati"
// Tabella elaborati / user
var TabellaElaborati string = "elaborati"
var TabellaUser string = "user"

```

directory tree
```
>    gestionale-ITET-Pilati           <br>
>        ├───database                 <br>
>        │   └───database.go          <br>
>        ├───elaborati                <br>
>        │   ├───elaborato1.pdf       <br>
>        │   └───elaborato2.pdf       <br>
>        ├───imp                      <br>
>        │   ├───banner.go            <br>
>        │   └───settings.go          <br>
>        ├───pagine                   <br>
>        │   ├───dashboard.html       <br>
>        │   ├───home.html            <br>
>        │   ├───passDimenticata.html <br>
>        │   └───register.html        <br>
>        ├───static                   <br>
>        │   ├───media                <br>
>        │   │   ├───dashboard        <br>
>        │   |   |   └───*iconeDash*  <br>
>        │   │   ├───home             <br>
>        │   |   |   └───*iconeHome*  <br>
>        │   │   ├───logoEggs         <br>
>        │   |   |   └───*loghiEggs*  <br>
>        │   │   └───user             <br>
>        │   |       └───*iconeUser*  <br>
>        │   ├───script               <br>
>        │   |   ├───home.js          <br>
>        │   |   ├───menuDash.js      <br>
>        │   |   └───redirectVari.js  <br>
>        │   └───style                <br>
>        │       ├───sfondi           <br>
>        │       |   ├───sfondoC.png  <br>
>        │       |   └───sfondoS.png  <br>
>        │       ├───dashboard.css    <br>
>        │       ├───home.css         <br>
>        │       ├───pagina404.css    <br>
>        │       └───register.css     <br>
>        ├───webserver                <br>
>        │   ├───routes.go            <br>
>        │   └───webserver.go         <br>
>        ├───.gitgnore                <br>
>        ├───avviaServer.exe          <br>
>        ├───go.mod                   <br>
>        ├───go.sum                   <br>
>        ├───main.go                  <br>
>        └───README.md                <br>
```
