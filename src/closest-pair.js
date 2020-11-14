class ClosestPairOfPoints{
    dist(p1, p2){
        return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    }

    closestPointsInStrip(strip, size, distance){
        let min_value = distance;
        let pointA;
        let pointB;

        for (let i = 0; i < size; i++) {
            for (let j = i + 1; (j < size) && (strip[j].y - strip[i].y) < min_value; j++) {
                min_value = this.dist(strip[i], strip[j]);
                pointA = points[i];
                pointB = points[j];
            }
        }

        return [Math.floor(min_value), pointA, pointB];
    }

    bruteForce(points, size){
        let min_value = 999999.9;
        let pointA;
        let pointB;

        for (let i = 0; i < size; i++) {
            for (let j = i + 1; j < size; j++) {
                if(this.dist(points[i], points[j]) < min_value){
                    min_value = this.dist(points[i], points[j]);
                    pointA = points[i];
                    pointB = points[j];
                }
            }
        }
        return [Math.floor(min_value), pointA, pointB];
    }

    calculate(points, points_copy, size){
        let middle = Math.floor(size/2);
        let middlePoint = points[middle];
        
        if(size <= 3){
            return this.bruteForce(points, size);
        }

        let leftStrip = this.calculate(points.slice(0, middle), points_copy, middle);
        let rightStrip = this.calculate(points.slice(middle, points.length), points_copy, middle);

        let closestPoints = leftStrip[0] < rightStrip[0] ? leftStrip : rightStrip;

        let strip = [];
        for (let i = 0; i < size; i++) {
            if(Math.abs(points_copy[i].x - middlePoint.x) < closestPoints[0]){
                strip.push(points_copy[i]);
            }
        }

        let distanceInStrip = this.closestPointsInStrip(strip, strip.length, closestPoints[0]);

        let closest = closestPoints[0] < distanceInStrip[0] ? closestPoints : distanceInStrip;

        return closest;
    }

    calculateClosestPair(points){
        points.sort(function(p1, p2) {
            return p1.x - p2.x;
        });
    
        let points_copy = JSON.parse(JSON.stringify(points));
    
        points_copy.sort(function(p1, p2) {
            return p1.y - p2.y;
        });
        
        let size = points.length;

        return this.calculate(points, points_copy, size);
    }
}
