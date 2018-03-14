

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

function  Line(coordSX, coordSY, coordEX, coordEY,epaisseur,color){ 
    Forme.call(this, epaisseur,color);
    this.coordSX = coordSX;
    this.coordSY = coordSY;
    this.coordEX = coordEX;
    this.coordEY = coordEY;
    this.epaisseur=epaisseur;
    this.color=color;

    this.getEpaisseur = function(){
        return this.epaisseur;
    }
     this.getColor = function(){
        return this.color;
    }
     //Fonction qui retourne la coordonnée de X
   this.getCoordSX = function(){
        return this.coordSX;
    }
    //Fonction qui retourne la coordonnée de Y
    this.getCoordSY = function(){
        return this.coordSY;
    }
    //Fonction qui retourne la coordonnée de X final
    this.getCoordEX = function(){
        return this.coordEX;
    }
    //Fonction qui retourne la coordonnée de Y final
    this.getCoordEY = function(){
        return this.coordEY;
}
}Line.prototype = new Forme();
