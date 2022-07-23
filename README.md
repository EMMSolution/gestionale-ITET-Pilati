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

// Developer
var DebugMode bool = true


```

## Directory tree
```
    gestionale-ITET-Pilati           
        ├───database                 
        │   └───database.go          
        ├───elaborati                
        │   ├───elaborato1.pdf       
        │   └───elaborato2.pdf       
        ├───imp                      
        │   ├───banner.go            
        │   └───settings.go          
        ├───pagine                   
        │   ├───dashboard.html       
        │   ├───home.html            
        │   ├───passDimenticata.html 
        │   └───register.html        
        ├───static                   
        │   ├───media                
        │   │   ├───dashboard        
        │   |   |   └───*iconeDash*  
        │   │   ├───home             
        │   |   |   └───*iconeHome*  
        │   │   ├───logoEggs         
        │   |   |   └───*loghiEggs*  
        │   │   └───user             
        │   |       └───*iconeUser*  
        │   ├───script               
        │   |   ├───home.js          
        │   |   ├───menuDash.js      
        │   |   └───redirectVari.js  
        │   └───style                
        │       ├───sfondi           
        │       |   ├───sfondoC.png  
        │       |   └───sfondoS.png  
        │       ├───dashboard.css    
        │       ├───home.css         
        │       ├───pagina404.css    
        │       └───register.css     
        ├───webserver                
        │   ├───routes.go            
        │   └───webserver.go         
        ├───.gitgnore                
        ├───avviaServer.exe          
        ├───go.mod                   
        ├───go.sum                   
        ├───main.go                  
        └───README.md                
```
