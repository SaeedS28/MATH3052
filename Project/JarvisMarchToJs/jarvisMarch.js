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
 * @param {string} errorMessage the custom error message passed by user 
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
    val = ((b.y - a.y) * (c.x - b.x))-((b.x - a.x) * (c.y - b.y));

    var ret=-1;
    
    if (val == 0) {
        ret=0; // collinear
    } else if(val>0){
        ret=1; // left of a
    } else{
        ret=2;// right of a
    }
    return ret;
}

/**
 * Calculates the Euclidean distance between two consecutive points in the hull array
 * @param {Point} hullArray array of points that form the convex hull
 */
function distanceCalculate(hullArray) {
    if (hullArray.length<2) {
        throw new customException("Need at least 2 points");
    }
    
    var distArr=[];

    
    for(i=1;i<hullArray.length;i++){
        var dist = Math.sqrt(Math.pow(hullArray[i].x-hullArray[i-1].x, 2)+Math.pow(hullArray[i].y-hullArray[i-1].y, 2));
        distArr.push(dist);
    }
    var backDist=Math.sqrt(Math.pow(hullArray[0].x-hullArray[hullArray.length-1].x, 2)+Math.pow(hullArray[0].y-hullArray[hullArray.length-1].y, 2));
    distArr.push(backDist);

    return distArr;
}

/**
 * Gets the angles between 2 consecutive points in a convex hull;
 * @param {Point} hullArray an array of points that make up the convex
 * hull of a set of points
 */
function generateAngle(hullArray){
    var angles=[];

    for(i=0;i<hullArray.length-1;i++){
        var y=hullArray[i+1].y-hullArray[i].y;
        var x=hullArray[i+1].x-hullArray[i].x;
        var degrees;
        if(x==0){
            degrees=90;
        }else{
            degrees=Math.abs(Math.atan(y/x)*180/Math.PI);
        }
        angles.push(degrees);
    }
    var y=hullArray[0].y-hullArray[hullArray.length-1].y;
    var x=hullArray[0].x-hullArray[hullArray.length-1].x;
    var degrees;
    if(x==0){
        degrees=90;
    }else{
        degrees=Math.abs(Math.atan(y/x)*180/Math.PI);
    }
    angles.push(degrees);
    return angles;
}

/**
 * Checks to see if the next point is right or left of the current point
 * @param {Point} hullArray 
 */
function orientation(hullArray) {
    var orient=[];
    for(i=0;i<hullArray.length-1;i++){
        // top to bottom
        if((hullArray[i].x>hullArray[i+1].x)&&(hullArray[i].y>hullArray[i+1].y)){
            orient.push('top-bottom-right');
        }else if((hullArray[i].x<hullArray[i+1].x)&&(hullArray[i].y>hullArray[i+1].y)){
            orient.push("top-bottom-left");
        }else if((hullArray[i].x>hullArray[i+1].x)&&(hullArray[i].y==hullArray[i+1].y)){
            orient.push("right-right");
        }else if((hullArray[i].x<hullArray[i+1].x)&&(hullArray[i].y==hullArray[i+1].y)){
            orient.push("right-left");
        }else if((hullArray[i].x==hullArray[i+1].x)&&(hullArray[i].y>hullArray[i+1].y)){
            orient.push("top-bottom");
        }
        
        // bottom to top
        else if((hullArray[i].x<hullArray[i+1].x)&&(hullArray[i].y<hullArray[i+1].y)){
            orient.push("bottom-top-right");
        }else if((hullArray[i].x>hullArray[i+1].x)&&(hullArray[i].y<hullArray[i+1].y)){
            orient.push("bottom-top-left");
        }
        else if((hullArray[i].x==hullArray[i+1].x)&&(hullArray[i].y<hullArray[i+1].y)){
            orient.push("bottom-top");
        }
    }
    
    if((hullArray[hullArray.length-1].x>hullArray[0].x)&&(hullArray[hullArray.length-1].y>hullArray[0].y)){
        orient.push('top-bottom-right');
    }else if((hullArray[hullArray.length-1].x<hullArray[0].x)&&(hullArray[hullArray.length-1].y>hullArray[0].y)){
        orient.push("top-bottom-left");
    }else if((hullArray[hullArray.length-1].x>hullArray[0].x)&&(hullArray[hullArray.length-1].y==hullArray[0].y)){
        orient.push("right-right");
    }else if((hullArray[hullArray.length-1].x<hullArray[0].x)&&(hullArray[hullArray.length-1].y==hullArray[0].y)){
        orient.push("right-left");
    }else if((hullArray[i].x==hullArray[i+1].x)&&(hullArray[i].y>hullArray[i+1].y)){
        orient.push("top-bottom");
    }
    
    // bottom to top
    else if((hullArray[hullArray.length-1].x<hullArray[0].x)&&(hullArray[hullArray.length-1].y<hullArray[0].y)){
        orient.push("bottom-top-right");
    }else if((hullArray[hullArray.length-1].x>hullArray[0].x)&&(hullArray[hullArray.length-1].y<hullArray[0].y)){
        orient.push("bottom-top-left");
    }else if((hullArray[i].x==hullArray[i+1].x)&&(hullArray[i].y<hullArray[i+1].y)){
        orient.push("bottom-top");
    }
    console.log("suck it");
    return orient;
}

/**
 * Computes the convex hull via the Jarvis march algorithm and returns the points to the user  
 * @param {Point} pointArray an array of cartesian points 
 */
function jarvisMarch(pointArray){
    if (pointArray.length < 3) {
        throw new customException('three or more points required');
    } 
    var arrayCopy = pointArray;

    var hullPoints=[];

    // finds the leftmost point
    var leftTemp=0;

    for(i=1; i<pointArray.length;i++){
        if (pointArray[i].x < pointArray[leftTemp].x) {
            leftTemp=i;
        }
        
    }
    var placeHolder=leftTemp;
    var right;

    do{
        hullPoints.push(pointArray[placeHolder]);
        
        right = (placeHolder + 1) % pointArray.length; 
        for (i = 0; i < pointArray.length; i++) { 
            if (product(pointArray[placeHolder], pointArray[i], pointArray[right])== 2){
                right=i;
            }
         } 

         placeHolder=right;

    } while (placeHolder!=leftTemp);
    
    return hullPoints;
}

// Execution of the program starts here.
var points = [];
var hull= [];
var distances= [];
var orient= [];
var angles= [];

points.push(new Point(0,3));
points.push(new Point(2,3));
points.push(new Point(1,1));
points.push(new Point(2,1));
points.push(new Point(3,0));
points.push(new Point(0,0));
points.push(new Point(3,3));
points.push(new Point(2,6));
points.push(new Point(-2,6));

try {
    hull = jarvisMarch(points);
    for (i = 0; i < hull.length;i++){
        console.log("Position "+i+" contains "+"("+hull[i].x+","+hull[i].y+")");
    }
    console.log("\n");
    
    distances=distanceCalculate(hull);
    for (i = 0; i < distances.length;i++){
        console.log("Position "+i+" contains "+"("+distances[i]+")");
    }
    
    orient=orientation(hull);
    for (i = 0; i < orient.length;i++){
        console.log("Position "+i+" contains "+"("+orient[i]+")");
    }

    angles=generateAngle(hull);
    for (i = 0; i < angles.length;i++){
        console.log("Position "+i+" contains "+"("+angles[i]+")");
    }
} catch (e) {
    console.log(e.errorMessage);
}