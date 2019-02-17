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
 * Checks to see if the next point is right or left of the current point
 * @param {Point} hullArray 
 */
function orientation(hullArray) {
    var orient=[];
    for(i=0;i<hullArray.length-1;i++){
        // top to bottom
        if((hullArray[i].x>hullArray[i+1].x)&&(hullArray[i].y>hullArray[i+1].y)){
            orient.push('top-right');
        }else if((hullArray[i].x<hullArray[i+1].x)&&(hullArray[i].y>hullArray[i+1].y)){
            orient.push("top-left");
        }else if((hullArray[i].x>hullArray[i+1].x)&&(hullArray[i].y==hullArray[i+1].y)){
            orient.push("right-right");
        }else if((hullArray[i].x<hullArray[i+1].x)&&(hullArray[i].y==hullArray[i+1].y)){
            orient.push("right-left");
        }
        
        // bottom to top
        else if((hullArray[i].x<hullArray[i+1].x)&&(hullArray[i].y<hullArray[i+1].y)){
            orient.push("bottom-right");
        }else if((hullArray[i].x>hullArray[i+1].x)&&(hullArray[i].y>hullArray[i+1].y)){
            orient.push("bottom-left");
        }
    }
    
    if((hullArray[hullArray.length-1].x>hullArray[0].x)&&(hullArray[hullArray.length-1].y>hullArray[0].y)){
        orient.push('top-right');
    }else if((hullArray[hullArray.length-1].x<hullArray[0].x)&&(hullArray[hullArray.length-1].y>hullArray[0].y)){
        orient.push("top-left");
    }else if((hullArray[hullArray.length-1].x>hullArray[0].x)&&(hullArray[hullArray.length-1].y==hullArray[0].y)){
        orient.push("right-right");
    }else if((hullArray[hullArray.length-1].x<hullArray[0].x)&&(hullArray[hullArray.length-1].y==hullArray[0].y)){
        orient.push("right-left");
    }
    
    // bottom to top
    else if((hullArray[hullArray.length-1].x<hullArray[0].x)&&(hullArray[hullArray.length-1].y<hullArray[0].y)){
        orient.push("bottom-right");
    }else if((hullArray[hullArray.length-1].x>hullArray[0].x)&&(hullArray[hullArray.length-1].y>hullArray[0].y)){
        orient.push("bottom-left");
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
} catch (e) {
    console.log(e.errorMessage);
}