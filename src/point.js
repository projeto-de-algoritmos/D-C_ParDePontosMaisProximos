class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    display(){
        stroke(255, 255, 255);
        strokeWeight(1);
        fill(255, 0, 0);
        ellipse(this.x, this.y, 20, 20);
        noStroke();
    }
}
