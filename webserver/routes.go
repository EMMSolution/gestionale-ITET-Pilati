package webserver

import (
	"os"
	_"fmt"
	"net/http"
	template "html/template"
 	_"database/sql"
)

func main(){

}

func Routes(){
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
	// get current working directory
	Cwd, _ := os.Getwd()
	// execute html template
	template, _ := template.ParseFiles(Cwd + "\\pagine\\dashboard.html")
	template.Execute(w,"")

}
