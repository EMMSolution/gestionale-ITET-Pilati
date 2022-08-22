package database

import (
	"os"
	"github.com/axli-personal/cfparser"
	"fmt"
	_"database/sql"
	_"log"
    _"github.com/go-sql-driver/mysql"
)

func main(){

}

// query struct declaration
type User struct {
	Id          string
	Name        string
	Privileges  string
	Date        string
	Password    string
	Email       string
	Nuovo       string
	Preferiti   string
}
type Elaborati struct {
	Id          string
	Name        string
	Creator     string
	FilePath    string
	UploadDate  string
}

// query struct handling function
func QueryUser() User {
	return User {
		Id: "",
		Name: "",
		Privileges: "",
		Date: "",
		Password: "",
		Email: "",
		Nuovo: "",
		Preferiti: "",
	}
}

func QueryElaborati() Elaborati {
	return Elaborati {
		Id: "",
		Name: "",
		Creator: "",
		FilePath: "",
		UploadDate: "",
	}
}

func Database(pass string) string {
	projectPath, _ := os.Getwd()
	configFile, err := os.Open(projectPath + "\\imp\\server.txt")
	if err != nil {
		fmt.Println("Attenzione: file di configurazione assente o non agibile!")
		return ""
	}
	// prendo impostazioni
	parser := cfparser.NewCFParser(configFile, "#", '=')

	lineeValideCnfg := parser.ReadAll()

	// faccio qualcosa con lineeValideCnfg
	if a := false; a {
		fmt.Printf("linee valide file configurazione: %v", lineeValideCnfg)
	}

	// default variable values
	DatabaseHost := "192.168.1.154"
	DatabasePort := "3306"
	DatabaseUser := "berta"
	DatabaseName := "gestionalePilati"

	if DatabaseHostPair := parser.Get("database-host"); DatabaseHostPair != nil {
		DatabaseHost = DatabaseHostPair.String()
	}
	if DatabasePortPair := parser.Get("database-port"); DatabasePortPair != nil {
		DatabasePort = DatabasePortPair.String()
	}
	if DatabaseUserPair := parser.Get("database-user"); DatabaseUserPair != nil {
		DatabaseUser = DatabaseUserPair.String()
	}
	if DatabaseNamePair := parser.Get("database-name"); DatabaseNamePair != nil {
		DatabaseName = DatabaseNamePair.String()
	}

	// setto impostazioni con variabili definitive
	username := DatabaseUser
	password := pass
	host := DatabaseHost
	port := DatabasePort
	db := DatabaseName
	//tbElaborati := imp.TabellaElaborati
	//tbUser := imp.DatabaseUser

	accessoDB := string(username)+":"+string(password)+"@tcp("+string(host)+":"+string(port)+")/"+string(db)

	return string(accessoDB)

}
