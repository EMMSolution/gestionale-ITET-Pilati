package main

import (
	"fmt"
	_ "html/template"
	_ "log"
	_ "net/http"
	"os"
	"os/exec"

	db "github.com/EggSolution/gestionale-ITET-Pilati/moduli/database"
	imp "github.com/EggSolution/gestionale-ITET-Pilati/moduli/imp"
	ws "github.com/EggSolution/gestionale-ITET-Pilati/moduli/webserver"
)

func cls() {
	cls := exec.Command("cmd", "/c", "cls")
	cls.Stdout = os.Stdout
	cls.Run()
}

func main() {
	// start menu
	menu()
}

func menu() {
	cls()

	var scelta int
	var passDb string

	fmt.Print(imp.Banner)
	fmt.Print(`

	1. Accendi webserver         3. Verifica stato
	2. Ricconetti a database     4. Impostazioni

	`)
	fmt.Print("> ")
	fmt.Scanln(&scelta)

	switch scelta {
	case 1:
		cls()
		fmt.Print(imp.Banner)

		passDb = ""

		if imp.DbDefPass == true {
			passDb = imp.DbPass
		} else {
			fmt.Println(`
				Inserisci la password del database:
				`)
			fmt.Print(`> `)
			fmt.Scanln(&passDb)
		}

		fmt.Println("\nLog webserver: \n")
	
		ws.Webserver(db.Database(passDb))

	case 2:
		// reset password
		passDB := ""
		fmt.Print(`
	Inserisci la password del database:

	`)
		fmt.Println(`    > `)
		fmt.Scanln(&passDB)
		db.Database(passDB)
		fmt.Println("Riconnessione db" + "\n")
		cls()
		menu()

	case 4:
		// cambio impostazioni
		var defaultPass string = ""
		var portaDB string = imp.DbPort
		if imp.DbDefPass {
			defaultPass = "si"
		} else {
			defaultPass = "no"
		}
		// sitemo la formattazione della porta
		for i := 5 - len(imp.DbPort);  i > 0; i--{
			portaDB = portaDB + " "
		}
		fmt.Printf(`
    Database:                         WebServer:
       1 Port: %s                      9 Port: %s 
       2 Host: %s
       3 NomeDB: %s
       4 Tab usr: %s
       5 Tab elb: %s
       6 User: %s
       7 Def pass: %s
          8 pass: %s
		
		`, portaDB, imp.WsPort, 
		   imp.DbHost, imp.Database, 
		   imp.TabellaUser, imp.TabellaElaborati,
		   imp.DbUser, defaultPass,
		   imp.DbPass)
	
		sceltaImp := 0
		fmt.Scanf(&sceltaImp)

		switch sceltaImp {
			case 1:
				fmt.Println(`
    Nuova porta (n per annullare): 
        
	   > `)
			portaNuova := ""
			fmt.Scanf(&portaNuova)
		
		}
	}
}
