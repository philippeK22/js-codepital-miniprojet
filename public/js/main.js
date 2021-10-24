import {Patients} from './modules/patient.js'
import  {Docteur}  from "./modules/doctor.js"
import { Lieux } from "./modules/lieux.js"
import { garfield } from "./modules/chat.js";






// Les instances des Patients malades 

let marcus = new Patients("Marcus","mal indenté",100,"vide","malade", "",);
let optimus = new Patients("Optimus","unsave",200,"vide","malade","",);
let Sangoku = new Patients("Sangoku",404,80,"vide","malade","");
let Darthvader = new Patients("Darthvader","azmatique",110,"vide","malade","",);
let Semicolon = new Patients("Semicolon","syntaxError",60,"vide","malade","",)
let tab =[marcus,optimus,Sangoku,Darthvader,Semicolon];
console.log(tab);
let docteur = new Docteur("Debugger",0,[garfield]);


docteur.salleAttente =[marcus,optimus,Sangoku,Darthvader,Semicolon];


Lieux.salleDAttente = [marcus,optimus,Sangoku,Darthvader,Semicolon];

let consultation = a=> {
    docteur.patientIn(a);
    docteur.diagnostique(a);
    docteur.patientOut(a);
    a.goTo(Lieux.salleDAttente, Lieux.pharmacie);
    a.takeCare();
};

while(Lieux.salleDAttente.length > 0){
    console.log('Salle d\'attente: ', Lieux.salleDAttente);
    console.log("______________________");
    garfield.miauler();
    consultation(Lieux.salleDAttente[0]);
    console.log("______________________");
};
console.log('Le docteur s\'est fait : ', docteur .argent, ' euros, aujourd\'hui.');


    































