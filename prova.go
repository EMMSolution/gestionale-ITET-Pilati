package main

import (
	"os"
	"fmt"
)

func main() {
	sergio()
}
func sergio(){
	type Prova struct {
		nome     string
		cognome  string
		eta      int
		gender   bool
	}

	ciao, errore := os.Getwd()
	if errore != nil {
		fmt.Println(errore)
	}
	fmt.Println(ciao)
}
