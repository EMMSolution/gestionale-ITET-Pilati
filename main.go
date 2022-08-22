package main

import (
	"fmt"
	_ "html/template"
	_ "log"
	_ "net/http"
	"os"
	"os/exec"
	"github.com/axli-personal/cfparser"
	db "github.com/EggSolution/gestionale-ITET-Pilati/moduli/database"
	ws "github.com/EggSolution/gestionale-ITET-Pilati/moduli/webserver"
	banner "github.com/EggSolution/gestionale-ITET-Pilati/moduli/imp"
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

// default config variable values
var WebserverPort string = "80"
var DatabaseHost string = "192.168.1.154"
var DatabasePort string = "3306"
var DatabaseUser string = "berta"
var DatabaseName string = "gestionalePilati"
var DatabaseTabellaUser string = "user"
var DatabaseTabellaElab string = "elaborati"
var DatabaseDefaultPassword string = " "
var DefaultPassword string = " "
var DebugMode string = " "

func menu() {
	projectPath, _ := os.Getwd()
	configFile, err := os.Open(projectPath + "\\imp\\server.txt")
	if err != nil {
		fmt.Println("Attenzione: file di configurazione assente o non agibile!")
		return
	}
	// prendo impostazioni
	parser := cfparser.NewCFParser(configFile, "#", '=')

	lineeValideCnfg := parser.ReadAll()

	fmt.Printf("linee valide file configurazione: %v", lineeValideCnfg)

	if WebserverPortPair := parser.Get("webserver-port"); WebserverPortPair != nil {
		WebserverPort = WebserverPortPair.String()
	}
	if DatabasePortPair := parser.Get("database-port"); DatabasePortPair != nil {
		DatabasePort = DatabasePortPair.String()
	}
	if DatabaseHostPair := parser.Get("database-host"); DatabaseHostPair != nil {
		DatabaseHost = DatabaseHostPair.String()
	}
	if DatabaseUserPair := parser.Get("database-user"); DatabaseUserPair != nil {
		DatabaseUser = DatabaseUserPair.String()
	}
	if DatabaseNamePair := parser.Get("database-name"); DatabaseNamePair != nil {
		DatabaseName = DatabaseNamePair.String()
	}
	if DatabaseTabellaUserPair := parser.Get("database-tUsr"); DatabaseTabellaUserPair != nil {
		DatabaseTabellaUser = DatabaseTabellaUserPair.String()
	}
	if DatabaseTabellaElabPair := parser.Get("database-tElb"); DatabaseTabellaElabPair != nil {
		DatabaseTabellaElab = DatabaseTabellaElabPair.String()
	}
	if DatabaseDefaultPasswordPair := parser.Get("database-default-password"); DatabaseDefaultPasswordPair != nil {
		DatabaseDefaultPassword = DatabaseDefaultPasswordPair.String()
	}
	if DefaultPasswordPair := parser.Get("database-password"); DefaultPasswordPair != nil {
		DefaultPassword = DefaultPasswordPair.String()
	}
	if DebugModePair := parser.Get("debug-mode"); DebugModePair != nil {
		DebugMode = DebugModePair.String()
	}

	cls()

	var scelta int

	// debug mode
	debugAlert := ""
	if DebugMode == "true" {
		debugAlert = "\n	* debug mode attiva *"
	}

	fmt.Print(banner.Banner)
	fmt.Printf(`

	1. Accendi webserver         3. Verifica stato
	2. Ricconetti a database     4. Impostazioni
	%s
	(0 per uscire)
	`, debugAlert)
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

	passDb := " "

	if DatabaseDefaultPassword == "true" {
		passDb = DefaultPassword
	} else {
		fmt.Println(`
			Inserisci la password del database:
			`)
		fmt.Print(`> `)
		fmt.Scanln(&passDb)
	}

	fmt.Println(banner.Banner)
	fmt.Println("   Log webserver: \n")

	ws.Webserver(db.Database(passDb))
}

// da rifare
func riconnessioneDB(){
		// reset password
		passDB := ""
		fmt.Print(`
	Inserisci la password del database:

	`)
		fmt.Print(`    > `)
		fmt.Scanln(&passDB)
		db.Database(passDB)
		fmt.Println("Riconnessione db" + "\n")
		cls()
		menu()

}

func impostazioni(){
	cls()
	fmt.Print(banner.Banner)
	// cambio impostazioni
	var DefaultPass string = ""
	var portaDB string = DatabasePort
	if DatabaseDefaultPassword == "true" {
		DefaultPass = "si"
	} else {
		DefaultPass = "no"
	}
	// sitemo la formattazione della porta
	for i := 5 - len(DatabasePort);  i > 0; i--{
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
	> `, portaDB, WebserverPort,
	   DatabaseHost, DatabaseName,
	   DatabaseTabellaUser, DatabaseTabellaElab,
	   DatabaseUser, DefaultPass,
	   DefaultPassword)

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
