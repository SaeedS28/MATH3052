/**
 * A constructor function that creates a point in 2d
 * @param {integer} x The x cooridinate of a 2D cartesian point 
 * @param {integer} y The y cooridinate of a 2D cartesian point
 */
function Point(x,y){
    this.x=x;
    this.y=y;

}

var p1 = new Point(1,2);

console.log(p1.x+","+p1.y);