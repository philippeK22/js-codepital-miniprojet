


 export class Patients {
    constructor(nom,maladie,argent,poche,etatSanté,traitement,){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSanté = etatSanté;
        this.traitement = traitement;


    }
    endroit(a,b){
        b.salle.push(this);
        a.salle.slice(a.salle.indexOf(this,1));
        

    }

        
    prendreMedicament(){
        




    }
    payer(){

    }
}
