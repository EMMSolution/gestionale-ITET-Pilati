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

	fmt.Print(imp.Banner)
	fmt.Print(`

	1. Accendi webserver         3. Verifica stato
	2. Ricconetti a database     4. Impostazioni

	(0 per uscire)
	`)
	fmt.Print("> ")
	fmt.Scanln(&scelta)

	switch scelta {
		case 0:
			os.Exit(0)
		case 1:
			accendiWS()
		case 2:
			riconnessioneDB()
		case 4:
			impostazioni()
	}
}

// SEZIONI MENU

func accendiWS(){
	cls()
	fmt.Print(imp.Banner)

	passDb := ""

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
}

// da rifare
func riconnessioneDB(){
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

}

func impostazioni(){
	cls()
	fmt.Print(imp.Banner)
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
	DATABASE:                          WEBSERVER:
	1 Port: %s                      9 Port: %s 
	2 Host: %s
	3 NomeDB: %s
	4 Tab usr: %s
	5 Tab elb: %s
	6 User: %s
	7 Def pass: %s
	8 Pass: %s

	(0 per uscire)
	> `, portaDB, imp.WsPort, 
	   imp.DbHost, imp.Database, 
	   imp.TabellaUser, imp.TabellaElaborati,
	   imp.DbUser, defaultPass,
	   imp.DbPass)

	var sceltaImp int
	fmt.Scanln(&sceltaImp)

	switch sceltaImp {
		case 0:
			menu()
		case 1:
			fmt.Print(`
	Nuova porta database (n per annullare): 
	> `)
		   var Port string
			fmt.Scanln(&Port)
			if Port == "n" || Port == "N"{
				impostazioni()
			}
			// usa la variabile sopra per riscrivere il file imp/settings.go
			impostazioni()

		case 2:
			fmt.Print(`
	Nuovo host database (n per annullare): 
	> `)
		   var Host string
			fmt.Scanln(&Host)
			if Host == "n" || Host == "N"{
				impostazioni()
			}
			// usa la variabile sopra per riscrivere il file imp/settings.go
			impostazioni()
		
		case 3:
			fmt.Print(`
	Nuovo nome database (n per annullare): 
	> `)
		   var NomeDB string
			fmt.Scanln(&NomeDB)
			if NomeDB == "n" || NomeDB == "N"{
				impostazioni()
			}
			// usa la variabile sopra per riscrivere il file imp/settings.go
			impostazioni()
			
		case 4:
			fmt.Print(`
	Nuovo nome tabella utenti (n per annullare): 
	> `)
		   var TabUsr string
			fmt.Scanln(&TabUsr)
			if TabUsr == "n" || TabUsr == "N"{
				impostazioni()
			}
			// usa la variabile sopra per riscrivere il file imp/settings.go
			impostazioni()
			
		case 5:
			fmt.Print(`
	Nuovo nome tabella elaborati (n per annullare): 
	> `)
		   var TabElb string
			fmt.Scanln(&TabElb)
			if TabElb == "n" || TabElb == "N"{
				impostazioni()
			}
			// usa la variabile sopra per riscrivere il file imp/settings.go
			impostazioni()
			
		case 6:
			fmt.Print(`
	Nuovo nome user database (n per annullare): 
	> `)
		   var User string
			fmt.Scanln(&User)
			if User == "n" || User == "N"{
				impostazioni()
			}
			// usa la variabile sopra per riscrivere il file imp/settings.go
			impostazioni()
			
		case 7:
			fmt.Print(`
	Default password [si/no] (n per annullare): 
	> `)
		   var User string
			fmt.Scanln(&User)
			if User == "si" || User == "SI" || User == "Si" {
				// usa varNuova sopra per riscrivere il file imp/settings.go
				impostazioni()
			} else if User == "no" || User == "NO" || User == "No" {
				// usa varNuova sopra per riscrivere il file imp/settings.go
				impostazioni()
			} else if (User == "n"){
				impostazioni()
			}
			
		case 8:
			fmt.Print(`
    Nuova password database (n per annullare):
	> `)
		   var Pass string
			fmt.Scanln(&Pass)
			// usa varNuova sopra per riscrivere il file imp/settings.go
			if Pass == "n" || Pass == "N"{
				impostazioni()
			}
			// usa la variabile sopra per riscrivere il file imp/settings.go
			impostazioni()
			
		case 9:
			fmt.Print(`
    Nuova porta webserver (n per annullare):
	> `)
		   var Port string
			fmt.Scanln(&Port)
			// usa varNuova sopra per riscrivere il file imp/settings.go
			if Port == "n" || Port == "N"{
				impostazioni()
			}
			// usa la variabile sopra per riscrivere il file imp/settings.go
			impostazioni()

	}
}