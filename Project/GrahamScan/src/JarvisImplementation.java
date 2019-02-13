import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class JarvisImplementation {

	public static Set<Point> computeJarvis(ArrayList<Point> points) {
		Set<Point> cHull = new HashSet<Point>();
		
		
		return cHull;
	}
	
	private double calculateSquareDistance(Point A, Point B) {
		double squareX=Math.pow(A.getX()-B.getX(), 2);
		double squareY=Math.pow(A.getY()-B.getY(), 2);
		
		return (squareX+squareY);
	}
	// computes the cross product of 2 vectors
	private int crossProduct(Point a, Point b, Point c) {
		
		// generate AB vector
		int bToAX=a.getX()-b.getX();
		int bToAY=a.getY()-b.getY();
		
		// generate BC vector
		int bToCX=c.getX()-b.getX();
		int bToCY=c.getY()-b.getY();
		
		// compute the result
		int result = (bToAX*bToCY)-(bToAY*bToCX);
		return result;
	}
}
