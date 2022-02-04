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

	// avvio il server
	fmt.Println("Webserver acceso")
	log.Fatal(http.ListenAndServe(":80", nil))
}
