package webserver

import (
	"os"
	"fmt"
	"time"
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

    "gopkg.in/square/go-jose.v2/jwt"
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
	Id            string
	Nome          string
	Cognome       string
	Email         string
	Preferiti     string
	Tipo          string
	PrimoAccesso  string
	UltimoAccesso string
	Stato         string
}
type HomeStruct struct {
	Sezione      string
	Errore       string
}
type DashStruct struct {
	TitoloPag    	   string
	NuovoAcc    	   string
	IdGoogleUtente	   string
	NomeCompleto   	   string
	Nome        	   string
	Cognome		   	   string
	TipoAccount        string
	EmailUtente 	   string
	ImgUtente          string
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
	http.HandleFunc("/dashboard", dashboard)
	http.HandleFunc("/uploadFile", uploadFile)
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

	// mappa per token id
	var tokenIdDecoded map[string]interface{}
	// decodifica token id
	token, _ := jwt.ParseSigned(tokenId)
	_ = token.UnsafeClaimsWithoutVerification(&tokenIdDecoded)

	// VERIFICHE E DECODIFICA INFORMAZIONI GOOGLE API
	// verifica token csrf in post
	if tokenCsrfPOST == "" {
		http.Redirect(w, r, "http://localhost/", http.StatusSeeOther)
	}
	// verifica token csrf in cookie

	// verifica token csrf uguali


	// apro connessione db
	DBconn, _ := sql.Open("mysql", InfoDB)

	// controllo se l'account è già esistente o se è il primo accesso
	userQueryStruct := new(UserStruct)

	queryUserTesto := "SELECT * FROM user WHERE nome='"+tokenIdDecoded["given_name"].(string)+"' AND cognome='"+tokenIdDecoded["family_name"].(string)+"' AND email='"+tokenIdDecoded["email"].(string)+"';"
	queryUserData, err := DBconn.Query(queryUserTesto)
	if err != nil {
		fmt.Println(err)
	}

	for queryUserData.Next() {
		err := queryUserData.Scan(&userQueryStruct.Id, &userQueryStruct.Nome, &userQueryStruct.Cognome, &userQueryStruct.Email, &userQueryStruct.Preferiti, &userQueryStruct.Tipo, &userQueryStruct.PrimoAccesso, &userQueryStruct.UltimoAccesso, &userQueryStruct.Stato)
		if err != nil {
			panic(err);
		}
	}

	// creo banner debug
	debugSpacer := ""

	if imp.DebugMode == true {
		debugSpacer = "\n -------------------------- Debug log -------------------------- \n\n"
	}

	nuovoUserAccount := ""

	emailUtente := tokenIdDecoded[`email`].(string)

	// controllo se è uno studente o un professore
	tipoNuovoAccount := ""

	if emailUtente[:2] == "s-" {
		tipoNuovoAccount = "studente"
	} else {
		tipoNuovoAccount = "professore"
	}

	// se l'utente non è già nel database
	if userQueryStruct.Id == "" {
		nuovoUserAccount = "si";

		oraAttuale := time.Now()
		oraAttualeFormat := oraAttuale.Format("02-01-2006 15:04:05")

		queryInsertNuovoUtente := "INSERT INTO user (nome, cognome, email, preferiti, tipo, primoAccesso, ultimoAccesso, stato) VALUES ('"+tokenIdDecoded[`given_name`].(string)+"', '"+tokenIdDecoded[`family_name`].(string)+"', '"+emailUtente+"', '"+" "+"', '"+tipoNuovoAccount+"', '"+oraAttualeFormat+"', '"+oraAttualeFormat+"', '1')"
		_, err := DBconn.Query(queryInsertNuovoUtente)
		if err != nil {
			fmt.Println(err);
		}

		// stampo informazioni
		SchermataTerminale += `
		Utente loggato per la prima volta:
	  	  -id:    ` + tokenIdDecoded["sub"].(string) + `
	  	  -nome:  ` + tokenIdDecoded["name"].(string) + `
	  	  -email: ` + tokenIdDecoded["email"].(string) + "\n"
	} else {
		nuovoUserAccount = "no";

		oraAttuale := time.Now()
		oraAttualeFormat := oraAttuale.Format("02-01-2006 15:04:05")

		queryInsertUtente := "UPDATE user SET ultimoAccesso = '"+oraAttualeFormat+"' WHERE nome = '"+tokenIdDecoded[`given_name`].(string)+"' AND cognome='"+tokenIdDecoded[`family_name`].(string)+"' AND email='"+tokenIdDecoded[`email`].(string)+"';"
		_, err := DBconn.Query(queryInsertUtente)
		if err != nil {
			fmt.Println(err);
		}

		// stampo informazioni
		SchermataTerminale += `
		Utente loggato:
	  	  -id:    ` + tokenIdDecoded["sub"].(string) + `
	  	  -nome:  ` + tokenIdDecoded["name"].(string) + `
	  	  -email: ` + tokenIdDecoded["email"].(string) + "\n"
	}

	fmt.Printf(SchermataTerminale + "%s", debugSpacer)


	// n elaborati
	ElaboratiTotali := 0
	ElaboratiApprovare := 0
	ElaboratiPubblici := 0

	// creo gli array degli elaborati preferiti
	var preferiti []string
	preferiti = strings.Split(userQueryStruct.Preferiti, ",")

	// creo array id elaborati
	var idElab []string

	// creo la struct da mettere nell HTML
	titoloP := "Dashboard - " + tokenIdDecoded["name"].(string)
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
	// controllo che gli elaborati siano piu di nElabRecenti
	var idElabRecenti []string

	if (len(idElab) == 0 || len(idElab) < nElabRecenti) {
		idElabRecenti = idElab[len(idElab):]
	} else {
		idElabRecenti = idElab[len(idElab) - nElabRecenti:]
	}

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
		NuovoAcc: nuovoUserAccount,
		IdGoogleUtente: tokenIdDecoded["sub"].(string),
		NomeCompleto: tokenIdDecoded["name"].(string),
		Nome: tokenIdDecoded["given_name"].(string),
		Cognome: tokenIdDecoded["family_name"].(string),
		TipoAccount: tipoNuovoAccount,
		EmailUtente: tokenIdDecoded["email"].(string),
		ImgUtente: tokenIdDecoded["picture"].(string),
		Elaborati: ElabStructData2,
		Sezione: sezione,
		ElabInfoCaricati: ElaboratiTotali,
		ElabInfoApprovare: ElaboratiApprovare,
		ElabInfoPubblici: ElaboratiPubblici,
	}


	// aggiorno il profilo non più nuovo
	if nuovoUserAccount == "si" {
		DBconn.Query("UPDATE user SET nuovo = 'no'")
	}
	// execute html template
	template, _ := template.ParseFiles(Cwd + "\\pagine\\dashboard.html")
	template.Execute(w, elaboratiHTML)
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
			// prendo altre variabili
			nomeUtente := r.FormValue("userName")
			name := r.FormValue("nomeElaborato")
			// aggiungo l'elaborato nel database
			creator := nomeUtente
			filePath := "\\static\\elaborati\\" + string(handler.Filename)

			DBconn, _ := sql.Open("mysql", InfoDB)
			// query a elaborati per vederne il numero
			elaboratiQueryStruct := new(ElabStruct)
			queryString := "SELECT * FROM elaborati;"
			queryElaborati, _ := DBconn.Query(queryString)

			var ultimoIdElaborati string

			for queryElaborati.Next() {
				queryElaborati.Scan(elaboratiQueryStruct.Id)

				ultimoIdElaborati = elaboratiQueryStruct.Id
			}

			// creo l'elaborato
			tempFile, _ := ioutil.TempFile(Cwd + "\\static\\elaborati\\", "elaborato-"+ultimoIdElaborati+".pdf")

			fmt.Println(tempFile)

			query, _ := DBconn.Query("INSERT INTO elaborati (name, creator, filePath) VALUES ('"+name+"','"+creator+"','"+filePath+"');")

			fmt.Println(query)

			defer tempFile.Close()
			fileByte, _ := ioutil.ReadAll(file)
			tempFile.Write(fileByte)
			http.Redirect(w, r, "http://localhost/dashboard", http.StatusSeeOther)
		case "GET":
			// renderizzo la pagina (con errori)
			http.Redirect(w, r, "http://localhost/dashboard", http.StatusSeeOther)
	}
}
