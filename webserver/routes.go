package webserver

import (
	"os"
	"fmt"
	"net/http"
	"database/sql"
    _"github.com/go-sql-driver/mysql"
	template "html/template"
	"github.com/EggSolution/gestionale-ITET-Pilati/moduli/database"
)

// variabile globale per al connessione al database
var InfoDB string
var Cwd string

func main(){

}

func Routes(infoDB string){
	InfoDB = infoDB
	// static file handling
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static", fs))
	// routes
	http.HandleFunc("/", index)
	http.HandleFunc("/login", login)
	http.HandleFunc("/register", register)
	http.HandleFunc("/dashboard", dashboard)
	http.HandleFunc("/uploadFile", uploadFile)
	http.HandleFunc("/passReset", passReset)
}

// all page function
func index(w http.ResponseWriter, r *http.Request){
	// get current working directory
	Cwd, _ =  os.Getwd()
	// execute html template
	template, _ := template.ParseFiles(Cwd + "\\pagine\\index.html")
	template.Execute(w,"")
}

func login(w http.ResponseWriter, r *http.Request) {
	// get current working directory
	Cwd, _ =  os.Getwd()
	// execute html template
	template, _ := template.ParseFiles(Cwd + "\\pagine\\login.html")
	template.Execute(w,"")
	
}

func register(w http.ResponseWriter, r *http.Request) {
	// get current working directory
	Cwd, _ =  os.Getwd()
	// execute html template
	template, _ := template.ParseFiles(Cwd + "\\pagine\\regiter.html")
	template.Execute(w,"")
}

func dashboard(w http.ResponseWriter, r *http.Request){
	// get current working directory
	Cwd, _ =  os.Getwd()
	emailForm := ""
	passForm := ""
	switch r.Method {
		// filtro richieste
		case "POST":
			emailForm = r.FormValue("email")
			passForm = r.FormValue("password")
		case "GET":
			// execute html template
			template, _ := template.ParseFiles(Cwd + "\\pagine\\login.html")
			template.Execute(w,"")

			return
	}

	// connessione database
	DBconn, _ := sql.Open("mysql", InfoDB)
	// query al database
	credenziali, _ := DBconn.Query("SELECT * FROM user WHERE email='"+string(emailForm) + "' AND password='"+string(passForm)+"';")
	// divido la query
	credVar := database.QueryUser()
	// for che controlla tutti i risultati
	for credenziali.Next(){
		err := credenziali.Scan(&credVar.Id, &credVar.Name, &credVar.Privileges, &credVar.Date, &credVar.Password, &credVar.Email)
		if err != nil {
			panic(err)
		}
	}
	// raccolgo gli elaborati per renderizzarli nella dash


	// controlle se le credenziali esistono
	if credVar.Id == "" {
		// execute html template
		template, _ := template.ParseFiles(Cwd + "\\pagine\\login.html")
		template.Execute(w, "")
	} else {
		fmt.Println("Utente loggato:")
		fmt.Println("  -id: " + credVar.Id)
		fmt.Println("  -nome: " + credVar.Name)
		fmt.Println("  -email: " + credVar.Email + "\n")
		// execute html template
		template, _ := template.ParseFiles(Cwd + "\\pagine\\dashboard.html")
		template.Execute(w, "")
	}
}

func uploadFile(w http.ResponseWriter, r *http.Request) {
	// get current working directory
	Cwd, _ =  os.Getwd()
	switch r.Method {
		case "POST":
			// aggiungo l'elaborato nel database
			name := r.FormValue("nome")
			// VA MODIFICATO DOPO LA AGGIUNTA DELLE SESSIONI
			creator := "admin"
			filePath := "/prova/sadsa/ciao.pdf"
			query := "INSERT INTO elaborati (name, creator, filePath) VALUES ("+name+","+creator+","+filePath+")"
			fmt.Println(query)
			// renderizzo la pagina (senza errori)
			template, _ := template.ParseFiles(Cwd + "\\pagine\\dashboard.html")
			template.Execute(w, "")
		case "GET":

			// renderizzo la pagina (con errori)
			template, _ := template.ParseFiles(Cwd + "\\pagine\\dashboard.html")
			template.Execute(w, "")
	}
}

func passReset(w http.ResponseWriter, r *http.Request) {
	// get current working directory
	Cwd, _ =  os.Getwd()
	switch r.Method {
		case "POST":
			// get current working directory
			Cwd, _ := os.Getwd()
			// execute html template
			template, _ := template.ParseFiles(Cwd + "\\pagine\\passDimenticata.html")
			template.Execute(w,"")
		case "GET":
			// get current working directory
			Cwd, _ := os.Getwd()
			// execute html template
			template, _ := template.ParseFiles(Cwd + "\\pagine\\login.html")
			template.Execute(w,"")
	}

}