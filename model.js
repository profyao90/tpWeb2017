

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
function Rectangle(coordRECX, coordRECY, largeur, hauteur,epaisseur,color){
    Forme.call(this, epaisseur,color);
    this.coordRECX=coordRECX 
    this.coordRECY=coordRECY 
    this.largeur=largeur
    this.hauteur=hauteur
    this.epaisseur=epaisseur
    this.color=color

        //Fonction qui retourne la coordonnée de X
    this.getInitX = function(){
        return this.coordRECX;
    }
    //Fonction qui retourne la coordonnée de Y
    this.getInitY = function(){
        return this.coordRECY;
    }
    //Fonction qui retourne la coordonnée de X final
    this.getFinalX = function(){
        return (this.coordRECX + this.largeur);
    }
    //Fonction qui retourne la coordonnée de Y final
    this.getFinalY = function(){
        return (this.coordRECY + this.hauteur);
    }
} Rectangle.prototype = new Forme();