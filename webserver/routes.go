package webserver

import (
	"fmt"
	"net/http"
 	_"database/sql"
)

func Routes(){
	// routes
	http.HandleFunc("/", index)
	http.HandleFunc("/dashboard", dashboard)
}

func index(w http.ResponseWriter, r *http.Request){
	fmt.Println("utente connesso a '/'"+"\n")

}

func dashboard(w http.ResponseWriter, r *http.Request){
	fmt.Println("utente connesso a '/dashboard'"+"\n")

}