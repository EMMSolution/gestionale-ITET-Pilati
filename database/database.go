package database

import (
	_"fmt"
	_"database/sql"
	_"log"
    _"github.com/go-sql-driver/mysql"
	imp "github.com/EggSolution/gestionale-ITET-Pilati/moduli/imp"
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
	// setto impostazioni
	username := imp.DbUser
	password := pass
	host := imp.DbHost
	port := imp.DbPort
	db := imp.Database
	//tbElaborati := imp.TabellaElaborati
	//tbUser := imp.DatabaseUser

	accessoDB := string(username)+":"+string(password)+"@tcp("+string(host)+":"+string(port)+")/"+string(db)

	return string(accessoDB)

}
