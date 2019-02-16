/**
 * A constructor function that creates a point in 2d
 * @param {Number} x The x cooridinate of a 2D cartesian point 
 * @param {Number} y The y cooridinate of a 2D cartesian point
 */
function Point(x,y) {
    this.x=x;
    this.y=y;

}

function customException(errorMessage) {
    this.errorMessage=errorMessage;
    this.name="custom exception";
}

function jarvisMarch(pointArray){
/*     for (i = 0; i < pointArray.length;i++){
        console.log("Position "+i+" contains "+"("+pointArray[i].x+","+pointArray[i].y+")");
        
    } */

    if (pointArray.length < 3) {
        throw new customException('three or more points required');
    } 

}

// Execution of the program starts here.
var points = [];

points.push(new Point(0,3));
points.push(new Point(2,3));
points.push(new Point(1,1));
points.push(new Point(2,1));
points.push(new Point(3,0));
points.push(new Point(0,0));
points.push(new Point(3,3));
points.push(new Point(2,6));

try {
    jarvisMarch(points);    
} catch (e) {
    console.log(e.errorMessage);
}
