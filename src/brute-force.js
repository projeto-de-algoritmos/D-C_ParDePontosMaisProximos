function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function bruteForce(points) {
  var p1 = null;
  var p2 = null;
  var minDist = Infinity;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let dist = getDistance(points[i], points[j]);
      if (dist < minDist) {
        minDist = dist;
        p1 = points[i];
        p2 = points[j];
      }
    }
  }

  return {
    "point1": p1,
    "point2": p2,
    "distance": minDist
  }
}
