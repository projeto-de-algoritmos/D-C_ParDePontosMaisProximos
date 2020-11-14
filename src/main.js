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
var closestPair = new ClosestPairOfPoints();

var closestPoints;

function setup() {
    createCanvas(windowWidth - 200, windowHeight - 5);
    insertButtonsAndTexts();
}
  
function mousePressed(){
    if(mouseX <= windowWidth - 200 && mouseY <= windowHeight - 5){
        if(!points.find(e => e.x === mouseX && e.y === mouseY)){
            points.push(new Point(mouseX, mouseY));

            if(points.length > 1){
                closestPoints = closestPair.calculateClosestPair(points);
                
                distanceText = closestPoints[0];
                pointAText = closestPoints[1];
                pointBText = closestPoints[2];

                console.log('Distance:', closestPoints[0]);
                console.log('PointA:', closestPoints[1].x, closestPoints[1].y);
                console.log('PointB:', closestPoints[2].x, closestPoints[2].y);
                console.log('\n');
            }
        }
    }   
}

function draw() {
    background(50);
    for (var i = 0; i < points.length; i++){
        points[i].display();
    }

    if(closestPoints != null){
        fill(0);
        stroke(255);
        line(closestPoints[1].x, closestPoints[1].y, closestPoints[2].x, closestPoints[2].y);
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
    closestPoints = null;
}

function insertButtonsAndTexts(){
    addButton = createButton("Adicionar pontos");
    addButton.position(windowWidth - 190, 10);
    addButton.size(165, 25);
    addButton.mousePressed(addPointButtonAction);

    removeAllPointsButton = createButton("Remover todos os pontos");
    removeAllPointsButton.position(windowWidth - 190, 45);
    removeAllPointsButton.size(165, 40);
    removeAllPointsButton.mousePressed(removeAllPointsButtonAction);
}