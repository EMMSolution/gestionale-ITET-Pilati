package database

import (
	_"fmt"
	_"database/sql"
	_"log"
    _"github.com/go-sql-driver/mysql"
	_ "github.com/EggSolution/gestionale-ITET-Pilati/moduli/imp"
)

func main(){

}

func Database(pass string){
	/*
	// setto datatype query a elaborti
	type Prova struct {
		Id         string
		Name       string
		Creator    string
		FilePath   string
		UploadDate string
	}
	var prova[5]string

	// setto impostazioni
	username := imp.DbUser
	password := pass
	host := imp.DbHost
	port := imp.DbPort
	db := imp.Database
	//tbElaborati := imp.TabellaElaborati
	//tbUser := imp.DatabaseUser

	accessoDb := string(username)+":"+string(password)+"@tcp("+string(host)+":"+string(port)+")/"+string(db)

	db1, err := sql.Open("mysql", accessoDb)
	if err != nil {
		panic(err)
	}
	defer db1.Close()

	query1, _ := db1.Query("SELECT * FROM elaborati")
	defer query1.Close()

	p := new(Prova)
	for query1.Next() == true {
		query1.Scan(&Prova.Id, &Prova.Name, &Prova.Creator, &Prova.FilePath, &Prova.UploadDate)
		fmt.Println(Prova)
	}
	*/
}
