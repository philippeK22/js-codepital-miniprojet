
import { Humain } from "./humain.js";
import { Lieux } from "./lieux.js";

let diagnostique = {
    "mal indenté" : "ctrl+maj+f",
    "unsave" : "saveOnFocusChange",
    "404" : "CheckLinkRelation",
    "azmatique" : "Ventoline",
    "syntaxError" : "f12+doc",
};

export class Docteur extends Humain {
    constructor(nom, argent, cabinet,) {
        super(nom,argent)
        this.cabinet = cabinet;
     



    }
    diagnostique(a) {
        
        console.log('Vous êtes ', a.maladie, '.');
        a.traitement = diagnostique[a.maladie];
        console.log('Votre traitement sera: ', a.traitement, '.');
        console.log('Cela fera 50 euros.');
        a.argent -= 50;
        this.argent += 50;

    

    }

    patientIn(a){

        this.cabinet.push(a.nom);
        Lieux.salleDAttente.splice(Lieux.salleDAttente.indexOf(a), 1)
        console.log(a.nom, " est rentré dans le cabinet ");

       

    }




    patientOut(a){
        
        this.cabinet.shift(a.nom);
        Lieux.salleDAttente.push(a)
        console.log(`${a.nom} à quitté le cabinet`);
  


    }
};


