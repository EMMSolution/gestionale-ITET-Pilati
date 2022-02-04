package main

import (
	"fmt"
	_"log"
	"os"
	"os/exec"
	_"net/http"
	ws "gestionaleElaborati/moduli/webserver"
	db "gestionaleElaborati/moduli/database"
	imp "gestionaleElaborati/moduli/imp"
)

func cls(){
	cls := exec.Command("cmd", "/c", "cls")
	cls.Stdout = os.Stdout
	cls.Run()
}

func main(){
	menu()
}

func menu(){
	cls()

	var scelta int

	fmt.Print(imp.Banner)
	fmt.Print(`

	1. Accendi webserver         3. Verifica stato
	2. Ricconetti a database     4. Impostazioni

	`)
	fmt.Print(">")
	fmt.Scanln(&scelta)
	switch scelta {
		case 1:
			fmt.Println("webserver in accensione")
			cls()
			fmt.Println("Log webserver: \n")
			db.Database()
			ws.Webserver()
		case 2:
			fmt.Println("Riconnessione db")
			cls()
			db.Database()
			menu()
	}

}