// import Point from './src/point.js';
// const User = require('./src/point.js')


var addButton;
var removeButton;
var points = [];
var addAction = true;
var coordRemoveRect = [];
var removeClicks = 0;

var posXRect;
var posYRect;
var widthRect;
var heightRect;

function setup() {
    createCanvas(windowWidth - 200, windowHeight - 5);
    background(50);
    insertButtons();
}
  
function mousePressed(){
    if(addAction){
        points.push(new Point(mouseX, mouseY));
    } else {
        
    }
    
}

function draw() {
    for (var i = 0; i < points.length; i++){
        points[i].display();
    }
}

function addPointButton(){
    addAction = true;
}

function removePointButton(){
    addAction = false;
    coordRemoveRect = [];
}

function getRectCoordinates(){
    let posX;
    let posY;
    let width;
    let height;

    if(coordRemoveRect[0] < coordRemoveRect[2]){
        posX = coordRemoveRect[0];
        width = coordRemoveRect[2] - coordRemoveRect[0];
    } else {
        posX = coordRemoveRect[2];
        width = coordRemoveRect[0] - coordRemoveRect[2];
    }

    if(coordRemoveRect[1] < coordRemoveRect[3]){
        posY = coordRemoveRect[1];
        height = coordRemoveRect[3] - coordRemoveRect[1];
    } else {
        posY = coordRemoveRect[3];
        height = coordRemoveRect[1] - coordRemoveRect[3];
    }

    return [posX, posY, width, height];
}

function insertButtons(){
    addButton = createButton("Adicionar pontos");
    addButton.position(windowWidth - 190, 10);
    addButton.size(165, 25);
    addButton.mousePressed(addPointButton);

    removeButton = createButton("Remover pontos");
    removeButton.position(windowWidth - 190, 45);
    removeButton.size(165, 25);
    removeButton.mousePressed(removePointButton);
}