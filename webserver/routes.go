package webserver

import (
	"os"
	"fmt"
	"net/http"
	"database/sql"
    _"github.com/go-sql-driver/mysql"
	template "html/template"
	_ "github.com/EggSolution/gestionale-ITET-Pilati/moduli/database"
)

// variabile globale per al connessione al database
var InfoDB string
// query data structure
type User struct {
	Id          string
	Name        string
	Privileges  string
	Date        string
	Password    string
	Email       string
}

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
}

// all page function
func index(w http.ResponseWriter, r *http.Request){
	// get current working directory
	Cwd, _ := os.Getwd()
	// execute html template
	template, _ := template.ParseFiles(Cwd + "\\pagine\\index.html")
	template.Execute(w,"")
}

func login(w http.ResponseWriter, r *http.Request) {

	// get current working directory
	Cwd, _ := os.Getwd()
	// execute html template
	template, _ := template.ParseFiles(Cwd + "\\pagine\\login.html")
	template.Execute(w,"")
	
}

func register(w http.ResponseWriter, r *http.Request) {

	// get current working directory
	Cwd, _ := os.Getwd()
	// execute html template
	template, _ := template.ParseFiles(Cwd + "\\pagine\\regiter.html")
	template.Execute(w,"")
}

func dashboard(w http.ResponseWriter, r *http.Request){
	emailForm := ""
	passForm := ""
	switch r.Method {
		// filtro richieste
		case "POST":
			emailForm = r.FormValue("email")
			passForm = r.FormValue("password")
		case "GET":
			fmt.Println("non disonibile ancora")
	}

	// connessione database
	DBconn, _ := sql.Open("mysql", InfoDB)
	// query al database
	credenziali, _ := DBconn.Query("SELECT * FROM user WHERE email='"+string(emailForm) + "' AND password='"+string(passForm)+"';")
	// divido la query
	credVar := new(User)
	// for che controlla tutti i risultati
	for credenziali.Next(){
		err := credenziali.Scan(&credVar.Id, &credVar.Name, &credVar.Privileges, &credVar.Date, &credVar.Password, &credVar.Email)
		if err != nil {
			panic(err)
		}
	}
	// controlle se le credenziali esistono
	if credVar.Id == "" {
		// get current working directory
		Cwd, _ := os.Getwd()
		// execute html template
		template, _ := template.ParseFiles(Cwd + "\\pagine\\login.html")
		template.Execute(w,"")
	} else {
		// get current working directory
		Cwd, _ := os.Getwd()
		// execute html template
		template, _ := template.ParseFiles(Cwd + "\\pagine\\dashboard.html")
		template.Execute(w,"")
	}
}
