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
	// setto impostazioni
	/*
	username := imp.DbUser
	password := pass
	host := imp.DbHost
	port := imp.DbPort
	dbElaborti := imp.DatabaseElaborati
	//dbUser := imp.DatabaseUser

	accessoDb := string(username)+":"+string(password)+"tcp("+string(host)+":"+string(port)+")/"+string(dbElaborti)

	db1, err := sql.Open("mysql", accessoDb)
	if err != nil {
		panic(err)
	}

	fmt.Println("Database connesso " + host + ":" + port + "\n")

	query1, err := db1.Query("SELECT * FROM elaborati")
	if err != nil {
		panic(err)
	}
	fmt.Println(query1)
	*/
}