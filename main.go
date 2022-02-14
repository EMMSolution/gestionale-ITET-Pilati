package main

import (
	"os"
	"fmt"
	_"log"
	"os/exec"
	_"net/http"
	_"html/template"
	ws "github.com/EggSolution/gestionale-ITET-Pilati/moduli/webserver"
	db "github.com/EggSolution/gestionale-ITET-Pilati/moduli/database"
	imp "github.com/EggSolution/gestionale-ITET-Pilati/moduli/imp"
)

func cls(){
	cls := exec.Command("cmd", "/c", "cls")
	cls.Stdout = os.Stdout
	cls.Run()
}

func main(){
	// start menu
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
	fmt.Print("> ")
	fmt.Scanln(&scelta)
	switch scelta {
		case 1:
			fmt.Println("webserver in accensione")
			cls()
			fmt.Print(imp.Banner)
			fmt.Println("\nLog webserver: \n")
			db.Database()
			ws.Webserver()
		case 2:
			fmt.Println("Riconnessione db")
			cls()
			db.Database()
			menu()
	}

}