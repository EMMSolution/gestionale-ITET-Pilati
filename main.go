package main

import (
	"fmt"
	ws "gestionaleElaborati/moduli/webserver"
	db "gestionaleElaborati/moduli/database"
)

func main(){
	fmt.Println("ciao");
	fmt.Println("ciao " + ws.Webserver);
	fmt.Println("ciao " + db.Database);
}