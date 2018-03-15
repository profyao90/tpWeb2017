
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////
var rectangle1 = new Rectangle(223, 137, 387, 141, 5, '#d00604');
var line1 = new Line(580, 458, 114, 111, 5, '#080dfa');
var drawing = new Drawing();
drawing.monTableau.push(rectangle1);
drawing.monTableau.push(line1);
drawing.paint(ctx, canvas);

// Code temporaire pour tester l'affiche de la vue
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);


function removeForm(index) {
    // Add shape and action to undoRedo list
    // drawing.formes.splice(index, 1);
    drawing.undoRedo.supprimer(index);
    pencil.updateShapeList();
    drawing.paint(ctx, canvas);
    console.log("remove : " + index);
}
function supprimer(index) {
    drawing.monTableau.splice(index, 1);
    pencil.updateShapeList();
    drawing.paint(ctx, canvas);
    console.log("remove : " + index);
}


