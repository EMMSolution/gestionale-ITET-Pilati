package main

import(
	"net/http"	
	"fmt"
	"log"
	"os"
	template "html/template"
)
func Prova(w http.ResponseWriter, r *http.Request){
	fmt.Print("connesso")
	Cwd, _ := os.Getwd()
	fmt.Print(Cwd)
	template, _ := template.ParseFiles(Cwd + "\\pagine\\index.html")
	template.Execute(w,"")
}
func main(){
	log.Fatal(http.ListenAndServe(":80",nil))
	http.HandleFunc("/", Prova)
	fmt.Print("connesso")
}
