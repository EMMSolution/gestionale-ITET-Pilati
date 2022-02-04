package webserver

import (
	"os"
	"fmt"
	"net/http"
 	_"database/sql"
)

func Routes(){
	// routes
	http.HandleFunc("/", index)
	http.HandleFunc("/login", login)
	http.HandleFunc("/register", register)
	http.HandleFunc("/dashboard", dashboard)
}

func index(w http.ResponseWriter, r *http.Request){
	file, err := os.OpenFile("./index.html", os.O_RDWR, 0644)

	if err != nil {
		fmt.Println("errore nel aprire un file")
	}

	fmt.Println(file)

	fmt.Fprint(w, file)
	fmt.Println("utente connesso a '/'"+"\n")

	defer file.Close()
}

func login(w http.ResponseWriter, r *http.Request) {
	file, err := os.OpenFile("./login.html", os.O_RDWR, 0644)

	if err != nil {
		fmt.Println("errore nel aprire un file")
	}

	fmt.Println(file)

	fmt.Fprint(w, file)
	fmt.Println("utente connesso a '/login'"+"\n")

	defer file.Close()
}

func register(w http.ResponseWriter, r *http.Request) {
	file, err := os.OpenFile("./register.html", os.O_RDWR, 0644)

	if err != nil {
		fmt.Println("errore nel aprire un file")
	}

	fmt.Fprint(w, file)
	fmt.Println("utente connesso a '/register'"+"\n")

	defer file.Close()
}

func dashboard(w http.ResponseWriter, r *http.Request){
	file, err := os.OpenFile("./dashboard.html", os.O_RDWR, 0644)

	if err != nil {
		fmt.Println("errore nel aprire un file")
	}

	fmt.Fprint(w, file)
	fmt.Println("utente connesso a '/dashboard'"+"\n")

	defer file.Close()
}
