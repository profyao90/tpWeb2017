

// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.monTableau = new Array();
};

function  Forme(epaisseur,color){
    this.color = color;
    this.epaisseur=epaisseur;
     //Fonction paint Q7

    this.getColor = function(){
		return this.color;
	}.bind(this);
	
	this.getEpaisseur = function(){
		return this.epaisseur;
	}.bind(this);
}