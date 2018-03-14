
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
     this.positionDebutX =0;
    this.positionFinX =0;
    this.positionDebutY =0;
    this.positionFinY =0;
    this.presse =false;
	// Developper les 3 fonctions gérant les événements
this.presser = function(evt) {
        this.presse = true;
        var moussePosition = getMousePosition(canvas,evt);
        this.positionDebutX =moussePosition.x;
        this.positionDebutY = moussePosition.y;
        interactor.onInteractionStart(this);	
            // console.log("x0: "+ this.positionDebutX + "y0: "+ this.positionDebutY +";  PRESSER");
    }.bind(this);

    this.deplacer = function (evt) {
        if(this.presse){
        var moussePosition = getMousePosition(canvas,evt);
        this.positionFinX =moussePosition.x;
        this.positionFinY = moussePosition.y;
       interactor.onInteractionUpdate(this)
        //console.log("xi: "+ this.positionDebutX + "yi: "+ this.positionDebutY+";   DEPLACER");
        }
    }.bind(this);

    this.relacher = function (evt) { 
    
        if(this.presse){
        var moussePosition = getMousePosition(canvas,evt);
        /*this.positionDebutX =moussePosition.x;
        this.positionDebutY = moussePosition.y;*/
        this.presse=false;
        interactor.onInteractionEnd(this);
        //console.log("xn: "+ this.positionDebutX + "yn: "+ this.positionDebutY+":   RELACHER");
        }
    }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
        canvas.addEventListener('mousedown', this.presser, false);
  canvas.addEventListener('mousemove', this.deplacer, false);
  canvas.addEventListener('mouseup', this.relacher, false);
};


	// Associer les fonctions précédentes aux évènements du canvas.
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



