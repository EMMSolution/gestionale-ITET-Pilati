package webserver

import (
	"os"
	"fmt"
	"time"
	"net/http"
	"database/sql"
	"github.com/axli-personal/cfparser"
	_"log"
    _"github.com/go-sql-driver/mysql"
	_"github.com/EggSolution/gestionale-ITET-Pilati/moduli/database"
)


func Webserver(infoDB string) {
	projectPath, _ := os.Getwd()
	configFile, err := os.Open(projectPath + "\\imp\\server.txt")
	if err != nil {
		fmt.Println("Attenzione: file di configurazione assente o non agibile!")
		return
	}
	// prendo impostazioni
	parser := cfparser.NewCFParser(configFile, "#", '=')

	lineeValideCnfg := parser.ReadAll()

	// faccio qualcosa con lineeValideCnfg
	if a := false; a {
		fmt.Printf("linee valide file configurazione: %v", lineeValideCnfg)
	}

	// default variable values
	WebserverPort := "80"

	if WebserverPortPair := parser.Get("webserver-port"); WebserverPortPair != nil {
		WebserverPort = WebserverPortPair.String()
	}

	oraAttuale := time.Now()
	araAttFormated := oraAttuale.Format("02-01-2006 15:04:05")

	// chiamo gli instradamenti
	Routes(infoDB)

	// controllo che sia presente un'account guest (senno lo aggiungo)
	DBconn, _ := sql.Open("mysql", infoDB)

	UserOspiteStruct := new(UserStruct)
	QueryUserOspite, _ := DBconn.Query("SELECT id FROM user WHERE nome='ospite' AND cognome='ospite';")
	for QueryUserOspite.Next(){
		err := QueryUserOspite.Scan(&UserOspiteStruct.Id)
		if err != nil {
			fmt.Println(err)
		}
	}
	if UserOspiteStruct.Id == "" {
		_, err := DBconn.Query("INSERT INTO user (nome, cognome, email, preferiti, tipo, primoAccesso, ultimoAccesso, stato) VALUES ('ospite', 'ospite', 'ospite@istitutopilati.it', '', 'ospite', '"+araAttFormated+"', '', '')")
		if err != nil {
			fmt.Println(err)
		}
	}

	// setto impostazzioni

	// server in ascolto
	fmt.Println()
	formattedPort := ":" + WebserverPort
	http.ListenAndServe(formattedPort, nil)
}
