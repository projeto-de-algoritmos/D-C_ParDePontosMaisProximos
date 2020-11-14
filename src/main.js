var addButton;
var removeButton;
var removeAllPointsButton;

var distanceTitle = 'Distância:';
var distanceText;

var pointATitle = 'Ponto A:';
var pointAText;

var pointBTitle = 'Ponto B:';
var pointBText;

var points = [];
var addAction = true;
var closestPair = new ClosestPairOfPoints();

function setup() {
    createCanvas(windowWidth - 200, windowHeight - 5);
    insertButtonsAndTexts();
}
  
function mousePressed(){
    if(mouseX <= windowWidth - 200 && mouseY <= windowHeight - 5){
        if(addAction){
                points.push(new Point(mouseX, mouseY));

                if(points.length > 1){
                    let closestPoints = closestPair.calculateClosestPair(points);
                    
                    distanceText = closestPoints[0];
                    pointAText = closestPoints[1];
                    pointBText = closestPoints[2];

                    console.log('Distance:', closestPoints[0]);
                    console.log('PointA:', closestPoints[1].x, closestPoints[1].y);
                    console.log('PointB:', closestPoints[2].x, closestPoints[2].y);
                    console.log('\n');
                }
        } else {

            
        }
    }   
}

function draw() {
    background(50);
    for (var i = 0; i < points.length; i++){
        points[i].display();
    }
}

function addPointButtonAction(){
    addAction = true;
}

function removePointButtonAction(){
    addAction = false;
}

function removeAllPointsButtonAction(){
    points = [];
}

function insertButtonsAndTexts(){
    addButton = createButton("Adicionar pontos");
    addButton.position(windowWidth - 190, 10);
    addButton.size(165, 25);
    addButton.mousePressed(addPointButtonAction);

    removeButton = createButton("Remover pontos");
    removeButton.position(windowWidth - 190, 45);
    removeButton.size(165, 25);
    removeButton.mousePressed(removePointButtonAction);

    removeAllPointsButton = createButton("Remover todos os pontos");
    removeAllPointsButton.position(windowWidth - 190, 75);
    removeAllPointsButton.size(165, 40);
    removeAllPointsButton.mousePressed(removeAllPointsButtonAction);
    
    // fill(0);
    textSize(32)
    text(distanceTitle, windowWidth - 190, 150);
    // text(pointATitle, windowWidth - 190, 180);
    // text(pointBTitle, windowWidth - 190, 210);
}