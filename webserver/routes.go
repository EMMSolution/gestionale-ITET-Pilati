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
	// routes
	http.HandleFunc("/", index)
	http.HandleFunc("/login", login)
	http.HandleFunc("/register", register)
	http.HandleFunc("/dashboard", dashboard)
}

// all page function
func index(w http.ResponseWriter, r *http.Request){
	// get current working directory
	Cwd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	// execute html template
	template, err := template.ParseFiles(Cwd + "\\pagine\\index.html")
	if err != nil {
		panic(err)
	}
	template.Execute(w,"")
}

func login(w http.ResponseWriter, r *http.Request) {
	// get current working directory
	Cwd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	// execute html template
	template, err := template.ParseFiles(Cwd + "\\pagine\\login.html")
	if err != nil {
		panic(err)
	}
	template.Execute(w,"")

}

func register(w http.ResponseWriter, r *http.Request) {
	// get current working directory
	Cwd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	// execute html template
	template, err := template.ParseFiles(Cwd + "\\pagine\\regiter.html")
	if err != nil {
		panic(err)
	}
	template.Execute(w,"")

}

func dashboard(w http.ResponseWriter, r *http.Request){
	// get current working directory
	Cwd, err := os.Getwd()
	if err != nil {
		panic(err)
	}
	// execute html template
	template, err := template.ParseFiles(Cwd + "\\pagine\\dashboard.html")
	if err != nil {
		panic(err)
	}
	template.Execute(w,"")

}
