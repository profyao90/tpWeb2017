
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////
var rectangle1 = new Rectangle(100, 200, 50, 100, 5, '#cc934a');
var rectangle2 = new Rectangle(90, 250, 10, 100, 5, '#3d59cc');
var line1 = new Line(100, 230, 60, 100, 5, '#f0ef10');
var line2 = new Line(150, 220, 50, 150, 4, '#09CC10');
var drawing = new Drawing();
drawing.monTableau.push(rectangle1);
drawing.monTableau.push(rectangle2);
drawing.monTableau.push(line1);
drawing.monTableau.push(line2);
drawing.paint(ctx, canvas);

// Code temporaire pour tester l'affiche de la vue
//var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//rec.paint(ctx);
//var ligne = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//ligne.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
//var drawing = new Drawing();
//var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);

