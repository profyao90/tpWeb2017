// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Forme.prototype.paint = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.color;
};

Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.beginPath();
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.color;
    ctx.rect(this.coordRECX, this.coordRECY, this.largeur, this.hauteur, this.epaisseur,this.color);
    ctx.stroke();

};

Line.prototype.paint = function(ctx) {
//TODO Manager color
    ctx.beginPath();
    ctx.lineWidth = this.getEpaisseur();
    ctx.strokeStyle = this.getColor();
    ctx.moveTo(this.getCoordEX(), this.getCoordEY());
    ctx.lineTo(this.getCoordSX(), this.getCoordSY());
   
    ctx.stroke();

};


Drawing.prototype.paint = function(ctx, canvas) {
    //console.log(this.getForms());

    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.monTableau.forEach(function(eltDuTableau) {
        // now fill the canvas
        //console.log(eltDuTableau);
        eltDuTableau.paint(ctx);
    });
};


















