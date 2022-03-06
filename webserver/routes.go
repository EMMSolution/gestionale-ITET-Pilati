package webserver

import (
	"os"
	"fmt"
	"net/http"
	_"database/sql"
    _"github.com/go-sql-driver/mysql"
	template "html/template"
	_ "github.com/EggSolution/gestionale-ITET-Pilati/moduli/database"
)

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
	fmt.Println(infoDB)
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

	
	prova := new(User)

	prova.Id = "ciao1"
	prova.Name = "ciao1"
	prova.Privileges = "ciao1"
	prova.Date = "ciao1"
	prova.Password = "ciao1"
	prova.Email = "ciao1"

	fmt.Println(prova)
	
}

func register(w http.ResponseWriter, r *http.Request) {

	// get current working directory
	Cwd, _ := os.Getwd()
	// execute html template
	template, _ := template.ParseFiles(Cwd + "\\pagine\\regiter.html")
	template.Execute(w,"")
}

func dashboard(w http.ResponseWriter, r *http.Request){
	fmt.Println("ciao1")
	switch r.Method {
		case "POST":
			type User struct {
				Id          string
				Name        string
				Privileges  string
				Date        string
				Password    string
				Email       string
			}

			emailForm := r.FormValue("email")
			passForm := r.FormValue("password")

			

			fmt.Println("ciao1")
			// get current working directory
			Cwd, _ := os.Getwd()
			// execute html template
			template, _ := template.ParseFiles(Cwd + "\\pagine\\dashboard.html")
			template.Execute(w,"")
		case "GET":
			fmt.Println("non disonibile ancora")
	}
}
