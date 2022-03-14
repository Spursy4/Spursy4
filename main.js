// Drawing Basics

// Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas")
let ctx = cnv.getContext("2d")
cnv.width = 800;
cnv.height = 600;

// Let's draw
// Draw rectangle
// Set the outlined and filled colours
// Use any valid CSS colours: name, rgb(), rgba(), HEX #FF0033

ctx.strokeStyle = "purple";
ctx.strokeRect(50, 20, 150, 50) // Draw an Outlined Rectangle

ctx.fillStyle = "rgb(0, 255, 0)";
ctx.fillRect(225, 50, 50, 50) // Draw a filled square





