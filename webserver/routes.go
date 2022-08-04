package webserver

import (
	"os"
	"fmt"
	"bufio"
	"os/exec"
	"strings"
	"net/http"
	"io/ioutil"
	"database/sql"
	"html/template"
	_"github.com/EggSolution/gestionale-ITET-Pilati/moduli/database"
    _"github.com/go-sql-driver/mysql"
	imp "github.com/EggSolution/gestionale-ITET-Pilati/moduli/imp"

	"gopkg.in/square/go-jose.v2"
)

// variabile globale per al connessione al database
var InfoDB string
var Cwd string
// variabile per il numero di elaborati
var Nelaborati string
// variabile per i log del terminale
var SchermataTerminale string
var inputLog string
// numero di elaborati recenti
const nElabRecenti int = 5

// struct per dahboard
type ElabStruct struct {
	Id          string
	Name        string
	Creator     string
	FilePath    string
	UploadDate  string
}
type ElabStructDash struct {
	Id          string
	Name        string
	Creator     string
	FilePath    string
	UploadDate  string
	Preferito   bool
	Recente     bool
}
type UserStruct struct {
	Id          string
	Name        string
	Privileges  string
	Date        string
	Password    string
	Email       string
	Nuovo       string
	Preferiti   string
}
type HomeStruct struct {
	Sezione      string
	Errore       string
}
type DashStruct struct {
	TitoloPag    	   string
	NuovoAcc    	   string
	IdUtente     	   string
	NomeUtente   	   string
	EmailUtente 	   string
	PassUtente 		   string
	Elaborati   	   []ElabStructDash
	Sezione            string
	ElabInfoCaricati   int
	ElabInfoApprovare  int
	ElabInfoPubblici   int
}


func cls() {
	cls := exec.Command("cmd", "/c", "cls")
	cls.Stdout = os.Stdout
	cls.Run()
}

func main(){}

func Routes(infoDB string){
	// schermata
	SchermataTerminale = imp.Banner + "\n"

	fileNelaborati, _ := os.Open("\\webserver\\var\\Nelaborati.txt")
	scanner := bufio.NewScanner(fileNelaborati)
	InfoDB = infoDB
	for scanner.Scan() {
		Nelaborati = scanner.Text()
	}
	// static file handling
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static", fs))
	// routes
	http.HandleFunc("/", home)
	http.HandleFunc("/register", register)
	http.HandleFunc("/dashboard", dashboard)
	http.HandleFunc("/passReset", passReset)
	http.HandleFunc("/uploadFile", uploadFile)
	http.HandleFunc("/cambioImpostazioni", cambioImpostazioni)
}

// all page function
func home(w http.ResponseWriter, r *http.Request){
	// divido l'url
	sezione := r.URL.Query().Get("sez")
	errore := r.URL.Query().Get("err")
	HomeVar := new(HomeStruct)
	HomeVar.Sezione = ""
	HomeVar.Errore = ""
	if sezione != "" {
		HomeVar.Sezione = sezione
	}
	if errore != "" {
		HomeVar.Errore = errore
	}
	// get current working directory
	Cwd, _ =  os.Getwd()
	// execute html template
	template, _ := template.ParseFiles(Cwd + "\\pagine\\home.html")
	template.Execute(w, HomeVar)
}

func dashboard(w http.ResponseWriter, r *http.Request){
	// stampo banner debug
	debugSpacer := ""

	if imp.DebugMode == true {
		debugSpacer = "\n -------------------------- Debug log -------------------------- \n\n"
	}


	sezione := r.URL.Query().Get("sez")
	// get current working directory
	Cwd, _ =  os.Getwd()
	// variabili per contenere info POST
	tokenCsrfPOST := ""
	tokenId := ""

	switch r.Method {
		// filtro richieste
		case "POST":
			tokenCsrfPOST = r.FormValue("g_csrf_token");
			tokenId = r.FormValue("credential");
			break;
		case "GET":
			// execute html template
			http.Redirect(w, r, "http://localhost/", http.StatusSeeOther)

			return
	}

	// VERIFICHE E DECODIFICA INFORMAZIONI GOOGLE API
	if tokenCsrfPOST == "" {
		// execute html template
		http.Redirect(w, r, "http://localhost/", http.StatusSeeOther)
	}
	fmt.Println(tokenCsrfPOST)
	fmt.Println(tokenId)

	DBconn, _ := sql.Open("mysql", InfoDB)

	// stampo informazioni
	SchermataTerminale += `
	Utente loggato:
  	  -id: ` + "" + `
  	  -nome: ` + "" + `
  	  -email: ` + "" + "\n"

	fmt.Printf(SchermataTerminale + "%s", debugSpacer)

	// n elaborati
	ElaboratiTotali := 0
	ElaboratiApprovare := 0
	ElaboratiPubblici := 0

	// creo gli array degli elaborati preferiti
	var preferiti []string
	preferiti = strings.Split("10, 11", ",")

	// creo array id elaborati
	var idElab []string

	// creo la struct da mettere nell HTML
	titoloP := "Dashboard - " + ""
	var ElaboratiStructData []ElabStructDash

	// raccolgo gli elaborati temporaneamente
	var ElabStruct1 ElabStructDash
	elaboratiQueryData, _ := DBconn.Query("SELECT * FROM elaborati")

	// analizzo query elaborati
	for elaboratiQueryData.Next(){
		err := elaboratiQueryData.Scan(&ElabStruct1.Id, &ElabStruct1.Name, &ElabStruct1.Creator, &ElabStruct1.FilePath, &ElabStruct1.UploadDate)
		if err != nil {
			fmt.Println(err)
		}
		ElabStruct1.Preferito = false
		for i := 0; i < len(preferiti); i++ {
			if preferiti[i] == ElabStruct1.Id {
				ElabStruct1.Preferito = true
			}
		}
		idElab = append(idElab, ElabStruct1.Id)
		ElabStruct1.Recente = false
		ElaboratiStructData = append(ElaboratiStructData, ElabStruct1)

		ElaboratiTotali += 1
	}
	var idElabRecenti []string = idElab[len(idElab) - nElabRecenti:]
	var ElabStruct2 ElabStructDash
	var ElabStructData2 []ElabStructDash
	for a := 0; a < len(ElaboratiStructData); a++ {
		ElabStruct2.Id = ElaboratiStructData[a].Id
		ElabStruct2.Name = ElaboratiStructData[a].Name
		ElabStruct2.Creator = ElaboratiStructData[a].Creator
		ElabStruct2.FilePath = ElaboratiStructData[a].FilePath
		ElabStruct2.UploadDate = ElaboratiStructData[a].UploadDate
		ElabStruct2.Preferito = ElaboratiStructData[a].Preferito
		ElabStruct2.Recente = false
		for i := 0; i < len(idElabRecenti); i++ {
			if ElaboratiStructData[a].Id == idElabRecenti[i]{
				ElabStruct2.Recente = true
			}
		}
		ElabStructData2 = append(ElabStructData2, ElabStruct2)
	}

	elaboratiHTML := DashStruct {
		TitoloPag: titoloP,
		//NuovoAcc: credVar.Nuovo,
		//IdUtente: credVar.Id,
		//NomeUtente: credVar.Name,
		//EmailUtente: credVar.Email,
		//PassUtente: credVar.Password,
		Elaborati: ElabStructData2,
		Sezione: sezione,
		ElabInfoCaricati: ElaboratiTotali,
		ElabInfoApprovare: ElaboratiApprovare,
		ElabInfoPubblici: ElaboratiPubblici,
	}


	// aggiorno il profilo non più nuovo
	if "" == "si" {
		DBconn.Query("UPDATE user SET nuovo = 'no'")
	}
	// execute html template
	template, _ := template.ParseFiles(Cwd + "\\pagine\\dashboard.html")
	template.Execute(w, elaboratiHTML)
}

func register(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
		case "GET":
			http.Redirect(w, r, "http://localhost/?sez=2", http.StatusSeeOther)
		case "POST":
			DBconn, _ := sql.Open("mysql", InfoDB)
			// prendo dati
			NomeUtente := r.FormValue("nome")
			MailUtente := r.FormValue("email")
			PasswordUtente := r.FormValue("password")
			// query per controllare omonimi
			utenti, _ := DBconn.Query("SELECT * FROM user WHERE name='"+NomeUtente+"' OR email='"+MailUtente+"';")
			for utenti.Next(){
				utStr := new(UserStruct)
				err := utenti.Scan(&utStr.Id, &utStr.Name, &utStr.Privileges, &utStr.Date, &utStr.Password, &utStr.Email, &utStr.Nuovo, &utStr.Preferiti)
				if err != nil {
					fmt.Println(err)
				}
				if utStr.Id != "" {
					// con errore
					http.Redirect(w, r, "http://localhost/?sez=2&err=2", http.StatusSeeOther)
					return
				}
			}
			// registrazione account
			_, err := DBconn.Query("INSERT INTO user (name, privileges, password, email, nuovo, preferiti) VALUES ('"+NomeUtente+"', '"+"3"+"', '"+PasswordUtente+"', '"+MailUtente+"', 'si', '');")
			if err != nil {
				fmt.Println(err)
				// con errore
				http.Redirect(w, r, "http://localhost/?sez=2&err=3", http.StatusSeeOther)
				return
			}
			fmt.Println("Utente registrato:")
			fmt.Println("  -nome: " + NomeUtente)
			fmt.Println("  -email: " + MailUtente + "\n")
			// redirect alla home
			http.Redirect(w, r, "http://localhost/?sez=1", http.StatusSeeOther)

			// aggiorno e stampo i log
			cls()
			SchermataTerminale += `
	Utente loggato:
	  -nome: ` + NomeUtente + `
	  -email: ` + MailUtente + "\n"
			fmt.Print(SchermataTerminale)
	}
}

func uploadFile(w http.ResponseWriter, r *http.Request) {
	// get current working directory
	Cwd, _ =  os.Getwd()
	switch r.Method {
		case "POST":
			// prendo il file
			file, handler, err := r.FormFile("file")
			if err != nil {
				fmt.Println("errore nel caricamento del file")
				fmt.Println(err)
			}
			defer file.Close()
			// aggiungo l'elaborato nel database
			name := r.FormValue("nomeElaborato")
			// VA MODIFICATO DOPO LA AGGIUNTA DELLE SESSIONI
			creator := "admin"
			filePath := "/elaborati/" + string(handler.Filename)
			DBconn, _ := sql.Open("mysql", InfoDB)
			query, _ := DBconn.Query("INSERT INTO elaborati (name, creator, filePath) VALUES ('"+name+"','"+creator+"','"+filePath+"');")
			fmt.Println(query)
			// creo l'elaborato
			tempFile, _ := ioutil.TempFile(Cwd + "\\elaborati\\", "elaborato-*.pdf")
			defer tempFile.Close()
			fileByte, _ := ioutil.ReadAll(file)
			tempFile.Write(fileByte)
			http.Redirect(w, r, "http://localhost/dashboard", http.StatusSeeOther)
		case "GET":
			// renderizzo la pagina (con errori)
			http.Redirect(w, r, "http://localhost/dashboard", http.StatusSeeOther)
	}
}

func passReset(w http.ResponseWriter, r *http.Request) {
	// get current working directory
	Cwd, _ =  os.Getwd()
	switch r.Method {
		case "POST":
			// execute html template
			template, _ := template.ParseFiles(Cwd + "\\pagine\\passDimenticata.html")
			template.Execute(w,"")
		case "GET":
			// execute html template
			template, _ := template.ParseFiles(Cwd + "\\pagine\\home.html")
			template.Execute(w,"")
	}

}

func cambioImpostazioni(w http.ResponseWriter, r *http.Request) {
	Cwd, _ =  os.Getwd()
	var VecchioEmail string
	var VecchioPass string
	var NuovoNome string
	var NuovoEmail string
	var NuovoPass string
	switch r.Method {
		case "POST":
			VecchioEmail = r.FormValue("emailOriginale")
			VecchioPass = r.FormValue("passOriginale")
			NuovoNome = r.FormValue("nomeUtente")
			NuovoEmail = r.FormValue("emailUtente")
			NuovoPass = r.FormValue("passUtente")
		case "GET":
			http.Redirect(w, r, "http.//localhost/dashboard", http.StatusSeeOther)
	}
	DBconn, _ := sql.Open("mysql", InfoDB)

	QueryAggiornamento, _ := DBconn.Query("UPDATE user SET name = '"+NuovoNome+"', email = '"+NuovoEmail+"', password = '"+NuovoPass+"' WHERE email = '"+VecchioEmail+"' and password = '"+VecchioPass+"';")
	fmt.Println(QueryAggiornamento)
	http.Redirect(w, r, "http://localhost/dashboard", http.StatusSeeOther)
}
