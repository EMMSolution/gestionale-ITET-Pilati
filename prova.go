package main

import(
    "fmt"
)

type Persona struct {
    nome string
    cognome string
    residenza string
    eta int
    sesso bool
}

func Prova(sergio){
    sergio.nome = "Gian"

    return
}

func main(){
    sergio := new(Persona)
    sergio.nome = "Sergio"
    sergio.cognome = "rossi"
    sergio.residenza = "via del sesso 4"
    sergio.eta = 69
    sergio.sesso = True

    Prova(sergio)

    fmt.Println(sergio)
}