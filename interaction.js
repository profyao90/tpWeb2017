
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



