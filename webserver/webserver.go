package webserver

import (
	"fmt"
	_"log"
	"net/http"
	//db "gestionaleElaborati/moduli/database"
	imp "github.com/EggSolution/gestionale-ITET-Pilati/moduli/imp"
)

func Webserver(infoDB string) {
	// chiamo gli instradamenti
	Routes(infoDB)

	// setto impostazzioni
	porta := imp.WsPort

	// server in ascolto
	fmt.Println("Webserver acceso a porta: ",string(porta),"\n")
	formattedPort := ":"+string(porta)
	http.ListenAndServe(formattedPort, nil)
}
