/**
 * A constructor function that creates a point in 2d
 * @param {Number} x The x cooridinate of a 2D cartesian point 
 * @param {Number} y The y cooridinate of a 2D cartesian point
 */
function Point(x,y) {
    this.x=x;
    this.y=y;
}

/**
 * Creates a custom exception
 * @param {String} errorMessage the custom error message passed by user 
 */
function customException(errorMessage) {
    this.errorMessage=errorMessage;
    this.name="custom exception";
}

/**
 * Computes the orientation of 2 vectors via 3 points. Works in a couter-clockwise direction
 * @param {Number} a the first 2D point
 * @param {Number} b the second 2D point
 * @param {Number} c the third 2D point
 */
function product(a,b,c) {
    val = (b.x - a.x) * (c.x - b.x) -(b.x - a.x) * (c.y - b.y);

    if (val == 0) {
        return 0; // collinear
    } else if(val>0){
        return 1; // left of a
    } else{
        return 2;// right of a
    }
}

function jarvisMarch(pointArray){
    /*     
    for (i = 0; i < pointArray.length;i++){
        console.log("Position "+i+" contains "+"("+pointArray[i].x+","+pointArray[i].y+")");
        
    } 
    */

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