import {Patients} from './modules/humain.js'
import  {Docteur}  from "./modules/doctor.js"
import { chat } from "./modules/chat.js"
import { Lieu } from "./modules/lieux.js"
import { Diagnostiques } from "./modules/doctor.js";
import { Traitement } from "./modules/doctor.js";







// Les instances des malades 

let marcus = new Patients("Marcus","mal indenté",100,"vide","malade", "",);
let optimus = new Patients("Optimus","unsave",200,"vide","malade","",);
let Sangoku = new Patients("Sangoku",404,80,"vide","malade","");
let Darthvader = new Patients("Darthvader","azmatique",110,"vide","malade","",);
let Semicolon = new Patients("Semicolon","syntaxError",60,"vide","malade","",)
let tab =[marcus,optimus,Sangoku,Darthvader,Semicolon];
console.log(tab);

let docteur = new Docteur("Debugger",0,[`chat`]);
let doct = new Docteur('amine',0);

let traite1 = new Traitement("`ctrl+maj+f`",60);
let traite2 = new Traitement(`saveOnFocusChange`,100);
let traite3 = new Traitement(`CheckLinkRelation`,35);
let traite4 = new Traitement(`Ventoline`,40);
let traite5 = new Traitement(`f12+doc`,20);
let tabPrix =[traite1,traite2,traite3,traite4,traite5];
console.log(tabPrix);





let pharmacie = new Lieu("pharmacie",[]);
let cabine = new Lieu("cabinet",[]);
let cimetiere = new Lieu("cimetiere", []);

// lesinstances de  Diagnostiques
let pat1 = new Diagnostiques("mal indenté",`ctrl+maj+f`,60);
let pat2 = new Diagnostiques("unsave",`saveOnFocusChange`,100);
let pat3 = new Diagnostiques(404,`CheckLinkRelation`,35);
let pat4 = new Diagnostiques("azmatique",`Ventoline`,40);
let pat5 = new Diagnostiques("syntaxError",`f12+doc`,20);

let tabPatient = [pat1,pat2,pat3,pat4,pat5];
console.log(tabPatient);

tab.forEach(element => {
    console.log("il ya ", `${tab.length}personnes`);
    doct.salleAttente.shift();
    console.log(element.nom , "  rentre dans le cabinet");
    doct.patientIn(element);
    doct.diagnostique(element);
    console.log(`la maladie de ${element.nom} est ${element.maladie}`);
    console.log(`${element.nom} a ${element.argent -= 50}`);
    marcus.payer();
    doct.patientOut(element);
    console.log(`${element.nom} est partie à ${pharmacie.nom}`);
    console.log(`${element.nom} est mort il est au ${cimetiere.nom}` );
    console.log("----------------------------------");

    
    
});































