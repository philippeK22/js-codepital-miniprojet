

export class Docteur {
    constructor(nom,argent,){
        this.nom = nom;
        this.argent = argent;
        this.cabinet = [];
        this.salleAttente =[];



    }
    diagnostique(a){
        if (a.maladie == "mal indenté"|| a.maladie == "unsave" || a.maladie == "404"||a.maladie== "azmatique"|| a.maladie == "syntaxerror") {
            this.argent +=50;
            
        }


    }
    patientIn(a){
        return console.log(`${a.nom}est rentré dans le cabinet `);

        
        

       


    }
    patientOut(a){
        return console.log(`${a.nom} à quitté le cabinet`);

    }
}

 export class Diagnostiques {
    constructor(maladie,traitement){
        this.maladie = maladie;
        this.traitement = traitement;

    }
}

export class Traitement {
    constructor(traitement,prix){
        this.traitement = traitement;
        this.prix = prix;

    }

  
}
