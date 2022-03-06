package webserver

 import (
	"fmt"
	"log"
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
	log.Fatal(http.ListenAndServe(formattedPort, nil))
}
