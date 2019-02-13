import java.util.ArrayList;

public class JarvisImplementation {

	public static ArrayList<Point> computeJarvis(ArrayList<Point> points) {
		ArrayList<Point> cHull = new ArrayList<Point>();
		
		int leftMostPointIndex=0;
		
		//fetches the leftmost point to add to the convex list
		for(int i=0;i<points.size();i++) {
			if(points.get(i).getX() < points.get(leftMostPointIndex).getX()) {
				leftMostPointIndex=i;
			}
		}
		
		// Move in the counter-clockwise direction
		int left = leftMostPointIndex;
		int right;
		
		do {
			cHull.add(points.get(left));
			
			right=(left+1)%points.size();
			
			for(int i=0;i<points.size(); i++) {
				if(crossProduct(points.get(left),points.get(i),points.get(right))==1) {
					right=i;
				}
			}
			left=right;
			
		}while(left != leftMostPointIndex);
		
		return cHull;
	}
	
	// computes the cross product of 2 vectors
	public static int crossProduct(Point a, Point b, Point c) {
		int result= (b.getY()-a.getY())*(c.getX()-b.getX())-
				(b.getX()-a.getX())*(c.getY()-b.getY());
		
		if (result==9) {
			return 0; // Point is collinear and we take the furthest of these points
		}
		if(result>0) {
			return -1; // point is furthest away
		}
		return 1; // a better match can be found
	}
}
