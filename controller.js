
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);
	 this.updateShapeList = function () {
        var list = document.getElementById("shapeList");
        list.innerHTML = "";
        drawing.monTableau.forEach(function (element) {
            var id = drawing.monTableau.indexOf(element);
            if (element.coordRECY) {
                list.innerHTML += "<li style='color:" + element.couleur + ";'> "
                    + "<button type='button' class='btn btn-default' onclick='supprimer("+id+")'><span class='glyphicon glyphicon-remove-sign'></span></button>" +
                    "rect : (" + element.coordRECX + "," + element.coordRECY + "), largeur:" + element.largeur + ", longeur:" + element.hauteur + ", epai:" + element.epaisseur + "</li>";
            } else {
                list.innerHTML += "<li style='color:" + element.couleur + ";'>"
                    + "<button type='button' class='btn btn-default' onclick='supprimer("+id+")'><span class='glyphicon glyphicon-remove-sign'></span></button>" +
                    " ligne : (" + element.coordEX + "," + element.coordEY + "), (" + element.coordSX + "," + element.coordSX + "), epai:" + element.epaisseur + "</li>";
            }
            console.log(element)
        });
	};

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(dnd){
        this.currLineWidth = document.getElementById("spinnerWidth").value;
        this.currColour = document.getElementById("colour").value;
        var line  = document.getElementById("butLine");
        var rect  = document.getElementById("butRect");

        this.currEditingMode = editingMode.line;
        if (rect.checked){
        	this.currEditingMode = editingMode.rect;
		}
	};
	this.onInteractionUpdate = function(dnd) {
			switch (this.currEditingMode) {
      case editingMode.rect: {
			this.currentShape= new Rectangle(dnd.positionDebutX, dnd.positionDebutY,  dnd.positionFinX-dnd.positionDebutX, dnd.positionFinY-dnd.positionDebutY, this.currLineWidth, this.currColour);
			drawing.paint(ctx, canvas);
			this.currentShape.paint(ctx, canvas);
			break;
		}
		case editingMode.line:{
			this.currentShape= new Line(dnd.positionDebutX, dnd.positionDebutY,  dnd.positionFinX, dnd.positionFinY, this.currLineWidth, this.currColour);
			drawing.paint(ctx, canvas);
			this.currentShape.paint(ctx, canvas);
			break;
		}}
	

}; 
this.onInteractionEnd = function(dnd) {
		drawing.monTableau.push(this.currentShape);
		drawing.paint(ctx, canvas);
		this.updateShapeList();

	};
}


