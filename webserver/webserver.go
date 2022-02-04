package webserver

 import (
	"fmt"
	"log"
	"net/http"
	//db "gestionaleElaborati/moduli/database"
 )

func Webserver() {
	// chiamo gli instradamenti
	Routes()

/*
	var porta int
	porta = 80

	var portaStr string
	portaStr  = ":%d", porta
*/

	// server in ascolto
	fmt.Println("Webserver acceso a porta: " + "80" + "\n")
	log.Fatal(http.ListenAndServe(":80", nil))
}
