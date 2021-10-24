export let garfield = {
    nom: "garfield",
    miauler: function(){
        setInterval(() => {
            console.log(this.nom, ": MiaouwWWWWWWWWWWWWWWWWWWWWWWWWWWww")
            
        }, 20000);
    }
};
